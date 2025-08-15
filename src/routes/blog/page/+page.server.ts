import { error } from '@sveltejs/kit'
import { getBlogPageDetail } from '$lib/microCMS'
// @ts-ignore
import type { PageServerLoad } from './$types'

export const load: ({ url }: { url: URL }) => Promise<Blog> = async ({
	url,
}: {
	url: URL
}) => {
	const pageId = url.searchParams.get('pageId') ?? ''
	if (pageId.length < 1) {
		error(400, 'Missing required query parameter: pageId')
	}
	try {
		return await getBlogPageDetail(pageId)
	} catch (e: unknown) {
		let status = 500
		if ((e as Error).message === 'Not found') {
			status = 404
		}
		error(status)
	}
}

export const prerender = true
