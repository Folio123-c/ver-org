import Footer from "../components/Footer"
import Header from "../components/Header"
import aboutImageBg from "../assets/images/IMG-20221114-WA0010.jpg"

const ContactUs=()=>{
    return(
        <>
        <Header/>
        <main>
  {/* breadcrumb-area */}
  <section className="breadcrumb-area d-flex  p-relative align-items-center" style={{ backgroundImage: `url(${aboutImageBg})`,backgroundPosition:"center" }}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-12 col-lg-12">
          <div className="breadcrumb-wrap text-left">
            <div className="breadcrumb-title">
              <h2>Contact Us</h2>  
              <div className="breadcrumb-wrap">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* breadcrumb-area-end */}
  {/* contact-area */}
  {/* <section id="contact" className="contact-area after-none contact-bg pt-120 pb-120 p-relative fix">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 order-2">
          <div className="contact-bg">
            <div className="section-title center-align text-center mb-50">
              <h2>
                Contact Via Email
              </h2>
            </div>
            <form action="https://htmldemo.zcubethemes.com/dcfarm/mail.php" method="post" className="contact-form mt-30 text-center">
              <div className="row">
                <div className="col-lg-4">
                  <div className="contact-field p-relative c-name mb-30">                                    
                    <input type="text" id="firstn" name="firstn" placeholder="First Name" required />
                    <i className="icon fal fa-user" />
                  </div>                               
                </div>
                <div className="col-lg-4">                               
                  <div className="contact-field p-relative c-subject mb-30">                                   
                    <input type="text" id="email" name="email" placeholder="Email" required />
                    <i className="icon fal fa-envelope" />
                  </div>
                </div>		
                <div className="col-lg-4">                               
                  <div className="contact-field p-relative c-subject mb-30">                                   
                    <input type="text" id="phone" name="phone" placeholder="Phone No." required />
                    <i className="icon fal fa-phone" />
                  </div>
                </div>	                            
                <div className="col-lg-12">
                  <div className="contact-field p-relative c-message mb-30">                                  
                    <textarea name="message" id="message" cols={30} rows={50} placeholder="Write comments" defaultValue={""} />
                    <i className="icon fal fa-edit" />
                  </div>
                  <div className="slider-btn  text-center">                                          
                    <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">Make An Request <i className="fal fa-long-arrow-right" /></button>				
                  </div>                             
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/* contact-area-end */}
  {/* services-area */}          
  <section id="services" className="services-area contact-info pt-120 pb-120 fix">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center mb-50 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
            <h5>Contact Info</h5>
            <h2>
              Get In Touch
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4">
          <div className="services-box text-center">
            <div className="services-icon">
              <img src="../assets/img/bg/contact-icon01.png" alt="image" />
            </div>
            <div className="services-content2">
              <h5>+250-788-704-505</h5>   
              <p>Phone Support</p>
            </div>
          </div>   
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="services-box text-center active">
            <div className="services-icon">
              <img src="../assets/img/bg/contact-icon02.png" alt="image" />
            </div>
            <div className="services-content2">
              <h5><a href="mailto:jobs@webtrueexample.com">info@verrwanda.org</a></h5>   
              <p>Email Address</p>
            </div>
          </div>   
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="services-box text-center">
            <div className="services-icon">
              <img src="../assets/img/bg/contact-icon03.png" alt="image" />
            </div>
            <div className="services-content2">
              <h5>Rutsiro,NR7,Kivumu Sector</h5>   
              <p>Office Address</p>
            </div>
          </div>   
        </div>
      </div>
    </div>
  </section>
  {/* services-area-end */}
  <Footer/>
</main>

        </>
    )
}

export default ContactUs