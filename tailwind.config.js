module.exports = {
  plugins: [require('@tailwindcss/typography')],
  content: ['./src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {
      aspectRatio: {
        landscape: '36 / 17',
        portrait: '90 / 67'
      },
      colors: {
        brand: {
          50: '#f7fafb',
          100: '#e7f1fc',
          200: '#cadcf8',
          300: '#a1b9ed',
          400: '#7891df',
          500: '#5f6cd2',
          600: '#4d50bd',
          700: '#3b3b99',
          800: '#28286c',
          900: '#161842'
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-bullets': theme('colors.indigo.800'),
            '--tw-prose-headings': theme('colors.indigo.800'),
            '--tw-prose-links': theme('colors.fuchsia.800'),
            '--tw-prose-invert-body': theme('colors.blue.50'),
            '--tw-prose-invert-bullets': theme('colors.blue.100'),
            '--tw-prose-invert-headings': theme('color.blue.50'),
            '--tw-prose-invert-links': theme('colors.white'),
            a: {
              textDecoration: 'underline',
              '&:hover': {
                textDecoration: 'none'
              }
            },
            strong: {
              color: 'inherit'
            },
            ul: {
              '> li': {
                '&::before': {
                  backgroundColor: 'currentColor'
                }
              }
            }
          }
        }
      })
    }
  }
}
