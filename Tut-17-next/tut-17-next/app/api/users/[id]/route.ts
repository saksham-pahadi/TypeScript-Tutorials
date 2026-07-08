type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  request: Request,
  { params }: RouteContext
) {
  const { id } = await params;

  return Response.json({
    userId: id,
  });
}