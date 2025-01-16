'use client'

import { useEffect, useRef, useState } from 'react'
import { Speaker } from './Speaker'

interface Station {
	name: string
	url_resolved: string
	// Add other properties as needed
}

const Player = () => {
	const [stations, setStations] = useState<Station[]>([])
	const [currentStationIndex, setCurrentStationIndex] = useState(0)
	const [isPlaying, setIsPlaying] = useState(false)
	const [volume, setVolume] = useState(50)
	const audioRef = useRef<HTMLAudioElement | null>(null)

	useEffect(() => {
		;(async () => {
			const res = await fetch('/api/radio').then((res) => res.json())
			setStations(res)
		})()
	}, [])

	const currentStation = stations[currentStationIndex]

	const handlePlay = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause()
			} else {
				audioRef.current.play()
			}
			setIsPlaying(!isPlaying)
		}
	}

	const handleNextStation = () => {
		setCurrentStationIndex((prevIndex) => (prevIndex + 1) % stations.length)
		setIsPlaying(true)
	}

	const handleRandomStation = () => {
		const randomIndex = Math.floor(Math.random() * stations.length)
		setCurrentStationIndex(randomIndex)
		setIsPlaying(true)
	}

	const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newVolume = parseInt(e.target.value)
		setVolume(newVolume)
		if (audioRef.current) {
			audioRef.current.volume = newVolume / 100
		}
	}

	return (
		<div className="flex w-full items-center justify-between gap-2.5 lg:items-end">
			<Speaker isPlaying={isPlaying} className="h-48 w-48 md:h-64 md:w-64" />

			<div className="relative flex h-[420px] w-full max-w-80 flex-col gap-2.5 rounded-lg bg-gray-200 p-6 shadow-lg">
				{/* Display */}
				<div className="mb-4 flex items-center justify-between">
					<div className="text-sm font-medium uppercase text-gray-500">
						{currentStation ? currentStation.name : 'Radio'}
					</div>
					<div className="rounded bg-gray-300 px-2 py-1 text-xs font-semibold text-gray-700">TODAY</div>
				</div>

				{/* Main Control Wheel */}
				<div className="relative mb-6 flex items-center justify-center">
					<div className="flex h-48 w-48 items-center justify-center rounded-full bg-gray-300 shadow-inner">
						<div className="h-10 w-10 rounded-full bg-gray-400"></div>
						{/* Indicators */}
						<div className="absolute left-2 top-0 text-xs text-gray-500">
							{currentStationIndex + 1}/{stations.length}
						</div>
						<div className="absolute bottom-2 right-2 text-xs text-gray-500">{isPlaying ? 'PLAY' : 'STOP'}</div>
					</div>
				</div>

				{/* Buttons */}
				<div className="mb-6 flex justify-center space-x-4">
					{/* Channel Button */}
					<button
						className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-300 shadow hover:bg-gray-400"
						onClick={handleRandomStation}
					>
						<span className="font-semibold text-gray-700">CH</span>
					</button>
					{/* Play Button */}
					<button
						className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-300 shadow hover:bg-gray-400"
						onClick={handlePlay}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-gray-700"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							{isPlaying ? (
								<>
									<rect x="6" y="4" width="4" height="16"></rect>
									<rect x="14" y="4" width="4" height="16"></rect>
								</>
							) : (
								<polygon points="5 3 19 12 5 21 5 3"></polygon>
							)}
						</svg>
					</button>
					{/* Next Button */}
					<button
						className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-300 shadow hover:bg-gray-400"
						onClick={handleNextStation}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-gray-700"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<polygon points="5 4 15 12 5 20 5 4"></polygon>
							<line x1="19" y1="5" x2="19" y2="19"></line>
						</svg>
					</button>
				</div>

				{/* Volume Wheel */}
				<div className="absolute bottom-2 right-3 flex items-center">
					<input
						type="range"
						min="0"
						max="100"
						value={volume}
						onChange={handleVolumeChange}
						className="h-12 w-12 appearance-none rounded-full bg-gray-300 shadow-inner hover:bg-gray-400"
						style={{
							background: `radial-gradient(circle, #4B5563 ${volume}%, #D1D5DB ${volume}%)`,
						}}
					/>
					<div className="ml-2 text-xs text-gray-500">VOL</div>
				</div>

				{/* Hidden Audio Player */}
				{currentStation && (
					<audio
						ref={audioRef}
						src={currentStation.url_resolved}
						autoPlay={isPlaying}
						onEnded={handleNextStation}
						className="hidden"
					/>
				)}
			</div>

			<Speaker isPlaying={isPlaying} className="h-48 w-48 md:h-64 md:w-64" />
		</div>
	)
}

export default Player
