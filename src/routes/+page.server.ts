import { error } from '@sveltejs/kit'
import { getBlogPageList } from '$lib/microCMS'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	try {
		const latestPosts = await getBlogPageList({
			limit: 3,
			orders: '-publishedAt',
		})

		return { latestPosts }
	} catch (e) {
		console.error('Failed to fetch latest posts', e)
		throw error(500, 'ブログの取得に失敗しました')
	}
}
