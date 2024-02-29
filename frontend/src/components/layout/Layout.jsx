import React from 'react'

export default function Layout() {
    return (
        <div>
            <div className="flex m-0 h-screen ">
                <div className='w-1/6 bg-gray-800 text-white'>
                    {/* admin corner */}
                    <div className="flex p-2 m-1">
                        <img src="" alt="" />
                        <div className='px-2'>
                            <div>admin</div>
                            <div>Online</div>
                        </div>
                    </div>
                    {/* main menu */}
                    <div className='font-thin text-slate-400 bg-slate-900 w-full p-2'>Main Menu</div>
                    {/* menu items */}
                    <div className='text-white p-2 m-2'>
                        <p>Dashboard</p>
                    </div>
                    <div className='text-white p-2 m-2'>
                        <p>Members Section</p>
                    </div>
                    <div className='text-white p-2 m-2'>
                        <p>Books Section</p>
                    </div>
                    <div className='text-white p-2 m-2'>
                        <p>Books Section</p>
                    </div>
                    <div className='text-white p-2 m-2'>
                        <p>Books Section</p>
                    </div>
                    <div className='text-white p-2 m-2'>
                        <p>Books Section</p>
                    </div>
                    <div className='text-white p-2 m-2 flex justify-between'>
                        <p>Exit System</p>
                        <div>--</div>
                    </div>


                </div>
                <div className='w-4/5'>
                    <div className='flex  px-2 pt-2 justify-between'>

                        <h1 className='font-medium	'>Control Panel</h1>
                        <div className="flex">
                            <div className='text-sm font-bold mx-3'>Admin</div>
                            <div className='text-sm mx-3'>Dashboard</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 font-semibold	 text-white grid-rows-1  mx-2 mb-1">

                        <div className=" m-5  bg-green-600">
                            <h2 className='px-2 pt-2 text-3xl'>16</h2>
                            <h4 className='p-2'>Registered Members</h4>
                            <div className='w-full bg-green-700 p-1 flex text-center justify-center '>
                                View More
                            </div>
                        </div>
                        <div className=" m-5   bg-cyan-700">
                            <h2 className='px-2 pt-2 text-3xl'>16</h2>
                            <h4 className='p-2'>Registered Members</h4>
                            <div className='w-full p-1 bg-cyan-800 flex text-center justify-center '>
                                View More
                            </div>
                        </div>
                        <div className=" m-5  bg-pink-500">
                            <h2 className='px-2 pt-2 text-3xl'>16</h2>
                            <h4 className='p-2'>Registered Members</h4>
                            <div className='w-full p-1 bg-pink-600 flex text-center justify-center '>
                                View More
                            </div>
                        </div>
                        <div className=" m-5  bg-rose-700">
                            <h2 className='px-2 pt-2 text-3xl'>16</h2>
                            <h4 className='p-2'>Registered Members</h4>
                            <div className='w-full p-1 bg-rose-800 flex text-center justify-center '>
                                View More
                            </div>
                        </div>
                    </div>
                    <div className="grid font-semibold text-white grid-cols-3 grid-rows-1 m-2 ">
                        
                        <div className=" m-5  bg-amber-500">
                            <h2 className='px-2 pt-2 text-3xl'>16</h2>
                            <h4 className='p-2'>Registered Members</h4>
                        </div>
                        <div className=" m-5  bg-sky-900">
                            <h2 className='px-2 pt-2 text-3xl'>16</h2>
                            <h4 className='p-2'>Registered Members</h4>
                        </div>
                        <div className=" m-5  bg-rose-800">
                            <h2 className='px-2 pt-2 text-3xl'>16</h2>
                            <h4 className='p-2'>Registered Members</h4>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
