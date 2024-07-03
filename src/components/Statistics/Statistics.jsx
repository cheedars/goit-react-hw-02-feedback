import PropTypes from 'prop-types';
import styles from './Section.module.css';
import { HiThumbUp, HiThumbDown } from 'react-icons/hi';
import { LuAnnoyed } from "react-icons/lu";
import { MdOutlineSummarize, MdOutlineEmojiEmotions } from "react-icons/md";


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
    <div className={styles.statistics_wrapper}>      
      <p className={styles.item}> <HiThumbUp className={styles.good} size="24" /> Good: {good}</p>
      <p className={styles.item}> <LuAnnoyed className={styles.neutral} size="24" /> Neutral: {neutral}</p>
      <p className={styles.item}> <HiThumbDown className={styles.bad} size="24" /> Bad: {bad}</p>
      <p className={styles.item}> <MdOutlineSummarize className={styles.svg} size="24" /> Total: {total}</p>
      <p className={styles.item}> <MdOutlineEmojiEmotions className={styles.svg}  size="24" /> Positive feedback: {positivePercentage}%</p>
    </div>
    );
};

Statistics.propTypes = {
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
    positivePercentage: PropTypes.string.isRequired,
}