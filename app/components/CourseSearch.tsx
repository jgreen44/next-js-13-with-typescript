'use client';
import { useState } from 'react';

export const CourseSearch = ({
  getSearchResults,
}: {
  getSearchResults: (results: any) => void;
}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch(`/api/courses?search=${query}`);
    const courses = await res.json();
    console.log({
      courses,
      res,
    });
    getSearchResults(courses);
  };

  return (
    <form className={'search-form'} onSubmit={handleSubmit}>
      <input
        className={'search-input'}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={'Search Courses'}
      />
      <button className={'search-button'} type="submit">
        Search
      </button>
    </form>
  );
};
