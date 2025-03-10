import { MICROCMS_API_KEY, MICROCMS_SERVICE_DOMAIN } from '$env/static/private'
/**
 * microCMSのブログデータを取得する処理
 */
import {
	type MicroCMSImage,
	type MicroCMSQueries,
	createClient,
} from 'microcms-js-sdk'

const client = createClient({
	serviceDomain: MICROCMS_SERVICE_DOMAIN,
	apiKey: MICROCMS_API_KEY,
})

export type Blog = {
	id: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	revisedAt: string
	title: string
	content: string
	eyecatch?: MicroCMSImage
}
export type BlogResponse = {
	totalCount: number
	offset: number
	limit: number
	contents: Blog[]
}

export const getBlogPageList = async (
	queries?: MicroCMSQueries,
): Promise<BlogResponse> => {
	return await client.get<BlogResponse>({ endpoint: 'blogs', queries })
}
export const getBlogPageDetail = async (
	contentId: string,
	queries: MicroCMSQueries = {},
): Promise<Blog> =>
	await client.getListDetail<Blog>({
		endpoint: 'blogs',
		contentId,
		queries,
	})
