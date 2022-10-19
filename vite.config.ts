import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	optimizeDeps: {
		exclude: ["@babichjacob/svelte-localstorage"],
		include: ['just-throttle', 'dayjs']
	},
	ssr: {
		noExternal: ["@babichjacob/svelte-localstorage"],
	},
};

export default config;
