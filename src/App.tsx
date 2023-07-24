import { Route } from "wouter";
import { Home } from "./routers/home";
import { User } from "./routers/user";

import { Client, cacheExchange, fetchExchange , Provider } from 'urql';

const client = new Client({
  url: 'http://localhost:4000/graphql',
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

				<Route path="/save" component={Home} />
			</div>
      </Provider>
		</>
	);
}

export default App;
