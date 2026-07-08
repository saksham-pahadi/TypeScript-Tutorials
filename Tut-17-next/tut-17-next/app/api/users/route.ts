type User = {
  id: number;
  name: string;
};

const users: User[] = [];

export async function GET() {
  return Response.json(users);
}

export async function POST(request: Request) {
  const user: User = await request.json();

  users.push(user);

  return Response.json(user, {
    status: 201,
  });
}