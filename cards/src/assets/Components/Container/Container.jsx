import React from "react";
import Card from "../Card/Card";
import "./Container.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
const Container = () => {
	let img1 =
		"https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60n";
	let img2 =
		"https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
	let img3 =
		"https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
	let img4 =
		"https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
	let img5 =
		"https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
	let img6 =
		"https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
	let img7 =
		"https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
	let img8 =
		"https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
	return (
		<div className="Container">
			<div className="card-groups">
				<div className="card-group" data-index="0">
					<Card image={img1} cardType={"little-card"} />
					<Card image={img2} cardType={"big-card"} />
					<Card image={img3} cardType={"little-card"} />
					<Card image={img4} cardType={"big-card"} />
					<Card image={img5} cardType={"little-card"} />
					<Card image={img6} cardType={"big-card"} />
					<Card image={img7} cardType={"little-card"} />
					<Card image={img8} cardType={"big-card"} />
				</div>
				<div className="card-group">
					<Card image={img1} cardType={"little-card"} />
					<Card image={img2} cardType={"big-card"} />
					<Card image={img3} cardType={"little-card"} />
					<Card image={img4} cardType={"big-card"} />
					<Card image={img5} cardType={"little-card"} />
					<Card image={img6} cardType={"big-card"} />
					<Card image={img7} cardType={"little-card"} />
					<Card image={img8} cardType={"big-card"} />
				</div>
				<div className="card-group">
					<Card image={img1} cardType={"little-card"} />
					<Card image={img2} cardType={"big-card"} />
					<Card image={img3} cardType={"little-card"} />
					<Card image={img4} cardType={"big-card"} />
					<Card image={img5} cardType={"little-card"} />
					<Card image={img6} cardType={"big-card"} />
					<Card image={img7} cardType={"little-card"} />
					<Card image={img8} cardType={"big-card"} />
				</div>
				<div className="card-group">
					<Card image={img1} cardType={"little-card"} />
					<Card image={img2} cardType={"big-card"} />
					<Card image={img3} cardType={"little-card"} />
					<Card image={img4} cardType={"big-card"} />
					<Card image={img5} cardType={"little-card"} />
					<Card image={img6} cardType={"big-card"} />
					<Card image={img7} cardType={"little-card"} />
					<Card image={img8} cardType={"big-card"} />
				</div>
			</div>
			<div className="card-swiper-buttons">
				<button id="hate-button">
					<FontAwesomeIcon icon={faXmarkCircle} />
				</button>
				<button id="love-button">
					<FontAwesomeIcon icon={faHeart} />
				</button>
			</div>
		</div>
	);
};

export default Container;
