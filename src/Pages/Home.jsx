
import { React, useEffect, useState } from "react"
import Header from "../components/Header"
import Coursel from "../components/Coursel"
import Footer from "../components/Footer"
import Activities from "../components/Activities"
import { Services } from "../assets/Data/Activities"
import AboutSection from "../components/AboutSection"
import OurSteps from "../components/OurSteps"
import { GalleryData } from "../assets/Data/Gallery"
import { Link } from "react-router-dom"
import "../components/header.css"
import AOS from 'aos';
import directus from "../Services/directus"
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ProjectCategory from "../components/ProjectCategory"
import Partners from "../components/Partners"
import ProjectDetail from "./ProjectDetails"
import { IoArrowBackCircleSharp } from "react-icons/io5"
// ..
AOS.init();
const Home = (() => {
  const [detailedData,setDetailedData]=useState(null);
  const [projectDetails, setProjectsDetails] = useState(false);
 console.log("projects details",projectDetails)

  return (
    <>
   
      <div className="mainContainer">

        {/* Cursor */}
        <div className="cursor js-cursor" />

        {/* header */}
        <Header />
        {/* header-end */}
        {!projectDetails?
        <>
        {/* main-area */}
        <main>

          {/* slider-area */}
          <Coursel />
          {/* slider-area-end */}

          {/* service-area */}
          <section className="service-details-three p-relative fix -mt-[12rem]">
            <div className="container">
              <div className="row sbox">
                {Services?.map((el) => {
                  return (
                    <div className="col-lg-3 col-md-6 col-sm-12 ">
                      <div className="services-box mb-30 text-center wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                        <div className="sr-contner h-32">
                          <div className="icon">
                            <i className="far fa-leaf" />
                          </div>
                          <div className="text">
                            <h3> <a>{el?.name}</a> </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
          {/* service-area-end */}

          {/* about-area */}
          <section className="about-area about-p pt-120 pb-120 p-relative fix " data-aos="fade-in"> 
            <AboutSection />
          </section>
          {/* about-area-end */}

          {/* Activities Section*/}
          <section id="services-05" className="services-05 pt-120 pb-100 p-relative fix" style={{ background: 'url(../assets/img/bg/services-bg.png)', backgroundRepeat: 'no-repeat' }}>
            <div className="container">
              <div className="row justify-content-center align-items-center center-align">
                <div className="col-lg-6 col-md-12">
                  <div className="section-title text-center mb-20 wow fadeInDown  animated" data-aos="fade-in">
                    <h5>What we Did</h5>
                    <h2>
                      Vie et Environment &amp; forest management
                    </h2>
                  </div>
                </div>
              </div>
              <Activities />
            </div>
          </section>
          {/* Activities Section End */}

          {/* steps-area */}
          <OurSteps />
          {/* steps-area-end */}

          {/* newslater-area */}
          <section className="newslater-area pt-120 pb-200" style={{ backgroundColor: "rgba(0,110,47,255)", backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-7">
                  <div className="section-title newslater-title wow fadeInDown  animated" data-animation="fadeInDown" data-delay=".4s">
                    <div className="text">
                      <h5>Subscribe</h5>
                      <h2>Join Us &amp; Get Upadate From Us</h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5">
                  <form name="ajax-form" id="contact-form4" action="#" method="post" className="contact-form newslater wow fadeInDown  animated" data-animation="fadeInDown" data-delay=".4s">
                    <div className="form-group p-relative">
                      <input className="form-control" id="email2" name="email" type="email" placeholder="Email Address..." required />
                      <button type="submit" className="btn btn-custom" id="send2">Subscribe Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* newslater-aread-end */}

          {/* video-area */}
          <section id="video" className="video-area p-relative wow fadeInUp  animated" data-animation="fadeInUp" data-delay=".4s">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="s-video-wrap" style={{ backgroundImage: 'url(../assets/img/bg/video-img2.png)' }}>
                    <div className="s-video-content text-center">
                      <h6><a href="https://www.youtube.com/watch?v=aGg_eRkbaAc" target="blank" className="popup-video mb-50"><img src="../assets/img/bg/play-button2.png" alt="circle_right" /></a></h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* video-area-end */}

       <ProjectCategory setDetailedData={setDetailedData} setProjectsDetails={setProjectsDetails} data={detailedData}/>
       <div className="secstion-title bg-[#fdcd0d1a] center-align mbd-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                <h1 className="text-xl pt-3">Gallery</h1>
              </div>
       {/* <section className="bg-[#fdcd0d1a] overflow-hidden">
       <div className="section-title  center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                
              </div>
  <div className="max-w-screen-xl  2xl:max-w-screen-3xl flex flex-col justify-center">
    <div className="flex flex-col sm:flex-row mx-20 my-12">
    {GalleryData?.map((el) => {
                  return (
                      <img src={el?.img} className="rounded-xl rotate-6 pb-5 pt-[10rem] hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-64 object-cover hover:scale-150 transform origin-bottom" alt="#_" /> 
                  )
                })}
    </div> 
    <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
      <div className="pointer-events-auto flex w-full max-w-md divide-x divide-neutral-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
      </div>
    </div> 
  </div>
  
</section> */}
{/* <div className="bg-[#fdcd0d1a] h-32">

<div className="second-header-btn float-right mr-10">
                          <Link to={"/gallery"} className="btn">View More</Link>
                        </div>
</div> */}
          {/* blog-area-end */}
          {/* brand-area */}

          <Partners/>

          {/* brand-area-end */}
        </main>
        {/* main-area-end */}
        {/* footer */}
</>:<>
<section
          className="breadcrumb-area d-flex  p-relative align-items-center"
          style={{ backgroundImage: "url(../assets/img/bg/bdrc-bg.jpg)" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12">
                <div className="breadcrumb-wrap text-left">
                  <div className="breadcrumb-title">
                    <h2>Projects Details</h2>
                    <div className="breadcrumb-wrap">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                          </li>
                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            Projects
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {projectDetails &&  <h1 className="flex text-lg gap-2 ml-3 mt-3 cursor-pointer" onClick={()=>setProjectsDetails(false)}><IoArrowBackCircleSharp size={32} color="green"/><span className="pt-1">Go Back</span> </h1>}
<ProjectDetail data={detailedData}/>
</>}
      </div>
      <Footer />

    </>
  
)}
)
export default Home