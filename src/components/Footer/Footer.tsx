import React, { memo } from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = memo(
	() => {
		return (
			<footer className={styles.Footer}>
				<p>Created by Arrum Soerjo</p>
			</footer>
		);
	},
	() => true,
);

export default Footer;
