import mongoose from "mongoose";
import { nanoid } from "nanoid";
import { UserDocument } from "./user.model";

export interface FileDocument extends mongoose.Document {
  user: UserDocument["_id"];
  fileName: string;
  body: JSON;
  createdAt: Date;
  updatedAt: Date;
}

const FileSchema = new mongoose.Schema(
  {
    fileId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(10),
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    fileName: { type: String,default:'' },
    body: { type: JSON, default: true },
  },
  { timestamps: true }
);

const File = mongoose.model<FileDocument>("File", FileSchema);

export default File;
