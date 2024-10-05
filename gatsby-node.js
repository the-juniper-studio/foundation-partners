const path = require('path')

// Function to create blog pages
const createBlogPages = ({ createPage, blogposts, blogpostsPerPage }) => {
  const numPages = Math.ceil(blogposts.length / blogpostsPerPage)
  for (let i = 0; i < numPages; i++) {
    createPage({
      path: i === 0 ? `/insights/` : `/insights/${i + 1}/`,
      component: path.resolve('./src/templates/category.jsx'),
      context: {
        currentPage: i + 1,
        lang: 'en-gb',
        limit: blogpostsPerPage,
        numPages,
        skip: i * blogpostsPerPage
      }
    })
  }
}

// Function to create individual blog posts
const createBlogPostPages = ({ createPage, blogposts }) => {
  blogposts.forEach((edge) => {
    createPage({
      path: `/insights/${edge.node.uid}/`,
      component: path.resolve('./src/templates/blogpost.jsx'),
      context: {
        id: edge.node.id,
        lang: edge.node.lang
      }
    })
  })
}

// Function to create pages
const createPages = ({ createPage, result }) => {
  result.data.allPrismicPage.edges.forEach((edge) => {
    if (edge.node.uid !== 'insights') {
      const url = edge.node.uid === 'index' ? `/` : `/${edge.node.uid}/`
      const component = edge.node.uid === '404' ? path.resolve('./src/templates/404.jsx') : path.resolve('./src/templates/page.jsx')

      createPage({
        path: url,
        component,
        context: {
          id: edge.node.id,
          lang: edge.node.lang
        }
      })
    }
  })
}

// Function to create slices
const createSlices = ({ createSlice }) => {
  const slices = [
    { id: 'accordion', component: './src/components/accordion.js' },
    { id: 'bannerWithCaption', component: './src/components/bannerWithCaption.js' },
    { id: 'blogposts', component: './src/components/blogposts.js' },
    { id: 'cardDeck', component: './src/components/cardDeck.js' },
    { id: 'contact', component: './src/components/contact.js' },
    { id: 'counter', component: './src/components/counter.js' },
    { id: 'hero', component: './src/components/hero.js' },
    { id: 'image', component: './src/components/image.js' },
    { id: 'map', component: './src/components/map.js' },
    { id: 'partners', component: './src/components/partners.js' },
    { id: 'posts', component: './src/components/posts.js' },
    { id: 'pricingTable', component: './src/components/pricingTable.js' },
    { id: 'quote', component: './src/components/quote.js' },
    { id: 'team', component: './src/components/team.js' },
    { id: 'text', component: './src/components/text.js' },
    { id: 'video', component: './src/components/video.js' }
  ]

  slices.forEach((slice) => {
    createSlice({
      id: slice.id,
      component: require.resolve(slice.component)
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createSlice } = actions

  const result = await graphql(`
    {
      allPrismicPage {
        edges {
          node {
            id
            lang
            uid
          }
        }
      }
      allPrismicBlogpost {
        edges {
          node {
            id
            lang
            uid
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const blogposts = result.data.allPrismicBlogpost.edges
  const blogpostsPerPage = 9

  createBlogPages({ createPage, blogposts, blogpostsPerPage })
  createBlogPostPages({ createPage, blogposts })
  createPages({ createPage, result })
  createSlices({ createSlice })
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const { buildObjectType } = schema

  // List known embed fields. Any unknown fields will still be inferred.
  const PrismicEmbedField = buildObjectType({
    name: 'PrismicEmbedField',
    fields: {
      height: 'Int',
      embed_url: 'String',
      thumbnail_url: 'String',
      title: 'String',
      type: 'String',
      width: 'Int'
    }
  })
  createTypes(PrismicEmbedField)
}
