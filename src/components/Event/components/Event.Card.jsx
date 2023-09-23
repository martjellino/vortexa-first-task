"use client";

import React from "react";

export const EventCard = ({ events }) => {

  return (
    <div className="flex justify-between items-center h-screen ">
      <div className="max-w-full m-auto p-4 grid grid-cols-3 gap-20 ">
        {events.map((event) => {
          return (
            <div className="card w-[300px] py-3 px-4 flex-col items-start space-y-2 ">
              <h4 className="font-bold text-large">{event.name}</h4>
              <p className="font-semibold text-base leading-5 tracking-wide text-[#9E0620] text-ce ">{event.date}</p>
              <p className="text-default-500">{event.location}</p>
              <p>Penyelanggara : </p>
              <h5 className="font-bold text-cent">{event.author.name}</h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}