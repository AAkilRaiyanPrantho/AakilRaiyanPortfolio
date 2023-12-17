// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { FaGithub } from "react-icons/fa";

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

// importing images
import p1s1 from '../../../images/project 1/ss1.png'
import p1s2 from '../../../images/project 1/ss2.png'
import p1s3 from '../../../images/project 1/ss3.png'

import p2s1 from '../../../images/project 2/p2s1.png'
import p2s2 from '../../../images/project 2/p2s2.png'
import p2s3 from '../../../images/project 2/p2s3.png'

import p3s1 from '../../../images/project 3/p3s1.png'
import p3s2 from '../../../images/project 3/p3s2.png'
import p3s3 from '../../../images/project 3/p3s3.png'



const Projects = () => {
  return (
    <div>
        {/* Project 1 */}
        <div className="flex flex-col justify-center items-center">
        <div><h1 className='text-2xl font-bold text-[#45daf5]'>1. X-Mobiles</h1>
        <p className='text-lg'>A car showroom website. People can look for
        different cars from different brands and make a purchase when they make
        up their minds</p>
        <p className="italic text-xl font-bold text-[#45daf5]"><a href="https://x-mobiles-car-showroom.netlify.app">Live Link</a></p></div>
        <div className='lg:px-40 my-10'>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={p1s1} className='w-[800px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p1s2} className='w-[800px] ' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p1s3} className='w-[800px]' />
        </SwiperSlide>
      </Swiper>
        </div>
        </div>
        {/* Project 2 */}
        <div className="flex flex-col justify-center items-center">
        <div className='w-2/4'><h1 className='text-2xl font-bold text-[#45daf5]'>2. Learniverse</h1>
        <p className='text-lg'>An online education platform. Here students can upload their own
        created assignments and also take part in assignments submitted by other
        students. One can see their submitted answer scripts and see whether
        they have been checked by the examiner or not</p>
        <p className="italic text-xl font-bold text-[#45daf5]"><a href="https://learniverse-education.netlify.app/ ">Live Link</a></p></div>
        <div className='lg:px-40 my-10'>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={p2s1} className='w-[800px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p2s2} className='w-[800px] ' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p2s3} className='w-[800px]' />
        </SwiperSlide>
      </Swiper>
        </div>
        </div>
        {/* Project 3 */}
        <div className="flex flex-col justify-center items-center">
        <div className='w-2/4'><h1 className='text-2xl font-bold text-[#45daf5]'>3. SkyNest</h1>
        <p className='text-lg'>This is an Apartment Renting site. The owner of a building is the
        admin of this website and others can use this site by becoming a User.
        They can browse through the site and look for a rental apartment. Once
        they find one, they can apply for a rental and the Owner can either
        accept or deny such request. Once the request is accepted, the User
        becomes a member and can see extra features in his/her Dashboard</p>
        <p className="italic text-xl font-bold text-[#45daf5]"><a href="https://skynest-apartments.netlify.app/ ">Live Link</a></p></div>
        <div className='lg:px-40 my-10'>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={p3s1} className='w-[800px]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p3s2} className='w-[800px] ' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p3s3} className='w-[800px]' />
        </SwiperSlide>
      </Swiper>
        </div>
        </div>
      <div className='flex justify-center items-center gap-4 my-4'>
        <p>Check Out My GitHub for More →</p>
        <a href="https://github.com/AAkilRaiyanPrantho" target="blank"><button className='btn btn-outline btn-info text-2xl'><FaGithub /></button></a>
        </div>
    </div>
  );
};

export default Projects;
