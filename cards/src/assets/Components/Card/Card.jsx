import React from "react";
import "./Card.css";
const Card = ({ image, cardType }) => {
	return (
		<div
			className={`Card ${image} ${cardType}`}
			style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}
		></div>
	);
};

export default Card;
