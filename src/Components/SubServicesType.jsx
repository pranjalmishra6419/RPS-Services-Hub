import React from 'react'
import '../Components/Css/SubServicesType.css'

const SubServicesType = ({image, spantext, heading, text, Rupees }) => {
  return (
    <>
    <section class="cleaning-services-section">
        {/* <div class="cleaning-section-heading">
          <span>OUR SERVICES</span>
          <h2>Cleaning Services We Provide</h2>
          <p>
            From regular cleaning to specialized cleaning, find a service that
            matches your requirements.
          </p>
        </div> */}

        <div class="cleaning-services-grid">
          <div class="cleaning-service-box">
            <div class="cleaning-service-image">
              <img
                src={image}
                alt="Services Hub"
              />
            </div>
            <div class="cleaning-service-info">
              <span>{spantext}</span>
              <h3>{heading}</h3>
              <p>
                {text}
              </p>
              <div class="cleaning-service-bottom">
                <strong>Starting from ₹{Rupees}</strong>
                <a href="#">Book Now</a>
              </div>
            </div>
          </div>
          

          </div>
      </section>
    </>
  )
}

export default SubServicesType