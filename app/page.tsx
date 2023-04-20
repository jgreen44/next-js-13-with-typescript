'use client';
import React, { useState, useEffect } from 'react';
import LoadingPage from '@/app/loading';
import { Courses } from '@/app/components/CoursesType';
import { CourseSearch } from '@/app/components/CourseSearch';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };
    fetchCourses().then((r) => console.log(r));
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>Welcome to Green Media</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </>
  );
};

export default HomePage;
