import { error } from '@sveltejs/kit'
import { getBlogPageList } from '$lib/microCMS'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const queries: { offset: number; limit: number } = { offset: 0, limit: 50 }

	try {
		return await getBlogPageList(queries)
	} catch (e) {
		error(500)
	}
}

export const prerender = true
