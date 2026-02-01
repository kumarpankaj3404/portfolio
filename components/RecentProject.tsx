import { projects } from '@/data'
import { ThreeDCardDemo } from '@/ui/3D-Container'
import React from 'react'

const RecentProject = () => {
  return (
    <div className='py-20' id="projects">
        <h1 className='text-center text-[2.5rem] leading-10 font-bold'>
            A small selection of {' '}
            <span className='text-purple'>
                recent project
            </span>
        </h1>
        {/* Added larger vertical gap and removed 'items-center' to prevent vertical shifting during hover */}
        <div className='flex flex-wrap justify-center gap-x-40 gap-y-8  mt-1 '>
            {projects.map(({id, title, des, img, iconLists, link}) => (
                /* 1. Changed width to sm:w-[570px] to accommodate the [30rem] card + padding.
                   2. Increased min-height to ensure 3D tilt doesn't overlap rows.
                */
                <div 
                    key={id} 
                >
                    <ThreeDCardDemo 
                        id={id} 
                        title={title} 
                        des={des} 
                        img={img} 
                        iconLists={iconLists} 
                        link={link}
                    />
                </div> 
            ))}
        </div>
    </div>
  )
}

export default RecentProject