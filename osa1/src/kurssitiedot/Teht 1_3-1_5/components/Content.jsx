import React from 'react'


const Part = ({ part }) => {
  return <p>{part.name} {part.exercise}</p>;
};

const Content = (data) => {
  return (
    <div>
      <Part part={part1}/>
      <Part part={part2}/>
      <Part part={part3}/>
    </div>
  );
}

export default Content