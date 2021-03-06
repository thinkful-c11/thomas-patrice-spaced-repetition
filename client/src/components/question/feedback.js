import React from 'react';

export default function Feedback(props) {
  const result = () => {
    while (props.answerCheck) {
      if (props.answerCheck.correct === true) {
        return ( <div className='results2' >
            Correct
          </div>
        );
      }
      else {
        return (<div className='results2' >
          Wrong
          Correct answer: {props.answerCheck.previousQ.answer}
        </div>
        );
      }
    }
  };

  return (
    <div className='results-container'>
      {result()}
    </div>
  );
}
