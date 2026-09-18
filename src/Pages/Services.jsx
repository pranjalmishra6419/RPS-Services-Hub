import React from 'react'
import Header from '../Components/Header'
import SubServicesHeader from '../Components/SubServicesHeader'
import CleaningServices from './CleaningServices'
import './CSS/Services.css'

const Services = () => {
  return (
    <>
      <Header/>
      <SubServicesHeader/>
      {/* <CleaningServices/> */}

<section class="services-page-head">
    <img src="/image/services-hero-final2.png" alt="" />
</section>


<section class="services-category-section">

    <div class="services-heading">
        <span>EXPLORE SERVICES</span>
        <h2>Everything You Need, All In One Place</h2>
        <p>
            Choose a service category and find the right professional
            service for your requirement.
        </p>
    </div>


    <div class="services-category-grid">

        <div class="services-category-card">
            <div class="services-card-image">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85" alt="Home Services"/>
            </div>

            <div class="services-card-content">
                <span>01 · Transport</span>
                <h3>Moving And Shifting</h3>
                <p>
                    Get reliable help for everyday home maintenance,
                    installation and household needs.
                </p>

                <div class="services-list">
                    <a href="#">Transport</a>
                    <a href="#">Workers </a>
                    <a href="#">Packing Services</a>
                    <a href="#">Loading & Unloading</a>
                    <a href="#">Full Moving Package</a>
                </div>

                <a href="#" class="services-view-btn">View Home Services →</a>
            </div>
        </div>


        <div class="services-category-card">
            <div class="services-card-image">
                <img src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=85" alt="Vehicle Services"/>
            </div>

            <div class="services-card-content">
                <span>02 · VEHICLE</span>
                <h3>Vehicle Services</h3>
                <p>
                    Keep your bike and car in good condition with
                    convenient vehicle maintenance services.
                </p>

                <div class="services-list">
                    <a href="#">Bike Service</a>
                    <a href="#">Car Service</a>
                    <a href="#">Vehicle Repair</a>
                    <a href="#">Car Washing</a>
                    <a href="#">Battery Service</a>
                </div>

                <a href="#" class="services-view-btn">View Vehicle Services →</a>
            </div>
        </div>


        <div class="services-category-card">
            <div class="services-card-image">
                <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85" alt="Tech Services"/>
            </div>

            <div class="services-card-content">
                <span>03 · TECHNOLOGY</span>
                <h3>Tech Services</h3>
                <p>
                    Get assistance with computers, software,
                    devices and other technology-related needs.
                </p>

                <div class="services-list">
                    <a href="#">Computer Repair</a>
                    <a href="#">Laptop Service</a>
                    <a href="#">Software Support</a>
                    <a href="#">Wi-Fi Setup</a>
                    <a href="#">Device Setup</a>
                </div>

                <a href="#" class="services-view-btn">View Tech Services →</a>
            </div>
        </div>


        <div class="services-category-card">
            <div class="services-card-image">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=85" alt="Repair Services"/>
            </div>

            <div class="services-card-content">
                <span>04 · REPAIR</span>
                <h3>Repair Services</h3>
                <p>
                    Find professionals for common repair and
                    maintenance requirements around your home.
                </p>

                <div class="services-list">
                    <a href="#">Appliance Repair</a>
                    <a href="#">Furniture Repair</a>
                    <a href="#">AC Repair</a>
                    <a href="#">Fan Repair</a>
                    <a href="#">General Repair</a>
                </div>

                <a href="#" class="services-view-btn">View Repair Services →</a>
            </div>
        </div>


        <div class="services-category-card">
            <div class="services-card-image">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85" alt="Cleaning Services"/>
            </div>

            <div class="services-card-content">
                <span>05 · CLEANING</span>
                <h3>Cleaning Services</h3>
                <p>
                    Keep your home and workspace clean with
                    regular and specialized cleaning services.
                </p>

                <div class="services-list">
                    <a href="#">Home Cleaning</a>
                    <a href="#">Deep Cleaning</a>
                    <a href="#">Bathroom Cleaning</a>
                    <a href="#">Kitchen Cleaning</a>
                    <a href="#">Sofa Cleaning</a>
                </div>

                <a href="#" class="services-view-btn">View Cleaning Services →</a>
            </div>
        </div>


        <div class="services-category-card">
            <div class="services-card-image">
                <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=85" alt="Personal Care"/>
            </div>

            <div class="services-card-content">
                <span>06 · PERSONAL CARE</span>
                <h3>Personal Care</h3>
                <p>
                    Convenient personal services designed to make
                    your everyday routine easier.
                </p>

                <div class="services-list">
                    <a href="#">Salon at Home</a>
                    <a href="#">Hair Services</a>
                    <a href="#">Grooming</a>
                    <a href="#">Massage Services</a>
                    <a href="#">Beauty Services</a>
                </div>

                <a href="#" class="services-view-btn">View Personal Care →</a>
            </div>
        </div>

    </div>
</section>


<section class="services-detail-section">

    <div class="services-detail-content">
        <span>ONE PLATFORM</span>
        <h2>One Place For Different Services</h2>
        <p>
            CareFlow brings different everyday services together
            so customers don't have to search for different providers
            for every requirement.
        </p>

        <div class="services-detail-points">

            <div>
                <strong>01</strong>
                <div>
                    <h3>Home & Maintenance</h3>
                    <p>
                        Plumbing, electrical, carpentry, painting
                        and other household services.
                    </p>
                </div>
            </div>

            <div>
                <strong>02</strong>
                <div>
                    <h3>Vehicle & Repair</h3>
                    <p>
                        Vehicle servicing, repairs and general
                        maintenance solutions.
                    </p>
                </div>
            </div>

            <div>
                <strong>03</strong>
                <div>
                    <h3>Technology & Cleaning</h3>
                    <p>
                        Tech support, device services and cleaning
                        solutions for different spaces.
                    </p>
                </div>
            </div>

        </div>
    </div>

    <div class="services-detail-image">
        <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85" alt="CareFlow Services"/>
    </div>

</section>


<section class="services-process-section">

    <div class="services-heading services-dark-heading">
        <span>HOW IT WORKS</span>
        <h2>Get A Service In Simple Steps</h2>
        <p>
            Find a service, select what you need and get started.
        </p>
    </div>

    <div class="services-process-grid">

        <div class="services-process-card">
            <strong>01</strong>
            <h3>Choose a Service</h3>
            <p>
                Select the category that matches your requirement.
            </p>
        </div>

        <div class="services-process-card">
            <strong>02</strong>
            <h3>Select Your Requirement</h3>
            <p>
                Choose the specific service you want to book.
            </p>
        </div>

        <div class="services-process-card">
            <strong>03</strong>
            <h3>Book a Service</h3>
            <p>
                Provide your details and choose a suitable time.
            </p>
        </div>

        <div class="services-process-card">
            <strong>04</strong>
            <h3>Get It Done</h3>
            <p>
                Your selected service is scheduled for you.
            </p>
        </div>

    </div>

</section>

    </>
  )
}

export default Services