import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'jasminetavakkoli.liara.run',
    href: 'https://jasminetavakkoli.liara.run/',
  },
  {
    social: 'email',
    link: 'jasminetavakkoli@gmail.com',
    href: 'mailto:jasminetavakkoli@gmail.com',
  },
  {
    social: 'github',
    link: 'jasminet2001',
    href: 'https://github.com/jasminet2001',
  },
  {
    social: 'linkedin',
    link: 'Jasmine Tavakkoli',
    href: 'https://www.linkedin.com/in/yasaman-tavakkoli/',
  },
  {
    social: 'twitter',
    link: 'Jasmine T',
    href: 'https://x.com/JasmineT200',
  },
  // {
  //   social: 'instagram',
  //   link: 'iamnitinr',
  //   href: 'https://www.instagram.com/iamnitinr',
  // },
  // {
  //   social: 'polywork',
  //   link: 'nitinranganath',
  //   href: 'https://www.polywork.com/nitinranganath',
  // },
  // {
  //   social: 'telegram',
  //   link: 'iamnitinr',
  //   href: 'https://t.me/iamnitinr',
  // },
  // {
  //   social: 'codepen',
  //   link: 'nitinranganath',
  //   href: 'https://codepen.io/itsnitinr',
  // },
  // {
  //   social: 'codesandbox',
  //   link: 'itsnitinr',
  //   href: 'https://codesandbox.io/u/itsnitinr',
  // },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
