import useSWR from "swr";

type peopleResponse = {
	login: string;
	id: number;
	avatar_url: string;
	url: string;
	html_url: string;
};

const fetcher = async (name: string) => {
	const response = await fetch(
		`https://api.github.com/search/users?q=${name}+in:login&page=1&per_page=10`,
	);

	if (!response.ok) {
		throw new Error("Error fetching people");
	}

	const data = await response.json();

	const peopleData = data.items.map((personResponse: peopleResponse) => {
		return {
			id: personResponse.id,
			name: personResponse.login,
			imageUrl: personResponse.avatar_url,
			urlApi: personResponse.url,
			urlHtml: personResponse.html_url,
		};
	});

	return { peopleData, count: data.total_count };
};

export const useFetcherPeople = (name: string) => {
	const { data, error, isLoading } = useSWR(name ? name : null, fetcher);

	return {
		people: data?.peopleData,
		count: data?.count,
		isLoading: isLoading,
		isError: error && !data?.peopleData,
		error: error,
	};
};
