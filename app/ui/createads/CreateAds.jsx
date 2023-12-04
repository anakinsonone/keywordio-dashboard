"use client";

import { Button, Grid } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import AdvertiseCard from "./AdvertiseCard";

const CreateAds = () => {
	const [isChecked, setIsChecked] = useState("");

	const handleCardClick = (value) => {
		setIsChecked(value);
	};

	const isTextAd = isChecked === "text";
	const isMediaAd = isChecked === "media";

	return (
		<>
			<Grid container spacing={6} className="flex justify-center items-end">
				<Grid item xs={3}>
					<AdvertiseCard
						id={"text"}
						title={"Text Ad"}
						type={"Text Ad"}
						image={"/image-2.png"}
						onCardClick={() => handleCardClick("text")}
						isChecked={isTextAd}
					/>
				</Grid>
				<Grid item xs={3}>
					<AdvertiseCard
						id={"media"}
						title={"Media Ad"}
						type={"Media Ad"}
						image={"/image-1.png"}
						onCardClick={() => handleCardClick("media")}
						isChecked={isMediaAd}
					/>
				</Grid>
				<Grid item xs={7}></Grid>
				<Grid item xs={5} className="flex justify-end">
					<Link href={isTextAd ? "/createads/textads" : "/createads/mediaads"}>
						<Button
							variant="contained"
							className="text-white bg-blue-500 hover:bg-blue-600 w-[10rem] font-bold"
						>
							Next
						</Button>
					</Link>
				</Grid>
			</Grid>
		</>
	);
};

export default CreateAds;
