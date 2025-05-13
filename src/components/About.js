import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/profile_me_1 .jpg'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p style={{ textAlign: 'justify' }}>My name is Jasweer Naidu Tadikonda, and I am an AI Engineer with over four years of experience in designing, developing, and deploying machine learning and deep learning solutions. I specialize in supervised and unsupervised learning, NLP, computer vision, and real-time analytics. I have hands-on experience with tools like TensorFlow, PyTorch, and AWS, and I’ve applied these skills in industries such as finance, healthcare, and retail. During my time at Infosys and TCS, I built predictive models, automated data pipelines, and integrated scalable AI systems that significantly improved performance and efficiency.</p>
                        <br />
                        <p style={{ textAlign: 'justify' }}> Currently, I am pursuing my Master’s in Computer Science at Northern Arizona University to further enhance my technical expertise and research capabilities in AI. I am passionate about creating intelligent, real-world solutions and continuously exploring new advancements in artificial intelligence, cloud technologies, and MLOps. My goal is to contribute to innovative projects that have a positive and measurable impact on society.</p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
