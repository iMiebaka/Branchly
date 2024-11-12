// import API_V1_ROUTE from "./routes/api-v1";

export default async function api<T>({
  data = undefined,
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
      headers["Authorization"] = `Bearer ${useCookie("access_token").value}`;
    }
    try {
      const response = await useFetch(url, {
        method,
        headers,
        body: data,
      });

      if (response.status.value != "success") {
        return reject({
          details: "Something went wrong",
          statusCode: response.status.value,
        });
      } else {
        return resolve(response.data.value as T);
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
//           refresh_token: Cookie.get("refresh_token"),
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
