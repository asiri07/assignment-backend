import { Express, Request, Response } from "express";
import { createUserSchema,signupSessionSchema,} from "./schema/user.schema";
import { createUserHandler } from "./controller/user.controller";
import { userSessionHandler,signOutSessionHandler,getUserSessionsHandler,} from "./controller/session.controller";
import{ createFileHandler,getFileListHandler} from "./controller/file.controller";
import { validateRequest, requiresUser } from "./middleware";
import{createFileSchema} from "./schema/file.schema";

export default function (app: Express) {
app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));
app.post("/api/users", validateRequest(createUserSchema), createUserHandler);
app.post("/api/user/signin", validateRequest(signupSessionSchema),userSessionHandler);
app.delete("/api/user/signout", requiresUser, signOutSessionHandler);
app.post("/api/file",[requiresUser, validateRequest(createFileSchema)], createFileHandler);
app.get("/api/files",requiresUser, getFileListHandler);
app.get("/api/sessions", requiresUser, getUserSessionsHandler);
}
