import "./feature.css";

interface FeatureProps {
	title: string;
	text: string;
}

const Feature = ({ title, text }: FeatureProps) => {
	return (
		<div className="feature">
			<div className="feature__title">
				<div />
				<h1>{title}</h1>
			</div>
			<div className="feature__text">
				<p>{text}</p>
			</div>
		</div>
	);
};

export default Feature;
