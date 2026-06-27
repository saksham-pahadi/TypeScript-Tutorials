type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

export function GenericComponent<T>({ items, renderItem }: ListProps<T>) {
  return (
    <div className="flex flex-wrap justify-center">
      {items.map((item, index) => (
        <div key={index} className="m-2 p-2 border rounded shadow">
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}
