import { FC } from "react";
import useSWR from "swr";

type UserData = {
	login: string;
	id: number;
	avatar_url: string;
	url: string;
	html_url: string;
	name: string;
	company?: string;
	blog?: string;
	location?: string;
	email?: string;
	twitter_username?: string;
	public_repos: number;
	public_gists: number;
	followers: number;
	following: number;
	created_at: string;
	updated_at: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type UserProps = { id: string };

export const User: FC<UserProps> = ({ id }) => {
	const { data: user, error } = useSWR<UserData, unknown>(
		`https://api.github.com/users/${id}`,
		fetcher,
	);

	if (error) return <div>Failed to load user</div>;
	if (!user) return <div>Loading...</div>;

	return (
		<div className="flex flex-col items-center p-8 space-y-6">
			<img
				className="w-32 h-32 rounded-full"
				src={user.avatar_url}
				alt={user.name}
			/>
			<h3 className="text-lg font-semibold dark:text-gray-100">{user.name}</h3>
			<span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100">
				{user.login}
			</span>
			<p className="text-gray-600 dark:text-gray-300">
				Company: {user.company || "N/A"}
			</p>

			<p className="text-gray-600 dark:text-gray-300">
				Location: {user.location || "N/A"}
			</p>
			<p className="text-gray-600 dark:text-gray-300">
				Public repos: {user.public_repos}
			</p>
			<div className="flex space-x-4 w-full">
				<a
					href={user.html_url}
					className="w-full py-2 text-center font-semibold text-white rounded-lg shadow-md hover:bg-gray-700 bg-gray-800"
				>
					Ver en Github
				</a>
				<button
					type="button"
					className="w-full py-2 text-center font-semibold text-white rounded-lg shadow-md hover:bg-gray-700 bg-gray-800"
				>
					Guardar
				</button>
			</div>
		</div>
	);
};
