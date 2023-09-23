"use client";

import React from "react";
import { Button } from "../SharedUI/Button";
import Link from 'next/link'

export default function Navbar() {
	return (
		<nav className=" bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 shadow-medium ">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="#" className="flex items-center">
					<img src="/PartyEverday.svg" className="h-8 mr-3" alt="Flowbite Logo" />
				</a>
				<div className="w-1/4 flex md:order-2 gap-3">
				<Link href="/register">
				<Button variant="secondary">Sign up</Button>
				</Link>
				<Link href="/login">
				<Button>Let's Party</Button>
				</Link>
				</div>
			</div>
		</nav>
	);
}

// 		<nav className=" bg-transparent dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-transparent dark:border-gray-600">
