export let BaseUrl = "";

if (process.env.NEXT_PUBLIC_VERCEL_URL) {
  BaseUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/`;
} else {
  BaseUrl = "http://localhost:3000/";
}
