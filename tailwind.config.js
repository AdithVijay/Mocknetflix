module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient-image': 'linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent), linear-gradient(to left, rgba(0, 0, 0, 0.0), transparent), linear-gradient(to right, rgba(0, 0, 0, 0.6), transparent), url(/images/cover.png)',
      },
    },
  },
  plugins: [],
}
