import { Delete, Get, Post, Put } from "@/services/request";
import { useQuery, useMutation } from "@tanstack/react-query";
import { endpoints } from "./endpoints";


// ===============================
// GET API
// ===============================
export const useDummyGet = (options?: any) => {
  return useQuery({
    queryKey: ["dummy-get"],
    queryFn: async () => await Get(endpoints.DUMMY_GET),
    ...options,
  });
};

// ===============================
// POST API
// ===============================
export const useDummyPost = (options?: any) => {
  return useMutation({
    mutationKey: ["dummy-post"],
    mutationFn: async (payload: any) => await Post(endpoints.DUMMY_POST, payload),
    ...options,
  });
};

// ===============================
// PUT API
// ===============================
export const useDummyPut = (options?: any) => {
  return useMutation({
    mutationKey: ["dummy-put"],
    mutationFn: async (payload: any) => await Put(endpoints.DUMMY_PUT, payload),
    ...options,
  });
};

// ===============================
// DELETE API
// ===============================
export const useDummyDelete = (options?: any) => {
  return useMutation({
    mutationKey: ["dummy-delete"],
    mutationFn: async () => await Delete(endpoints.DUMMY_DELETE),
    ...options,
  });
};
