import { logo } from "../../assets";

import "./footer.css";

const Footer = () => {
	return (
		<div className="footer section__padding">
			<div className="footer__heading">
				<h1 className="gradient__text">
					Do you want to step in to the future before others
				</h1>
			</div>

			<div className="footer__cta">
				<p>Request Early Access</p>
			</div>

			<div className="footer__content">
				<div className="footer__content-info">
					<img src={logo} alt="footer logo" />
					<p>
						Created by React, <br /> All Rights Reserved
					</p>
				</div>
				<div className="footer__content-links">
					<h4>Links</h4>
					<p>Overons</p>
					<p>Social Media</p>
					<p>Counters</p>
					<p>Contact</p>
				</div>
				<div className="footer__content-company">
					<h4>Company</h4>
					<p>Terms & Conditions </p>
					<p>Privacy Policy</p>
					<p>Contact</p>
				</div>
				<div className="footer__content-contact">
					<h4>Get in touch</h4>
					<p>Crechterwoord K12 182 DK Alknjkcb</p>
					<p>085-132567</p>
					<p>info@payme.net</p>
				</div>
			</div>

			<div className="footer__copyright">
				<p>© 2025 FutureTech. All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
