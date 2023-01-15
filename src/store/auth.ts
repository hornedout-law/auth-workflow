import { auth } from "./firebase";
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (cred: { email: string; password: string }) => {
    try {
      let res = await createUserWithEmailAndPassword(
        auth as Auth,
        cred.email,
        cred.password
      );
      return res.user;
    } catch (error) {
      return new Error(error as string);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (cred: { email: string; password: string }) => {
    try {
      let res = await signInWithEmailAndPassword(
        auth as Auth,
        cred.email,
        cred.password
      );
      return res.user;
    } catch (error) {
      throw new Error(error as string);
    }
  }
);

export const loginAdmin = createAsyncThunk(
  "auth/loginAdmin",
  async (cred: { email: string; password: string }) => {
    try{
    let response = await signInWithEmailAndPassword(
      auth as Auth,
      cred.email,
      cred.password
    );
    if (response.user) {
      let res = await fetch("/admin-login", {
        method: "POST",
        body: JSON.stringify(response.user),
      });

      var data = await res.json();
    }

    return data;
  }catch(error){
    throw new Error(error as string)
  }
  }
);
 