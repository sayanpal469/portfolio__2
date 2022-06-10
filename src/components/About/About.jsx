import React from 'react';
import './About.css'
import ME2 from "../../assets/Mypic/2nd.jpeg";
import { FaAward } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
    return (
        <div className='my-28' id='about'>
            <h4 className='text-sm text-center'>Get is know</h4>
            <h3 className='text-3xl text-center'>About me</h3>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-20 px-28 justify-center items-center gap-10'>

                <div className='w-[50%] mx-auto about__me__image'>
                    <img className='w-80 rounded-3xl' src={ME2} alt="" />
                </div>

                <div>
                    <p>I live in India. My hometown is West Bengal. I am a student of BA and my subject is Bengali. But now I am learning MERN STACK Devolopment form <span className='font-bold'>Programming Hero</span>. I have a passion for learning and sharing my knowlage with others as publicly as possible. I love solve rea-world problems. I am strategic, goal-oriented, and always work with an end goal in mind.My goal is to be Full Stack web developer,which i believe is going to be a great career choice for the future alongwith i want to be a web developer tutor,work on a system that has X scale or complexity.</p>

                    <a href="#contact" className="btn btn-warning mt-5">
                        {" "}
                        Let's Talk{" "}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;