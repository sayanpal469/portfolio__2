import React from 'react';
import sayanPic from '../../assets/Mypic/sayan cut.png'
import resume from '../../assets/Mypic/Final.e8e0961a73224dd9a07d.pdf'

const Home = () => {
    return (
        <div className='mt-16'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 px-28 justify-center items-center gap-10'>
                <div className=''>
                    <h2 className='text-5xl'>Hey there i am</h2>
                    <h1 className='text-7xl my-2 font-bold text-orange-500'>SAYAN PAUL</h1>
                    <p>and I'm a Frontend devoloper who is pasionate about making error-free websites with 100% client satisfaction. I have a passion for learning and sharing my knowlage with others as publicly as possible. I love solve rea-world problems. I am strategic, goal-oriented, and always work with an end goal in mind. I pride myself on doing quality work and maintain excellent communication. I enjoy working with ReactJs, Javascript.</p>
                    <a href={resume} download className="btn btn-warning mt-5">
                        Download Resume{" "}
                    </a>
                    <a href="#contact" className="btn btn-outline btn-warning ml-5">
                        {" "}
                        Let's Talk{" "}
                    </a>
                </div>
                <div className='w-[50%] mx-auto'>
                    <img className='w-80 rounded-3xl' src={sayanPic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;