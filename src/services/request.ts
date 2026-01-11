import api from "@/lib/axios";

// GET
export const Get = async <T>(url: string) => {
  const res = await api.get<T>(url);
  return res.data;
};

// POST
export const Post = async <T>(url: string, payload: unknown) => {
  const res = await api.post<T>(url, payload);
  return res.data;
};

// PUT
export const Put = async <T>(url: string, payload: unknown) => {
  const res = await api.put<T>(url, payload);
  return res.data;
};

// DELETE
export const Delete = async <T>(url: string) => {
  const res = await api.delete<T>(url);
  return res.data;
};
