import { error } from '@sveltejs/kit'
import { getBlogPageDetail } from '$lib/microCMS'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }: { params: object }) => {
	try {
		const queries: { draftKey?: string } = {}

		return await getBlogPageDetail(params.page, queries)
	} catch (e: unknown) {
		let status = 500
		if ((e as Error).message === 'Not found') {
			status = 404
		}
		error(status)
	}
}

export const prerender = true
