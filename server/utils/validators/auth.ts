import { z } from "zod";
import UserModel from "~/server/models/User";

export function validateLogin(body: ITLogin): ITLogin {
  const schema = z.object({
    email: z.string().toLowerCase().email("Invalid Email"),
    password: z.string(),
  });
  try {
    schema.parse(body);
    return body;
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      statusMessage: "Validation Error",
      data: error?.errors,
    });
  }
}

export async function validateRegister(body: ITRegister): Promise<ITRegister> {
  const schema = z.object({
    email: z.string().toLowerCase().email("Invalid Email"),
    password: z.string(),
    name: z.string(),
  });
  try {
    schema.parse(body);
    let username = body.email.split("@")[0];
    while (true) {
      const userExist = await UserModel.exists({ username });
      if (!userExist) break;
      username += Math.floor(Math.random() * 100);
      body.username = username
    }
    return body;
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      statusMessage: "Validation Error",
      data: error?.errors,
    });
  }
}
