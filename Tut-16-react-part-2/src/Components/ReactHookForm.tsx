import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

type LoginForm = {
  email: string;
  password: string;
};

type User = {
  id: number;
  name: string;
  email: string;
};

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const userForm = useForm<User>();

  const userMutation = useMutation({
    mutationFn: async (data: User) => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );
      return response.json();
    },
  });

  const onSubmit = (data: LoginForm) => {
    console.log(data);
    console.log(errors);
  };

  const onUserSubmit = (data: User) => {
    userMutation.mutate(data);
    console.log(data);
  };

  return (
    <div className="mt-2 flex flex-col gap-2 items-center justify-center ">
      {/* React Hook Form */}
      <form
        className="bg-blue-500 text-white p-6 rounded shadow"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-xl font-bold mb-4">React Hook Form</h2>
        <input
          className="border p-2 mb-4 w-full"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-4">{errors.email.message}</p>
        )}
        <input
          className="border p-2 mb-4 w-full"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",

            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-4">{errors.password.message}</p>
        )}
        <button
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          type="submit"
        >
          Login
        </button>
      </form>
      {/* Mutation form */}
      <form
        className="bg-blue-500 text-white p-6 rounded shadow ml-4"
        onSubmit={userForm.handleSubmit(onUserSubmit)}
      >
        <h2 className="text-xl font-bold mb-4">
          React Hook Form + React Query Mutation
        </h2>
        <input
          className="border p-2 mb-4 w-full"
          type="text"
          placeholder="Name"
          {...userForm.register("name", {
            required: "Name Required",
            minLength: {
              value: 3,
              message: "Please enter a valid name",
            },
          })}
        />
        {userForm.formState.errors && (
          <p>{userForm.formState.errors.name?.message}</p>
        )}
        <input
          className="border p-2 mb-4 w-full"
          type="email"
          placeholder="Email"
          {...userForm.register("email", {
            required: "Email Required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {userForm.formState.errors && (
          <p>{userForm.formState.errors.email?.message}</p>
        )}
        <button
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          type="submit"
        >
          Submit
        </button>
        {userMutation.isSuccess && (
          <p className="text-green-500">User created successfully!</p>
        )}
        {userMutation.isError && (
          <p className="text-red-500">
            Error creating user:<p>{userMutation.error.message}</p>
          </p>
        )}
        {userMutation.isPending && (
          <p className="text-yellow-500">Creating user...</p>
        )}
        {userMutation.data && (
          <div className="mt-2">
            <h3 className="text-lg font-bold">Created User:</h3>
            <p>Name: {userMutation.data.name}</p>
            <p>Email: {userMutation.data.email}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ReactHookForm;
