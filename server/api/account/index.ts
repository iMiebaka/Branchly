import { H3Event, EventHandlerRequest } from "h3";
import UserModel from "~/server/models/User";

export default defineEventHandler(
  async (event: H3Event<EventHandlerRequest>) => {
    if (event.node.req.method === "GET") {
      return await UserModel
    }
   
  }
);
