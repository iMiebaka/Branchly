// import API_V1_ROUTE from "./routes/api-v1";

export default async function api<T>({
  data = {},
  url,
  secure,
  method = "GET",
}: {
  data?: any;
  url: string;
  secure?: boolean;
  method?: "GET" | "PUT" | "POST" | "DELETE";
}) {
  return new Promise<T>(async (resolve, reject) => {
    const headers: any = {
      "Content-type": "application/json",
    };
    if (secure || secure == undefined) {
      headers["Authorization"] = `Bearer ${useCookie("access")}`;
    }
    try {
      const response = await fetch(
        url,
        {
          method,
          headers,
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        if (response.json) {
          const err = await response.json();

          return reject({ ...err, statusCode: response.status });
        } else {
          reject({
            details: "Something went wrong",
            statusCode: response.status,
          });
        }
      }
      if (response.status == 204) {
        return resolve("" as T);
      } else {
        const result: T = await response.json();
        return resolve(result);
      }
    } catch (err: any) {
      reject({ detail: err.message });
    }
  });
}

// const refreshAuth = async () => {
//   try {
//     const response = await fetch(
//       import.meta.env.NEXT_PUBLIC_API_URL_ + API_V1_ROUTE.refreshAuth,
//       {
//         method: "POST",
//         body: JSON.stringify({
//           refresh_token: Cookie.get("refresh"),
//         }),
//         headers: {
//           "Content-type": "application/json",
//         },
//       }
//     );
//     if (!response.ok) {
//       const result = await response.json();
//       throw result;
//     }

//     const result = await response.json();
//     Cookie.set("access", result.access_token);
//     Cookie.set("refresh", result.refresh_token);
//   } catch (err: any) {
//     import.meta.env.NODE_ENV != "production" && console.error(err);
//     throw err;
//   }
// };
