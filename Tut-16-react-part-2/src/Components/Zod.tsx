import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.email("Invalid Email"),

  password: z.string().min(6, "Minimum 6 chars"),
});

type LoginForm = z.infer<typeof loginSchema>;

const Zod = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };
  return (
    <div className="mt-2 flex items-center justify-center ">
      <form
        className="bg-blue-500 text-white p-6 rounded shadow"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-xl font-bold mb-4">React Hook Form + Zod</h2>
        <input
          className="border p-2 mb-1 w-full"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
         <p className="text-red-500 text-sm mb-2">
        {
          errors.email
            ?.message
        }
      </p>
        <input
          className="border p-2 mb-1 w-full"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
         <p className="text-red-500 text-sm mb-2">
        {
          errors.password
            ?.message
        }
      </p>
        <button
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Zod;
