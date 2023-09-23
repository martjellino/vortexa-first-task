import { Jumbotron } from "@/components/LandingPage/Jumbotron";
import Navbar from "@/components/LandingPage/Navbar";
import NavbarWithCreateEvent from "@/components/LandingPage/NavbarWithCreateEvent";
import React from "react";
NavbarWithCreateEvent

export default function page() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
		</div>
	);
}
