import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <>
      <div className={styles.user}>
        <div>
          <Image
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
          theme={theme}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
      },
      
    }
  )     

  const user = await userRes.json();
  
  const repoRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=10`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
      },
    }
  );

  let repos = await repoRes.json();
  //console.log(await userRes.json());
  //console.log(await repoRes.json());
  if (!Array.isArray(repos)) {
    console.error("Repos is not an array:", repos);
    repos = []; // Fallback to an empty array
    console.log(repos)
  }

  try {
    repos = repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6);
      console.log(await userRes.json());
      console.log(await repoRes.json());
      console.log(repos)
  } catch (error) {
    console.error("Error sorting repos:", error);
    repos = []; // Fallback to an empty array
    console.log(repos)

  }

  return {
    props: { title: 'GitHub', repos, user },
    revalidate: 10,
  };
}


export default GithubPage;
