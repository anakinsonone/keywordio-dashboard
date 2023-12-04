"use client";

import { DataGrid } from "@mui/x-data-grid";
import { metricsTableData } from "../lib/data";

export default function MetricsTable() {
	const { rows, columns } = metricsTableData;

	return (
		<div style={{ height: 272, width: "100%" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 5 },
					},
				}}
				density="compact"
			/>
		</div>
	);
}
