/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: "1rem",
			screens: {
			  sm: "100%",
			  md: "100%",
			  lg: "1024px",
			  xl: "1440px",
			},
		  },
		  screens: {
			'2xl': {'max': '1535px'},
			// => @media (max-width: 1535px) { ... }
	  
			'xl': {'max': '1279px'},
			// => @media (max-width: 1279px) { ... }
	  
			'lg': {'max': '1023px'},
			// => @media (max-width: 1023px) { ... }
	  
			'md': {'max': '767px'},
			// => @media (max-width: 767px) { ... }
	  
			'sm': {'max': '639px'},
			// => @media (max-width: 639px) { ... }
		  },
		extend: {},
	},
	plugins: [],
}
