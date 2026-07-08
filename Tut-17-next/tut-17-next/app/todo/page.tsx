import { createTodo } from "../components/actions";

export default function Page() {
  return (
    <form action={createTodo}>
      <input
        name="title"
        placeholder="Todo"
      />

      <button type="submit">
        Add
      </button>
    </form>
  );
}