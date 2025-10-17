"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import CourseVideoDescription from '../../course-preview/[courseId]/_components/CourseVideoDescription';
import CourseContentSection from '../../course-preview/[courseId]/_components/CourseContentSection';

function WatchCourse({params}) {
  const {user} = useUser();
  const [courseInfo,setCourseInfo]=useState([]);
  const [activeChapterIndex,setActiveChapterIndex]=useState(0);
  useEffect(()=>{
    params&&user&&getUserEnrolledCourseDetail();
  },[params&&user])


  const getUserEnrolledCourseDetail=()=>{
    GlobalApi.getUserEnrolledCourseDetails(params.enrolledId,user.primaryEmailAddress.emailAddress).then(resp=>{
      setCourseInfo(resp.userEnrollCourses[0].courseList);
    })
  }
  return courseInfo.name&&(
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
        {/* Title, Video, Description */}
        
        <div className='col-span-2 bg-white p-3'>
            <CourseVideoDescription courseInfo={courseInfo} activeChapterIndex={activeChapterIndex} watchMode={true}/>
        </div>

        {/* Course content */}
        <div>
            <CourseContentSection courseInfo={courseInfo} isUserAlreadyEnrolled={true} watchMode={true} setActiveChapterIndex={(index)=>setActiveChapterIndex(index)}/>
        </div>

    </div>
    </div>
  )
}

export default WatchCourse