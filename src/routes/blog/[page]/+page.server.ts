import { error } from '@sveltejs/kit'
import { getBlogPageList } from '$lib/microCMS'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({
	params,
}: {
	params: { page: number }
}) => {
	const queries: { offset: number; limit: number } = { offset: 0, limit: 50 }

	if (params.page) {
		queries.offset = Number(params.page - 1)
	}
	try {
		return await getBlogPageList(queries)
	} catch (e) {
		error(500)
	}
}

export const prerender = true
