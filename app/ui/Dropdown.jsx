"use client";

const dropdownOptions = [
	{ value: "clicks", label: "Clicks" },
	{ value: "cost", label: "Cost" },
	{ value: "conversions", label: "Conversions" },
];

const Dropdown = ({ handleGraphData }) => {
	return (
		<select
			className="p-1 mt-0 pt-0 bg-white border-gray-200 border-2 rounded-sm"
			fullWidth
			id="button-label"
			variant="outlined"
			defaultValue={"clicks"}
			sx={{ padding: "none" }}
			onChange={handleGraphData}
		>
			{dropdownOptions.map((option, index) => {
				const { value, label } = option;
				return (
					<option key={index} value={value}>
						{label}
					</option>
				);
			})}
		</select>
	);
};

export default Dropdown;
