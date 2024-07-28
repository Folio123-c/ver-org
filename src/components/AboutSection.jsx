
import aboutImage from "../assets/images/IMG-20221114-WA0005.jpg"
import experienceImage from "../assets/images/experiences year.png"
const AboutSection=()=>{
    return(
        <>
        <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 col-md-12 col-sm-12">
                  <div className="about-content s-about-content  wow fadeInRight  animated" data-animation="fadeInRight" data-delay=".4s">
                    <div className="about-title second-title pb-25">
                      <h5>About Us</h5>
                      <h2>We  Provide Environmental Solution</h2>
                    </div><p>We are committed to sustainably improve the well-being of poor people of Rwanda by using community-based approach to find solutions of food insecurity to livelihoods and environmental challenges.

                    </p>
                    <p>We recognize the relationships between communities and their environment and how environmental issues affect human health. We support environmentally friendly practices that promote proper use of natural resources, agricultural inputs and safe use of equipment and tools.</p>
                    <p>We work with financial service providers and their clients to develop green business models and create financial products that promote environmentally sustainable business practices</p>
                    <p>We recognize the gendered impacts of climate change and assist women and other marginalized individuals in adapting through specific strategies and activities. We also harness their specialized knowledge and leadership to address climate-related risks.</p>
                  </div>
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12">
                  <div className="s-about-img p-relative relative shadow-md wow fadeInLeft animated p-2 rounded-md" data-animation="fadeInLeft" data-delay=".4s">
                    <img src={aboutImage} alt="img" className="w-full rounded-md"/>
                    <img src={experienceImage} alt="img" className=" hidden lg:block lg:w-[9.8rem] lg:h-[9rem] rounded-md absolute top-[35%] -right-10"/>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}
export default AboutSection