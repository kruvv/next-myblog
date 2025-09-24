import { getAllPosts, getPostsBySearch } from "@/services/getPosts";
import { getAllUsers } from "@/services/getUsers";
import { create } from "zustand";

type UsePosts = {
  posts: any[];
  loading: boolean;
  getAllPosts: () => Promise<void>;
  getPostsBySearch: (value: string) => Promise<void>;
};

export const usePosts = create<UsePosts>()((set) => ({
  posts: [],
  loading: false,
  getAllPosts: async () => {
    set({ loading: true });
    const posts = await getAllPosts();
    set({ posts, loading: false });
  },
  getPostsBySearch: async (search) => {
    set({ loading: true });
    const posts = await getPostsBySearch(search);
    set({ posts, loading: false });
  },
}));

type UseUsers = {
  users: any[];
  loading: boolean;
  getAllUsers: () => Promise<void>;
};

export const useUsers = create<UseUsers>()((set) => ({
  users: [],
  loading: false,
  getAllUsers: async () => {
    set({ loading: true });
    const users = await getAllUsers();
    set({ loading: true, users });
  },
}));
