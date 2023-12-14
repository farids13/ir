
import { NextMiddleware, NextResponse } from "next/server";
import withAuthorization from "./lib/withAuth";
const mainMiddleware: NextMiddleware = (request) => {
  const res = NextResponse.next();
  return res;
};
export default withAuthorization(mainMiddleware, ["/kasir"]);
