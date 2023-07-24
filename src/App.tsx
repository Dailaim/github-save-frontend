import { Route } from "wouter";
import { Home } from "./routers/home";
import { User } from "./routers/user";

import { Client, Provider, cacheExchange, fetchExchange } from "urql";
import { Save } from "./routers/save";

const client = new Client({
	url: "http://localhost:8080/graphql",
	exchanges: [cacheExchange, fetchExchange],
});

function App() {
	return (
		<>
			<Provider value={client}>
				<div>
					{/* <Link href="/users/1">Profile</Link> */}
					<Route path="/" component={Home} />

					<Route path="/users/:name">
						{(params) => <User name={params.name} />}
					</Route>

					<Route path="/save" component={Save} />
				</div>
			</Provider>
		</>
	);
}

export default App;
