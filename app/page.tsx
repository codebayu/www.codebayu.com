import { Metadata } from 'next';
import Container from '@/app/common/components/elements/Container';
import Home from '@/app/modules/home';
import axios from 'axios';
import {
  GITHUB_ACCOUNTS,
  GITHUB_API_BASE_URL,
  GITHUB_USER_QUERY,
} from '@/app/common/constant/github';

export const metadata: Metadata = {
  title: 'Bayu Setiawan - Personal Portfolio',
  description: 'Awesome portfolio',
};

export default async function HomePage() {
  const githubData = await getGithubData();
  return (
    <>
      <Container data-aos="fade-up">
        <Home githubData={githubData} />
      </Container>
    </>
  );
}

async function getGithubData() {
  const response = await axios.post(
    GITHUB_API_BASE_URL,
    {
      query: GITHUB_USER_QUERY,
      variables: {
        username: GITHUB_ACCOUNTS.username,
      },
    },
    {
      headers: {
        Authorization: `bearer ${GITHUB_ACCOUNTS.token}`,
      },
    }
  );
  return response.data?.data.user.contributionsCollection.contributionCalendar;
}
