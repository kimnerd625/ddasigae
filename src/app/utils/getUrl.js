export const getCallbackURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ??
    process?.env?.NEXT_PUBLIC_VERCEL_URL ??
    "http://localhost:3000/";
  url = url.includes("http") ? url : `https://${url}`;
  url =
    url.charAt(url.length - 1) === "/"
      ? `${url}auth/callback`
      : `${url}/auth/callback`;
  console.log(url);
  return url;
};
