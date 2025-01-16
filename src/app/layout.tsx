import { geistMono, geistSans } from '@/static/fonts'
import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Teemu landing page',
	description: 'Radio Player with Next.js and Tailwind CSS',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.className} ${geistMono.className} antialiased`}>{children}</body>
		</html>
	)
}
