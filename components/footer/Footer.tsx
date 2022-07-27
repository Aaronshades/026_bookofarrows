import React from 'react';
import Image from 'next/image';

import ArticBueLogo from "../../public/images/arcticBueLogo.png";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<p>&copy; Helmen Design</p>
			</div>
			<span className={styles.divider}/>
			<div className={styles.sponsor}>
				<h4>Sponsor</h4>
				<a href="https://arcticbuesport.no/" target="_blank" rel="noreferrer" >
					<Image className={styles.logo} src={ArticBueLogo} alt="Arctic Buesport AS Logo" />
				</a>
			</div>
		</footer>
	)
}

export default Footer;
