import projects from '../data/projects';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <img src={project.image} alt={project.title} className={styles.image} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}
