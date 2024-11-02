import { create } from "zustand";

interface SignInState {
  userEmail: string;
  userPassword: string;

  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

const useSignInStore = create<SignInState>((set) => ({
  userEmail: "",
  userPassword: "",

  setEmail: (email) => set({ userEmail: email }),
  setPassword: (password) => set({ userPassword: password }),
}));

export default useSignInStore;
