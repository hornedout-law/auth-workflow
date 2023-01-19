import { useForm } from "react-hook-form";
import { create } from "zustand";

import { auth } from "../store/firebase";
import {
  User,
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

type Credentials = {
  email: string;
  password: string;
};

interface AuthState {
  user: User | null;
  pending: boolean;
  fullfilled: boolean;
  error: null | Error | string;
  admin: User | null | any;
  loginAdmin: (cred: Credentials) => Promise<void>;
  loginUser: (cred: Credentials) => Promise<void>;
  signupUser: (cred: Credentials) => Promise<void>;
}

export let useAuthStore = create<AuthState>()((set) => ({
  pending: false,
  fullfilled: false,
  error: null,
  loginAdmin: async (cred: Credentials) => {
    try {
      set({ pending: true, error: null, fullfilled: false });
      let response = await signInWithEmailAndPassword(
        auth as Auth,
        cred.email,
        cred.password
      );
      if (response.user) {
        let res = await fetch("/admin-login", {
          method: "POST",
          body: JSON.stringify(response.user),
          headers: {
            "Content-Type": "application/json",
          },
        });

        var data = await res.json();
      }

      set({ admin: data, user: null, fullfilled: true, pending: false });
    } catch (error) {
      set((state) => ({ error: error as typeof state.error, pending: false }));
    }
  },
  loginUser: async (cred: Credentials) => {
    try {
      set({ pending: true, error: null, fullfilled: false });
      let res = await signInWithEmailAndPassword(
        auth as Auth,
        cred.email,
        cred.password
      );
      set({ user: res.user, admin: null, fullfilled: true, pending: false });
    } catch (error) {
      set((state) => ({ error: error as typeof state.error, pending: false }));
    }
  },
  signupUser: async (cred: Credentials) => {
    try {
      set({ pending: true, error: null, fullfilled: false });
      let res = await createUserWithEmailAndPassword(
        auth as Auth,
        cred.email,
        cred.password
      );
      set({ user: res.user, fullfilled: true, pending: false });
    } catch (error) {
      set((state) => ({ error: error as typeof state.error, pending: false }));
    }
  },
  user: null,
  admin: null,
}));
export const useAuthLogic = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let { loginAdmin, loginUser, signupUser } = useAuthStore((state) => ({
    loginAdmin: state.loginAdmin,
    signupUser: state.signupUser,
    loginUser: state.loginUser,
  }));

  let handleAdminLogin = (data: any) => {
    loginAdmin({ email: data?.email, password: data?.password });
  };

  let handleUserLogin = (data: any) => {
    loginUser({ email: data?.email, password: data?.password });
  };

  let handleUserSignup = (data: any) => {
    signupUser({ email: data?.email, password: data?.password });
  };

  return {
    register,
    handleSubmit,
    handleAdminLogin,
    handleUserLogin,
    handleUserSignup,
  };
};
