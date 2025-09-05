import React from 'react';
import { ExerciseCategory } from '../types';

interface LeftHandExercisesProps {
  exercises: ExerciseCategory[];
}

const LeftHandExercises: React.FC<LeftHandExercisesProps> = ({ exercises }) => {
  return (
    <div className="special-section">
      <h2>Alexander's Left Hand Exercises</h2>
      {exercises.map((category, categoryIndex) => (
        <div key={categoryIndex} className="exercise-category">
          <h3>{category.title}</h3>
          {category.exercises.map((exercise, exerciseIndex) => (
            <div key={exerciseIndex} className="exercise-item">
              <h4>{exercise.name}</h4>
              {exercise.duration && (
                <p><strong>Duration:</strong> {exercise.duration}</p>
              )}
              <p>{exercise.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LeftHandExercises;