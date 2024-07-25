import { NextRequest } from "next/server";
import { authMiddleware } from "next-firebase-auth-edge";
import { firebaseConfig, serverConfig } from "./config";

export async function middleware(request: NextRequest) {
  return authMiddleware(request, {
    loginPath: "/",
    logoutPath: "/logout",
    apiKey: firebaseConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    cookieSerializeOptions: serverConfig.cookieSerializeOptions,
    serviceAccount: serverConfig.serviceAccount,
  });
}

export const config = {
  matcher: [
    "/",
    "/((?!_next|api|.*\\.).*)",
    "/login",
    "/logout",
  ],
};