export interface University {
  id: string;
  name: string;
  location: string;
  imageUrl?: string;
  courses?: Course[];
}

export interface Passion {
  id: string;
  title: string;
}
export interface PassionCategory {
  id: string;
  title: string;
  passions: Passion[];
  expanded?: boolean;
}

export interface Course {
  title: string;
  overview: string;
  imageUrl?: string;
  duration?: number;
  university: University
}

export interface Skill {
  id: string;
  title: string;
  jobId: number;
  job?: Job;
}

export interface Job {
  title: string;
  description: string;
  viewedUsers: number;
  intrestedUsers: number;
  salaryMin: number;
  salaryMax: number;
  imageUrl: string;
  active: string;
  skills: Skill[];
  courseId: number;
  course?: Course;
}