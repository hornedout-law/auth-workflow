import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getAuth } from "firebase-admin/auth";
import { initializeApp } from "firebase-admin";
import { cert, ServiceAccount } from "firebase-admin/app";
import adminAccess from "../store/exp-911-firebase-adminsdk-6oxi3-d78a41bd05.json";

let auth = getAuth(
  initializeApp({
    credential: cert(adminAccess as ServiceAccount),
  })
);

export default async function (req: VercelRequest, res: VercelResponse) {
  let userData = req.body;
  let user = await auth.getUserByEmail(userData?.email);
  if (!user.customClaims?.admin) {
    await auth.setCustomUserClaims(user.uid, { admin: true });
    user = await auth.getUserByEmail(userData?.email);
  }
  res.status(201).json(user);
}
