import React from "react";
import workIcon from './Images/illustration-working.svg'

const Main = () => {
  return (
    <section className="content">
      <div className="text-content">
        <h2>More than just shorter links</h2>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className='sign-up'>Get Started</button>
      </div>
      <div className="icon-content">
    <img src={workIcon} alt="working"/>
      </div>
    </section>
  );
};

export default Main;
