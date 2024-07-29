import React from 'react'

const AboutMe = () => {
  return (
    <>
        <container className="about-me--container">
            <div className="about-me-content--container">
                <div className="about-me-primary-content">
                    <img src="/images/chickenman.png"/>
                    <h2>Hi, i'm Mere</h2>
                    <h4>I am a designer/developer</h4>
                </div>
                <div className="about-me-secondary-content">
                    <h4>Read more about who i am and what i do</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </container>
    </>
  )
}

export default AboutMe
