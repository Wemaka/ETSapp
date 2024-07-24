import nunjucks from "vite-plugin-nunjucks";

const { resolve } = require("path");
const { defineConfig } = require("vite");

// export default {
// 	plugins: [nunjucks()],
// };

export default defineConfig({
	plugins: [nunjucks()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				automobile: resolve(__dirname, "src/html/automobile.html"),
				maritime: resolve(__dirname, "src/html/maritime.html"),
				railroad: resolve(__dirname, "src/html/railroad.html"),
				air: resolve(__dirname, "src/html/air.html"),
				gts: resolve(__dirname, "src/html/gts.html"),
			},
		},
	},
});
