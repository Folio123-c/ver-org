import { useEffect, useState } from "react";
import Footer from "../components/Footer"
import Header from "../components/Header"
import { Card,Avatar } from "antd";
import { useNavigate } from "react-router-dom";
import { Base_url } from "../Services/Constants";
import NewsDetails from "./NewsDetails";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Partners from "../components/Partners";
const { Meta } = Card;
const News=()=>{
  const [newsData, setNewsData] = useState(null);
  const [viewNewsDetails,setViewNewsDetails]=useState(false);
  const [newDetailedData,setNewsDetailedData]=useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const navigate=useNavigate();
  const handleViewDetails=(data)=>{
    setNewsDetailedData(data)
    setViewNewsDetails(true)
  }
  async function fetchData() {
    try {
      setIsFetching(true)
      const response = await fetch('/api/items/news?fields=*.*');
      console.log("responses",response)
      if (!response.ok) {
        setIsFetching(false)
        throw new Error('Network response was not ok');
      }else{
        setIsFetching(false)
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
    fetchData().then(data => {
      setNewsData(data);
    });
  }, []);

  console.log("newsData from home", newsData);
    return(
        <>
        <Header/>
      <main>
  {/* breadcrumb-area */}
  <section className="breadcrumb-area d-flex  p-relative align-items-center" style={{backgroundImage: 'url(../assets/img/bg/bdrc-bg.jpg)'}}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-12 col-lg-12">
          <div className="breadcrumb-wrap text-left">
            <div className="breadcrumb-title">
              <h2>News</h2>    
              <div className="breadcrumb-wrap">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">News</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {viewNewsDetails &&  <h1 className="flex text-lg gap-2 ml-3 mt-3" onClick={()=>setViewNewsDetails(false)}><IoArrowBackCircleSharp size={32} color="green"/><span className="pt-1">Go Back</span> </h1>}
  {/* services-five-area */}
  <section id="services-05" className="services-05 pt-120 pb-100 p-relative fix">
    <div className="container"> {isFetching? <div className="flex gap-5">
            <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        loading={isFetching}
      >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
            <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        loading={isFetching}
      >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="Card title"
          description="This is the description"
        />
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
            <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        loading={isFetching}
      >
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
      </div> :
      <div>
        {viewNewsDetails? <NewsDetails data={newDetailedData}/>:
      <div className="row align-items-center justify-content-center">
      {newsData?.map((el) => {
                    return (
                      <>
                        <div className="col-lg-4 col-md-6" onClick={()=>handleViewDetails(el)}>
                          <div className="single-post2 hover-zoomin mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                            <div className="blog-thumb2 w-full h-[20rem] overflow-hidden">
                              < img src={`${Base_url}/assets/${el?.image?.id}`} alt="img" className="h-full w-full"/>
                            </div>
                            <div className="blog-content2 w-full">
                              <div className="date-home">
                                <i className="fal fa-calendar-alt" /> {el?.date_created?.substring(0,10)}
                              </div>
                              <div className="b-meta">
                                <div className="meta-info">
                                  <ul>
                                    <li><i className="fal fa-user" /> By {el?.user_created?.first_name}</li>
                                    <li><i className="fal fa-comments" /> {el?.comments} Comments</li>
                                  </ul>
                                </div>
                              </div>
                              <h4> {el?.title?.length > 30 ? `${el.title.substring(0, 20)}...` : el.title}</h4>
                              <p>{el?.desscriptions?.length > 100 ? `${el.desscriptions.substring(0, 100)}...` : el.desscriptions}</p>
                              <div className="blog-btn"><a href="#">Read More <i className="fal fa-long-arrow-right" /></a></div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })}
      </div>}
      </div>}
    </div>
  </section>
  {/* services-three-area */}	
  {/* brand-area */}
  <Partners/>
  {/* brand-area-end */}        
</main>

        <Footer/>
        </>
    )
}
export default News