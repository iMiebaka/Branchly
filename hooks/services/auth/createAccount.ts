import { useForm } from "vue-hooks-form";

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
    rule: { required: true },
  });
  const password = useField("password", {
    rule: {
      required: true,
      min: 6,
    },
  });
  const onSubmit = (data: any) => console.log(data);
  return {
    email,
    name,
    password,
    onSubmit: handleSubmit(onSubmit),
  };
}
