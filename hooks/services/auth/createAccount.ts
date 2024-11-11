import { useForm } from "vue-hooks-form";
import { useMutation } from "@tanstack/vue-query";
import SERVICE_AUTH from "~/services/auth";

// type ValidatorRule = {
//   required?: boolean;
//   type?: string;
//   asyncValidator?: (rule: ValidatorRule, value: string) => true | Error;
// };

// function debounce<T extends (...args: any[]) => any>(
//   func: T,
//   wait: number
// ): (...args: Parameters<T>) => void {
//   let timeout: ReturnType<typeof setTimeout>;
//   return (...args: Parameters<T>) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func(...args), wait);
//   };
// }

// const debouncedValidator = debounce((rule: ValidatorRule, value: string) => {
//   console.log(value);
//   if (value == "111") return Error("Username must be Bob!");
//   return true
// }, 700);

export default function useCreateAccount() {
  useSeoMeta({
    title: "Register - Branchly",
    description: "Branchly Register Page",
  });

  const { useField, handleSubmit } = useForm({
    defaultValues: {},
  });
  const name = useField("name", {
    rule: { required: true },
  });
  const email = useField("email", {
    rule: {
      required: true,
      type: "email",
    },
  });
  const password = useField("password", {
    rule: {
      required: true,
      min: 6,
    },
  });

  const createAccountHandler = useMutation<ITLoginToken, any, ITRegister, any>({
    mutationFn: async (data) => {
      try {
        const res = await SERVICE_AUTH.createAccount(data);
        useCookie("access_token").value = res.accessToken
        useCookie("refresh_token").value = res.refreshToken
        return res;
      } catch (error) {
        throw error;
      }
    },
  });
  const onSubmit = async (data: any) => {
    await createAccountHandler.mutateAsync(data);
  };

  return {
    email,
    name,
    password,
    createAccountHandler,
    onSubmit: handleSubmit(onSubmit),
  };
}
