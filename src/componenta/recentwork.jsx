// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swipeer.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Recentwork() {
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
          <section className="ourworks">
            <h2 className="red-text">Our recent work</h2>
            <p className="ourworkp">
              <div className="date specialist">On September-02,2023</div>
              we have conducted a seminar with moto: &quot;Empower the Spectrum:
              Free Autism Checks for a Brighter Tomorrow&quot; where expected
              around 50-60 autistic children but very surprisingly 170 Autistic
              children attended the seminar. Not only Families around our
              district but from various part of Nepal.
              <br />
              <span className="specialist">Our autism specialist:</span>
              <span>
                Dr. Nandini Gokulchandran, Head Medical services and consultant
                regenerative medicine Neurogen Brain and spine Institue Navi,
                Mumbai
              </span>
              <span>
                Dr. Saily S. Counselling Psychologist and coordinator-
                Psychologist Department Neurogen Brain spine Institute
              </span>
            </p>
            <div className="workimgs">
              <div className="workimg">
                <img
                  className="workimg11"
                  src="https://i.postimg.cc/MKJpBm8Y/workimg1.jpg"
                  alt="herochildren"
                />
              </div>
              <div className="workimg">
                <img
                  className="workimg11"
                  src="https://i.postimg.cc/HkBYfG8S/workimg2.jpg"
                  alt="herochildren"
                />
              </div>
              <div className="workimg">
                <img
                  className="workimg11"
                  src="https://i.postimg.cc/Gmc373t8/workimg3.jpg"
                  alt="herochildren"
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="ourworks">
            <h2 className="red-text">Our recent work</h2>
            <p className="ourworkp">
              <div className="date"></div>
              We met Hon. Surendra Raj Aacharya,Minister of Ministry of Women,
              Children and Senior Citizens, Singha Durbar Kathmandu.
              <br />
              We discuss about Inclusive Education and Mental health of Mothers
              for Neurological disorder Children. We are able to elaborate the
              bigger picture of how our children with Neurological disorder
              specifically in rural part of Nepal are ill treated somewhere
              because of blind faith, lack of awareness, lack of special
              education in academic firms. Mothers are evenly vulnerable.
            </p>
            <div className="workimgs">
              <div className="workimg">
                <img
                  className="workimg11"
                  src="https://i.postimg.cc/jSf5D2NY/honsurendra.jpg"
                  alt="herochildren"
                />
              </div>
              {/* <div className="workimg">
                <img
                  className="workimg11"
                  src="https://i.postimg.cc/HkBYfG8S/workimg2.jpg"
                  alt="herochildren"
                />
              </div>
              <div className="workimg">
                <img
                  className="workimg11"
                  src="https://i.postimg.cc/Gmc373t8/workimg3.jpg"
                  alt="herochildren"
                />
              </div> */}
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
