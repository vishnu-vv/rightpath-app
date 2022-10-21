export interface University {
  name: string;
  location: string;
  imageUrl?: string;
  courses?: Course[];
}

export interface Course {
  title: string;
  overview: string;
  duration?: number;
  university: University
}

export interface Skill {
  id: number;
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