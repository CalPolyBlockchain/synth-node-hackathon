module.exports = {
	content: ['./src/**/*.{js,jsx}', './public/index.html'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			blue: '#20FFFF',
			pink: '#ff49db',
			purple: '#B62EE0',
			green: '#34eb3d',
			white: '#ffffff',
			red: '#000000',
			yellow: '#fff620',
			gray: '#8492a6',
			blac: '#000000',
		},
		container: {
			center: true,
		  },
		fontFamily: {
			Poppins: ['Poppins', 'sans-serif'],
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
			'press-start': ['"Press Start 2P"', 'cursive'],
		},

		extend: {
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			backgroundImage: {
				'hero-img': 'url(../public/home/hero-img.png)',
				'nav-img': 'url(../public/nav-shadow.png)',
				"logos-img": "url(../public/home/logos-img.png)",
				"celo-logo": "url(../public/celo-logo.png)",
			},
			gradientColorStops: (theme) => ({
				primary: '#FF8C00',
				secondary: '#FFA500',
				danger: '#FFD700',
			}),
		},
	},
	plugins: [require('daisyui')],
};
