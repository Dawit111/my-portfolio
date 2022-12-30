import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.jpeg'
import AVTR3 from '../../assets/avatar3.jpeg'
import AVTR4 from '../../assets/avatar4.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name: 'Dawit Tessema',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatum! Reprehenderit veritatis alias exercitationem facilis recusandae illo autem ipsa. Assumenda iure obcaecati ad dolorum porro esse commodi sit explicabo sapiente!'
    },
    {
        avatar: AVTR2,
        name: 'Asrat Adane',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatum! Reprehenderit veritatis alias exercitationem facilis recusandae illo autem ipsa. Assumenda iure obcaecati ad dolorum porro esse commodi sit explicabo sapiente!'
    },
    {
        avatar: AVTR3,
        name: 'Abel Kebede',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatum! Reprehenderit veritatis alias exercitationem facilis recusandae illo autem ipsa. Assumenda iure obcaecati ad dolorum porro esse commodi sit explicabo sapiente!'
    },
    {
        avatar: AVTR4,
        name: 'Melat Worku',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatum! Reprehenderit veritatis alias exercitationem facilis recusandae illo autem ipsa. Assumenda iure obcaecati ad dolorum porro esse commodi sit explicabo sapiente!'
    }
]

const Testimonials =()=> {
    return(
        <section id='testimonials'>
            <h5>Rreview from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="testimonials__container"
    
               modules={[Pagination]} spaceBetween={40}
               slidesPerView={1}
               pagination={{ clickable: true }}>
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                        <SwiperSlide key={index} className='testimonial'>
                             <div className='client__avatar'>
                               <img src={avatar}/>
                             </div>
                             <h5 className='client__name'>{name}</h5>
                             <small className='client__review'>{review}</small>
                         </SwiperSlide>
                        )

                    })
                }
            </Swiper>
        </section>
    );
}
export default Testimonials