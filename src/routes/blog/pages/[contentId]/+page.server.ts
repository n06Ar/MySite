import { error } from '@sveltejs/kit'
import sanitizeHtml from 'sanitize-html'
import type { Blog } from '$lib/microCMS'
import { getBlogPageDetail } from '$lib/microCMS'
// @ts-ignore
import type { PageServerLoad } from './$types'

const sanitizeOptions: sanitizeHtml.IOptions = {
	allowedTags: [
		...sanitizeHtml.defaults.allowedTags,
		'figure',
		'figcaption',
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'h6',
		'img',
		'pre',
		'code',
		'span',
		'table',
		'thead',
		'tbody',
		'tr',
		'th',
		'td',
		'hr',
		'br',
	],
	allowedAttributes: {
		a: ['href', 'name', 'target', 'rel'],
		img: ['src', 'srcset', 'alt', 'title', 'loading', 'width', 'height'],
		code: ['class'],
		pre: ['class'],
		span: ['class'],
		'*': ['class', 'id'],
	},
	allowedSchemes: ['http', 'https', 'mailto'],
	allowedSchemesByTag: {
		img: ['http', 'https'],
	},
	transformTags: {
		a: (tagName: any, attribs: { target: string; rel: string }) => {
			if (attribs.target === '_blank') {
				const existingRel = (attribs.rel ?? '').split(/\s+/).filter(Boolean)
				const relSet = new Set(existingRel)
				relSet.add('noopener')
				relSet.add('noreferrer')
				attribs.rel = Array.from(relSet).join(' ')
			}

			return { tagName, attribs }
		},
	},
}

export const load: ({
	params,
}: {
	params: { contentId: string }
}) => Promise<Blog> = async ({ params }: { params: { contentId: string } }) => {
	try {
		const blog = await getBlogPageDetail(params.contentId)
		return {
			...blog,
			content: sanitizeHtml(blog.content, sanitizeOptions),
		}
	} catch (e: unknown) {
		let status = 500
		if ((e as Error).message === 'Not found') {
			status = 404
		}
		error(status)
	}
}
