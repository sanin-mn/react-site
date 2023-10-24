import React from 'react'
import '../App.css';


function Home() {
    return (
        <div className='container'>
            <div className='main-body row align-items-center text-center'>
                <div class="col-md-6">

                    <h1 className='my-name'>Hello! Muhammed Sanin here, web developer based in India</h1>

                    <div className='mt-5'>
                      <a href="https://twitter.com/Sanin_369" class="btn btn-social-icon btn-twitter text-secondary">
                        <span className="fa fa-twitter"></span>
                      </a>
  
                      <a href="https://www.facebook.com/sanin.mn.7" class="btn btn-social-icon btn-facebook text-secondary">
                        <span className="fa fa-facebook"></span>
                      </a>
  
                      <a href="https://www.instagram.com/sanin_369_" class="btn btn-social-icon btn-instagram text-secondary">
                        <span className="fa fa-instagram"></span>
                      </a>
                      
                      <a href="https://github.com/sani369" class="btn btn-social-icon btn-github text-secondary ">
                        <span className="fa fa-github"></span>
                      </a>
  
                    </div>
                </div>
                <div class="col-md-6 ">

                    <img className='' style={{ borderRadius: '50%', width: '20rem' }} src="https://c.tenor.com/NCRHhqkXrJYAAAAC/programmers-go-internet.gif" alt="" />

                </div>

            </div>
        </div>
    )
}

export default Home