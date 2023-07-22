import { create } from "zustand";
import { person } from "../types/person";

type Store = {
	search: string;
	people: person[];
	count: number;
	autoSearch: boolean;
};

interface Actions {
	setSearch: (val: string) => void;
	setPeople: (val: person[]) => void;
	setCount: (val: number) => void;
	setAutoSearch: (val: boolean) => void;
}

const initialState = {
	autoSearch: true,
	search: "",
	people: [],
	count: 0,
};

export const usePeopleState = create<Store & Actions>((set) => ({
	...initialState,

	setSearch: (val) => set({ search: val }),

	setPeople: (val) => set({ people: val }),

	setCount: (val) => set({ count: val }),

	setAutoSearch: (val) => set({ autoSearch: val }),
}));
