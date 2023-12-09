import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import getUsersFromFile from "@/app/utils/getUserFromFile";
import { User } from "@/app/model";
const filePath = path.join(process.cwd(), "data", "users.json");

export async function POST(request: NextRequest) {
  const users = getUsersFromFile();
  const body = await request.json();
  if (users.find((el: User) => el.email === body.email)) {
    return NextResponse.json(body, { status: 409 });
  }

  users.push({ ...body, status: true });
  fs.writeFileSync(filePath, JSON.stringify(users));
  cookies().set("token", "unsafe-token");
  return NextResponse.json(body, { status: 201 });
}
