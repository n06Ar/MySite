import { error } from '@sveltejs/kit'
import type { BlogResponse } from '$lib/microCMS'
import { getBlogPageList } from '$lib/microCMS'
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

	if (!/^[1-9]\d*$/.test(params.page)) {
		throw error(404, 'Invalid page')
	}
	const pageNum = Number(params.page)
	queries.offset = (pageNum - 1) * queries.limit
	try {
		return await getBlogPageList(queries)
	} catch (e) {
		console.error('Error fetching blog page list:', e)
		throw error(500, 'An unexpected error occurred')
	}
}
