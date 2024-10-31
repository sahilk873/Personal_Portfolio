// about.tsx
"use client";

import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.hero}>
      <div className={`${styles.about} ${styles.fadeIn}`}>
        <h1>About Me</h1>
        <p>
          Welcome to my personal website! I'm passionate about combining healthcare and technology to make meaningful
          differences in people's lives.
        </p>
        <p>
          I love research and want to work on projects that take medical research and translate it into useful tools.
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeLink}
        >
          View My Resume
        </a>
      </div>
    </div>
  );
};

export default About;
