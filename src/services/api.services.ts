import { parseCookies } from "nookies";
const API_BASE_URL: string = "http://localhost:8000/api/v1/user";

type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

type ApiResponse<T> = Promise<T>;

type ApiRequestOptions<T> = {
  endpoint: string;
  method?: RequestMethod;
  body?: T;
  headers?: HeadersInit;
};

const apiRequest = async <T, B = unknown>({
  endpoint,
  method = "GET",
  body,
  headers = {},
}: ApiRequestOptions<B>): ApiResponse<T> => {
  try {
    const isFormData = body instanceof FormData;
    const cookies = parseCookies();
    const token = cookies.token;
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers: {
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...headers,
      },
      body: isFormData
        ? (body as FormData)
        : body
        ? JSON.stringify(body)
        : null,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Request Error:", error);
    throw error;
  }
};

export const apiHelper = {
  get: <T>(endpoint: string, headers?: HeadersInit) =>
    apiRequest<T>({ endpoint, method: "GET", headers }),
  post: <T, B>(endpoint: string, body: B, headers?: HeadersInit) =>
    apiRequest<T, B>({ endpoint, method: "POST", body, headers }),
  put: <T, B>(endpoint: string, body: B, headers?: HeadersInit) =>
    apiRequest<T, B>({ endpoint, method: "PUT", body, headers }),
  patch: <T, B>(endpoint: string, body: B, headers?: HeadersInit) =>
    apiRequest<T, B>({ endpoint, method: "PATCH", body, headers }),
  delete: <T>(endpoint: string, headers?: HeadersInit) =>
    apiRequest<T>({ endpoint, method: "DELETE", headers }),
};
