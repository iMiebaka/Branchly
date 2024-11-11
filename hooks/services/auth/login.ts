import { useForm } from "vue-hooks-form";

export default function useLogin() {
  useSeoMeta({
    title: "Login - Branchly",
    description: "Branchly Login Page",
  });

  const { useField, handleSubmit } = useForm({
    defaultValues: {},
  });
  const email = useField("email", {
    rule: { required: true },
  });
  const password = useField("password", {
    rule: {
      required: true,
    },
  });
  const onSubmit = (data: any) => console.log(data);
  return {
    email,
    password,
    onSubmit: handleSubmit(onSubmit),
  };
}
