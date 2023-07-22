import { useEffect, useState } from "react";

export const useAutoSearch = (
	callback: (val: string) => void,
	active = true,
	initialValue = "",
	delay = 300,
) => {
	const [searchBounced, setSearchBounced] = useState(initialValue);

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (searchBounced === initialValue) return;

			if (!active) return;

			callback(searchBounced);
		}, delay);

		return () => clearTimeout(timeout);
	}, [active, callback, delay, initialValue, searchBounced]);

	return { searchBounced, setSearchBounced };
};
