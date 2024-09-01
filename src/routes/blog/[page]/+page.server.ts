import { error } from '@sveltejs/kit'
import { getBlogPageDetail } from '$lib/microCMS'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({
	params,
	url,
}: {
	params: object
	url: URL
}) => {
	try {
		const queries: { draftKey?: string } = {}

		if (url.searchParams.has('draftKey')) {
			queries.draftKey = url.searchParams.get('draftKey') ?? ''
		}

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
