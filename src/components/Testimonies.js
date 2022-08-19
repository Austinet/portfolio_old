import React from 'react'

const Testimonies = ({comments, names, job, pictur}) => {
  return (
    <div className="testimony">
      <p> {comments}</p>
      <img src={pictur} alt="" />
      <h3>{names}</h3>
      <h4>{job}</h4>
    </div>
  )
}

export default Testimonies