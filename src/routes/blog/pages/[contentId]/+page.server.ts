import { redirect } from '@sveltejs/kit'
// @ts-ignore
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }: { params: { contentId: string } }) => {
	const id = params.contentId
	throw redirect(308, `/blog/page?pageId=${encodeURIComponent(id)}`)
}

export const prerender = true
