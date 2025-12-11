import { error } from '@sveltejs/kit'
import { getBlogPageDetail } from '$lib/microCMS'
import type { Blog } from '$lib/microCMS'
// @ts-ignore
import type { PageServerLoad } from './$types'

export const load: ({
	params,
}: {
	params: { contentId: string }
}) => Promise<Blog> = async ({ params }: { params: { contentId: string } }) => {
	try {
		return await getBlogPageDetail(params.contentId)
	} catch (e: unknown) {
		let status = 500
		if ((e as Error).message === 'Not found') {
			status = 404
		}
		error(status)
	}
}
