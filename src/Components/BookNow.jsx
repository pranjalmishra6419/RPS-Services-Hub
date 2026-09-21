import React, { useState } from "react";
import "../Components/Css/BookNow.css";
import Header from './Header'
import Footer from './Footer'

const BookService = () => {
  const [service, setService] = useState("");
  const [provider, setProvider] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();

    alert("Pahle Login Kijiye Phir Book Kijiye!");
  };

  return (
    <>
    <Header/>
    <div className="book-service-page">

      <div className="book-service-container">

        <div className="book-service-left">
          <span>BOOK A SERVICE</span>

          <h1>Get Your Service<br />Booked Easily.</h1>

          <p>
            Choose the service you need, select a provider and
            pick a convenient time. We'll take care of the rest.
          </p>

          <div className="book-service-info">
            <div>
              <strong>01</strong>
              <p>Select Service</p>
            </div>

            <div>
              <strong>02</strong>
              <p>Choose Provider</p>
            </div>

            <div>
              <strong>03</strong>
              <p>Confirm Booking</p>
            </div>
          </div>
        </div>


        <div className="book-service-card">

          <div className="book-service-card-head">
            <span>QUICK BOOKING</span>
            <h2>Book Your Service</h2>
            <p>Fill in the details below to continue.</p>
          </div>

          <form onSubmit={handleBooking}>

            <div className="book-service-form-group">
              <label>Select Service</label>

              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
              >
                <option value="">Choose a service</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Electrical">Electrical</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Tech">Tech Services</option>
                <option value="Vehicle">Vehicle Services</option>
                <option value="Personal Care">Personal Care</option>
              </select>
            </div>


            <div className="book-service-form-group">
              <label>Select Provider</label>

              <select
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                required
              >
                <option value="">Choose a provider</option>
                <option value="Provider 1">Available Provider 1</option>
                <option value="Provider 2">Available Provider 2</option>
                <option value="Provider 3">Available Provider 3</option>
              </select>
            </div>


            <div className="book-service-row">

              <div className="book-service-form-group">
                <label>Preferred Date</label>

                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div className="book-service-form-group">
                <label>Preferred Time</label>

                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>

            </div>


            <div className="book-service-form-group">
              <label>Service Address</label>

              <textarea
                placeholder="Enter your complete address..."
                rows="3"
                required
              ></textarea>
            </div>


            <div className="book-service-form-group">
              <label>Additional Details</label>

              <textarea
                placeholder="Tell us about the service you need..."
                rows="3"
              ></textarea>
            </div>


            <button type="submit" className="book-service-btn">
              Confirm Booking →
            </button>

          </form>

        </div>

      </div>

    </div>
    <Footer/>
    </>
  );
};

export default BookService;