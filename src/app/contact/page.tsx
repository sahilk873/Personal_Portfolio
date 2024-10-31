"use client";

import React from 'react';
import styles from '../styles/Contact.module.css';

const ContactForm = () => {
  return (
    <div className={`${styles.container} ${styles.fadeIn}`}>
      <form
        action="https://formspree.io/f/mdkoeegb"
        method="POST"
        className={`${styles.form}`}
      >
        <h2 className={styles.heading}>Get In Touch</h2>

        <div className={styles.formGroup}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
            className={styles.textarea}
          ></textarea>
        </div>

        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </form>
      <div className={`${styles.socialMedia}`}>
        <a href="https://www.linkedin.com/in/sahil-kapadia01/" className={styles.socialButton} target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn"
            className={styles.socialIcon}
          />
        </a>
        <a href="https://www.instagram.com/sahil_kapadia.01/" className={styles.socialButton} target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
            alt="Instagram"
            className={styles.socialIcon}
          />
        </a>
        <a href="https://x.com/SahilKapadia01" className={styles.socialButton} target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.prod.website-files.com/5d66bdc65e51a0d114d15891/64cebdd90aef8ef8c749e848_X-EverythingApp-Logo-Twitter.jpg"
            alt="Twitter"
            className={styles.socialIcon}
          />
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
