import React from 'react';
import "../styles/Services.css"
import {IoColorWandOutline} from "react-icons/io5"
import {BiCodeAlt} from "react-icons/bi"
import { motion } from "framer-motion";

const Services = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">What I can do</p>
                    <p className='heading-text'>Services</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                <div className="services-card">
                    <BiCodeAlt className='services-icon' />
                    <p className='services-title'>AI & Machine Learning</p>
                    <p className='services-desc'>
                        I design and deploy machine learning and deep learning models using tools like TensorFlow, PyTorch, and AWS to solve real-world problems in NLP, computer vision, and predictive analytics.
                    </p>
                </div>
                <div className="services-card">
                    <IoColorWandOutline className='services-icon' />
                    <p className='services-title'>Data Engineering</p>
                    <p className='services-desc'>
                        I build and optimize data pipelines using Python, SQL, and cloud services like AWS SageMaker and GCP to enable efficient model training and real-time AI deployment.
                    </p>
                </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;
