import React from "react";

export const CheckBox = ({ id, name, type, label }) => {
	return (
		<div className="mb-6 flex items-center gap-2">
			<input
				id={id}
				type={type}
				name={name}
				className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
				required
			/>
			<label className="block text-sm font-medium text-gray-900 dark:text-white">{label}</label>
		</div>
	);
};