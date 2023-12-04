"use client";

import Link from "next/link";

const Navbar = () => {
	return (
		<main className="flex w-full justify-between">
			<Link
				href="/"
				className="flex h-[48px] grow items-center justify-center gap-2 p-3 text-xl font-bold hover:text-gray-500 md:flex-none md:justify-start md:p-2 md:px-3"
			>
				<p>APP LOGO</p>
			</Link>
			<div className="flex gap-5">
				<Link
					href="/"
					className="flex h-[48px] grow items-center justify-center gap-2 p-3 text-xl font-medium hover:text-gray-500 md:flex-none md:justify-start md:p-2 md:px-3"
				>
					<p>DASHBOARD</p>
				</Link>
				<Link
					href="/createads"
					className="flex h-[48px] grow items-center justify-center gap-2 p-3 text-xl font-medium hover:text-gray-500 md:flex-none md:justify-start md:p-2 md:px-3"
				>
					<p>CREATE ADS</p>
				</Link>
			</div>
		</main>
	);
};

export default Navbar;
