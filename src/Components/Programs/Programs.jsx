import React from 'react'
import './Programs.css'
import program_1 from'../../assets/pro_1.jpg'
import program_2 from'../../assets/prog_2.jpg'
import program_3 from'../../assets/program_3.png'
import program_icon_1 from'../../assets/prog_i_1.jpg'
import program_icon_2 from'../../assets/progr_i_2.jpg'
import program_icon_3 from'../../assets/program_i_3.jpg'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt="" height={240}/>
            <div className="caption">
                <img src={program_icon_1} alt=""/>
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" height={240}/>
            <div className="caption">
                <img src={program_icon_2}  alt=""/>
                <p>Masters Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt=""height={240}/>
            <div className="caption">
                <img src={program_icon_3}  alt=""/>
                <p>Post Degree</p>
            </div>
        </div>
    </div>
  )
}

export default Programs
