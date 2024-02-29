import React from 'react'

export default function Layout() {
    return (
        <div>
            <div className="flex m-0 h-screen ">
                <div className='w-1/6 bg-slate-800 '>
                    <div className='text-white'>
                        <p>Dashboard</p>
                    </div>
                    <div className='text-white'>
                        <p>Members Section</p>
                    </div>
                    <div className='text-white'>
                        <p>Books Section</p>
                    </div>
                    <div className='text-white'>
                        <p>Books Section</p>
                    </div>
                    <div className='text-white'>
                        <p>Books Section</p>
                    </div>
                    <div className='text-white'>
                        <p>Books Section</p>
                    </div>
                    <div className='text-white'>
                        <p>Exit System</p>
                    </div>


                </div>
                <div className='w-4/5'>
                    <div className='flex justify-between'>

                    <h1>Control Panel</h1>
                    <div className="flex">
                        <div className='text-sm mx-3'>admin</div>
                        <div className='text-sm mx-3'>Dashboard</div>
                    </div>
                    </div>

                    <div className="grid grid-cols-4 text-white grid-rows-1  m-2">

                         
                        <div className=" m-5  bg-green-600">
                            <h2>16</h2>
                            <h4>Registered Members</h4>
                            <div className='w-full bg-green-700 flex text-center justify-center '>
                                View More
                            </div>
                        </div>
                        <div className=" m-5  bg-cyan-700">
                            <h2>16</h2>
                            <h4>Registered Members</h4>
                            <div className='w-full bg-cyan-800 flex text-center justify-center '>
                                View More
                            </div>
                        </div>
                        <div className=" m-5  bg-pink-500">
                            <h2>16</h2>
                            <h4>Registered Members</h4>
                            <div className='w-full bg-pink-600 flex text-center justify-center '>
                                View More
                            </div>
                        </div>
                        <div className=" m-5  bg-rose-700">
                            <h2>16</h2>
                            <h4>Registered Members</h4>
                            <div className='w-full bg-rose-800 flex text-center justify-center '>
                                View More
                            </div>
                        </div>
                    </div>
                    <div className="grid text-white grid-cols-3 grid-rows-1 m-2 ">
 
                        <div className=" m-5  bg-amber-500">
                            <h2>16</h2>
                            <h4>Registered Members</h4>
                            <div className='w-full'>
                                View More
                            </div>
                        </div>
                        <div className=" m-5  bg-sky-900">
                            <h2>16</h2>
                            <h4>Registered Members</h4>
                            <div className='w-full'>
                                View More
                            </div>
                        </div>
                        <div className=" m-5  bg-rose-800">
                            <h2>16</h2>
                            <h4>Registered Members</h4>
                            <div className='w-full'>
                                View More
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
