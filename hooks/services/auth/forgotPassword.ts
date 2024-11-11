import { useMutation, useQuery } from "@tanstack/vue-query";
import { useForm } from "vue-hooks-form";
import SERVICE_AUTH from "~/services/auth";

export default function useForgotPassword() {
  useSeoMeta({
    title: "Reset - Branchly",
  });

  const { useField, handleSubmit } = useForm({
    defaultValues: {}
  });

  const email = useField("email", {
    rule: {
      required: true,
      type: "email"
    },
  });



  const resetPasswordHandler = useMutation<any, any, ITLogin, any>({
    mutationFn: async (data) => {
      try {
        const res = await SERVICE_AUTH.forgotPassword(data);
        return res;
      } catch (error) {
        throw error;
      }
    },
  });
  const onSubmit = async (data: any) => {
    await resetPasswordHandler.mutateAsync(data);
  };

  return {
    email,
    resetPasswordHandler,
    onSubmit: handleSubmit(onSubmit),
  };
}
