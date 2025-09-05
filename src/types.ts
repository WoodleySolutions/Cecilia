export type Student = 'alexander' | 'adrianna' | 'dad';

export interface StudentProgress {
  alexander: number;
  adrianna: number;
  dad: number;
}

export interface WeekData {
  week: number;
  title: string;
  goals: string[];
  activities: string[];
  catholicConnection?: string;
  leftHandFocus?: string;
  ageAdaptation?: string;
  teachingTips?: string;
  preparation?: string;
}

export interface CurriculumData {
  name: string;
  weeks: WeekData[];
}

export interface Exercise {
  name: string;
  duration?: string;
  description: string;
}

export interface ExerciseCategory {
  title: string;
  exercises: Exercise[];
}

export interface WeeklySchedule {
  [day: string]: string;
}