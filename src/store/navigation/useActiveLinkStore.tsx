import {create} from "zustand";

interface ActiveLinkState {
    activeLink: string;
    setActiveLink: (link: string) => void;
}

export const useActiveLinkStore = create<ActiveLinkState>((set) => ({
    activeLink: "",
    setActiveLink: (link) => set({activeLink: link}),
}));
