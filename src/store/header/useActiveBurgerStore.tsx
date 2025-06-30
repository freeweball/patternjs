import {create} from "zustand";

interface ActiveBurgerState {
    activeBurger: boolean;
    setActiveBurger: (value: boolean) => void;
}

export const useActiveBurgerStore = create<ActiveBurgerState>((set) => ({
    activeBurger: false,
    setActiveBurger: (value) => set({activeBurger: value}),
}));
