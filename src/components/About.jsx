import React from 'react'
import Profile from '../images/profile.jpg'
import '../App.css';

function About() {
    return (
        <div className='container'>
            <div className='about row align-items-center text-center bg-secondary'>
                <div className='col-md-6'>
                    <img className='' style={{ borderRadius: '50%', width: '20rem' }} src={Profile} alt="" />
                </div>
                <div className='col-md-6'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione impedit voluptates esse. Illo cupiditate reprehenderit corrupti voluptatibus dolorum? Maiores quis omnis nemo iure rerum iste molestias dolorum quo accusantium quasi?</p>
                </div>

            </div>
        </div>
    )
}

export default About