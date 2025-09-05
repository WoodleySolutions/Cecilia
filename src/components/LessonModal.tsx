import React from 'react';
import { Student, CurriculumData } from '../types';

interface LessonModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: Student;
  curriculum: CurriculumData;
}

const LessonModal: React.FC<LessonModalProps> = ({
  isOpen,
  onClose,
  student,
  curriculum
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{curriculum.name}</h2>
        <div className="curriculum-content">
          {curriculum.weeks.map((week, index) => (
            <div key={index} className="week-item">
              <h3>Week {week.week}: {week.title}</h3>
              
              <h4>Goals:</h4>
              <ul>
                {week.goals.map((goal, goalIndex) => (
                  <li key={goalIndex}>{goal}</li>
                ))}
              </ul>
              
              <h4>Activities:</h4>
              <ul>
                {week.activities.map((activity, activityIndex) => (
                  <li key={activityIndex}>{activity}</li>
                ))}
              </ul>
              
              {week.catholicConnection && (
                <div className="catholic-connection">
                  <strong>Catholic Connection:</strong> {week.catholicConnection}
                </div>
              )}
              
              {week.leftHandFocus && (
                <div className="exercise-item">
                  <strong>Alexander's Left Hand Focus:</strong> {week.leftHandFocus}
                </div>
              )}
              
              {week.ageAdaptation && (
                <div className="exercise-item">
                  <strong>Age Adaptation:</strong> {week.ageAdaptation}
                </div>
              )}
              
              {week.teachingTips && (
                <div className="exercise-item">
                  <strong>Teaching Tips:</strong> {week.teachingTips}
                </div>
              )}
              
              {week.preparation && (
                <div className="exercise-item">
                  <strong>Preparation:</strong> {week.preparation}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonModal;