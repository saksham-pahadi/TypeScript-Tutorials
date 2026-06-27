import { useQuery } from "@tanstack/react-query";

type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

async function fetchUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  return response.json();
}

const ReactQuery = () => {
  const { data, isLoading, error } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  return (
    <div className="mt-2 bg-blue-500 flex flex-col items-center justify-center">
      <h2>React Query</h2>
      {data?.map((user) => (
        <div className="text-white text-start border-2 rounded mt-2 p-1 h-fit" key={user.id}>
          <p>Name : {user.name}</p>
          <p>Username : {user.username}</p>
          <p>Email : {user.email}</p>
          <p className="text-wrap">{`Address : ${user.address.street},${user.address.suite},${user.address.city},${user.address.zipcode}`}</p>
        </div>
      ))}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default ReactQuery;
