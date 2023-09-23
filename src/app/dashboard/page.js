import { EventCard } from "@/components/Event/components/Event.Card";
import { Jumbotron } from "@/components/LandingPage/Jumbotron";
import Navbar from "@/components/LandingPage/Navbar";
import NavbarWithCreateEvent from "@/components/LandingPage/NavbarWithCreateEvent";

import React from "react";

async function getEvents() {
	const res = await fetch("https://eventmakers-api.vercel.app/api/event", {
		cache: "no-cache",
	});
	const data = await res.json()
	return data;
}

export default async function Page() {
	const { data } = await getEvents();
	return (
		<div>
			<NavbarWithCreateEvent />
			<Jumbotron />
			<EventCard events={data} />
		</div>
	);
}
