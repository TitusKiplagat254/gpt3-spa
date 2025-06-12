import { featuresData } from "../../../data/features";
import { Feature } from "../../ui";

import "./features.css";

const Features = () => {
	return (
		<div id="features" className="features section__padding">
			<div className="features__heading">
				<h1 className="gradient__text">
					The Future is Now and You Just Need to Realize It. Step into Future
					Today. & Make it Happen.
				</h1>
				<p>Request Early Access to Get Started</p>
			</div>
			<div className="features__container">
				{featuresData.map((item, index) => (
					<Feature
						title={item.title}
						text={item.text}
						key={item.title + index}
					/>
				))}
			</div>
		</div>
	);
};

export default Features;
