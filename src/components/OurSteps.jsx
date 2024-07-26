import img from "../assets/images/pexels-photo-7457178.jpeg";
import imgTwo from "../assets/images/IMG-20221114-WA0011.jpg";
import imgPillars from "../assets/images/Picture1.png";
const OurSteps = () => {
  return (
    <>
      <section className="steps-area p-relative pb-120 overflow-clip">
        <div className="container ">
          <div
            className="section-title mb-50 wow fadeInDown animated"
            data-animation="fadeInDown"
            data-delay=".4s"
          >
            {/* <h5>Our Steps</h5> */}
            <h3 className="capitalize text-3xl font-bold text-center">
              Organization strategies
            </h3>
          </div>
          <div className="w-[60%] m-auto">
            <img
              src={imgPillars}
              alt="class image"
              className="h-full w-full rounded-xl relative left-3 top-5"
            />
          </div>
          <div className="row align-items-center  mt-12 border-t-2 pt-5">
            <div className="col-lg-4 col-md-12">
              <div
                className="wow fadeInLeft animated border-4 border-yellow-500  w-[30rem] border-l-yellow-500 relative p-1 rounded-xl"
                data-animation="fadeInLeft"
                data-delay=".4s"
              >
                <img
                  src={imgTwo}
                  alt="class image"
                  className="h-[30rem] w-[30rem] rounded-md relative left-3 top-5"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="pl-60">
                <ul>
                  <li>
                    <div
                      className="step-box wow fadeInUp animated"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      <div className="dnumber">
                        <div className="date-box">
                          <img
                            src="../assets/img/icon/fea-icon04.png"
                            alt="icon"
                          />
                        </div>
                      </div>
                      <div className="text">
                        <h3>Climate change Mitigation</h3>
                        {/* <p className="">Minimizing the impact of water or wind forces is the main objective for erosion control.</p> */}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="step-box wow fadeInUp animated"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      <div className="dnumber">
                        <div className="date-box">
                          <img
                            src="../assets/img/icon/fea-icon05.png"
                            alt="icon"
                          />
                        </div>
                      </div>
                      <div className="text">
                        <h3>Health and environmental</h3>
                        {/* <p>Ending deforestation is the best chance we have to stabilize our climate, save wildlife species and protect our well-being. Protecting the forest is our mutual responsibility, no matter how far away we live from the nearest one. Adopt some of these strategies to help prevent the loss of more trees </p> */}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="step-box wow fadeInUp animated"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      <div className="dnumber">
                        <div className="date-box">
                          <img
                            src="../assets/img/icon/fea-icon06.png"
                            alt="icon"
                          />
                        </div>
                      </div>
                      <div className="text">
                        <h3>Green finance</h3>
                        {/* <p>It often involves evaluating the soil, trees and vegetation within a forest ecosystem and performing a variety of complex tasks to improve land management practices</p> */}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="step-box wow fadeInUp animated"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      <div className="dnumber">
                        <div className="date-box">
                          <img
                            src="../assets/img/icon/fea-icon06.png"
                            alt="icon"
                          />
                        </div>
                      </div>
                      <div className="text">
                        <h3>Gender and climate change</h3>
                        {/* <p>It often involves evaluating the soil, trees and vegetation within a forest ecosystem and performing a variety of complex tasks to improve land management practices</p> */}
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="step-box wow fadeInUp animated"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      <div className="dnumber">
                        <div className="date-box">
                          <img
                            src="../assets/img/icon/fea-icon06.png"
                            alt="icon"
                          />
                        </div>
                      </div>
                      <div className="text">
                        <h3>Climate change Adaptation</h3>
                        {/* <p>It often involves evaluating the soil, trees and vegetation within a forest ecosystem and performing a variety of complex tasks to improve land management practices</p> */}
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
  );
};
export default OurSteps;
