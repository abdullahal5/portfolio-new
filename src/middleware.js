import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  const token = req.cookies.get("role");

  if (pathname.startsWith("/admin/dashboard") && !token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
