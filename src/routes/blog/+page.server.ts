import { error } from '@sveltejs/kit'
import { getBlogPageList } from '$lib/microCMS'
// @ts-ignore
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ url }: any) => {
	const queries: { offset?: number; limit: number } = { limit: 50 }

	if (url.searchParams.has('page')) {
		queries.offset = url.searchParams.get('page')
	}
	try {
		return await getBlogPageList(queries)
	} catch (e) {
		error(500)
	}
}

export const prerender = true
