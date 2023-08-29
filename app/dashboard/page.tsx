import { Metadata } from 'next';
import Container from '@/app/common/components/elements/Container';
import PageHeading from '@/app/common/components/elements/PageHeading';
import Dashboard from '@/app/modules/dashboard';
import axios from 'axios';
import {
  GITHUB_ACCOUNTS,
  GITHUB_API_BASE_URL,
  GITHUB_USER_QUERY,
} from '@/app/common/constant/github';

export const metadata: Metadata = {
  title: 'Dashboard | Code Bayu',
  description: 'My activity dashboard as software engineer',
};

const PAGE_TITLE = 'Dashboard';
const PAGE_DESCRIPTION =
  'This is my personal dashboard, built with Next.js API routes deployed as serverless functions.';

export default async function DahboardPage() {
  const githubData = await getGithubData();
  return (
    <>
      <Container data-aos="fade-up">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Dashboard githubData={githubData} />
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
