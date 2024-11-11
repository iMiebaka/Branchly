import { H3Event, EventHandlerRequest } from "h3";
import { validateRegister } from "~/server/utils/validators/auth";
import BlogModel from "~/server/models/Blog"

export default defineEventHandler(
  async (event: H3Event<EventHandlerRequest>) => {

    if (event.node.req.method === "POST") {

        const body = await readBody(event);
        const payload = await validateRegister(body);

        await BlogModel.create({...payload})
    }
  }
);