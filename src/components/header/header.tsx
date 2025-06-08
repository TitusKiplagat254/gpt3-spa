import { useState } from "react";
import { logo } from "../../assets";
import { RiCloseFill, RiMenu3Fill } from "../icons.ts";

import "./header.css";

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<div className="navbar">
			<div className="navbar__content">
				<div className="navbar__logo">
					<img src={logo} alt="Header logo icon" />
				</div>
				<div className="navbar__links">
					<p>
						<a href="#home">Home</a>
					</p>
					<p>
						<a href="#wgpt3">What is GPT3?</a>
					</p>
					<p>
						<a href="#possibility">Open AI</a>
					</p>
					<p>
						<a href="#features">Case Studies</a>
					</p>
					<p>
						<a href="#blog">Library</a>
					</p>
				</div>
			</div>
			<div className="navbar__auth">
				<p>Sign in</p>
				<button type="button">Sign up</button>
			</div>

			<div className="navbar__menu">
				{toggleMenu ? (
					<RiCloseFill
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<RiMenu3Fill
						color="#fff"
						size={27}
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<div className="navbar__menu-content">
						<div className="navbar__menu-links">
							<p>
								<a href="#home">Home</a>
							</p>
							<p>
								<a href="#wgpt3">What is GPT3?</a>
							</p>
							<p>
								<a href="#possibility">Open AI</a>
							</p>
							<p>
								<a href="#features">Case Studies</a>
							</p>
							<p>
								<a href="#blog">Library</a>
							</p>
						</div>
						<div className="navbar__menu-auth">
							<p>Sign in</p>
							<button type="button">Sign up</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
