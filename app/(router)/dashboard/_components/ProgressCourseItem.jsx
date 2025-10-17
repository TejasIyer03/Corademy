import Image from 'next/image'
import React from 'react'
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'


function ProgressCourseItem({course}) {
    const getTotalCompletedPerce=(item)=>{
        const perc=(item.completedChapter?.length/item?.courseList?.chapter?.length)*100
        return perc
    }
  return (
    <Link href={"/course-preview/"+course?.courseList?.slug}>
    <div className='hover:shadow-md hover:shadow-purple-300 cursor-pointer'>
    <Image src={course.courseList?.banner?.url}
    width={500}
    height={150}
    alt='banner'
    className='object-cover w-full unoptimized'
    />
    <div className='flex flex-col gap-1 p-2'>
        <h2 className='font-medium'>{course.courseList?.name}</h2>
        
        <h2 className='text-[12px] text-gray-400'>{course.courseList?.author}</h2>
        <h2 className='text-[12px] text-gray-400 mt-3'>40%<span className='float-right'>4/10 Chapters</span></h2>
        <Progress value={33} className='h-[7px]' />
    </div>
</div>
</Link>
  )
}

export default ProgressCourseItem