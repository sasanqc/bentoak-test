import fs from "fs";
import path from "path";

const getUsersFromFile = () => {
  const filePath = path.join(process.cwd(), "data", "users.json");
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData.toString());
};
export default getUsersFromFile;
