import { Request, Response } from "express";
import { omit } from "lodash";
import { createUser } from "../service/user.service";
import log from "../logger";

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    return res.send(  omit(user.toJSON(), "password","createdAt","updatedAt","__v"));
  } catch (err : any) {
    log.error("User creation failed",err);
    if (err.code === 11000) {
      return res.status(409).send('Username already exist');
    }else{
      return res.status(500).send('user creation failed');
    }
    
  }
}
