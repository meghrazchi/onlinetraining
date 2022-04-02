export class CreateCourseDto {
  introduction_video: string;
  thumbnail: string;
  title: string;
  headline: string;
  what_you_will_learn: Array<string>;
  requirements: string;
  description: string;
  who_is_this_course_for: Array<string>;
  instructors: Array<{}>;
  categories: Array<string>;
  tags: Array<string>;
}
