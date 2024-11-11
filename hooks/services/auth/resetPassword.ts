import { useMutation, useQuery } from "@tanstack/vue-query";
import { useForm } from "vue-hooks-form";
import SERVICE_AUTH from "~/services/auth";

function useCheckResetToken() {
  const route = useRoute();

  return useQuery({
    queryKey: ["reset-password-token"],
    queryFn: async () => await SERVICE_AUTH.getResetPassword(route.query.token as string),
  });
}

export function useResetPassword() {
  useSeoMeta({
    title: "Reset - Branchly",
  });
  const checkTokenQuery = useCheckResetToken()

  const { useField, handleSubmit } = useForm({
    defaultValues: {
      token: "",
    },
  });

  const password = useField("password", {
    rule: {
      required: true,
      min: 6,
    },
  });

  const checkPassword = useField("password", {
    rule: {
      required: true,
      min: 6,
    },
  });

  const resetPasswordHandler = useMutation<any, any, ITResetPassword, any>({
    mutationFn: async (data) => {
      try {
        const res = await SERVICE_AUTH.resetPassword(data);
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
    password,
    checkPassword,
    checkTokenQuery,
    resetPasswordHandler,
    onSubmit: handleSubmit(onSubmit),
  };
}
