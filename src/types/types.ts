import type { AL_SUBJECTS } from "../static-data/al-subjects";

export type Exam = null | '5' | 'ol' | 'al';
export type SubjectStream = keyof typeof AL_SUBJECTS | null;