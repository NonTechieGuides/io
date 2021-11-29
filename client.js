import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '6t93arro',
  dataset: 'production',
  apiVersion: '2021-11-29', // use a UTC date string
  useCdn: true
})