"use client";

import React from "react";
import { Button } from "../SharedUI/Button";
import { EventBookForm } from "../Event/components/Event.BookForm";

export default function NavbarWithCreateEvent() {
  return (
    <nav className=" bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 shadow-medium">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img
            src="/PartyEverday.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
        </a>
        <div className="w-1/4 flex md:order-2 gap-3 ml-20">
          <EventBookForm />
          <div className="avatar">
            <div className="w-11 rounded-full ml-20">
              <img src="/partycompress.jpg" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
