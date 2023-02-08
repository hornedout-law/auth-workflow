import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Auth} from 'firebase-admin/auth';
import {auth} from "../src/store/firebase"

export default async function(req: VercelRequest, res: VercelResponse){
    let userData = req.body;
    let user = await( auth as Auth).getUserByEmail(userData?.email);
    if (!user.customClaims?.admin) {
      await ( auth as Auth).setCustomUserClaims(user.uid, { admin: true });
      user = await ( auth as Auth).getUserByEmail(userData?.email);
    }
    res.status(201).json(user);
  }