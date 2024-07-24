
import img from "../assets/images/pexels-photo-7457178.jpeg"
import imgTwo from "../assets/images/IMG-20221114-WA0011.jpg"
const OurSteps=()=>{
    return(
        <>
         <section className="steps-area p-relative pb-120 overflow-clip">
            <div className="container ">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-12">
                  <div className="wow fadeInLeft animated border-4 border-yellow-500  w-[30rem] border-l-yellow-500 relative p-1 rounded-xl" data-animation="fadeInLeft" data-delay=".4s">
                    <img src={imgTwo} alt="class image" className="h-[30rem] w-[30rem] rounded-xl relative left-3 top-5"/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="pl-60">
                    <div className="section-title mb-50 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                      {/* <h5>Our Steps</h5> */}
                      <h2 className="capitalize">Operational spaces</h2>
                    </div>
                    <ul>
                      <li>
                        <div className="step-box wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                          <div className="dnumber">
                            <div className="date-box"><img src="../assets/img/icon/fea-icon04.png" alt="icon" /></div>
                          </div>
                          <div className="text">
                            <h3>soil erosion</h3>
                            <p className="">Minimizing the impact of water or wind forces is the main objective for erosion control.</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="step-box wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                          <div className="dnumber">
                            <div className="date-box"><img src="../assets/img/icon/fea-icon05.png" alt="icon" /></div>
                          </div>
                          <div className="text">
                            <h3>destruction of agricultural land and deforestation</h3>
                            <p>Deforestation contributes to climate change by increasing carbon dioxide levels in the atmosphere, as trees that once absorbed CO2 are removed. It also results in habitat destruction, threatening the survival of numerous plant and animal species. </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="step-box wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                          <div className="dnumber">
                            <div className="date-box"><img src="../assets/img/icon/fea-icon06.png" alt="icon" /></div>
                          </div>
                          <div className="text">
                            <h3>forest management</h3>
                            <p>It often involves evaluating the soil, trees and vegetation within a forest ecosystem and performing a variety of complex tasks to improve land management practices</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    )
}
export default OurSteps