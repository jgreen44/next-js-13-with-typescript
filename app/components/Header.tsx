import React from 'react';
import Link from 'next/link';
export const Header = () => {
  return (
    <header className={'header'}>
      <div className={'container'}>
        <div className={'logo'}>
          <Link href={'/'}>Green Media</Link>
        </div>
        <div className={'links'}>
          <Link href={'/about'}>About</Link>
          <Link href={'/about/team'}>Team</Link>
          <Link href={'/code/repos'}>Code</Link>
        </div>
      </div>
    </header>
  );
};

// Advantages of RSC:

// - Load faster - Don't have to wait for the JavaScript/TypeScript to load
// - Smaller client bundle size
// - SEO friendly
// - Access to resources the client can't access
// - Hide sensitive data from the client
// - More secure against XSS attacks
// - Improved developer experience

// Disadvantages of RSC:

// - Can't use React hooks
// - Can't use React context
// - Can't use React state
// - Not as interactive
// - No component lifecycle methods We cannot use the 'useEffect' hook in RSCs
