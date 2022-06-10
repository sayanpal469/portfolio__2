import React from 'react';
import healthy from '../../assets/projects/Healthy-Piorr.png'
import jantrick from '../../assets/projects/Jantrick.png'
import doctors from '../../assets/projects/doctors-portal.png'

const Portfolio = () => {
    return (
        <div id='portfolio' className='mb-20 px-14'>
                <h1 className='text-center text-3xl'>Portfolio</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-14 mt-10'>
                    <div class="card max-w-lg bg-base-100 shadow-xl ">
                        <div className='h-60 overflow-auto'>
                        <figure><img className='w-full h-full' src={healthy} alt="Shoes" /></figure>
                        </div>
                        <div class="card-body">
                            <h2 class="card-title">Healthy Piorr</h2>
                            <p>1- It is a warehouse management system website.</p>
                            <p>2- Users can log in to this website using Google or an email password.</p>
                            <p>3- Users can add product and delete product and users can add product quantity and delever</p>
                            <p><span className='text-xl font-bold'>Technology </span> ReactJs, React Router, Bootstrap, NodeJs, Express, MongoDB, Firebase, Heroku.
</p>
                            <div class="card-actions justify-center mt-5">
                                <div class="badge badge-outline">
                                    <a target='_blank' href='https://github.com/sayanpal469/grocery-warehouse-management-client-side'>Client Side</a>
                                </div>
                                <div class="badge badge-outline">
                                    <a target='_blank' href='https://github.com/sayanpal469/grocery-warehouse-management-server-side'>Server Side</a>
                                </div>
                                <div class="badge badge-outline">
                                    <a target='_blank' href='https://grocery-warehouse-7968d.web.app/'>Live Side</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card max-w-lg bg-base-100 shadow-xl ">
                        <div className='h-60 overflow-auto'>
                        <figure><img className='w-full h-full' src={jantrick} alt="Shoes" /></figure>
                        </div>
                        <div class="card-body">
                            <h2 class="card-title">Jantrick</h2>
                            <p>1- t is a tools manufacturer website</p>
                            <p>2- Users and Admin can sign up and log in to this website using google.</p>
                            <p>3-  Users can purches product,pay and delete and add review. An admin can make admin, add product,
remove user anad manage all order.</p>
                            <p><span className='text-xl font-bold'>Technology </span>Css, Javascript, ReactJs, React Router, Tailwind css, Daisy Ui, NodeJs, Express, Mongodb, Firebase,
Heroku.</p>
                            <div class="card-actions justify-center mt-5">
                                <div class="badge badge-outline">
                                    <a target='_blank' href='https://github.com/sayanpal469/tools-manufacturer-client-side'>Client</a>
                                </div>
                                <div class="badge badge-outline">
                                    <a target='_blank' href='https://github.com/sayanpal469/tools-manufacturer-server-side'>Server</a>
                                </div>
                                <div class="badge badge-outline">
                                    <a target='_blank' href='https://toolsmanufacturer-6b2c7.web.app/'>Live Side</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card max-w-lg bg-base-100 shadow-xl ">
                        <div className='h-60 overflow-auto'>
                        <figure><img className='w-full h-full' src={doctors} alt="Shoes" /></figure>
                        </div>
                        <div class="card-body">
                            <h2 class="card-title">Doctors Portal</h2>
                            <p>1- It is a doctor’s portal website. Patients get appointments by the date.</p>
                            <p>2- Patients and doctors can log in to this website using Google or an email password.</p>
                            <p>3- A Patient shows all the service and booking an appointment.</p>
                            <p><span className='text-xl font-bold'>Technology </span>CSS, Tailwind Css, JavaScript, ReactJs, React Router, NodeJs, Express, MongoDB,Firebase, Heroku.</p>
                            <div class="card-actions justify-center mt-5">
                                <div class="badge badge-outline">
                                    <a target='_blank' href='https://github.com/sayanpal469/doctors-portal-client-side'>Client Side</a>
                                </div>
                                <div class="badge badge-outline">
                                    <a target='_blank' href='https://github.com/sayanpal469/doctors-portal-server-side-'>Server Side</a>
                                </div>
                                <div class="badge badge-outline">
                                    <a target='_blank' href='https://doctors-portal-8801a.web.app/'>Live Side</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Portfolio;