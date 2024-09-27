module.exports = {
  plugins: [require('@tailwindcss/typography')],
  content: ['./src/**/*.js', './src/**/*.jsx'],
  theme: {
    fontFamily: {
      sans: ['Poppins']
    },
    extend: {
      aspectRatio: {
        landscape: '36 / 17',
        portrait: '90 / 67'
      },
      colors: {
        brandRust: '#dc6747',
        brandPink: '#ffc2c2',
        brandPeach: '#ffdbbe',
        brandMustard: '#dead2b',
        brandCream: '#fff6ed'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-bullets': theme('colors.brandRust'),
            // '--tw-prose-headings': theme('colors.indigo.800'),
            // '--tw-prose-links': theme('colors.fuchsia.800'),
            '--tw-prose-invert-body': theme('colors.white'),
            '--tw-prose-invert-bullets': theme('colors.brandRust'),
            // '--tw-prose-invert-headings': theme('color.blue.50'),
            // '--tw-prose-invert-links': theme('colors.white'),
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
