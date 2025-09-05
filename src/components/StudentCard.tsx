import React from 'react';
import { Student, CurriculumData } from '../types';

interface StudentCardProps {
  student: Student;
  name: string;
  progress: number;
  currentWeek: number;
  curriculum: CurriculumData;
  onShowLessons: () => void;
  onMarkComplete: (student: Student, week: number) => void;
  isParent?: boolean;
}

const StudentCard: React.FC<StudentCardProps> = ({
  student,
  name,
  progress,
  currentWeek,
  curriculum,
  onShowLessons,
  onMarkComplete,
  isParent = false
}) => {
  const progressPercentage = (progress / 8) * 100;
  
  const getCurrentLessonText = () => {
    if (currentWeek <= 8) {
      const currentLesson = curriculum.weeks.find(w => w.week === currentWeek);
      if (currentLesson) {
        return `Current: Week ${currentWeek} - ${currentLesson.title}`;
      }
    }
    return "Phase 1 Complete! Ready for Phase 2";
  };

  const handleMarkComplete = () => {
    if (currentWeek <= 8) {
      onMarkComplete(student, currentWeek);
    }
  };

  return (
    <div className={`student-card ${isParent ? 'parent' : ''}`}>
      <h2>{name}</h2>
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <p className="current-lesson">{getCurrentLessonText()}</p>
      <div className="card-buttons">
        <button onClick={onShowLessons} className="view-curriculum-btn">
          View Curriculum
        </button>
        {currentWeek <= 8 && (
          <button onClick={handleMarkComplete} className="mark-complete-btn">
            Mark Week {currentWeek} Complete
          </button>
        )}
      </div>
    </div>
  );
};

export default StudentCard;