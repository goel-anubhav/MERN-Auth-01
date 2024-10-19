import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,

  signup: async (email, password, name) => {
    set({ isLoading: true, error: null, isCheckingAuth: true });
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        email,
        password,
        name,
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
        isCheckingAuth: false,
      });
      return response.data.user;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || error.message || "Error Signup";
      set({
        error: errorMessage,
        isLoading: false,
        isCheckingAuth: false,
      });
      return { error: errorMessage };
    }
  },
}));
