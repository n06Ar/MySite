import { error } from '@sveltejs/kit'
import { BlogResponse, getBlogPageList } from '$lib/microCMS'
// @ts-ignore
import type { PageServerLoad } from './$types'

export const load: ({
	params,
}: {
	params: { page: string }
}) => Promise<BlogResponse> = async ({
	params,
}: {
	params: { page: string }
}) => {
	const queries: { offset: number; limit: number } = { offset: 0, limit: 50 }

	const pageNum = Number.parseInt(params.page, 10)
	if (!Number.isFinite(pageNum) || Number.isNaN(pageNum) || pageNum < 1) {
		error(404, 'Invalid page')
	}

	queries.offset = (pageNum - 1) * queries.limit
	try {
		return await getBlogPageList(queries)
	} catch (e) {
		console.error('Error fetching blog page list:', e)
		error(500, 'An unexpected error occurred')
	}
}
