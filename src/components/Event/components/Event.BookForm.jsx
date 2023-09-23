import React from "react";

export const EventBookForm = () => {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-[260px] space-y-2">
        <h1>Join Event</h1>
        <input name="name" placeholder="full name" />
        <input name="email" placeholder="email@something.com" />
        <input name="phone" placeholder="+6222222222" />
        <button color="primary">Join</button>
      </div>
    </main>
  );
};
