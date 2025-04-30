import { create } from "zustand";
import axios from "axios";

const useBlogStore = create((set) => ({
  blogPosts: [],
  fetchBlogs: async () => {
    try {
      const response = await axios.get(
        "https://escortmarketing.agency/wp-json/wp/v2/posts?per_page=3&page=1&_embed"
      );
      set({ blogPosts: response.data });
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  },
}));

export default useBlogStore;