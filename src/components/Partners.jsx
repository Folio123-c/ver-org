import RemaLogo from "../../public/assets/img/blog/TPhmGO1__400x400.jpg"
import img from "../assets/images/image (1).png"
const Partners=()=>{
    return(
        <>
        <div className="brand-area  bg-[#f7f7ff6c] ">
        <div className="secstion-title  center-align mbd-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                <h1 className="text-xl pt-3 uppercase font-semibold">Our Parteners</h1>
              </div>
          <div className="container pt-12">
            <div className="row brand-active grid  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center items-center">
              <div className="col-xl-2 h-64">
                <div className="single-brand h-32 w-32">
                  <img src="https://www.rgb.rw/index.php?eID=dumpFile&t=f&f=16642&token=e32867996bd480c554695c358ee3d605df6e381d" alt="img" className="h-full w-full"/>
                </div>
              </div>
              <div className="col-xl-2 h-64">
                <div className="single-brand h-32 w-32">
                  <img src="https://www.gov.rw/index.php?eID=dumpFile&t=f&f=1686&token=bbbb57e8d97711973cf02637df254ced6259f00f" alt="img"  className="h-full w-full"/>
                </div>
              </div>
              <div className="col-xl-2 h-64">
                <div className="single-brand h-32 w-32">
                  <img src="https://unsdg.un.org/themes/custom/theme_server/assets/images/unsdg-logo-en.svg" alt="img"  className="h-full w-full"/>
                </div>
              </div>
              <div className="col-xl-2 h-64">
                <div className="single-brand h-32 w-32">
                  <img src={RemaLogo} alt="img" />
                </div>
              </div>
              <div className="col-xl-2  h-64">
                <div className="single-brand h-32 w-32">
                  <img src={img} alt="img"  className="h-full w-full"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}
export default Partners
// import { Banner } from "../components/banner";
// import "../Pages/style.css";
// import img from "../assets/images/image (1).png"
// const images = [
//   // "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
//   // "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
//   // "https://media.istockphoto.com/photos/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-picture-id1185953092?k=6&m=1185953092&s=612x612&w=0&h=SNiShskOfwQ7Sys5TX0eb5eBxHobktWUfZGrox5LMyk=",
//   // "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
//   img,
//   "https://unsdg.un.org/themes/custom/theme_server/assets/images/unsdg-logo-en.svg",
//   "https://www.gov.rw/index.php?eID=dumpFile&t=f&f=1686&token=bbbb57e8d97711973cf02637df254ced6259f00f",
//   "https://www.rgb.rw/index.php?eID=dumpFile&t=f&f=16642&token=e32867996bd480c554695c358ee3d605df6e381d"
// ].map((image) => ({
//   id: crypto.randomUUID(),
//   image
// }));

// export default function Partners() {
//   return (
//     <div className="h-24">
//       <Banner images={images} speed={5000} />
//     </div>
//   );
// }
