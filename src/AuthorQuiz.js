import React from 'react';
import Hero from './Hero';
import Turn from './Turn';
import Continue from './Continue';
import Footer from './Footer';
import './App.css';
import './bootstrap.min.css';

function AuthorQuiz({ turnData, highlight, onAnswerSelected }) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn
        {...turnData}
        highlight={highlight}
        onAnswerSelected={onAnswerSelected} />
      <Continue />
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
