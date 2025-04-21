import React from 'react'
import "./Admission.css"

const Admission = () => {
  return (
    <>
        <div className="admission1">
            <p>Admission</p>
            <h2>Let Join Our Family</h2>
        </div>
        <div className="admission">
            <div className="container">
                <h2>Admisson Procedure :</h2>
                <p>1. Application and prospectus can ne obtained from the office on payment of <span>Rs.100/-</span>.</p>
                <p>2. The  xerox copies of the following documents have to be enclosed along with application form which is filled in
                      without any mistake.</p>
                <span className='details'> (i) Aadhar Card, (ii) Smart Ration Card,
                    (iii) community certificate, (iv) Birth certificate, (v) Passport size Photos
                    (vi) Family Photo.</span> 
                  <p>3. The original documents have to be produce diving the time of interview and admission.</p>  
                  <p>4. Medical fitness certificate has to be produced during the time of admission.</p>
                  <p>5. Classes will commense from the second of June.</p>
                  <p>6. Tuition fees is to be paid <span className='details'>On before 10th </span>of every month without fail.</p>
                  <p>7. Fees remitted will not be returned at any cost.</p>
                  <p>8. Fees remmitance should pay through at hand, through <span className='details'>Bank Account, Online Payment method like UPI (G-pay,phonepay,paytm etc..).</span></p>

                  <h2 className='special'>Special Features :</h2>
                  <p>1. Experienced Teachers.</p>
                  <p>2. Training for individuals development.</p>
                  <p>3. Latest of Teaching material and syllabus.</p>
                  <p>4. Computer lab.</p>
                  <p>5. Month exams and evaluation.</p>
            </div>
        </div>
    </>
  )
}

export default Admission
