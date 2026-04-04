// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-unresolved
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	plugins: [react(), tsconfigPaths(), svgr()],
});
