import { H3Event, EventHandlerRequest } from "h3";
import UserModel from "~/server/models/User";
import jwt from "jsonwebtoken";

export async function getAuthorizedUser(
  event: H3Event<EventHandlerRequest>
): Promise<ITUserPoJo> {
  const authHeader = event.node.req.headers.authorization;
  try {
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      throw new Error("Login required");
    }
    const bearerHearder = authHeader.split(" ")[1];
    // decrypt the token

    if (bearerHearder) {
      const publicId: any = jwt.verify(
        bearerHearder!,
        useRuntimeConfig().apiSecret.JWT_SECRET
      );
      const user = await UserModel.findOne({
        publicId: publicId.user,
      });
      if (!user) {
        throw new Error("Login required");
      }
      return user;
    } else {
      throw new Error("Login required");
    }
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: error,
    });
  }
}

export async function getOptionalAuthorizedUser(
  event: H3Event<EventHandlerRequest>
): Promise<typeof UserModel | null> {
  const authHeader = event.node.req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return null;
  }
  const bearerHearder = authHeader.split(" ")[1];
  // decrypt the token

  if (bearerHearder) {
    const publicId: any = jwt.verify(
      bearerHearder!,
      useRuntimeConfig().apiSecret.JWT_SECRET
    );
    return await UserModel.findOne({
      publicId: publicId.user,
    });
  } else {
    return null;
  }
}
