import { Brand, CallToAction, Footer, Header } from "./components";
import {
	Blog,
	Features,
	Home,
	Possibility,
	WhatIsGPT,
} from "./components/sections";

import "./styles/app.css";

function App() {
	return (
		<>
			<Header />
			<Home />
			<Brand />
			<WhatIsGPT />
			<Features />
			<Possibility />
			<CallToAction />
			<Blog />
			<Footer />
		</>
	);
}

export default App;
