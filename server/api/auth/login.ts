import { H3Event, EventHandlerRequest } from "h3";
import UserModel from "~/server/models/User";
import { validateLogin } from "~/server/utils/validators/auth";

export default defineEventHandler(
  async (event: H3Event<EventHandlerRequest>) => {
    if (event.node.req.method === "GET") {
      return {};
    }
    if (event.node.req.method === "POST") {

      const body = await readBody(event);
      const { email, password } = validateLogin(body);

      try {
        const user = await UserModel.findOne({ email });
        if (user) {
          const canLogin = await user.comparePassword(password);
          if (!canLogin) {
            throw new Error("Invalid User name and password");
          }
          return user.generateToken();
        } else {
          throw new Error("Invalid User name and password");
        }
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
