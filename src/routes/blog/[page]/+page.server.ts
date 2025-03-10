import { getBlogPageList } from '$lib/microCMS'
import { error } from '@sveltejs/kit'
// @ts-ignore
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({
	params,
}: {
	params: { page: string }
}) => {
	const queries: { offset: number; limit: number } = { offset: 0, limit: 50 }

	if (params.page) {
		queries.offset = (Number(params.page) - 1) * queries.limit
	}
	try {
		return await getBlogPageList(queries)
	} catch (e) {
		console.error('Error fetching blog page list:', e)
		error(500, 'An unexpected error occurred')
	}
}

export const prerender = true
