import { ai, people } from "../../../assets";

import "./home.css";

const Home = () => {
	return (
		<div id="home" className="home section__padding">
			<div className="home__content">
				<h1 className="gradient__text">
					Let&apos;s Build Something amazing with GPT-3 OpenAI
				</h1>
				<p>
					Yet bed any for travelling assistance indulgence unpleasing. Not
					thoughts all exercise blessing. Indulgence way everything joy
					alteration boisterous the attachment. Party we years to order allow
					asked of.
				</p>

				<div className="home__form">
					<input type="email" placeholder="Your Email Address" />
					<button type="button">Get Started</button>
				</div>

				<div className="home__social-proof">
					<img src={people} />
					<p>1,600 people requested access a visit in last 24 hours</p>
				</div>
			</div>

			<div className="home__img-container">
				<img src={ai} />
			</div>
		</div>
	);
};

export default Home;
