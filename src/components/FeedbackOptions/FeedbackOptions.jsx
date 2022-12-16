import {FeedbackBtn} from './FeedbackOptions.styled';

export const FeedbackOptions = ({onLeaveFeedback, option}) => {
    return (
      <div>
        <FeedbackBtn onClick={() => onLeaveFeedback('good')}>Good</FeedbackBtn>
        <FeedbackBtn onClick={() => onLeaveFeedback('neutral')}>Neutral</FeedbackBtn>
        <FeedbackBtn onClick={() => onLeaveFeedback('bad')}>Bad</FeedbackBtn>
      </div>
    );
  }