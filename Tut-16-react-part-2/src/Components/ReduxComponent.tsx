import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

import { addUser, removeUser } from "../features/user/userSlice";

export function ReduxComponent() {
  const users = useAppSelector((state) => state.Users.users);

  const dispatch = useAppDispatch();

  return (
    <div className="bg-blue-500 text-white p-6 rounded shadow mt-2">
      <h2 className="text-xl font-bold mb-4">Redux Component</h2>
      {users.map((item)=>(
        <div key={item.id}>
          <p>User id: {item.id}</p>
          <p>Name: {item.name}</p>
        </div>
      ))
        
      }

      <button
        className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
        onClick={() => dispatch(addUser({id:users[users.length-1]?.id+1 || 0,name:"hari"}))}
      >
        Add User
      </button>
      <button
        className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
        onClick={() => dispatch(removeUser(users[0].id))}
      >
        Remove user
      </button>

    </div>
  );
}
