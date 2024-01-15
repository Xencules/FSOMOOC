import React from 'react'


const Part = ({ part }) => {

  return (
    <div>
      <p>{part.name} {part.exercises}</p>
    </div>
    );
};

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      <Part part={part1}/>
      <Part part={part2}/>
      <Part part={part3}/>
    </div>
  );
}

export default Content