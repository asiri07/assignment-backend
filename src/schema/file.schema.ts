import { object, string } from "yup";

const payload = {
  body: object({
    fileName: string().required("fileName is required"),
    // body: string()
    //   .required("Body is required")
    //   .min(120, "Body is too short - should be 120 chars minimum."),
  }),
};

const params = {
  params: object({
    fileId: string().required("fileId is required"),
  }),
};

export const createFileSchema = object({
  ...payload,
});



export const deleteFileSchema = object({
  ...params,
});
