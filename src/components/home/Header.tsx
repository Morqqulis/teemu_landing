import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
	return (
		<header className={`bg-black px-4 py-[30px] sm:px-8 md:pt-[100px]`}>
			<div className="flex flex-col items-center justify-between gap-5 sm:flex-row md:items-end">
				<Link className={`animate-fade-left`} href={'/'}>
					<Image className={`max-w-[170px]`} src={'/logo.svg'} alt={'Logotype'} width={1775} height={1673} priority />
				</Link>
				<div className={`animate-fade-right flex flex-col gap-3 text-center sm:text-left md:gap-10`}>
					<span className={`uppercase text-[#1C1C1C]`}>NOW PLAYING</span>
					<span className={`text-[#E8927C]`}>SABRINA CARPENTER - Espresso</span>
				</div>
			</div>
		</header>
	)
}

export default Header
