import PropTypes from "prop-types";
import {Stats} from "./Statisctic.styled";
export const Statistic = ({good,neutral,bad,total,countPositiveFeedbackPercentage}) =>{
    return (
        <div>
            <Stats>Good:{good}</Stats>
            <Stats>Neutral:{neutral}</Stats>
            <Stats>Bad:{bad}</Stats>
            <Stats>Total:{total}</Stats>
            <Stats>Positive feedback:%{countPositiveFeedbackPercentage(good,total)}</Stats>
        </div>
    )
}
Statistic.propTypes ={
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
}
 
