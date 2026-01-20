import React from 'react'
import { images } from '../../../../../assets'
import { CheckCircle, User } from 'lucide-react'
import AnalyticsDashboard from './AnalyticsDashboard'
import EmployeeCourseComponent from './EmployeeCourses'
import { useNavigate } from 'react-router-dom'

const EmployeeDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className='p-4 xl:p-6 space-y-4'>
      <div className='bg-white border border-gray-100 rounded-xl px-4 2xl:px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-4 overflow-hidden'>
        <div className='w-full lg:w-3/4'>
          <h2 className='font-bold text-2xl'>Behavioral Assessment</h2>
          <p>Your journey toward deeper behavioral awareness and personal growth begins here</p>
          <div className='w-full p-4 bg-primary/10 flex flex-col lg:flex-row items-center justify-start gap-4 lg:w-fit rounded-lg mt-4'>
          <CheckCircle size= {44 } className='bg-primary text-white rounded-full p-1'/>
          <div>
            <h2 className='font-medium text-primary text-xl'>Assessment Assigned</h2>
          <p className='text-primary '>Due Date : 15 july, 2026</p>
          </div>
          <button className='w-full lg:w-fit text-white bg-primary px-6 py-2 rounded-lg lg:ml-20 xl:ml-36' onClick={() => navigate('assestment')}>Start Assesstment</button>
          </div>
        </div>
        <div className='w-full lg:w-1/4 flex justify-center lg:justify-end xl:pr-20'>
          <img src={images.GuyImage} alt="Heartsy" className="w-fit" />
        </div>
      </div>
      <div>
        <AnalyticsDashboard/>
      </div>
      <div className='bg-white border border-gray-100 px-4 2xl:px-6 py-4 rounded-xl flex flex-col lg:flex-row gap-4 items-center'>
        <div className='w-full lg:w-2/3 space-y-1'>
          <h2 className=' flex items-center gap-4 font-medium text-xl '><User size={22} className='text-primary'/> Your Personality Type</h2>
          <p className='text-primary font-medium md:text-lg'>The Collaborative Innovator</p>
          <p className='text-primary text-sm md:text-base'>You have a remarkable talent for uniting people and fostering creative solutions. Your adaptability and strong communication skills make you an invaluable member of any team.</p>
          <div className="flex flex-wrap items-center gap-2">
            <p className='text-[#00A63E] rounded-xl text-sm px-2 py-1 border border-[#00A63E33] bg-[#00A63E1A] text-xs md:text-base'>Collaborator</p>
            <p className='text-primary rounded-xl text-sm px-2 py-1 border border-primary/20 bg-primary/10 text-xs md:text-base'>Strategic Thinker</p>
          </div>
        </div>
        <div className='w-full lg:w-1/3 borsder-primary bg-primary/10 rounded-xl px-4 py-2 space-y-0.5'>
        <h2 className=' flex items-center gap-4 font-medium text-lg lg:text-base 2xl:text-xl'><User size={22} className='text-primary'/> Your Personality Type</h2>
        <p className="flex items-center gap-2 text-xs lg:text-sm xl:text-base">
          <span className='bg-primary w-2 h-2 rounded-full'></span>
          Excellent team communication
        </p>
        <p className="flex items-center gap-2  text-xs lg:text-sm xl:text-base">
          <span className='bg-primary w-2 h-2 rounded-full'></span>
         High adaptability to change
        </p>
        <p className="flex items-center gap-2 text-xs lg:text-sm xl:text-base">
          <span className='bg-primary w-2 h-2 rounded-full'></span>
          Strong collaborative spirit
        </p>
        </div>
      </div>
      <div>
        <EmployeeCourseComponent/>
      </div>
    </div>
  )
}

export default EmployeeDashboard