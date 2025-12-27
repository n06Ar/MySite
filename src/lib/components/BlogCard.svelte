<script lang="ts">
import type { Blog } from '$lib/microCMS'

export let blog: Blog

const formatDate = (value: string) =>
	new Date(value).toLocaleDateString('ja-JP', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	})
</script>

<a href={`/blog/pages/${blog.id}`} class="card overflow-hidden flex flex-col h-full bg-[var(--card)]">
	<img
		src={blog.eyecatch?.url ?? '/images/No_Image.png'}
		alt={blog.eyecatch ? blog.title : 'No image'}
		class="w-full aspect-[16/9] object-cover"
		loading="lazy"
	/>
	<div class="p-5 flex flex-col gap-3 flex-1">
		<p class="text-xs font-semibold text-brand-600 dark:text-brand-200 uppercase tracking-wide">
			{formatDate(blog.publishedAt)}
		</p>
		<h3 class="text-lg font-bold leading-snug" style="-webkit-line-clamp: 2; -webkit-box-orient: vertical; display: -webkit-box; overflow: hidden;">
			{blog.title}
		</h3>
		<p
			class="text-sm text-muted"
			style="-webkit-line-clamp: 2; -webkit-box-orient: vertical; display: -webkit-box; overflow: hidden;"
		>
			{blog.content.replace(/<[^>]+>/g, '').slice(0, 80)}...
		</p>
		<span class="text-sm font-semibold text-brand-600 dark:text-brand-200 inline-flex items-center gap-1 mt-auto">
			続きを読む
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-3.5 w-3.5 fill-current">
				<path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
			</svg>
		</span>
	</div>
</a>
