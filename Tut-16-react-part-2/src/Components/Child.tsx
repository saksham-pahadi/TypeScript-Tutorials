import GrandChild from "./GrandChild";
import { useCounter } from "../Context/CounterContext";
import { useTheme } from "../Context/ThemeContext";


function Child() {
  const {
    count,
  } = useCounter();
  const { theme,toggleTheme } = useTheme();
  return (
    <div className={`App ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} p-4 rounded-lg transition-colors duration-1000`}>
      <h3>Child Component</h3>
      {count}
      <GrandChild />
      <button className="mt-4 p-2 bg-blue-500 text-white rounded" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Child;