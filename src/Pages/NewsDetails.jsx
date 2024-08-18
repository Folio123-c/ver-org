import Footer from "../components/Footer"
import Header from "../components/Header"
import { Base_url } from "../Services/Constants"
import "./style.css"
import DOMPurify from 'dompurify';
const NewsDetails = ((props) => {
  const createMarkup = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };
  console.log("propssss data",props?.data)
    return (
        <>
         <main className="bg-[#00000002] pt-3 rounded-md">
  {/* <div className="about-area5 about-p p-relative">
    <div className="container pt-120 pb-90">
        <div className="col-lg-12 order-1">
          <div className="service-detail">
            <div className="content-box">
              <h2 className="capitalize"> {props?.data?.title} </h2>
              <div className="two-column">
                  <div className="w-full h-[50vh]">
                    <img src={`${Base_url}/assets/${props?.data?.image?.id}`} alt  className="w-full h-full rounded-none"/>
                  </div>
              </div>
              <div dangerouslySetInnerHTML={createMarkup(props?.data?.descriptions)} className="mt-5 bg-transparent wysiwyg-content"/>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    <div className="max-w-screen-lg mx-auto">
  <main className="mts-10 text-black">
    <div className="mb-4 md:mb-0 w-full max-w-screen-xmd mxx-auto relative " style={{height: '24em'}}>
      <div className="absolute left-0 bottom-0 w-full h-full z-10" style={{backgroundImage: `${Base_url}/assets/${props?.data?.image?.id}`}} />
      <img src={`${Base_url}/assets/${props?.data?.image?.id}`} className="absolute left-0 top-0 w-full h-full z-0 object-cover" />
      <div className="p-2 absolute bottom-0 left-0 z-20 bg-[#00000065] rounded-md w-[95%] ">
        <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
        {props?.data?.title}
        </h2>
        <div className="flex mt-3">
          {/* <img src="https://randomuser.me/api/portraits/men/97.jpg" className="h-10 w-10 rounded-full mr-2 object-cover" /> */}
          <h1 className="text-white mr-3 pt-2">creacted by</h1>
          <div>
            <p className="font-semibold text-gray-200 text-sm"> {props?.data?.user_created?.first_name}</p>
            <p className="font-semibold text-gray-400 text-xs"> {props?.data?.date_created?.slice(0,10)} </p>
          </div>
        </div>
      </div>
    </div>
    <div dangerouslySetInnerHTML={createMarkup(props?.data?.descriptions)} className="wysiwyg-content !text-black rounded-none bg-transparent"/>
  </main>
</div>
</main>
        </>
    )
})
export default NewsDetails