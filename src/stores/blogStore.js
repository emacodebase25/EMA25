import { create } from "zustand";
import axios from "axios";

const fetchBlogs = async (page, postPerPage, set) => {
  try {
    const response = await axios.get(
      `https://escortmarketing.agency/wp-json/wp/v2/posts?per_page=${postPerPage}&page=${page}&_embed`
    );
    set({ blogPosts: response.data });
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
};

const useBlogStore = create((set) => {
  fetchBlogs(1, 8, set);

  return {
    blogPosts: [],
    fetchBlogs: (page, postPerPage) => fetchBlogs(page, postPerPage, set),
  };
});

export default useBlogStore;
