import { useForm } from "vue-hooks-form";
import { useMutation } from "@tanstack/vue-query";
import SERVICE_AUTH from "~/services/auth";

export default function useLogin() {
  useSeoMeta({
    title: "Login - Branchly",
    description: "Branchly Login Page",
  });

  const { useField, handleSubmit } = useForm({
    defaultValues: {},
  });
  const email = useField("email", {
    rule: { required: true,  type: "email" },
  });
  const password = useField("password", {
    rule: {
      required: true,
    },
  });

  const loginHandler = useMutation<ITLoginToken, any, ITLogin, any>({
    mutationFn: async (data) => {
      try {
        const res = await SERVICE_AUTH.login(data);
        return res;
      } catch (error) {
        console.log(error);
        
        throw error;
      }
    },
  });

  const onSubmit = async (data: any) => {
    await loginHandler.mutateAsync(data);
  };

  return {
    email,
    password,
    loginHandler,
    onSubmit: handleSubmit(onSubmit),
  };
}
