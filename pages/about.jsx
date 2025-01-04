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
      <p>You can Review my CV <a href="https://drive.google.com/file/d/1HZugn2oLmeu4SHnxqD2Z_KnZyPDrXbpO/view?usp=sharing">here!</a></p>
      <br/><br/>
      <img src="https://i.postimg.cc/8c058ZC8/doggo.gif" height={200}/>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
