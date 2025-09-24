import { getAllUsers } from "@/services/getUsers";

export async function GET(req: Request) {
  const users = getAllUsers();
  return users;
}
