
const server = Bun.serve({
  port: 3000,
  hostname: "0.0.0.0",
  fetch(req: Request) {
    console.log(`[Backend] ${req.method} ${req.url}`);
    return new Response(" Hello from Bun Backend!", {
      status: 200,
      headers: { 
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*"
      },
    });
  },
});

console.log(`\n [SUCCESS] Bun Backend Server is running!`);
console.log(`Listening on http://localhost:${server.port}`);
console.log(` All systems operational! 🚀\n`);

