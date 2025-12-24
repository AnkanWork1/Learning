let todos = [
  { id: 1, task: "Learn Next.js API routes" },
  { id: 2, task: "Build a mini project" },
];

export async function GET() {
  return new Response(JSON.stringify(todos), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}

export async function POST(req) {
  const data = await req.json();
  const newTodo = { id: Date.now(), task: data.task };
  todos.push(newTodo);
  return new Response(JSON.stringify(newTodo), { status: 201 });
}

export async function DELETE(req) {
  const data = await req.json();
  todos = todos.filter((todo) => todo.id !== data.id);
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
