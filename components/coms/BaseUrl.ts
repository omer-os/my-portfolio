export let BaseUrl = "";

if (process.env.NODE_ENV === "development") {
  BaseUrl = "http://localhost:3000/";
} else {
  BaseUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
}
