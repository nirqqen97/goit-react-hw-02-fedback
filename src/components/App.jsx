import { Component } from "react";
import {Section} from "./Section/Section";
import {Statistic} from "./Statisctic/Statisctic";
import {FeedbackOptions} from "./FeedbackOptions/FeedbackOptions";
import {Notification} from "./Notification/Notification";
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
}
onLeaveFeedback = (option) => {
  this.setState(prevState => {
    return {
      [option]: prevState[option] + 1
    }
  });
}

 countPositiveFeedbackPercentage = (good,total) => {
  return Math.round(good/total * 100);
  
}
countTotalFeedback = () => {
  const {good,neutral,bad} = this.state
    return good + neutral + bad
}


  render(){
    const options = Object.keys(this.state);
  return (
   <>
   <Section title = {"Please leave Feedback"}>
   <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} option={options}/> 
    </Section>
    {this.countTotalFeedback() > 0 ? (
      <Section title = {"Statistic"}><Statistic good={this.state.good}
      neutral={this.state.neutral} 
      bad={this.state.bad} 
      total={this.countTotalFeedback()}
      countPositiveFeedbackPercentage = {this.countPositiveFeedbackPercentage}/></Section>
 ) : (<Notification message={"There is no feedback"}/>)
} 
</>
  );
}
};