import Feedback from './Feedback/Feedback';
import css from './Feedback/Feedback.module.css';


export const App = () => {
  return (
    <div className={css.container}>
      <Feedback />
    </div>
  );
};
