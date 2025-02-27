import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home/Home.css';

const Home = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const handleTestClick = () => {
    if (isAuthenticated) {
      navigate('/test');
    } else {
      navigate('/login');
    }
  };

  return (
    <main>
      <section>
        <div className="ml-30 mt-40 text-5xl font-bold">
          Breaking Barriers,<br />
          <div className="ml-15">Building Futures</div>
        </div>
        <p className="mt-4 ml-30 mr-220">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="button-style" onClick={handleTestClick}>
          Take a Free Test <i className="fa-solid fa-greater-than ml-5"></i>
        </button>
        <div className="flex space-x-20 mt-30 ml-30">
          <div className="font-semibold text-2xl">
            <i className="fa-solid fa-gamepad mr-4 fa-2x"></i> Interactive Games
          </div>
          <div className="font-semibold text-2xl">
            <i className="fa-solid fa-people-line mr-4 fa-2x"></i> Expert Guidance
          </div>
          <div className="font-semibold text-2xl">
            <i className="fa-solid fa-check mr-4 fa-2x"></i> Free Testing
          </div>
        </div>
      </section>
    </main>
  );
};

<<<<<<< HEAD
export default Home;
=======
export default Home
>>>>>>> 49b9f811736cc77d8c06e4eb63c08b5d6eded76f
