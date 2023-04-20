import axios from 'axios'

export const fetchGists = async (
  username = 'trillionclues',
  per_page = 10,
  page = 1
) => {
  return axios
    .get(
      `https://api.github.com/users/${username}/gists?per_page=${per_page}&page=${page}`
    )
    .then((response) => response.data)
    .catch((error) => console.log(error))
}
