import {StatisticTitle,Stats} from "./statistic.styled";
import {countPositiveFeedbackPercentage} from "../countPositiveFeedbackPercentage";

export const Statistic = ({good,neutral,bad,total}) =>{
    return (
        <div>
        <StatisticTitle>Statistic</StatisticTitle>
            <Stats>Good:{good}</Stats>
            <Stats>Neutral:{neutral}</Stats>
            <Stats>Bad:{bad}</Stats>
            <Stats>Total:{total}</Stats>
            <Stats>Positive feedback:%{countPositiveFeedbackPercentage(good,total)}</Stats>
        </div>
    )
}


 
