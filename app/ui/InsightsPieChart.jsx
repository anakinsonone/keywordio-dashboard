"use client";

import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie({ data }) {
	return (
		<PieChart
			series={[
				{
					data: data,
					outerRadius: 115,
					innerRadius: 70,
					paddingAngle: 1,
					startAngle: -144,
					endAngle: 217,
					cx: 150,
					cy: 135,
				},
			]}
			width={700}
			height={268}
		/>
	);
}
