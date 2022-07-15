import { DocumentDefinition, FilterQuery, QueryOptions } from "mongoose";
import File, { FileDocument } from "../model/file.model";

export function createFile(input: DocumentDefinition<FileDocument>) {
    return File.create(input);
}

export function findFile(
    query: FilterQuery<FileDocument>,
    options: QueryOptions = { lean: true }
) {
    return File.findOne(query, {}, options);
}

export async function findFileList(query: FilterQuery<FileDocument>) {
    return File.find(query, { fileName: 1, body: 1, _id: 1,createdAt:1 }).lean();
  }
  
  
export function deleteFile(query: FilterQuery<FileDocument>) {
    return File.deleteOne(query);
}
