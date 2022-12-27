/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  // パフォーマンス最適化のため、ビルド生成時の未使用スタイルを除外する対象範囲
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
