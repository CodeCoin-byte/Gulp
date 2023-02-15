import { deleteSync } from "del";
export const reset = (cb) => {
  const dir = deleteSync('dist');
  cb()
}