import { json, error } from '@sveltejs/kit'
import { getBlogPageList } from '$lib/microCMS'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async ({ url }) => {
	try {
		const pageParam = url.searchParams.get('page')
		const page = pageParam ? Number(pageParam) : 1
		const limit = 50
		const offset = page > 1 ? (page - 1) * limit : 0

		const data = await getBlogPageList({ limit, offset })
		return json(data)
	} catch (e) {
		console.error('Error fetching blog pages:', e)
		throw error(500, 'Failed to fetch blog pages')
	}
}
