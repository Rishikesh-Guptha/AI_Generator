/** @format */

// /** @format */

// {
// 	import("tailwindcss").Config;
// }
// import "tailwindcss/base";
// import "tailwindcss/components";
// import "tailwindcss/utilities";
// export default {
// 	content: [],
// 	theme: {
// 		extend: {
// 			animation: {
// 				"spin-slow": "spin 3s linear infinite",
// 			},
// 		},
// 	},
// 	variants: {
// 		extend: {},
// 	},
// 	plugins: [],
// };

module.exports = {
	purge: [],
	theme: {
		extend: {
			animation: {
				"spin-slow": "spin 3s linear infinite",
			},
			keyframes: {
				"spin-slow": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
			},
		},
		variants: {
			extend: {},
		},
		plugins: [],
	},
};
