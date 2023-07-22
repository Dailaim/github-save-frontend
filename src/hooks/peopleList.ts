import { useEffect } from "react";
import { usePeopleState } from "../context/peopleListContext";
import { useFetcherPeople } from "./fetchPeople";

export function usePeopleList() {
	const { setPeople, setCount, search } = usePeopleState();

	const { people, error, isLoading, count } = useFetcherPeople(search);

	useEffect(() => {
		if (people && count) {
			setPeople(people);
			setCount(count);
		} else {
			setPeople([]);
			setCount(0);
		}
	}, [count, people, setCount, setPeople]);

	return {
		isLoading: isLoading,
		isError: error && !people,
	};
}
