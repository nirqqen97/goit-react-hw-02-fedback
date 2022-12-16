import {FeedbackBtn} from './FeedbackOptions.styled';

export const FeedbackOptions = ({onLeaveFeedback, option}) => {
  return (
    <div>
      {option.map(key => (
        <FeedbackBtn key={key} onClick={() => onLeaveFeedback(key)}>{key}</FeedbackBtn>
      ))}
    </div>
  );
}