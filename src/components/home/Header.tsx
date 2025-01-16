'use client'
import { orbitron } from '@/static/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
	const [position, setPosition] = useState(0)
	const text = 'SABRINA CARPENTER - Espresso    '

	useEffect(() => {
		const interval = setInterval(() => {
			setPosition((prev) => (prev + 1) % text.length)
		}, 300)

		return () => clearInterval(interval)
	}, [])

	return (
		<header className={`bg-black px-4 py-[30px] sm:px-8 md:pt-[100px]`}>
			<div className="flex flex-col items-center justify-between gap-5 sm:flex-row md:items-end">
				<Link className={`animate-fade-left animate-ease-linear`} href={'/'}>
					<Image className={`max-w-[170px]`} src={'/logo.svg'} alt={'Logotype'} width={1775} height={1673} priority />
				</Link>
				<div
					className={`animate-fade-right animate-ease-linear flex flex-col gap-3 text-center sm:text-left md:gap-10`}
				>
					<span className={`uppercase text-gray-600`}>NOW PLAYING</span>
					<span className={`text-digital text-[#E8927C] ${orbitron.className}`}>
						{text.slice(position) + text.slice(0, position)}
					</span>
				</div>
			</div>
		</header>
	)
}

export default Header
