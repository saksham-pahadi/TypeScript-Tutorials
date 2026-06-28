"use client";

type ClientPageProps = {
  params: {
    category: string;
  };
  searchParams: {
    page?: string;
    sort?: string;
  };
};

export default function ClientPage({ params, searchParams }: ClientPageProps) {
  const { category } = params;
  const { page, sort } = searchParams;

  return (
    <div>
      <h1>{category}</h1>
      <p>Page: {page ?? "1"}</p>
      <p>Sort: {sort ?? "default"}</p>
    </div>
  );
}
