"use client";

import { Container, Modal, Box, Typography } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SuccessModal from "@/app/ui/createads/SuccessModal";
import MediaAdForm from "@/app/ui/createads/mediaads/MediaAdForm";

export default function Page() {
	const router = useRouter();
	const [showModal, setShowModal] = useState(false);

	const submitForm = (formData) => {
		setShowModal(true);

		setTimeout(() => {
			router.push("/createads");
			setShowModal(false);
		}, 600);
	};

	return (
		<main className="flex flex-col items-center justify-between h-[88vh] bg-gray-100 p-6">
			<Container
				maxWidth={"90vw"}
				className={
					showModal
						? "p-6 h-full blur-sm bg-white rounded-md overflow-auto"
						: "p-6 h-full bg-white rounded-md overflow-auto"
				}
			>
				<SuccessModal showModal={showModal} setShowModal={setShowModal} />
				<p className="font-semibold pb-4">Create Text & Media</p>
				<MediaAdForm submitForm={submitForm} />
			</Container>
		</main>
	);
}
