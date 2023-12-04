"use client";

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { insightsTableData } from "../lib/data";

export default function InsightsTable() {
	const { rows, columns } = insightsTableData;

	return (
		<div style={{ height: 350, width: "100%" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 7 },
					},
				}}
				density="compact"
			/>
		</div>
	);
}
