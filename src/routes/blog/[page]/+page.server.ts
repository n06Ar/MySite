import { redirect } from '@sveltejs/kit'
// @ts-ignore
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }: { params: { page: string } }) => {
	const page = params.page ?? '1'
	throw redirect(308, `/blog/pages?page=${encodeURIComponent(page)}`)
}

export const prerender = true
