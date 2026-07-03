export async function GET() {
  return Response.json({
    success: true,
    developer: "Dany Jimenez",
    project: "WDD430 Portfolio",
    version: "1.0.0",
    message: "Welcome to my Next.js API!",
    timestamp: new Date().toISOString(),
  });
}