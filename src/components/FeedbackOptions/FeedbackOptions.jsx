import {FeedbackBtn} from './FeedbackOptions.styled';

export const FeedbackOptions = ({handleIncrement,handleNeutral,handleDicrement}) =>{
    return <div>
        <FeedbackBtn onClick={handleIncrement}>Good</FeedbackBtn>
        <FeedbackBtn onClick={handleNeutral}>Neutral</FeedbackBtn>
        <FeedbackBtn onClick={handleDicrement}>Bad</FeedbackBtn>
            </div>
}