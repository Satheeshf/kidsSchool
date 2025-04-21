import React from 'react';
import "./About.css";
import about_img from "../../assets/about9.jpg";
import ceo from "../../assets/ceo.jpg";
import approval from "../../assets/UdyaMregistration.png";


const About = () => {
  return (
    <>
      <div className="about1">
        <p>About Us</p>
        <h2>BEE SCHOOL</h2>
      </div>
      <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="About" className='about-img' />
        <img src={ceo} alt="ceo" className='about-img2' />
      </div>

      <div className="about-right">
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          The Bee School in Chennai is a premier institution dedicated to providing top-notch language training services.
          Our diverse course offerings include <span>English, French, Spanish, and Mandarin, catering</span> to both beginners and advanced learners.
          With a blend of online and in-person classes, we ensure experienced instructors bring a wealth of practical knowledge to make learning effective and enjoyable.
          We emphasize real-world application through interactive sessions and immersive activities.
          Student support is a cornerstone of our philosophy, offering personalized guidance and resources to help learners move forward confidently with various options to fit your budget.
          Our graduates often find enhanced career opportunities, thanks to the proficiency gained here.
          Curious about our programs? Check out our FAQs for more details.
          Ready to elevate your language skills?
          <span> Join us now and start your journey toward linguistic mastery!</span>
        </p>
        <br /> <br /> <br /> <br />
{        <img src={ceo} alt="ceo" className='about-img3' />
}
        <h2>CEO - CHIEF EXECUTIVE OFFICER / FOUNDER CHAIRMAN</h2>
        <h3>Dr. S. Nithya, BE, MBA, M.Sc</h3>
        <p>CEO - The Bee School Groups - An International Montessori School.</p>
        <p>Motivational speaker, freelance life skill coach, edupreneur.</p>
        <p>Speech therapist for Autism & ADHD neurodiverse kids.</p>
        <p>
          Founder - Women Empowerment - A conclave for women's empowerment, girl child education,
          and a forum against abuse.
        </p>
      </div>
    </div>
      <div className='approval'>
        <h1>Appoval Details</h1>
        <div className="approval-left">
          <img src={approval} alt="" className='approvalImg' />
        </div>
          <div className="approval-right">
          <p>MSME Udyam Cerification license,</p>
          <p>Government of India Approved</p>
          <p>Approved no: UDAYAM-TN-24-0065915,</p>
          <p>ISO Certified Institute</p>
          <p>ISO Approval No : TN/8117/ISO:9001/2015</p>
        </div>

      </div>
    </>
    
  );
};

export default About;
