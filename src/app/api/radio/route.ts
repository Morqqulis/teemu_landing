import { NextResponse } from 'next/server'

const API_BASE_URL = 'https://de1.api.radio-browser.info/json'

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const query = searchParams.get('query')

	let url = `${API_BASE_URL}/stations/topclick/20`
	if (query) {
		url = `${API_BASE_URL}/stations/search?name=${encodeURIComponent(query)}&limit=20`
	}

	const response = await fetch(url)
	if (!response.ok) {
		return NextResponse.json({ error: 'Failed to fetch stations' }, { status: 500 })
	}

	const data = await response.json()
	return NextResponse.json(data)
}
