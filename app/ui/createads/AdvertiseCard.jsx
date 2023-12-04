"use client";

import {
	Card,
	Checkbox,
	CardMedia,
	CardContent,
	Typography,
} from "@mui/material";

export default function AdvertiseCard({
	id,
	image,
	type,
	title,
	onCardClick,
	isChecked,
}) {
	return (
		<Card sx={{ maxWidth: 345 }} className="shadow-lg" onClick={onCardClick}>
			<Checkbox name="plan" checked={isChecked} id={id} />
			<div className="flex justify-center">
				<CardMedia
					sx={{ height: 300, width: "70%" }}
					image={image}
					title={title}
				/>
			</div>
			<CardContent className="bg-gray-100">
				<Typography variant="body2" color="text.secondary" align="center">
					Create
				</Typography>
				<Typography align="center" gutterBottom variant="h5" component="div">
					{type}
				</Typography>
			</CardContent>
		</Card>
	);
}
