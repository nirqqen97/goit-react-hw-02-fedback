import React from "react";
import {Container,Title} from "./Section.styled";
import {Statistic} from "../statistic/statistic";
import {FeedbackOptions} from "../FeedbackOptions/FeedbackOptions";
import {Notification} from "../Notification/Notification";


export class Section extends React.Component { 
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
              <Title>{this.props.title}</Title>
                    <FeedbackOptions handleIncrement = {this.handleIncrement}
                                     handleNeutral= {this.handleNeutral}
                                     handleDicrement = {this.handleDicrement}/>
                 {this.countTotalFeedback() > 0 ? (
                      <Statistic good={this.state.good}
                      neutral={this.state.neutral} 
                      bad={this.state.bad} 
                      total={this.countTotalFeedback()}/>
                 ) : (<Notification message={"There is no feedback"}/>)
                } 
                 
                 
           </Container>
        )

    }
}
