import { Route } from "wouter";
import { Home } from "./routers/home";
import { User } from "./routers/user";

function App() {
	return (
		<>
			<div>
				{/* <Link href="/users/1">Profile</Link> */}
				<Route path="/" component={Home} />

				<Route path="/users/:name">
					{(params) => <User id={params.name} />}
				</Route>
			</div>
		</>
	);
}

export default App;
