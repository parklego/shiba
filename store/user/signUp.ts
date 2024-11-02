import { create } from "zustand";

interface SignUpState {
  userEmail: string;
  userEmailConfirm: string;
  userPassword: string;
  userPasswordConfirm: string;
  userName: string;

  setEmail: (email: string) => void;
  setEmailConfirm: (emailConfirm: string) => void;
  setPassword: (password: string) => void;
  setPasswordConfirm: (passwordConfirm: string) => void;
  setName: (name: string) => void;
}

const useSignUpStore = create<SignUpState>((set) => ({
  userEmail: "",
  userEmailConfirm: "",
  userPassword: "",
  userPasswordConfirm: "",
  userName: "",

  setEmail: (email) => set({ userEmail: email }),
  setEmailConfirm: (emailConfirm) =>
    set({
      userEmailConfirm: emailConfirm,
    }),
  setPassword: (password) => set({ userPassword: password }),
  setPasswordConfirm: (passwordConfirm) =>
    set({ userPasswordConfirm: passwordConfirm }),
  setName: (name) => set({ userName: name }),
}));

export default useSignUpStore;
