import { NextResponse } from 'next/server';
import courses from '../data.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  const filteredCourses = courses.filter((course: { title: string }) => {
    return query
      ? course.title.toLowerCase().includes(query.toLowerCase())
      : null;
  });
  return NextResponse.json(filteredCourses);
}
