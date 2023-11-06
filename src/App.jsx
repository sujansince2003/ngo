// import { useState } from "react";

import Volunteer from "./componenta/volunteer";

import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faPeopleGroup,
  faHandshakeAngle,
  faPersonCircleCheck,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import "./App.css";
import "./Mobile.css";
import Testinomials from "./componenta/Testinomial";
import Recentwork from "./componenta/recentwork";
import Faqcomp from "./componenta/faq";
import Donate from "./componenta/Donate";

function App() {
  return (
    <>
      <div className="maincontent">
        <header>
          <div className="logo">
            <img
              className="logoimg"
              src="https://i.postimg.cc/7ZWv3q2y/logo.png"
              alt="logo"
            />
          </div>
          <nav>
            <a href="#">Home</a>

            <Link
              activeClass="active"
              to="aboutus"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="linkscroll"
            >
              About Us
            </Link>

            <Link
              activeClass="active"
              to="missions"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="linkscroll"
            >
              Missions
            </Link>

            <Link
              activeClass="active"
              to="ourworks"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="linkscroll"
            >
              Our Works
            </Link>

            <Link
              activeClass="active"
              to="volunteer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="linkscroll"
            >
              Our Team
            </Link>

            <Link
              activeClass="active"
              to="contactus"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="linkscroll"
            >
              Contact Us
            </Link>
          </nav>
        </header>
        <section className="hero">
          <div className="left">
            <h1>
              &quot;Help us to color the world with compassion and understanding
              &quot;
            </h1>

            <h3>
              &quot;Support our mission to make a difference in the lives of
              children with Autism from rural part of Nepal where people still
              believes Autism as Curse.&quot;
            </h3>
          </div>
          <div className="right">
            <img
              className="herochildrenimg"
              src="https://i.postimg.cc/d03sFW8J/mainimg.jpg"
              alt="herochildren"
            />
          </div>
        </section>
        <section className="features1">
          <div className="feature1 feature1">
            <div>
              <FontAwesomeIcon
                icon={faHandshakeAngle}
                style={{ color: "#f90033", fontSize: "50px" }}
              />
            </div>
            <div className="featurediv">
              <h2>Support and Care</h2>
              <p>
                We are dedicated to providing unwavering support and heartfelt
                care for individuals with autism. Our mission is to bridge the
                gap, ensuring that every child and family feels valued,
                understood, and empowered. Together, we nurture a brighter
                future for our community.
              </p>
            </div>
          </div>
          <div className="feature1 feature1">
            <div>
              <FontAwesomeIcon
                icon={faPersonCircleCheck}
                style={{ color: "#fb0021", fontSize: "50px" }}
              />
            </div>
            <div className="featurediv">
              <h2>Dedicated</h2>
              <p>
                Our dedication is a beacon of hope for families affected by
                autism. We tirelessly work to build a more inclusive and
                supportive community.
              </p>
            </div>
          </div>
          <div className="feature1 feature1">
            <div>
              <FontAwesomeIcon
                icon={faPeopleGroup}
                style={{ color: "#f30030", fontSize: "50px" }}
              />
            </div>
            <div className="featurediv">
              <h2>Strong Team</h2>
              <p>
                As a strong and united team, we empower each other to make a
                lasting impact in the lives of those with autism. Together, we
                are the driving force behind positive change and brighter
                futures.
              </p>
            </div>
          </div>
          <div className="feature1 feature1">
            <div>
              <FontAwesomeIcon
                icon={faHandshake}
                style={{ color: "#f30030", fontSize: "50px" }}
              />
            </div>
            <div className="featurediv">
              <h2> Our Commitment</h2>
              <p>
                Our tireless efforts to raise awareness, promote understanding,
                and provide invaluable support to individuals and families
                affected by autism.
              </p>
            </div>
          </div>
        </section>
        <section className="aboutus">
          <div className="aboutus-img">
            <img src="https://i.postimg.cc/7ZWv3q2y/logo.png" alt="" />
          </div>
          <div className="aboutus-right">
            <span className="aboutust titles">About us</span>
            <h1 className="red-text">
              {" "}
              “How we are aiming to make a difference in lives of Autistic
              children”
            </h1>
            <p>
              Autism Care and Support Society Nepal, Bardaghat-04, Nawalparasi
              (ACSSN) was founded on 7th August 2023. We are active autism
              organization in Nepal that is run by passionate parents that care
              for persons with autism. It is a non-governmental, nonprofit
              making, non-political NGO registered in District Administration
              Office (Regd. No. 2597/2080) and affiliated to Social Welfare
              Council (SWC No: 55796).
            </p>
            <p>
              In the picturesque landscapes of rural Nepal, our Autism
              Organization is fervently dedicated to catalyzing transformation
              among children with autism, particularly those hailing from
              financially challenged backgrounds. We recognize that economic
              constraints often compound the daily struggles faced by these
              families, limiting their access to essential resources and
              support. That&apos;s why, we have been unwavering in our
              commitment to bridging this gap and ensuring that every child,
              regardless of their socio-economic status, has access to the basic
              level trainings and interventions they deserve. These fundamental
              trainings equip autistic children with crucial life skills,
              helping them navigate their world with greater confidence and
              independence. Moreover, we extend our outreach to the parents,
              providing them with the knowledge and tools they need to support
              their children effectively.
              <br></br>
              <br></br>
              As a result, we witness not only the remarkable growth and
              development of these children but also the profound positive
              impact on their families. Through the empowerment of the
              financially challenged, we are sowing the seeds of hope and
              progress, nurturing a more inclusive and compassionate society
              where every child&apos;s potential can flourish, regardless of
              their financial circumstances. Our work in rural Nepal stands as a
              testament to the unwavering spirit of our organization, dedicated
              to bringing about meaningful change, one child and one family at a
              time.
            </p>
          </div>
        </section>
        <section className="missions">
          <div className="missiontitle1 titles">Our mission</div>
          <div className="missiontitle2 red-text">Why Do We This</div>
          <div>
            <p className="mainmission">
              &quot; Our mission is to transform lives and create a more
              inclusive society for children with autism in Nepal. &quot;
            </p>
          </div>
          <div className="missionss">
            {/* <div className="missionslist">
              <div className="mission1 mission">
                <div>
                  <img
                    className="mission-img"
                    src="https://i.postimg.cc/15SyXRpC/edu.webp"
                    alt=""
                  />
                </div>
                <div className="missiondiv">
                  <h2>Education</h2>
                  <p>
                    Education, nutrition and holistic development of children
                  </p>
                </div>
              </div>
              <div className="mission1 mission">
                <div>
                  <img
                    className="mission-img"
                    src="https://i.postimg.cc/mrPsJPsD/health.webp"
                    alt=""
                  />
                </div>
                <div className="missiondiv">
                  <h2>Health Care</h2>
                  <p>Taking healthcare services to needy children </p>
                </div>
              </div>
              <div className="mission1 mission">
                <div>
                  <img
                    className="mission-img"
                    src="https://i.postimg.cc/9FPFYwmH/awareness.webp"
                    alt=""
                  />
                </div>
                <div className="missiondiv">
                  <h2>Awareness</h2>
                  <p>Effective Awareness Program about Autism</p>
                </div>
              </div>
              <div className="mission1 mission">
                <div>
                  <img
                    className="mission-img"
                    src="https://i.postimg.cc/WzwLgrM9/livelihood.webp"
                    alt=""
                  />
                </div>
                <div className="missiondiv">
                  <h2>Livelihood</h2>
                  <p>
                    Skill training and placement support for underprivileged
                    Childrens
                  </p>
                </div>
              </div>
            </div> */}
            <Faqcomp />
          </div>
        </section>

        <Recentwork />
        <section className="helpus">
          <h4 className="red-text">How Can We Help Them?</h4>
          <h3>
            Clothe yourselves with compassion, kindness, humility, gentleness,
            volunteering, speard helping hands and open heart for autistic
            children for Nepal. This can help us feel a sense of belonging, make
            new friends, and connect with our communities. “I am ready”
            <br />
            ARE YOU?
          </h3>
          <div className="help">
            <div className="help1">
              <div>
                <img
                  src="https://i.postimg.cc/W1WV5MxC/Giving-Love.png"
                  alt=""
                />
              </div>
              <div className="helpdiv">
                <h2>Giving Love</h2>
                <p>
                  Embracing Autism: Nurturing Uniqueness, Building
                  Understanding, and Cultivating Inclusive Support with Love.
                </p>
              </div>
            </div>
            <div className="help1">
              <div>
                <img src="https://i.postimg.cc/jqPsRnJn/Donations.png" alt="" />
              </div>
              <div className="helpdiv">
                <h2>Donations</h2>
                <p>
                  Fostering Impact: Supporting Causes, Empowering Change, and
                  Driving Progress through Generous Donations.
                </p>
              </div>
            </div>
            <div className="help1 ">
              <div>
                <img
                  src="https://i.postimg.cc/HkxD8rj2/Volunteering.png"
                  alt=""
                />
              </div>
              <div className="helpdiv">
                <h2>Volunteering</h2>
                <p>
                  Enabling Impact: Inspiring Action, Cultivating Empathy, and
                  Driving Change through Dedicated Volunteering.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Testinomials />
        <Donate />
        <Volunteer />
        <section className="contactus">
          <div className="missiontitle2">CONTACT US</div>
          <div className="contact">
            <div className="contact1 ">
              <div>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#fb001c", fontSize: "50px" }}
                />
              </div>
              <h4>Our main Office</h4>
              <p>
                Bardaghat Municipality-04,Badhipidit, Nawalparasi-west,Lumbini
                Province,Nepal
              </p>
            </div>
            <div className="contact1 ">
              <div>
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: "#f8002c", fontSize: "50px" }}
                />
              </div>
              <h4>Phone Number</h4>
              <p>🇳🇵+977-9864153866</p>
              <p>🇳🇵+977-9809103854</p>
            </div>
            <div className="contact1 ">
              <div>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ color: "#f00029", fontSize: "50px" }}
                />
              </div>
              <h4>WhatsApp</h4>
              <a
                href="https://api.whatsapp.com/send?phone=9864153866"
                target="blank"
              >
                🔗Click to Chat Now!!!
              </a>
            </div>
            <div className="contact1 ">
              <div>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#f8003c", fontSize: "50px" }}
                />
              </div>
              <h4>E-mail</h4>
              <p>Karki.rohit.45@gmail.com</p>
              <p>Sunar.chija45@gmail.com</p>
            </div>
          </div>
        </section>

        <footer>
          <div className="footer">
            <img
              className="logoimg"
              src="https://i.postimg.cc/7ZWv3q2y/logo.png"
              alt="logo"
            />

            <div className="followus">
              <h4 className="bg">Follow us</h4>
              <div className="slinks">
                <a
                  href="https://www.facebook.com/profile.php?id=61551476039876"
                  target="blank"
                >
                  <img
                    className="sicon bg"
                    src="https://i.postimg.cc/nhcZKdSq/facebook.png"
                    alt=""
                  />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=9864153866"
                  target="blank"
                >
                  <img
                    className="sicon"
                    src="https://i.postimg.cc/9FXbqtqG/whatsapp.png"
                    alt=""
                  />
                </a>

                <a href="#">
                  <img
                    className="sicon"
                    src="https://i.postimg.cc/yd9z62WC/instagram.png"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    className="sicon"
                    src="https://i.postimg.cc/8PwgCRkc/twitter.png"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    className="sicon"
                    src="https://i.postimg.cc/nrJfXTQj/linkedin.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="quicklinks">
              <h4 className="bg">Quick Links</h4>
              <a href="#">Home</a>

              <Link
                activeClass="active"
                to="aboutus"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="linkscroll"
              >
                About Us
              </Link>

              <Link
                activeClass="active"
                to="missions"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="linkscroll"
              >
                Missions
              </Link>

              <Link
                activeClass="active"
                to="ourworks"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="linkscroll"
              >
                Our Works
              </Link>

              <Link
                activeClass="active"
                to="volunteer"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="linkscroll"
              >
                Our Team
              </Link>

              <Link
                activeClass="active"
                to="contactus"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="linkscroll"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="credits">
            <p>
              <span> ACSSN ©All Rights Reserved-2023</span>
              <span className="developer">
                Developed with ❤️ by
                <a href="https://www.facebook.com/sujansince2003">
                  Sujan Khatri
                </a>
              </span>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
