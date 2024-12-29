const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me<img src="https://jasminet2001.github.io/portfolio/images/hello3.gif" height={30}/></h3>
      <br/><br/>
      <p>I'm Jasmine Tavakkoli. This is my portfolio and you can see the projects I've been working on.<br/>
      I possess experience in front-end(React, Vue), python, Unity, and C#.<br/><br/>
      I'm eager to learn new concepts in different fields, including mathematics, graphic, and full-stack web development, art, and apply them to my study field.
      I enjoy solving complex problems, mentoring students, and learning about new technologies.
      </p>
      <br/><br/>
      <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWptb3Y4bTRnaTc0b2FidTljenJrem56bzdlYWo0dTRoMndsMW9lNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y853jRq5TrMHVGn4nl/giphy.gif" height={200}/>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
