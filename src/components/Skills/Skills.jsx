import styles from './SkillsStyles.module.css';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';

export default function Skills() {
  
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIconLight} skill="HTML" />
        <SkillList src={checkMarkIconLight} skill="CSS" />
        <SkillList src={checkMarkIconLight} skill="JavaScript" />
        <SkillList src={checkMarkIconLight} skill="TypeScript" />
        <SkillList src={checkMarkIconLight} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIconLight} skill="React" />
        <SkillList src={checkMarkIconLight} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIconLight} skill="Redux Toolkit" />
        <SkillList src={checkMarkIconLight} skill="Redux Toolkit Query" />
        <SkillList src={checkMarkIconLight} skill="MongoDB" />
        <SkillList src={checkMarkIconLight} skill="Express" />
      </div>
    </section>
  );
}


