import { create } from "zustand";
import axios from "axios";

const useBlogStore = create((set, get) => ({
  blogPosts: [],
  latestBlogs: [],
  currentPageFetched: null,

  fetchBlogs: async (page = 1, postPerPage = 8) => {
    const { currentPageFetched } = get();

    
    if (page === 1 && currentPageFetched === 1) {
      return; 
    }

    try {
      const response = await axios.get(
        `https://escortmarketing.agency/wp-json/wp/v2/posts?per_page=${postPerPage}&page=${page}&_embed`
      );

      set({ blogPosts: response.data });
      set({ currentPageFetched: page });

      if (page === 1) {
        set({ latestBlogs: response.data.slice(0, 3) });
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  },
}));

export default useBlogStore;
