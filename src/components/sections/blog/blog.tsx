import { blog01 } from "../../../assets";
import { Article } from "../../ui";

import "./blog.css";

const Blog = () => {
	return (
		<div id="blog" className="section__padding">
			<div className="blog__heading">
				<h1 className="gradient__text">
					A lot is happening, <br /> We are blogging about it.
				</h1>
			</div>
			<div className="blog__container">
				<div className="blog__container-groupA">
					<Article
						imgUrl={blog01}
						date="Sep 26, 2021"
						text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
					/>
				</div>
				<div className="blog__container-groupB">
					<Article
						imgUrl={blog01}
						date="Sep 26, 2021"
						text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
					/>
					<Article
						imgUrl={blog01}
						date="Sep 26, 2021"
						text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
					/>
					<Article
						imgUrl={blog01}
						date="Sep 26, 2021"
						text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
					/>
					<Article
						imgUrl={blog01}
						date="Sep 26, 2021"
						text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
					/>
				</div>
			</div>
		</div>
	);
};

export default Blog;
