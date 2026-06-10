import { getBlogPageList } from '$lib/microCMS'

export const load = async () => {
	try {
		const nav = await getBlogPageList({ limit: 50, orders: '-publishedAt' })
		return { navArticles: nav.contents }
	} catch {
		return { navArticles: [] }
	}
}
