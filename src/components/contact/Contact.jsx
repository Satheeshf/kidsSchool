import React, { useState } from 'react';
import './contact.css';
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({
    name: '',
    phone: ''
  });

  const validateName = (name) => {
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(name)) {
      return "Name should contain only letters";
    }
    return "";
  };

  const validatePhone = (phone) => {
    const regex = /^\d+$/;
    if (!regex.test(phone)) {
      return "Phone should contain only numbers";
    }
    if (phone.length < 10) {
      return "Phone should be at least 10 digits";
    }
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setErrors({...errors, name: validateName(value)});
    } else if (name === 'phone') {
      setErrors({...errors, phone: validatePhone(value)});
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    
    // Final validation before submit
    const formData = new FormData(event.target);
    const nameError = validateName(formData.get('name'));
    const phoneError = validatePhone(formData.get('phone'));
    
    if (nameError || phoneError) {
      setErrors({
        name: nameError,
        phone: phoneError
      });
      return;
    }

    setResult("Sending....");
    formData.append("access_key", "64ab96f8-bcdb-46fc-b9a3-8c3d31986e3d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        setErrors({name: '', phone: ''});
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Error submitting form. Please try again.");
    }
  };

  return (
    <>
      <div className="contact-header">
        <p>Contact</p>
        <h2>Get in Touch</h2>
      </div>
      
      <div className='contact-container'>
        <div className="contact-col">
          <h3>Send us a message <img src={msg_icon} alt="message icon" className="msg-icon" /></h3>
          <p>Feel free to reach out through contact form or find our contact
              information below. Your feedback, questions, and suggestions are 
              important to us as we strive to provide exceptional service to our school community.
          </p>
          <ul>
              <li><img src={mail_icon} alt="email icon" className="contact-icon" /> thebeeschoolhub@gmail.com <br />
              </li> <li className='li-gmail'>nithya84862021@gmail.com</li>
              <li><img src={phone_icon} alt="phone icon" className="contact-icon phone-icon" /> 8939068886, 9080183275</li>
              <li>
                <img src={location_icon} alt="location icon" className="contact-icon location-icon" />
                <div className="location-info">
                  <strong>Chennai Location:</strong><br />
                  The Bee School, 29A Second cross street,<br />
                  Shastri Nagar Extension, Kolathur,<br />
                  Chennai, Tamil Nadu - 600099
                </div>
              </li>
              <li>
                <img src={location_icon} alt="location icon" className="contact-icon location-icon" />
                <div className="location-info">
                  <strong>Hyderabad Location:</strong><br />
                  The Bee School, Sai Baba Temple,<br />
                  Prasanth Colony, Balkampet,<br />
                  Hyderabad, Telangana - 500018
                </div>
              </li>
          </ul>
        </div>
        
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label htmlFor="name">Your name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Enter your name" 
              onChange={handleInputChange}
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              placeholder="Enter your mobile number" 
              onChange={handleInputChange}
              required
            />
            {errors.phone && <span className="error">{errors.phone}</span>}

            <label htmlFor="message">Write your messages here</label>
            <textarea 
              name="message" 
              rows={6} 
              placeholder="Enter your message" 
              required
            ></textarea>
            
            <button type="submit" className="btn dark-btn" disabled={errors.name || errors.phone}>
              Submit now <img src={white_arrow} alt="submit arrow" />
            </button>
          </form>
          <span className="result-message">{result}</span>
        </div>
      </div>

      <div className="map-container">
        <div className="map">
          <h3>Chennai Campus</h3>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d31084.76338055995!2d80.1944786347656!3d13.124797065565566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a52652dc08bc721%3A0x6ed49bff6912da2b!2sBEE%20SCHOOL%2C%20No.%2030%2C%20shastri%20nagar%20extn%2C%202nd%20Cross%20St%2C%20Kolathur%2C%20Chennai%2C%20Tamil%20Nadu%20600099!3m2!1d13.1350897!2d80.218886!5e0!3m2!1sen!2sin!4v1745247424707!5m2!1sen!2sin"  
            width="100%" 
            height="300" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy"
            title="Chennai Campus Location"
          ></iframe>
        </div>
        
        <div className="map">
          <h3>Hyderabad Campus</h3>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.308699060425!2d78.4492353!3d17.445452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91eefabe51ed%3A0xefe2cca2ce26a763!2sThe%20BEE%20SCHOOL%20play%20school%20nursery%20preschool%20Montessori!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
            width="100%" 
            height="300" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy"
            title="Hyderabad Campus Location"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Contact;