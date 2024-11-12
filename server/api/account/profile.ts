import { H3Event, EventHandlerRequest } from "h3";
import { getAuthorizedUser } from "~/server/utils/middleware/token";

export default defineEventHandler(
  async (event: H3Event<EventHandlerRequest>) => {
    if (event.node.req.method === "GET") {
      const user = await getAuthorizedUser(event)
      return getUserData(user)
    }
   
  }
);



const getUserData = (user: ITUserPoJo) => {
  return{
    id: user._id,
    name: user.name,
    email: user.email
  }
}