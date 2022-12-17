import {FeedbackBtn} from './FeedbackOptions.styled';
import PropTypes from "prop-types";
export const FeedbackOptions = ({onLeaveFeedback, option}) => {
  return (
    <div>
      {option.map(key => (
        <FeedbackBtn key={key} onClick={() => onLeaveFeedback(key)}>{key}</FeedbackBtn>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    option:  PropTypes.array.isRequired
}