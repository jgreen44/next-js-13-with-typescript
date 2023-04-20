import React from 'react'
export const metadata = {
  title: 'About Green Media',
}

const AboutLayout = ({ children }: any) => {
  return (
    <>
      <h1>THIS IS THE ABOUT LAYOUT</h1>
      <div>{children}</div>
    </>
  )
}

export default AboutLayout
