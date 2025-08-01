import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Montserrat', 'Open Sans', 'sans-serif'],
				heading: ['Montserrat', 'sans-serif'],
				body: ['Open Sans', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#8B5CF6',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#FFD700',
					foreground: '#000000'
				},
				tertiary: {
					DEFAULT: '#A855F7',
					foreground: '#FFFFFF'
				},
				accent: {
					DEFAULT: '#1F1F23',
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				mlPurple: '#8B5CF6',
				mlGold: '#FFD700',
				mlDark: '#1F1F23',
				mlBlack: '#000000',
				legendary: '#FF4444',
				mythic: '#00E5FF',
				immortal: '#8B5CF6',
				soloLeveling: '#4A0E4E',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0',
						opacity: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)',
						opacity: '1'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)',
						opacity: '1'
					},
					to: {
						height: '0',
						opacity: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(139, 92, 246, 0.8)'
					}
				},
				'gold-shine': {
					'0%': {
						backgroundPosition: '-200px 0'
					},
					'100%': {
						backgroundPosition: '200px 0'
					}
				},
				'legendary-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(255, 68, 68, 0.4), 0 0 40px rgba(255, 215, 0, 0.3), inset 0 0 20px rgba(255, 68, 68, 0.1)'
					},
					'50%': {
						boxShadow: '0 0 30px rgba(255, 68, 68, 0.6), 0 0 60px rgba(255, 215, 0, 0.4), inset 0 0 30px rgba(255, 68, 68, 0.2)'
					}
				},
				'mythic-glow': {
					'0%, 100%': {
						boxShadow: '0 0 25px rgba(0, 229, 255, 0.5), 0 0 45px rgba(255, 215, 0, 0.4), inset 0 0 25px rgba(0, 229, 255, 0.15)'
					},
					'50%': {
						boxShadow: '0 0 35px rgba(0, 229, 255, 0.7), 0 0 65px rgba(255, 215, 0, 0.5), inset 0 0 35px rgba(0, 229, 255, 0.25)'
					}
				},
				'immortal-glow': {
					'0%, 100%': {
						boxShadow: '0 0 30px rgba(139, 92, 246, 0.6), 0 0 55px rgba(255, 215, 0, 0.5), 0 0 80px rgba(0, 0, 0, 0.4), inset 0 0 30px rgba(139, 92, 246, 0.2)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(139, 92, 246, 0.8), 0 0 75px rgba(255, 215, 0, 0.6), 0 0 100px rgba(0, 0, 0, 0.6), inset 0 0 40px rgba(139, 92, 246, 0.3)'
					}
				},
				'solo-leveling-glow': {
					'0%, 100%': {
						boxShadow: '0 0 25px rgba(74, 14, 78, 0.6), 0 0 45px rgba(139, 92, 246, 0.4), 0 0 65px rgba(0, 0, 0, 0.8), inset 0 0 25px rgba(74, 14, 78, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 35px rgba(74, 14, 78, 0.8), 0 0 60px rgba(139, 92, 246, 0.6), 0 0 85px rgba(0, 0, 0, 1), inset 0 0 35px rgba(74, 14, 78, 0.4)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'gold-shine': 'gold-shine 3s ease-in-out infinite',
				'legendary-glow': 'legendary-glow 3s ease-in-out infinite',
				'mythic-glow': 'mythic-glow 3s ease-in-out infinite',
				'immortal-glow': 'immortal-glow 3s ease-in-out infinite',
				'solo-leveling-glow': 'solo-leveling-glow 2.5s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;