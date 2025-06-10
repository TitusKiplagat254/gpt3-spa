import { Feature } from "../../ui";

import "./whatIsGPT.css";

const WhatIsGPT = () => {
	return (
		<div id="whatIsGPT" className="gpt section__margin">
			<div className="gpt__intro-feature">
				<Feature
					title="What is GPT"
					text="GPT (Generative Pre-trained Transformer) is an advanced language model developed by OpenAI. It can generate human-like text and assist in a wide range of natural language processing tasks."
				/>
			</div>
			<div className="gpt__heading">
				<h1 className="gradient__text">
					The possibilities are beyond your imagination
				</h1>
				<p>Explore the Library</p>
			</div>
			<div className="gpt__features">
				<Feature
					title="Chatbots"
					text="GPT powers intelligent chatbots that can understand context, provide accurate answers, and deliver personalized experiences in customer service, education, and entertainment."
				/>
				<Feature
					title="Knowledgebase"
					text="Leverage GPT to build dynamic knowledgebases that can retrieve and summarize complex information, enabling faster decision-making and better organizational intelligence."
				/>
				<Feature
					title="Education"
					text="Enhance learning with GPT by creating personalized tutoring, automatic content generation, and adaptive testing systems tailored to individual student needs."
				/>
			</div>
		</div>
	);
};

export default WhatIsGPT;
