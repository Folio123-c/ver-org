import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Card, Avatar } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { Base_url } from "../Services/Constants";
import ProjectDetail from "./ProjectDetails";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Partners from "../components/Partners";
import DOMPurify from "dompurify";
import aboutImageBg from "../assets/images/IMG-20221114-WA0010.jpg"
import { createDirectus, readItems, rest } from "@directus/sdk";
const { Meta } = Card;
const Projects = () => {
  const [projectData, setProjectsData] = useState(null);
  const [projectDetails, setProjectsDetails] = useState(false);
  const [detailedData,setDetailedData]=useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const navigate = useNavigate();
  const projectId = useParams();
  const handleShowProjectDetails = (data) => {
    setDetailedData(data)
    setProjectsDetails(true);
  };
  // async function fetchData() {
  //   try {
  //     setIsFetching(true);
  //     const response = await fetch("api/items/projects?fields=*.*");
  //     console.log("responses", response);
  //     if (!response.ok) {
  //       setIsFetching(false);
  //       throw new Error("Network response was not ok");
  //     } else {
  //       setIsFetching(false);
  //       const data = await response.json();
  //       console.log(data, "data");
  //       return data.data;
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     return null;
  //   }
  // }
  async function fetchData() {
    const client = createDirectus(Base_url).with(rest());

const result = await client.request(
	readItems('projects', {
		fields: ['*.*'],
	})
);
if(result){
  setIsFetching(false);
}
console.log("result",result)
    return result;
  }
  useEffect(() => {
    fetchData().then((data) => {
      setProjectsData(data);
    });
  }, []);

  const createMarkup = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };
  console.log("projectData from home", projectData);
  return (
    <>
      <Header />
      <main>
        {/* breadcrumb-area */}
        <section
          className="breadcrumb-area d-flex  p-relative align-items-center"
          style={{ backgroundImage: `url(${aboutImageBg})`,backgroundPosition:"center" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12">
                <div className="breadcrumb-wrap text-left">
                  <div className="breadcrumb-title">
                    <h2>Projects</h2>
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
        {/* breadcrumb-area-end */}
        {/* services-five-area */}
      {projectDetails &&  <h1 className="flex text-lg gap-2 ml-3 mt-3" onClick={()=>setProjectsDetails(false)}><IoArrowBackCircleSharp size={32} color="green"/><span className="pt-1">Go Back</span> </h1>}
        <section
          id="services-05"
          className="services-05 pt-120 pb-100 p-relative fix"
        >
          <div className="container">
            {" "}
            {isFetching ? (
              <div className="flex gap-5">
                <Card
                  style={{
                    width: 300,
                    marginTop: 16,
                  }}
                  loading={isFetching}
                >
                  <Meta
                    avatar={
                      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    }
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
                    avatar={
                      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    }
                    title="Card title"
                    description="This is the description"
                  />
                  <Meta
                    avatar={
                      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    }
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
                    avatar={
                      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    }
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </div>
            ) : (
              <div>
                {projectDetails ? (
                  <ProjectDetail data={detailedData}/>
                ) : (
                  <div className="row align-items-center justify-content-center">
                    { projectData && projectData?.map((el) => {
                      return (
                        <>
                          <div
                            className="col-lg-4 col-md-6"
                            onClick={() => handleShowProjectDetails(el)}
                          >
                            <div
                              className="single-post2 hover-zoomin shadow-md mb-30 wow fadeInUp animated"
                              data-animation="fadeInUp"
                              data-delay=".4s"
                            >
                              <div className="blog-thumb2 w-full h-[20rem] overflow-hidden">
                                <img
                                  src={`${Base_url}/assets/${el?.image?.id}`}
                                  alt="img"
                                  className="h-full w-full"
                                />
                              </div>
                              <div className="blog-content2 w-full bg-dred-300 h-64 relative">
                                <div className="date-home">
                                  <i className="fal fa-calendar-alt" />{" "}
                                  {el?.date_created?.substring(0, 10)}
                                </div>
                                <div className="b-meta">
                                  <div className="meta-info">
                                    <ul>
                                      <li>
                                        <i className="fal fa-user" /> By{" "}
                                        {el?.user_created?.first_name}
                                      </li>
                                      <li>
                                        <i className="fal fa-comments" />{" "}
                                        {el?.comments} Comments
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <h4>
                                  {" "}
                                  {el?.title?.length > 30
                                    ? `${el.title.substring(0, 20)}...`
                                    : el.title}
                                </h4>
                                {el?.descriptions?.length > 70? <div dangerouslySetInnerHTML={createMarkup(el?.descriptions.substring(0, 70))}/>:<div dangerouslySetInnerHTML={createMarkup(el?.descriptions)}/>}
                                
                                <div className="blog-btn absolute bottom-4">
                                  <a href="#">
                                    Read More{" "}
                                    <i className="fal fa-long-arrow-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
        {/* services-three-area */}
        {/* brand-area */}
        <Partners/>
        {/* brand-area-end */}
      </main>

      <Footer />
    </>
  );
};
export default Projects;
