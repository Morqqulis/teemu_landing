import React from 'react'

interface SpeakerProps {
	className?: string
	isPlaying: boolean
}

export const Speaker: React.FC<SpeakerProps> = ({ className = '', isPlaying }) => {
	return (
		<div className={`relative h-64 w-64 rounded-full bg-zinc-900 ${className}`}>
			{/* Outer ring */}
			<div className="absolute inset-2 rounded-full bg-black"></div>

			{/* Middle ring */}
			<div
				className={`absolute inset-8 flex items-center justify-center rounded-full bg-zinc-800 ${isPlaying ? 'animate-pulse' : ''}`}
			>
				{/* Inner circle (dome) */}
				<div
					className={`flex h-24 w-24 items-center justify-center rounded-full bg-zinc-700 shadow-inner ${isPlaying ? 'animate-bounce' : ''}`}
				>
					{/* Center dot */}
					<div className={`h-4 w-4 rounded-full bg-zinc-600 ${isPlaying ? 'animate-ping' : ''}`}></div>
				</div>
			</div>

			{/* Highlight */}
			<div className="absolute left-4 top-4 h-12 w-12 rounded-full bg-zinc-700 opacity-20"></div>
		</div>
	)
}
