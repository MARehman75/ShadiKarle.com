import React from 'react'
import {BiSupport } from "react-icons/bi"
import {GiTakeMyMoney } from "react-icons/gi"
import{HiFlag} from "react-icons/hi"
import {MdPrivacyTip} from "react-icons/md"

const AboutUs = () => {
    
      return (
        <div
        className = "h-screen w-full  md:h-screen text-pink-500">
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                  <p className='text-4xl font-bold '> About </p>
                  <p style={{color:'#8F9BB3'}} className='py-6'>EveryThing You Need to Know</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0'>
                  
                <div className=''>
                    <i > <BiSupport size={50}/> </i>
                    <h1 className='font-bold '>Connect With Our Rishta Consultants</h1>
                    <p style={{color:'#8F9BB3'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex blanditiis laborum dignissimos enim, magni consectetur id tenetur delectus animi totam? Quibusdam nobis at similique excepturi in nam dicta quaerat accusantium.</p>
                </div>
                <div className=' '>
                    <i><GiTakeMyMoney size={50}/></i>
                <h1 className='font-bold '>Save Money</h1>
                    <p style={{color:'#8F9BB3'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex blanditiis laborum dignissimos enim, magni consectetur id tenetur delectus animi totam? Quibusdam nobis at similique excepturi in nam dicta quaerat accusantium.</p>
                </div>
                <div className='mt-5'>
                    <i>< HiFlag size={50}/></i>
                <h1 className='font-bold '>For Pakistan Only</h1>
                    <p style={{color:'#8F9BB3'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex blanditiis laborum dignissimos enim, magni consectetur id tenetur delectus animi totam? Quibusdam nobis at similique excepturi in nam dicta quaerat accusantium.</p>
                </div>
                <div className='mt-5'>
                    <i><MdPrivacyTip size={50}/></i>
                <h1 className='font-bold '>Privacy</h1>
                    <p style={{color:'#8F9BB3'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex blanditiis laborum dignissimos enim, magni consectetur id tenetur delectus animi totam? Quibusdam nobis at similique excepturi in nam dicta quaerat accusantium.</p>
                </div>
                   
                </div>
            </div>
            </div>
  )
}

export default AboutUs;