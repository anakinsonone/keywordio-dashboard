"use client";

import { Card, Container, Grid, Typography } from "@mui/material";
import InsightsPieChart from "./ui/InsightsPieChart";
import InsightsTable from "./ui/InsightsTable";
import MetricsTable from "./ui/MetricsTabls";
import Dropdown from "./ui/Dropdown";
import { useState } from "react";
import { pieChartData } from "./lib/data";
import InsightTabs from "./ui/InsightsTabs";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

export default function Home() {
	const [component, setComponent] = useState("donut");
	const [metrics, setMetrics] = useState("CLICKS");

	const handleComponent = (event, newComponent) => {
		setComponent(newComponent);
	};

	const isDonut = component === "donut";

	const handleGraphData = (event) => {
		setMetrics(event.target.value.toUpperCase());
	};

	return (
		<main className="flex flex-col items-center justify-between h-[88vh] bg-gray-100">
			<Container maxWidth={"90vw"} className="p-6 h-full">
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<Card>
							<div className="p-4 w-full">
								<Typography className="font-bold pb-2" level="title-lg">
									Ad Insights
								</Typography>
								<InsightsTable />
							</div>
						</Card>
					</Grid>
					<Grid item xs={6}>
						<Card>
							<div className="p-4 w-full">
								<Grid container xs={12} className=" pb-2">
									<Grid item xs={6}>
										<Typography className="font-bold p-0" level="title-lg">
											Ad Insights
										</Typography>
									</Grid>
									<Grid item xs={3}>
										{" "}
									</Grid>
									<Grid item xs={3} className="p-0 flex justify-between">
										{isDonut && (
											<>
												<Dropdown handleGraphData={handleGraphData} />
												<HelpOutlineOutlinedIcon style={{ color: "gray" }} />
											</>
										)}
									</Grid>
								</Grid>
								<Card>
									{isDonut ? (
										<InsightsPieChart data={pieChartData[metrics]} />
									) : (
										<MetricsTable />
									)}
									<div className="flex justify-end rounded-[40px]">
										<InsightTabs
											component={component}
											handleComponent={handleComponent}
											isDonut={isDonut}
										/>
									</div>
								</Card>
							</div>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</main>
	);
}
