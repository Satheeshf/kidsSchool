import React from 'react'
import "./Program.css"
import program_1 from "../../assets/emotional.jpg"
import program_2 from "../../assets/physical developmwnt.jpg"
import program_3 from "../../assets/intellectural.jpg"
import program_4 from "../../assets/moral3.jpg"
import program_6 from "../../assets/social.jpg"

import program_icon_1 from "../../assets/program-icon-1.png"
import program_icon_2 from "../../assets/program-icon-2.png"
import program_icon_3 from "../../assets/program-icon-3.png"
import program_5 from "../../assets/program5.jpg"

const Program = () => {
  return (
    <div className='programs' id=''>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>Emotional Development</p>
        </div>
      </div>

      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Physical Development</p>
        </div>
      </div>

      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Intelectural Development</p>
        </div>
      </div>
      <br />
      <div className="program">
        <img src={program_4} alt="" />
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Moral Development</p>
        </div>
      </div>
      <div className="program">
        <img src={program_6} alt="" />
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>Social Development</p>
        </div>
      </div>
      <img src={program_5} alt="" className='program-5'/>
    </div>
  )
}

export default Program
