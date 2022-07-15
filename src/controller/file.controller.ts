import { Request, Response } from "express";
import { get } from "lodash";
import { createFile,findFile,deleteFile,findFileList} from "../service/file.service";
import log from "../logger";

export async function createFileHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");
  const body = req.body;
  log.info("body:"+JSON.stringify(body))
  const post = await createFile({ ...body, user: userId });
  return res.send(post);
}

export async function getFileListHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");
  log.info("userId:"+userId)
  const fileList = await findFileList({ user: userId});
  return res.send(fileList);
}


  

export async function deleteFileHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");
  const fileId = get(req, "params.fileId");
  const file = await findFile({ fileId });
  if (!file) {
    return res.sendStatus(404);
  }
  if (String(file.user) !== String(userId)) {
    return res.sendStatus(401);
  }
  await deleteFile({ fileId });
  return res.sendStatus(200);
}
