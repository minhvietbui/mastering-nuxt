import courseData from './courseData';

type Lesson = {
  title: string;
  slug: string;
  number: number;
  downloadUrl: string;
  videoId: number;
  text: string;
  path?: string;
  sourceUrl?: string;
};
type Chapter = {
  title: string;
  slug: string;
  number: number;
  lessons: Lesson[];
};
type Course = {
  title: string;
  chapters: Chapter[];
};

export const useCourse = () => {
	return {
		...courseData,
		chapters: courseData.chapters.map((chapter) => ({
      ...chapter,
			lessons: chapter.lessons.map((lesson) => ({
				...lesson,
				path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
			})),
		})),
	};
};