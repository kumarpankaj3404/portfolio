import { Spotlight } from '@/ui/Spotlight'
import React from 'react'
import { cn } from "@/utils/cn";
import { TextGenerateEffect } from '@/ui/text-generate-effect';
import MagicButton from '@/ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {

  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10  h-[100sh]' fill="white"/>
            <Spotlight className='top-10 -right-250  h-[80vh] ' fill="white"/>
        </div>
        <div className="absolute top-0 left-0 flex h-200 w-full items-center justify-center bg-white dark:bg-black">
            <div
                className={cn(
                "absolute inset-0",
                "bg-size-[40px_40px]",
                "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black "/>
            </div>

            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center '>
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                        Dynamic WEb MAgic with Next.js
                    </h2>
                    <TextGenerateEffect duration={2}  id={1}
                    words="Transforming Concepts into Seemless User Experience" className='text-center text-[60px] md:text-5xl lg:text-8xl' />
                    <p className='text-center'>Hi, I&apos;m Pankaj Kumar, a Full Stack Web Developer
                    </p>
                    <a href='#about'>
                        < MagicButton title="Show my work" position='right' icon={<FaLocationArrow/>} />
                    </a>
                </div>
            </div>

            
    </div>
  )
}

export default Hero