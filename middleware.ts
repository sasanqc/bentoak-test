import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
const publicRoutes = ["/login", "/register"];
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (publicRoutes.some((el) => path.startsWith(el))) {
    return;
  }
  const loginPath = new URL("/login", request.nextUrl.origin);
  const token = request.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.redirect(loginPath.toString());
  }
  return;
}

export const config = { matcher: ["/((?!api|static|.*\\..*|_next).*)"] };
