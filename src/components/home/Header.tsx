import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
	return (
		<header className={`bg-black py-[30px] md:pt-[100px]`}>
			<div className="container flex flex-col items-center justify-between sm:flex-row md:items-end">
				<Link className={`animate-fade-left`} href={'/'}>
					<Image src={'/logo.svg'} alt={'Logotype'} width={168} height={162} />
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
