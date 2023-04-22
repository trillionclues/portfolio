import axios from 'axios'

export const fetchGists = async () => {
  const response = await axios(
    'https://api.github.com/users/trillionclues/gists'
  )

  // create an array of Promises
  const promises = response.data.map(async (gist) => {
    const res = await axios(gist.url)
    return res.data
  })

  // wait for promises to resolve
  const data = await Promise.all(promises)
  return data
}
