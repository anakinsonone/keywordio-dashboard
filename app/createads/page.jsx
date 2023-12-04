"use client";

import CreateAds from "../ui/createads/CreateAds";
import { Container } from "@mui/material";

export default function Page() {
	return (
		<main className="flex flex-col items-center justify-between h-[88vh] bg-gray-100 p-6">
			<Container maxWidth={"90vw"} className="p-6 bg-white rounded-md h-full">
				<CreateAds />
			</Container>
		</main>
	);
}
