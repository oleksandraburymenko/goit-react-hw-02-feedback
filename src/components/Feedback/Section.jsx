import css from './Feedback.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
    return (
        <section className={css.section}>
            <h2 className={css.feedback_title}>{title}</h2>
            {children}
        </section>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element,
};

export default Section