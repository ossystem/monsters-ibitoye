import React, { useState } from 'react';
import Home from './components/Home';
// import Header from './components/Header';
// import Jumbotron from './components/Jumbotron';
import Result from './components/Result';

export default function App() {
  const [step, setStep] = useState(1);
  const token = localStorage.getItem('token');

  if (token) {

  }

  const handleNextPage = e => {
    console.log('handle button clicked');
    e.preventDefault();
    const nextStep = step + 1;

    setStep(nextStep);
  };

  switch(step) {
    case 1:
      return (
        // <Home 
        //   handleNextPage={handleNextPage}
        // />
        <Result
          authenticated={true}
        />
      );
    default:
      return (
        <Home 
          handleSubmit={handleNextPage}
        />
      );
  };
};
