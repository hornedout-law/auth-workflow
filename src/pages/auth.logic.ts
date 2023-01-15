import { loginAdmin, signupUser, loginUser } from "../store/auth";
import { useForm } from "react-hook-form";
import type { AuthState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

export const useAuthLogic = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  let authState = useSelector<{ auth: AuthState }, AuthState>(
    (state) => state.auth
  );

  let handleAdminLogin = (data: any) => {
    //@ts-ignore
    dispatch(loginAdmin({ email: data?.email, password: data?.password }));
  };

  let handleUserLogin = (data:any)=>{
    //@ts-ignore
    dispatch(loginUser({ email: data?.email, password: data?.password }))
  }

  let handleUserSignup = (data: any)=>{
    // @ts-ignore
    dispatch(signupUser({email: data?.email, password: data?.password}))
  }

  return {register, handleSubmit, handleAdminLogin, handleUserLogin, handleUserSignup, authState}
};
