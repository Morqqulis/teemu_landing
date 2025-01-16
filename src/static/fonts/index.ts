import { Geist, Geist_Mono, Orbitron } from 'next/font/google'

const orbitron = Orbitron({
	variable: '--font-orbitron',
	subsets: ['latin'],
})

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export { geistMono, geistSans, orbitron }

