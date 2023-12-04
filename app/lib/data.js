export const pieChartData = {
	CLICKS: [
		{ id: 0, value: 40, label: "Male", color: "#f38946" },
		{ id: 1, value: 35, label: "Female", color: "#2998fa" },
		{ id: 2, value: 25, label: "Unknown", color: "#333c45" },
	],
	COST: [
		{ id: 0, value: 60, label: "Back", color: "#f38946" },
		{ id: 1, value: 30, label: "Ahead", color: "#2998fa" },
		{ id: 2, value: 10, label: "Unknown", color: "#333c45" },
	],
	CONVERSIONS: [
		{ id: 0, value: 30, label: "Positive", color: "#f38946" },
		{ id: 1, value: 50, label: "Negative", color: "#2998fa" },
		{ id: 2, value: 20, label: "Neutral", color: "#333c45" },
	],
};

export const metricsTableData = {
	columns: [
		{ field: "group", headerName: "Group", width: 140 },
		{ field: "clicks", headerName: "Clicks", width: 140 },
		{ field: "cost", headerName: "Cost", width: 140 },
		{ field: "conversions", headerName: "Conversions", width: 120 },
		{ field: "revenue", headerName: "Revenue", width: 140 },
	],
	rows: [
		{
			id: 1,
			group: "Male",
			clicks: "712",
			cost: "USD 4,272",
			conversions: 8,
			revenue: "USD 16,568",
		},
		{
			id: 2,
			group: "Female",
			clicks: "3,961",
			cost: "USD 27,331",
			conversions: 8,
			revenue: "USD 16,568",
		},
		{
			id: 3,
			group: "Unknown",
			clicks: "712",
			cost: "USD 4,272",
			conversions: 8,
			revenue: "USD 16,568",
		},
		{
			id: 4,
			group: "Total ",
			clicks: "712",
			cost: "USD 4,272",
			conversions: 8,
			revenue: "USD 16,568",
		},
	],
};

export const insightsTableData = {
	columns: [
		{ field: "campaigns", headerName: "Campaigns", width: 140 },
		{ field: "clicks", headerName: "Clicks", width: 140 },
		{ field: "cost", headerName: "Cost", width: 140 },
		{ field: "conversions", headerName: "Conversions", width: 120 },
		{ field: "revenue", headerName: "Revenue", width: 140 },
	],

	rows: [
		{
			id: 1,
			campaigns: "Cosmetics",
			clicks: "712",
			cost: "USD 4,272",
			conversions: 8,
			revenue: "USD 16,568",
		},
		{
			id: 2,
			campaigns: "Serums",
			clicks: "3,961",
			cost: "USD 27,331",
			conversions: 8,
			revenue: "USD 16,568",
		},
		{
			id: 3,
			campaigns: "Facewash",
			clicks: "712",
			cost: "USD 4,272",
			conversions: 8,
			revenue: "USD 16,568",
		},
		{
			id: 4,
			campaigns: "Shampoos",
			clicks: "712",
			cost: "USD 4,272",
			conversions: 8,
			revenue: "USD 16,568",
		},
		{
			id: 5,
			campaigns: "Conditioners",
			clicks: "712",
			cost: "USD 4,272",
			conversions: 8,
			revenue: "USD 16,568",
		},
		{
			id: 6,
			campaigns: "Facewash2 ",
			clicks: "712",
			cost: "USD 4,272",
			conversions: 8,
			revenue: "USD 16,568",
		},
		{
			id: 7,
			campaigns: "Total ",
			clicks: "712",
			cost: "USD 4,272",
			conversions: 8,
			revenue: "USD 16,568",
		},
	],
};
