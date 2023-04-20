import React from 'react';
import Link from 'next/link';

export type CoursesType = {
  courses: {
    id: string;
    title: string;
    description: string;
    link: string;
    level: string;
  }[];
};

// removed when homepage became a client component rather than a server component
// async function fetchCourses() {
//   const response = await fetch('http://localhost:3000/api/courses');
//   const courses = await response.json();
//   return courses;
// }
export const Courses = ({ courses }: CoursesType) => {
  // const courses = await fetchCourses();
  return (
    <div className={'courses'}>
      {courses.map(
        (course: {
          id: string;
          title: string;
          description: string;
          link: string;
          level: string;
        }) => (
          <div key={course.id} className={'card'}>
            <h2>{course.title}</h2>
            <small>Level: {course.level}</small>
            <p>{course.description}</p>
            <Link href={course.link} target={'_blank'} className={'btn'}>
              Go To Course
            </Link>
          </div>
        )
      )}
    </div>
  );
};
