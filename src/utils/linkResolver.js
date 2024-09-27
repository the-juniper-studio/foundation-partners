exports.linkResolver = (doc) => {
  if (doc.uid !== 'index' && doc.type === 'page') return `/${doc.uid}/`
  if (doc.type === 'blogpost') return `/insights/${doc.uid}/`
  return `/`
}
