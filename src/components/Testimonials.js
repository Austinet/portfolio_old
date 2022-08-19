import React from 'react'
import './css/testimonials.css'
import austinet from './img/Austinet.jpg'
import profile from './img/profile.jpg'
import Testimonies from './Testimonies'

let testimoniesData = [
    {
        names: 'Udhe Austine Ogaga',
        job: 'Frontend Developer',
        comments: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ab repellat vel suscipit facere reiciendis, fugiat dolorem magni quisquam ad veritatis unde rerum delectus! Architecto repudiandae ab placeat voluptates? Vel?',
        pictur: austinet 
    },
    {
        names: 'Kings Queens',
        job: 'Frontend Developer',
        comments: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ab repellat vel suscipit facere reiciendis, fugiat dolorem magni quisquam ad veritatis unde rerum delectus! Architecto repudiandae ab placeat voluptates? Vel?',
        pictur: profile 
    },
    {
        names: 'Prince Princess',
        job: 'Frontend Developer',
        comments: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ab repellat vel suscipit facere reiciendis, fugiat dolorem magni quisquam ad veritatis unde rerum delectus! Architecto repudiandae ab placeat voluptates? Vel?',
        pictur: austinet     
    }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      
        <h2>Testimonials</h2>
        <div className="testimonials">   
           {
            testimoniesData.map((items)=>(<Testimonies className="testimony" key={items.names} names={items.names} pictur={items.pictur} job={items.job} comments={items.comments}/>))
           }
        </div>
    </section>
  )
}

export default Testimonials