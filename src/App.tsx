import React, { useState, useEffect } from 'react';
import './App.css';
import StudentCard from './components/StudentCard';
import WeeklySchedule from './components/WeeklySchedule';
import LeftHandExercises from './components/LeftHandExercises';
import LessonModal from './components/LessonModal';
import { curriculum, leftHandExercises, weeklySchedule } from './data/curriculum';
import { Student, StudentProgress } from './types';

function App() {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentProgress, setStudentProgress] = useState<StudentProgress>({
    alexander: 0,
    adrianna: 0,
    dad: 0
  });

  // Load progress from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('pianoProgress');
    if (saved) {
      setStudentProgress(JSON.parse(saved));
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('pianoProgress', JSON.stringify(studentProgress));
  }, [studentProgress]);

  const handleShowLessons = (student: Student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  const markWeekComplete = (student: Student, week: number) => {
    setStudentProgress(prev => ({
      ...prev,
      [student]: Math.max(prev[student], week)
    }));
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Cecilia - Family Piano Journey</h1>
        <p className="motto">Ad Majorem Dei Gloriam - For the Greater Glory of God</p>
        <p className="subtitle">Named after St. Cecilia, Patron Saint of Musicians</p>
      </header>

      <main className="main-content">
        <div className="student-section">
          <StudentCard
            student="alexander"
            name="Alexander (9) - 3rd Grade"
            progress={studentProgress.alexander}
            currentWeek={studentProgress.alexander + 1}
            curriculum={curriculum.alexander}
            onShowLessons={() => handleShowLessons('alexander')}
            onMarkComplete={markWeekComplete}
          />
          
          <StudentCard
            student="adrianna"
            name="Adrianna (7) - 2nd Grade" 
            progress={studentProgress.adrianna}
            currentWeek={studentProgress.adrianna + 1}
            curriculum={curriculum.adrianna}
            onShowLessons={() => handleShowLessons('adrianna')}
            onMarkComplete={markWeekComplete}
          />
          
          <StudentCard
            student="dad"
            name="Dad's Learning Track"
            progress={studentProgress.dad}
            currentWeek={studentProgress.dad + 1}
            curriculum={curriculum.dad}
            onShowLessons={() => handleShowLessons('dad')}
            onMarkComplete={markWeekComplete}
            isParent={true}
          />
        </div>

        <WeeklySchedule schedule={weeklySchedule} />
        <LeftHandExercises exercises={leftHandExercises} />
      </main>

      {selectedStudent && (
        <LessonModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          student={selectedStudent}
          curriculum={curriculum[selectedStudent]}
        />
      )}
    </div>
  );
}

export default App;
