"use client";

import Navbar from "@/components/LandingPage/Navbar";
import React from "react";
import { EventJoin } from "./Event.Join";

export const EventSingle = ({ event }) => {
  if (!event || event.length === 0) {
    return <p>Tidak ada event yang tersedia.</p>;
  }
  return (
    <>
      <Navbar />
      <div className="max-w-full m-auto p-4 grid grid-cols-3 gap-20 ">
        <div className="card w-[300px] py-3 px-4 flex-col items-start space-y-2 mt-24">
          <h4 className="font-bold text-large">{event.name}</h4>
          <p className="font-semibold text-base leading-5 tracking-wide text-[#9E0620] text-ce ">
            {event.date}
          </p>
          <p className="text-default-500">{event.location}</p>
          <p>Participant : {event.participants.length} </p>
          <p>Penyelanggara : </p>
          <h5 className="font-bold text-cent">{event.author.name}</h5>
        </div>
      </div>
      <div className="flex ml-24">
        <EventJoin />
      </div>
    </>
  );
};
