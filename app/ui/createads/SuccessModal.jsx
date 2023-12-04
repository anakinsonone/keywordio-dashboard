"use client";

import { Modal, Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function SuccessModal({ showModal, setShowModal }) {
	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "white",
		borderRadius: 1,
		boxShadow: 24,
		p: 4,
	};

	return (
		<Modal className="" open={showModal} onClose={() => setShowModal(false)}>
			<Box sx={style}>
				<Typography
					id="modal-modal-title"
					variant="h6"
					component="h2"
					className="text-center"
				>
					<CheckCircleIcon color="primary" fontSize="large" />
				</Typography>
				<Typography
					id="modal-modal-description"
					className="text-center text-xl"
					sx={{ mt: 2 }}
				>
					Submitted
				</Typography>
			</Box>
		</Modal>
	);
}
