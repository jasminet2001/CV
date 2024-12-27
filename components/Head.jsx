import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Jasmine Tavakkoli is an avid frontend developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Jasmine Tavakkoli, nitin, ranganath, web developer portfolio, React web developer, frontend developer, mern stack, Jasmine Tavakkoli portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Jasmine Tavakkoli's Portfolio" />
      <meta
        property="og:description"
        content="A frontend developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Jasmine Tavakkoli',
};
