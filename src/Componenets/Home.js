import React from 'react'
import web from '../img/data.svg'

const Home = () => {
    return (
        <>
            <section className=" lg:my-5">
                <div className="h-4/5 lg:mt-10 mt-5 flex items-center  ">
                    <div className="lg:flex lg:items-center">
                        <div className="md:col-span-1 my-8 order-first">
                            <div className="px-4 text-center lg:text-left
                        md:text-left
                        md:flex md:flex-col md:space-between md:justify-center
                        md:content-center ">
                                <h1 className=" 
                            font-serif 
                             text-4xl 
                             leading-tight
                             md:text-4xl
                             lg:text-5xl
                             lg:leading-tight mb-5">
                                    Grow your business with <span className="
                                font-medium text-indigo-600 italic">AmazingWorld
                                    </span>
                                </h1>
                                <p className="text-xm text-gray-400 font-monospace lg:text-2x2 font-serif">
                                    We are the team of telented developer making websites
                                </p>
                                <div className="my-5">
                                    <a className="border-2 border-indigo-200 text-indigo-400 py-2 px-4 rounded-full hover:bg-indigo-400 hover:text-purple-50 hover:border-transparent text-sm font-serif" href="/">
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-3/5 mx-auto lg:w-full md:w-4/5 md:order-first">
                            <img className="" src={web} alt="web" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
