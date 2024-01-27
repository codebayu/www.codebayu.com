import axios from 'axios'

import { GITHUB_ACCOUNTS, GITHUB_API_BASE_URL, GITHUB_USER_QUERY } from '@/common/constant/github'

export async function getGithubData() {
  const response = await axios.post(
    GITHUB_API_BASE_URL,
    {
      query: GITHUB_USER_QUERY,
      variables: {
        username: GITHUB_ACCOUNTS.username
      }
    },
    {
      headers: {
        Authorization: `bearer ${GITHUB_ACCOUNTS.token}`
      }
    }
  )
  return response.data?.data.user.contributionsCollection.contributionCalendar
}
