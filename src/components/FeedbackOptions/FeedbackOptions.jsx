import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            { 
                options.map(option => (
                    <button
                        className={styles.optionButton}
                        key={option}
                        onClick={() => onLeaveFeedback(option)}>
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                    </button>
                ))
            }
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

