import { create } from "zustand";

const useUserInfoStore = create((set) => ({
  username: "미정",
  setUsername: (newUsername) =>
    set(() => ({
      username: { newUsername },
    })),
}));

export default useUserInfoStore;
