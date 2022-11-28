import React from "react";
import {Container, FeedbackBtn,Title,StatisticTitle,Stats} from "./widget.styled";
import {Statistic} from "../statistic/statistic";
import {FeedbackOptions} from "../FeedbackBtn/FeedbackBtn";

export class Widget extends React.Component { 
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    countTotalFeedback = () => {
      const {good,neutral,bad} = this.state
        return good + neutral + bad
    }
    handleIncrement = () => {
        this.setState(prevState =>{
            return{
                good: prevState.good + 1
            }
        });  
    }
    handleNeutral = () =>{
        this.setState(p =>{
            return{
                neutral: p.neutral + 1
            }
        })
    }
    handleDicrement = () =>{
       this.setState(p =>{
           return{
               bad: p.bad + 1
           }
       })
    }
    render() {
        return(
          <Container>
                    <FeedbackOptions handleIncrement = {this.handleIncrement}
                                     handleNeutral= {this.handleNeutral}
                                     handleDicrement = {this.handleDicrement}/>
                 {this.countTotalFeedback() > 0 &&(
                      <Statistic good={this.state.good}
                      neutral={this.state.neutral} 
                      bad={this.state.bad} 
                      total={this.countTotalFeedback()}/>
                 )} 

           </Container>
        )

    }
}



// render() {
//     return(
//       <Container>
//           <Title>Please leave feedback</Title>
//             <FeedbackBtn onClick={this.handleIncrement}>Good</FeedbackBtn>
//             <FeedbackBtn onClick={this.handleNeutral}>Neutral</FeedbackBtn>
//             <FeedbackBtn onClick={this.handleDicrement}>Bad</FeedbackBtn>
//                 <StatisticTitle>Statistic</StatisticTitle>
//                     <Stats>Good:{this.state.good}</Stats>
//                     <Stats>Neutral:{this.state.neutral}</Stats>
//                     <Stats>Bad:{this.state.bad}</Stats>
//                     <Stats>Total:{this.countTotalFeedback()}</Stats>
//                     <Stats>Positive feedback:{this.countPositiveFeedbackPercentage()}%</Stats>

//        </Container>
//     )

// }
// }