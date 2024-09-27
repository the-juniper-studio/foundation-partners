exports.linkResolver = (doc) => {
  var lang = ''
  if (doc.lang !== 'en-gb') {
    lang = doc.lang?.slice(0, 2) + '/'
  }

  if (doc.uid !== 'index' && doc.type === 'page') return `/${lang}${doc.uid}/`
  if (doc.type === 'blogpost') return `/blog/${doc.uid}/`
  return `/${lang}`
}
