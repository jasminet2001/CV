import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';

const ArticlesPage = ({ articles }) => {
  if (!Array.isArray(articles) || articles.length === 0) {
    return (
      <>
        <h3>
          Recent Posts from{' '}
          <a
            href="https://dev.to"
            target="_blank"
            rel="noopener"
            className={styles.underline}
          >
            dev.to
          </a>
        </h3>
        <p>No articles found. Please check back later.</p>
      </>
    );
  }

  return (
    <>
      <h3>
        Recent Posts from{' '}
        <a
          href="https://dev.to"
          target="_blank"
          rel="noopener"
          className={styles.underline}
        >
          dev.to
        </a>
      </h3>
      <div className={styles.container}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    'https://dev.to/api/articles?per_page=6' 
  );

  let data = [];
  try {
    data = await res.json();
  } catch (error) {
    console.error('Failed to fetch articles:', error);
  }

  return {
    props: { title: 'Articles', articles: Array.isArray(data) ? data : [] },
    revalidate: 60, // Regenerate the page every 60 seconds
  };
}

export default ArticlesPage;
