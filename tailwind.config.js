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
        brandPink: '#ffc3c3',
        brandPeach: '#ffdbbe',
        brandMustard: '#dead2c',
        brandCream: '#fff6ed',
        brandBlack: '#010101'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.brandBlack'),
            '--tw-prose-bullets': theme('colors.brandRust'),
            '--tw-prose-headings': theme('colors.brandBlack'),
            '--tw-prose-counters': theme('colors.brandMustard'),
            '--tw-prose-links': theme('colors.brandRust'),
            '--tw-prose-invert-body': theme('colors.brandCream'),
            '--tw-prose-invert-bullets': theme('colors.brandRust'),
            '--tw-prose-invert-headings': theme('color.brandRust'),
            // '--tw-prose-invert-links': theme('colors.white'),
            a: {
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              '&:hover': {
                textDecoration: 'none'
              }
            },
            strong: {
              color: 'inherit'
            },
            h1: { fontWeight: '500' },
            h2: { fontWeight: '500' },
            h3: { fontWeight: '500' },
            h4: { fontWeight: '500' },
            h5: { fontWeight: '500' },
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
