// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swipeer.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Testinomials() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="testinomials">
            <div className="mob-hidden">
              <img
                className="founderimg"
                src="https://i.postimg.cc/3Nmr6d2p/founder.jpg"
                alt="herochildren"
              />
            </div>
            <div className="messages">
              <h2 className="red-text msg-founder">
                {" "}
                Message from our Founder
              </h2>
              <div className="desktop-hidden">
                <img
                  className="founderimg"
                  src="https://i.postimg.cc/3Nmr6d2p/founder.jpg"
                  alt="herochildren"
                />
              </div>
              <div className="message">
                <p>
                  As the Chairperson of our Autism Organization and mother of
                  Autistic Child, Chiraag Karki, I am deeply humbled and
                  inspired by the incredible journey we have started and
                  embarked upon together. Our mission to provide basic level
                  training to economically challenged children with autism is a
                  testament to the power of compassion, resilience, and
                  unwavering dedication. In the heart of rural Nepal, where
                  financial hardships can often overshadow the dreams and
                  aspirations of our children, we stand as a beacon of hope. Our
                  commitment to extending a helping hand to those who need it
                  the most is a source of immense pride for us all. Through your
                  support and our collective efforts, we are making a profound
                  difference in the lives of these children and their families.
                  We are empowering them with the tools, knowledge, and skills
                  they need to navigate the complex world of autism. With each
                  training session, we are planting the seeds of hope, growth,
                  and independence. I want to express my heartfelt gratitude to
                  each and every one of you. Your generosity, kindness, and
                  belief in our cause have allowed us to reach new heights in
                  our mission. Together, we are transforming the lives of
                  children who, for too long, have been denied the opportunities
                  they deserve. As we move forward, let us continue to work
                  tirelessly, to innovate, and to inspire. Let us keep the flame
                  of hope burning brightly in the hearts of these children and
                  their families. Together, we are proving that economic
                  challenges should never be a barrier to dreams and potential.
                  Thank you for being a part of this extraordinary journey. Your
                  support is not just changing lives; it is building a more
                  inclusive and compassionate world for all. With deep gratitude
                  and unwavering determination
                </p>
                <h3>
                  <span>Chija Sunar</span>
                  <span>Founder & Chairperson,ACSSN</span>
                </h3>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="testinomials">
            <div className="mob-hidden">
              <img
                className="founderimg"
                src="https://i.postimg.cc/W1nzTFCw/cofounder.jpg"
                alt="herochildren"
              />
            </div>
            <div className="messages">
              <h2 className="red-text msg-founder">
                {" "}
                Message from our Co-Founder
              </h2>
              <div className="desktop-hidden">
                <img
                  className="founderimg"
                  src="https://i.postimg.cc/W1nzTFCw/cofounder.jpg"
                  alt="herochildren"
                />
              </div>
              <div className="message">
                <p>
                  Our journey as co-founders of this Autism Organization began
                  with a simple yet profound idea: to extend a helping hand to
                  families facing economic challenges while navigating the
                  intricate landscape of autism. We realized that in the remote
                  and underserved rural areas of Nepal, where resources are
                  scarce, these families often faced insurmountable barriers. It
                  became our mission to bridge this gap and bring fundamental
                  training and support to these families, helping them and their
                  children with autism thrive despite economic constraints. We
                  understood that by empowering these families, we were not only
                  transforming individual lives but also uplifting entire
                  communities. Our journey is a testament to the power of
                  dedication and collective effort. We are proud to say that we
                  are making a tangible difference in the lives of these
                  families, enabling them to become advocates for change, not
                  only in their own homes but also in the broader rural
                  landscape of Nepal. I want to extend my heartfelt gratitude to
                  each one of you who has supported our cause. Together, we are
                  sowing the seeds of progress and fostering hope in the hearts
                  of those who need it most. With unwavering commitment,
                </p>
                <h3>
                  <span>Rohit Karki</span>
                  <span>
                    Chief Adminitrator/Co-Founder/Project Coordinator,ACSSN
                  </span>
                </h3>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
