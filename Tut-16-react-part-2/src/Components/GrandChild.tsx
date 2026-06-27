import { useCounter } from "../Context/CounterContext";
import { useTheme } from "../Context/ThemeContext";

import { useAppSelector } from "../hooks/reduxHooks";

function GrandChild() {
  const { count, increment, decrement } = useCounter();

  const { theme } = useTheme();

  const users = useAppSelector((state) => state.Users.users);

  return (
    <div
      className={`App ${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"} p-4 rounded-lg mt-4 transition-colors duration-1000`}
    >
      <p
        className={`${theme === "light" ? "color-black" : "color-white"} transition-colors duration-1000`}
      >
        Count: {count}
      </p>

      <div className="flex gap-4">
        <button
          className="text-2xl h-15 w-30 bg-red-500 text-white rounded-2xl"
          onClick={decrement}
        >
          -
        </button>
        <button
          className="text-2xl h-15 w-30 bg-green-500 text-white rounded-2xl"
          onClick={increment}
        >
          +
        </button>
      </div>
      <div className="">
        <h5>Redux Component</h5>
        {users.map((item) => (
          <div>
            <p>User id: {item.id}</p>
            <p>Name: {item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GrandChild;
