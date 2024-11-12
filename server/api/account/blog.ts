import { H3Event, EventHandlerRequest } from "h3";
import BlogModel from "~/server/models/Blog";

export default defineEventHandler(
  async (event: H3Event<EventHandlerRequest>) => {
    if (event.node.req.method === "GET") {
      return {}
    }
   
  }
);
