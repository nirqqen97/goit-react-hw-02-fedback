import PropTypes from "prop-types";
import {Stats} from "./Statisctic.styled";
export const Statistic = ({good,neutral,bad,total,positivePercentage}) =>{
    return (
        <div>
            <Stats>Good:{good}</Stats>
            <Stats>Neutral:{neutral}</Stats>
            <Stats>Bad:{bad}</Stats>
            <Stats>Total:{total}</Stats>
            <Stats>Positive feedback:%{positivePercentage(good,total)}</Stats>
        </div>
    )
}
Statistic.propTypes ={
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.func.isRequired
}
 
