"use client";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";

export default function InsightTabs({ component, handleComponent, isDonut }) {
	return (
		<ToggleButtonGroup
			value={component}
			exclusive
			onChange={handleComponent}
			aria-label="switch-component"
			className="flex justify-end m-4 rounded-3xl bg-gray-200"
		>
			<ToggleButton
				value="donut"
				aria-label="donut-component"
				style={{
					color: `${isDonut ? "white" : ""}`,
				}}
				className={`!rounded-[40px] border-0 ${isDonut ? "!bg-blue-500" : ""}`}
			>
				<DonutLargeIcon />
			</ToggleButton>
			<ToggleButton
				value="table"
				style={{
					color: `${!isDonut ? "white" : ""}`,
				}}
				aria-label="table-component"
				className={`!rounded-[40px] border-0 ${!isDonut ? "!bg-blue-500" : ""}`}
			>
				<TableChartOutlinedIcon />
			</ToggleButton>
		</ToggleButtonGroup>
	);
}
