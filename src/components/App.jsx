import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification  } from './Notification/Notification';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => { 
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => { 
    const { good } = this.state;
    const total = this.countTotalFeedback();
     
    return total > 0 ? Math.round((good / total) * 100) : 0;
  }

  handleClick = type => {
    this.setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  render() { 
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = ['good', 'neutral', 'bad'];

    return (
      <div className="container">
        <Section title="PLease leave a feedback">
          <FeedbackOptions options={options} onLeaveFeedback={ this.handleClick}/>
        </Section>
        <Section title="Statistics">
          { 
            total > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}/>
            ) : (
              <Notification message="There is no feedback"/>
            )
          }
        </Section>
      </div>
    );
  }
}