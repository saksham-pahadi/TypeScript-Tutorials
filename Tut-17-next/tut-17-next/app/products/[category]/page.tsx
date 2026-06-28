import type { Metadata } from "next";
import ClientPage from "./ClientPage";

type PageProps = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{
    page?: string;
    sort?: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;

  return {
    title: category,
  };
}

export default async function Page({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  return (
    <ClientPage params={resolvedParams} searchParams={resolvedSearchParams} />
  );
}
