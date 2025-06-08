/** @type {import('tailwindcss').Config} */
const animationDelay = require("tailwindcss-animation-delay");

module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#5FB49C", // آبی پایه (مثلا برای دکمه‌ها)
				secondary: "#10b981", // سبز
				accent: "#98DFAF", // زرد
				background: "#DEEFB7", // رنگ پس‌زمینه روشن
				cardBg: "#ffffff", // پس‌زمینه کارت‌ها
				cartBg: "#414288",
			},
			animationDelay: {
				150: "150ms",
				300: "300ms",
			},
		},
	},
	plugins: [animationDelay],
};
