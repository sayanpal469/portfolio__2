import React from 'react';
import './Skills.css'
import html from '../../assets//Expertise/html.png'
import css from '../../assets//Expertise/css.png'
import bootstrap from '../../assets//Expertise/bootstrap.png'
import tailwind from '../../assets//Expertise/tailwind.png'
import Js from '../../assets//Expertise/js.png'
import react from '../../assets//Expertise/react.png'
import es6 from '../../assets//Expertise/es6.png'
import reactBootstrap from '../../assets//Expertise/reactstrap.png'

import node from '../../assets/Familiar/nodejs.abecfc00.png'
import express from '../../assets/Familiar/expressjs.b62fd807.png'
import mongodb from '../../assets/Familiar/mongodb.28ec40a4.png'
import metarial from '../../assets/Familiar/meta.978c1206.png'
import firebase from '../../assets/Familiar/firebase.c24b6b9c.png'
import heroku from '../../assets/Familiar/heroku.png'

import chromedev from '../../assets/tools/choromeDev.5aed3098.png'
import git from '../../assets/tools/git.png'
import npm from '../../assets/tools/npm.0cfd04ae.png'
import vsCode from '../../assets/tools/vs-code.1f5d1f79.png'
import figma from '../../assets/tools/figma.efb492c0.png'



const Skills = () => {
    return (
        <div id='experience' className='my-28 bg-black text-white py-10'>
                <h1 className='text-3xl text-center'>My skills for Web Development</h1>

              <div className='text-lg text-orange-500 mt-10  font-semibold text-center'>EXPERTISE</div>
                <div className='grid mx-auto w-full lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-2 mt-10 px-28  gap-5'>
                    <img className='w-14' src={html} alt="" />
                    <img className='w-14' src={css} alt="" />
                    <img className='w-14' src={bootstrap} alt="" />
                    <img className='w-14' src={tailwind} alt="" />
                    <img className='w-14' src={Js} alt="" />
                    <img className='w-14' src={es6} alt="" />
                    <img className='w-14' src={react} alt="" />
                    <img className='w-14' src={reactBootstrap} alt="" />
                </div>

                <div className='text-lg text-orange-500 mt-16 font-semibold text-center'>FAMILIAR</div>
                <div className='grid  lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 mt-10 px-28 justify-center items-center gap-5'>
                    <img className='w-14' src={node} alt="" />
                    <img className='w-14' src={express} alt="" />
                    <img className='w-14' src={mongodb} alt="" />
                    <img className='w-14' src={metarial} alt="" />
                    <img className='w-14' src={firebase} alt="" />
                    <img className='w-14' src={heroku} alt="" />

                </div>

                <div className='text-lg text-orange-500 mt-16 font-semibold text-center'>TOOLS</div>
                <div className='grid  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 mt-10 px-28 justify-center items-center gap-5'>
                    <img className='w-14' src={chromedev} alt="" />
                    <img className='w-14' src={vsCode} alt="" />
                    <img className='w-14' src={git} alt="" />
                    <img className='w-14' src={npm} alt="" />
                    <img className='w-14' src={figma} alt="" />
                </div>
              
            </div>
    );
};

export default Skills;