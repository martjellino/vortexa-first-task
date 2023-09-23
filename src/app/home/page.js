import { Jumbotron } from "@/components/LandingPage/Jumbotron";
import Navbar from "@/components/LandingPage/Navbar";
import React from "react";

export default function page() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
		</div>
	);
}
