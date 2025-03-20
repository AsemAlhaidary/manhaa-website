import { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css' // Swiper core styles
import 'swiper/css/navigation' // Navigation module styles
import 'swiper/css/pagination' // Pagination module styles
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import { config } from '../../data'

export default function CustomersSlider() {
  const customers = config.siteContent.customers.customers

  return (
    <div className='customers-slider'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Add required modules
        spaceBetween={30} // Space between slides
        slidesPerView={5} // Number of slides visible at once
        pagination={{ clickable: true }} // Enable pagination dots
        autoplay={{ delay: 3000 }} // Auto-slide every 3 seconds
        loop // Infinite loop
        breakpoints={{
          // Responsive breakpoints
          320: { slidesPerView: 2 }, // 2 slides on small screens
          768: { slidesPerView: 3 }, // 3 slides on medium screens
          1024: { slidesPerView: 5 }, // 4 slides on large screens
        }}
      >
        {customers.map((customer, index) => (
          <SwiperSlide key={index}>
            <div className='slider-card'>
              <img src={customer.logo} alt={customer.name} title={customer.name} className='customer-logo' draggable='false' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}