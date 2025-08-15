import { error, json } from '@sveltejs/kit'
import { getBlogPageDetail } from '$lib/microCMS'
import type { RequestHandler } from './$types'

export const GET: ({ url }: { url: any }) => Promise<Response> = async ({
	url,
}) => {
	try {
		const pageId = url.searchParams.get('pageId')
		if (!pageId) {
			throw error(400, 'Missing pageId')
		}
		const data = await getBlogPageDetail(pageId)
		return json(data)
	} catch (e) {
		console.error('Error fetching blog page detail:', e)
		throw error(500, 'Failed to fetch blog page detail')
	}
}
