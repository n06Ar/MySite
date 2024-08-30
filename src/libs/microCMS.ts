/**
 * microCMSのブログデータを取得する処理
 */
import {
	createClient,
	type MicroCMSQueries,
	type MicroCMSImage,
} from 'microcms-js-sdk'
import { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } from '$env/static/private'

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
	queries?: MicroCMSQueries,
): Promise<Blog> => {
	const { contents } = await client.getListDetail<BlogResponse>({
		endpoint: 'blogs',
		contentId,
		queries,
	})

	if (!Array.isArray(contents) || contents.length === 0) {
		throw new Error('Not found')
	}

	return contents[0]
}
