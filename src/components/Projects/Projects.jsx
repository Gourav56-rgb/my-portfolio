import styles from './ProjectsStyles.module.css';
import blog from '../../assets/blog.jpg';
import ecommerce from '../../assets/ecommerce.png';
import ProjectCard from '../../common/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ecommerce}
          link="https://github.com/Gourav56-rgb/mern-ecommerce-frontend"
          h3="Ecommerce"
          p="Ecommerce App"
        />
        <ProjectCard
          src={blog}
          link="https://github.com/Gourav56-rgb/mern-blog"
          h3="Blog"
          p="Blog App"
        />
      </div>
    </section>
  );
}

