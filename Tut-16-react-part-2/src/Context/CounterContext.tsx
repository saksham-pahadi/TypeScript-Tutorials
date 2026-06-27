import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const CounterContext =
  createContext<CounterContextType | null>(
    null
  );

type CounterProviderProps = {
  children: ReactNode;
};

export function CounterProvider({
  children,
}: CounterProviderProps) {
  const [count, setCount] = useState(0);

  const increment = () =>
    setCount((prev) => prev + 1);

  const decrement = () =>
    setCount((prev) => prev - 1);

  return (
    <CounterContext.Provider
      value={{
        count,
        increment,
        decrement,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const context =
    useContext(CounterContext);

  if (!context) {
    throw new Error(
      "useCounter must be used inside CounterProvider"
    );
  }

  return context;
}