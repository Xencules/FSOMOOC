import React from 'react'


const Part = ({ part, exercise }) => {
  return <p>{part} {exercise}</p>;
};

const Content = (data) => {
  return (
    <div>
      <Part part={data.part1} exercise={data.exercises1}/>
      <Part part={data.part2} exercise={data.exercises2}/>
      <Part part={data.part3} exercise={data.exercises3}/>
    </div>
  );
}

export default Content