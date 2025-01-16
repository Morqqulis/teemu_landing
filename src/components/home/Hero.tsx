import Image from 'next/image'
import Link from 'next/link'
import { images, items } from './constants'

const Hero = () => {
	return (
		<div className={`px-6 pb-20 md:-mt-[7%]`}>
			<div className={`animate-fade-up mb-20 flex items-center justify-between`}>
				{images.map((img) => (
					<div key={img.id}>
						<Image src={img.src} width={img.width} height={img.height} alt={'Icon'} />
					</div>
				))}
			</div>

			<div className={`mb-20 grid items-start sm:grid-cols-2 justify-center gap-5 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]`}>
				{items.map((item, index) => (
					<div
						className={`flex flex-col gap-2.5 ${index % 2 === 0 ? 'animate-fade-right' : 'animate-fade-left'}`}
						key={item.id}
					>
						<div className={`max-w-[280px]`}>
							<Image className={`h-auto w-full`} src={item.src} width={236} height={236} alt={'Icon'} />
						</div>
						<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{item.title}</h3>
						<p className="text-sm leading-7">{item.text}</p>
					</div>
				))}
			</div>

			<div className="flex flex-col items-center justify-around md:flex-row md:items-start">
				<div className="flex items-center justify-center">
					<Image className="h-auto max-w-full" src={`/bottle.png`} alt="Field Bottle" width={300} height={400} />
				</div>

				<div className="max-w-md p-8">
					<h2 className="mb-2 grid text-3xl font-light text-black">
						field bottle
						<span>$29</span>
					</h2>
					<p className="mb-4 text-sm">ships from the u.s.</p>

					<button className="w-full border bg-black px-4 py-3 text-white duration-300 hover:border-black hover:bg-white hover:text-black">
						add to cart
					</button>

					<div className="space-y-4 pt-4 text-gray-500">
						<p className="text-sm">
							white stainless steel bottle with screw top and &quot;teenage engineering field system&quot; print. can
							keep your drink hot or cold for 10-12 hours.
						</p>

						<ul className="text-sm">
							<li>• powder-coated stainless steel</li>
							<li>• dimensions: 260 x 70 mm | 10.2 x 2.8 in, 18 oz | 532 ml</li>
						</ul>

						<Link href="#" className="block text-sm text-blue-600 hover:underline">
							explore
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
