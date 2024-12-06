export async function GET() {

  const config = {
    accountAssociation: {
      header: "eyJmaWQiOjg5MTkxNCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDRmYzg1YjUzN2FkYzE4RmYzNTRhMzJDNkUxM0JCRGNEZDk0YTZEMDEifQ",
      payload: "eyJkb21haW4iOiJmb3VybHVja3kudmVyY2VsLmFwcCJ9",
      signature: "MHgxN2IzMDMyOGMyNTcwY2VkZmFkODcwZjcyNTQzODIwZTNmMzUzYjA0NGY2Y2Q1OGEwNTA3OGZjZDc0NWQ3MTcwNzA1YmE3ZGEwZDVhOGFlOGVkYzc5MTRiZmFhNWY0NjQyZjNhNjI0OTZkMjE4M2U1MTJmMjQ3ZmUyMjQyMWVlNzFj"
    },
    frame: {
      name: "Four Lucky",
      version: "0.0.1",
      iconUrl: "https://fourlucky.vercel.app/splash.png",
      homeUrl: "https://fourlucky.vercel.app",
      splashImageUrl: "https://fourlucky.vercel.app/splash.png",
      splashBackgroundColor: "#1f1f1f"
    },
  };

  return Response.json(config);
}