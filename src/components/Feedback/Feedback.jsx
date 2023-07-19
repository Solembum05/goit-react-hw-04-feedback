import css from './Feedback.module.css';
import {useState} from 'react'
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification'
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';


export default function Feedback() {
  
  const [good, setGoodFeedback] = useState(0)
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);

  const onLeaveFeedback = (options) => {
    switch (options) {
      case 'good':
        setGoodFeedback(good + 1);
        break;
      case 'neutral':
        setNeutralFeedback(neutral + 1);
        break;
      case 'bad':
        setBadFeedback(bad + 1);
        break;
      default:
        break;
    }
  }

  const countTotalFeedback = good + bad + neutral;

  const countPositiveFeedbackPercentage = Math.round((good / countTotalFeedback) * 100) || 0

    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={onLeaveFeedback}
          />
          {countTotalFeedback !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={countTotalFeedback}
              positiveFeedback={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }

