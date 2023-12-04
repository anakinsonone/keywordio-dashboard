"use client";

import {
	Grid,
	InputLabel,
	TextField,
	Select,
	MenuItem,
	Button,
} from "@mui/material";
import Link from "next/link";

export default function MediaAdForm({submitForm}) {
	return (
		<form action={submitForm}>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Grid container rowSpacing={1}>
						<Grid item xs={12}>
							<InputLabel className="font-semibold">Heading 01</InputLabel>
							<TextField
								size="small"
								fullWidth
								id="heading-01"
								placeholder="Add a heading that would make users intereseted."
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<InputLabel className="font-semibold">Heading 02</InputLabel>
							<TextField
								size="small"
								fullWidth
								id="heading-02"
								variant="outlined"
								placeholder="Add a heading that would make users interested."
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<Grid>
						<InputLabel className="font-semibold">Description 01</InputLabel>
						<TextField
							size="small"
							fullWidth
							id="description-01"
							variant="outlined"
							placeholder="Add primary text to help users understand more about your products, services or offers."
							multiline
							rows={4}
						/>
					</Grid>
				</Grid>
				<Grid item xs={4}>
					<InputLabel className="font-semibold">
						Landscape Marketing Image (1.9:1)
					</InputLabel>
					<TextField
						size="small"
						fullWidth
						id="landscape-marketing"
						variant="outlined"
						placeholder="Add the URL of the image you want to use for the ad."
					/>
				</Grid>
				<Grid item xs={4}>
					<InputLabel className="font-semibold">
						Portrait Marketing Image (4:5)
					</InputLabel>
					<TextField
						size="small"
						fullWidth
						id="portrait-image"
						variant="outlined"
						placeholder="Add the URL of the image you want to use for the ad."
					/>
				</Grid>
				<Grid item xs={4}>
					<InputLabel className="font-semibold">
						Square Marketing Image (1:1)
					</InputLabel>
					<TextField
						size="small"
						fullWidth
						id="square-marketing"
						variant="outlined"
						placeholder="Add the URL of the image you want to use for the ad."
					/>
				</Grid>
				<Grid item xs={12}>
					<InputLabel className="font-semibold">Video URL</InputLabel>
					<TextField
						size="small"
						fullWidth
						id="video-url"
						variant="outlined"
						placeholder="Add the URL of the video you want to use for the ad."
					/>
				</Grid>
				<Grid item xs={6}>
					<InputLabel className="font-semibold">Business Name</InputLabel>
					<TextField
						size="small"
						fullWidth
						id="business-name"
						variant="outlined"
						placeholder="Add your businessname."
					/>
				</Grid>
				<Grid item xs={6}>
					<InputLabel className="font-semibold">Button Label</InputLabel>
					<Select
						size="small"
						fullWidth
						id="button-label"
						variant="outlined"
						placeholder="Select a label that best suits your ad."
					>
						<MenuItem value={0}>
							Select a label that best suits your ad.
						</MenuItem>
					</Select>
				</Grid>
				<Grid item xs={12}>
					<InputLabel className="font-semibold">Website URL</InputLabel>
					<TextField
						size="small"
						fullWidth
						id="website-url"
						variant="outlined"
						placeholder="Add the URL of the landing page you want to redirect users to."
					/>
				</Grid>
				<Grid item xs={6}>
					{" "}
				</Grid>
				<Grid item xs={6}>
					<Grid container className="flex justify-end">
						<Grid item xs={3}>
							<Link href="/createads">
								<Button className="text-black bg-gray-200 hover:bg-gray-300 w-[10rem] font-bold">
									Back
								</Button>
							</Link>
						</Grid>
						<Grid item xs={3}>
							<Button
								type="submit"
								className="text-white bg-blue-500 hover:bg-blue-600 w-[10rem] font-bold"
							>
								Submit
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</form>
	);
}
