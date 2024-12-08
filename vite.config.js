// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     sourcemap: true,
//   }
// });

// import { defineConfig } from 'vite';

// export default defineConfig({
//   base: '/goit-react-hw-01/',
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/goit-react-hw-01/",
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});
