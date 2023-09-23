"use client";

import { Button } from "@/components/SharedUI/Button";
import Link from "next/link";
import React from "react";

export const EventCard = ({ events }) => {
	return (
		<div className="max-w-screen-xl items-center justify-between mx-auto grid grid-cols-3 gap-6 mt-16">
			{events.map((event) => {
				return (
					<Link key={event.id} href={`/events/${event.id}`}>
						<div className="card">
							<img
								className="rounded-t-lg"
								src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3474&q=80"
								alt="event image"
							/>
							<div className="p-4 flex flex-col gap-3">
								<h4 className="text-3xl font-bold text-gray-900 mb-2 text-center">{event.name}</h4>
								<div className="flex w-full justify-between">
									<p className="font-medium text-lg text-base text-neutral-700">{event.date}</p>
									<p className="font-medium text-lg uppercase text-neutral-700">{event.location}</p>
								</div>
								<Button>Join with {event.participants.length} Other Participant</Button>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};
