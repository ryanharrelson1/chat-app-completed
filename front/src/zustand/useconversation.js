import { create } from "zustand";

const useConvo = create((set) => ({
  selected: null,
  setSelected: (selected) =>
    set({
      selected,
    }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConvo;
