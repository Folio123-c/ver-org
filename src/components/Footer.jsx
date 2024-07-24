import { Link } from "react-router-dom"
import Logo from "../assets/images/logo.png"
import { CiLocationOn } from "react-icons/ci"
import { useEffect, useState } from "react";
import { Base_url } from "../Services/Constants";
import DOMPurify from "dompurify";
const Footer =()=>{
  const [newData,setNewsData]=useState(null)
  const [isFetching,setIsFetching]=useState(false)
  async function fetchData() {
    try {
      setIsFetching(true);
      const response = await fetch("/api/items/news?fields=*.*");
      console.log("responses", response);
      if (!response.ok) {
        setIsFetching(false);
        throw new Error("Network response was not ok");
      } else {
        setIsFetching(false);
        const data = await response.json();
        console.log(data, "data");
        return data.data;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }

  useEffect(() => {
    fetchData().then((data) => {
      setNewsData(data);
    });
  }, []);
  const createMarkup = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
    return(
        <>
        
        <footer className="footer-bg footer-p pt-150" style={{ backgroundColor: '#fff', backgroundImage: 'url(../assets/img/bg/footer-bg.png)', backgroundPosition: '0 0' }}>
          <div className="footer-top pb-70">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-xl-4 col-lg-4 col-sm-6">
                  <div className="footer-widget mb-30">
                   <div className=" flex gap-4 ">
              <div className="logo w-10 h-10">
                <Link to="/" className="w-full h-full"><img src={Logo} alt="logo" /></Link>
              </div>
              <h1 className="font-bold pt-8 text-xl text-white">Vie et Environment <span className="block text-sm">Rwanda</span></h1>
              
            </div>
                    <div className="f-contact mt-6 w-[20rem]">
                      <p>Addressing soil erosion, destruction of agricultural land and deforestation, forest management.</p>
                    </div>
                    <div className="footer-social mt-10">
                      <Link toef="#"><i className="fab fa-facebook-f" /></Link>
                      <Link to="#"><i className="fab fa-instagram" /></Link>
                      <Link to="#"><i className="fab fa-twitter" /></Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-sm-6">
                  <div className="footer-widget mb-30">
                    <div className="f-widget-title">
                      <h2>Our Links</h2>
                    </div>
                    <div className="footer-link">
                      <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about"> About</Link></li>
                        <li><Link to="/project"> Projects </Link></li>
                        <li><Link to="/contact"> Contact Us</Link></li>
                        <li><Link to="/gallery">Gallery </Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                  <div className="footer-widget mb-30">
                    <div className="f-widget-title">
                      <h2>Contact Us</h2>
                    </div>
                    <div className="f-contact">
                      <ul>
                        <li>
                          <i className="icon fal fa-phone" />
                          <span><Link to="tel:+14440008888">+250-788-704-505</Link></span>
                        </li>
                        <li><i className="icon fal fa-envelope" />
                          <span>
                            <Link to="mailto:info@example.com">info@verrwanda.org</Link>
                          </span>
                        </li>
                        < li >
                          <div className="bg-yellow-500 w-12 h-12 rounded-full flex justify-center items-center">
                          <CiLocationOn color="black" size={24}/>

                          </div>
                          <p className="ml-16 mt-[-3rem]">Rutsiro,Rwanda,NR7,Kivumu Sector Western Province, Binyunju Cell tarafipolo Village</p>
                        </li>
                        <li >
                          {/* <p className=" fal fa-map-marker-check w-28 bg-yellow-200 h-12 rounded-full text-black" /> */}
                          {/* <CiLocationOn className="pl-3" /> */}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-6">
                  <div className="footer-widget mb-30">
                    <div className="f-widget-title">
                      <h2>Latest Post</h2>
                    </div>
                    <div className="recent-blog-footer">
                      <ul>
                        {newData?.slice(0, 2)?.map((el)=>{return(
                          <li>
                          <div className="thum"> <img src={`${Base_url}/assets/${el?.image?.id}`} alt="img" /></div>
                          <div className="text">{el?.descriptions?.length > 100 ? (
                                  <div className="text-white"
                                    dangerouslySetInnerHTML={createMarkup(
                                      el?.descriptions.substring(0, 100)
                                    )}
                                  />
                                ) : (
                                  <div
                                    dangerouslySetInnerHTML={createMarkup(
                                      el?.descriptions
                                    )}
                                  />
                                )}
                            <span>{el?.date_created?.substring(0, 10)}</span></div>
                        </li>
                        )})}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-wrap">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  Copyright © Vie Et Environnement Rwanda {(new Date().getFullYear())}. All rights reserved.
                </div>
                <div className="col-lg-6 text-right text-xl-right">
                  <ul>
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                    <li><Link to="/terms">Terms Of Service</Link></li>
                    <li><Link to="/legal">Legal</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        </>
    )
}
export default Footer