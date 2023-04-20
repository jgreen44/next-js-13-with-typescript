import React from 'react';
import Link from 'next/link';

async function fetchRepoContents(name: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(
    `https://api.github.com/repos/jgreen44/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const contents = await response.json();
  return contents;
}
export const RepoDirs = async ({ name }: { name: string }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content: any) => content.type === 'dir');
  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir: { path: string }) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
