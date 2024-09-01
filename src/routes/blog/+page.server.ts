import { getBlogPageList } from '$lib/microCMS'
// @ts-ignore
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ url }: any) => {
	const queries: { offset?: number; limit: number } = { limit: 50 }

	if (url.searchParams.has('page')) {
		queries.offset = url.searchParams.get('page')
	}

	return await getBlogPageList(queries)
}

export const prerender = true
