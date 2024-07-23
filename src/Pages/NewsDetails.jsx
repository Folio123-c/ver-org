import Footer from "../components/Footer"
import Header from "../components/Header"
import { Base_url } from "../Services/Constants"
import DOMPurify from 'dompurify';
const NewsDetails = ((props) => {
  const createMarkup = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };
  console.log("propssss data",props?.data)
    return (
        <>
         <main>
  <div className="about-area5 about-p p-relative">
    <div className="container pt-120 pb-90">
        <div className="col-lg-12 order-1">
          <div className="service-detail">
            <div className="content-box">
              <h2 className="capitalize"> {props?.data?.title} </h2>
              <div className="two-column">
                <div className="row">
                  <div className="text-column col-xl-6 col-lg-12 col-md-12">
                    <img src={`${Base_url}/assets/${props?.data?.image?.id}`} alt />
                  </div>
                </div>
              </div>
              {/* <p className="pt-5"> {props?.data?.descriptions} </p> */}
              <div dangerouslySetInnerHTML={createMarkup(props?.data?.descriptions)} className="mt-5"/>
            </div>
          </div>
        </div>
      </div>
    </div>
</main>
        </>
    )
})
export default NewsDetails