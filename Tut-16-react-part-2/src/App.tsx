import "./App.css";
import { CounterProvider } from "./Context/CounterContext";
import { ThemeProvider } from "./Context/ThemeContext";
import Parent from "./Components/Parent";
import { GenericComponent } from "./Components/GenericComponent";
import { useFetch } from "./hooks/UseFetch";
import ReactQuery from "./Components/ReactQuery";

import ReactHookForm from "./Components/ReactHookForm";
import Zod from "./Components/Zod";
import { ReduxComponent } from "./Components/ReduxComponent";

function App() {
  type User2 = {
    id: number;
    name: string;
  };

  type todos = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  const users: User2[] = [
    { id: 1, name: "Saksham" },
    { id: 2, name: "John" },
  ];

  const { data, loading, error } = useFetch<todos[]>(
    "https://jsonplaceholder.typicode.com/users/1/todos",
  );

  return (
    <div className="App flex flex-wrap gap-1">
      <ThemeProvider>
        <CounterProvider>
          <Parent />
          <div>

          <h3>Generic Component</h3>
          <GenericComponent
            items={["Micky", "Mouse", 13, "Goofy", "Pluto"]}
            renderItem={(item) => <div>{item}</div>}
            />

          <GenericComponent
            items={users}
            renderItem={(user) => <div>{user.name}</div>}
            /> 
            </div>
            <div>

          <h2>Custom Hook</h2>
          {data?.map((todo) => (
            <div
            key={todo.id}
            className="m-2 p-2 border rounded shadow flex items-center gap-1 justify-center"
            >
              <h4 className="text-lg font-bold">{todo.title}</h4>
              <p className="text-sm text-gray-600">
                {todo.completed ? "Completed" : "Not Completed"}
              </p>
            </div>
          ))}
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          </div>
        </CounterProvider>
      </ThemeProvider>
      <ReactHookForm />
      <Zod />
      <ReactQuery />
      <ReduxComponent />
    </div>
  );
}

export default App;
