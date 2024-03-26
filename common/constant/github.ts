export const GITHUB_API_BASE_URL = 'https://api.github.com/graphql'
export const GITHUB_ACCOUNTS = {
  username: 'codebayu',
  token: process.env.GITHUB_TOKEN,
  endpoint: '/api/github?type=personal',
  type: 'personal',
  is_active: true
}
export const GITHUB_USER_QUERY = `query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          colors
          totalContributions
          months {
            firstDay
            name
            totalWeeks
          }
          weeks {
            contributionDays {
              color
              contributionCount
              date
            }
            firstDay
          }
        }
      }
    }
  }`
