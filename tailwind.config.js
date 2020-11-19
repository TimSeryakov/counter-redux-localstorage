module.exports = {
  purge: {
    // Filenames to scan for classes
    content: [
      './src/**/*.html',
      './src/**/*.css',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
      './public/index.html',
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // whitelist: [],
    },
  },
  theme: {
    extend: {
      colors: {
        "theme-light": "#87d7cc",
        "theme-dark": "#2c888d",
        "theme-darker": "#387073",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  variants: {},
  plugins: [
    require("tailwindcss-pixel-dimensions")({
      width: {
        total: 900, // 900 is the default
      },
      height: {
        total: 900, // 900 is the default
      },
    }),
  ]
};
