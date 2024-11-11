import { H3Event, EventHandlerRequest } from "h3";
import UserModel from "~/server/models/User";
import { validateRegister } from "~/server/utils/validators/auth";

export default defineEventHandler(
  async (event: H3Event<EventHandlerRequest>) => {
    if (event.node.req.method === "GET") {
      const { email } = getQuery(event);
      return await UserModel.exists({ email });
    }
    if (event.node.req.method === "POST") {
      const body = await readBody(event);
      const payload = await validateRegister(body);

      try {
        const emailExist = await UserModel.exists({ email: payload.email });
        if(emailExist){
          throw new Error("Email already exist");
        }
        const user = await UserModel.create(payload);
        return await user.generateToken()
      } catch (error: any) {
        throw createError({
          statusCode: 400,
          statusMessage: "Bad Request",
          message: error,
        });
      }
    }
  }
);
