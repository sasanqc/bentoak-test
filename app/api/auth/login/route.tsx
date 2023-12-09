import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import fs from "fs";
import path from "path";
import getUsersFromFile from "@/app/utils/getUserFromFile";
import { User } from "@/app/model";
const filePath = path.join(process.cwd(), "data", "users.json");

export async function POST(request: NextRequest) {
  const users = getUsersFromFile();
  const body = await request.json();
  const user = users.find((el: User) => el.email === body.email);
  if (user && user.password === body.password) {
    const index = users.findIndex((el: User) => el.email === body.email);
    users[index].status = true;
    fs.writeFileSync(filePath, JSON.stringify(users));
    cookies().set("token", "unsafe-token");
    return NextResponse.json(body, { status: 200 });
  }
  return NextResponse.json(body, { status: 401 });
}
