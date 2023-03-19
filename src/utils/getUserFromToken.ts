import { JSON_SIGNATURE } from "../keys";
import JWT from "jsonwebtoken";

export const getUserFromToken = (token: string) => {
  // extract token, verify it, and extract payload

  try {
    return JWT.verify(token, JSON_SIGNATURE) as {
      userId: number;
    };
  } catch (error) {
    return null;
  }
};
