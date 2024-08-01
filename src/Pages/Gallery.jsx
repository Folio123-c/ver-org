import { useEffect, useState } from "react";
import { GalleryData } from "../assets/Data/Gallery";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Base_url } from "../Services/Constants";
import { Card, Avatar } from "antd";
import { createDirectus, readItems, rest } from "@directus/sdk";
const Gallery = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [galleryData, setGalleryData] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const { Meta } = Card;
  async function fetchData() {
   
    const client = createDirectus(Base_url).with(rest());
  
    const result = await client.request(
      readItems('gallery', {
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
      setGalleryData(data);
    });
  }, []);
  console.log("galleryData", galleryData);
  const displayedPhotos = showAllPhotos
    ? galleryData
    : galleryData?.slice(0, 10);
  return (
    <div className="bg-yellow-50 ">
      <Header />
      <section className="flex pt-20 flex-col justify-center my-20  items-center w-full ">
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
          <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mx-auto gap-1h  m-auto w-[90%] py-4">
            {displayedPhotos?.map((el) => {
              return (
                <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-200 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
                  <article
                    className="mx-auto  w-[20rem] rounded-3xl overflow-hidden  h-[20rem] bg-cover ring-2 ring-inset ring-white/50 bg-center relative   transform duration-500   group"
                    style={{
                      backgroundImage: `url(${Base_url}/assets/${el?.image?.id})`,
                    }}
                  >
                    <div className=" relative h-full  group-hover:bg-opacity-0  flex flex-wrap flex-col pt-[13rem]  transform duration-500">
                      <div className=" bg-black/20 group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col ">
                        <p className=" text-white text-sm 2xl:text-lg group-hover:opacity-10 transform duration-500 capitalize">
                          {" "}
                          {el?.details}
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        )}
        {galleryData?.length > 10 && !showAllPhotos && (
          <button
            onClick={() => setShowAllPhotos(true)}
            className="mt-4  px-4 py-2 bg-green-500 text-white rounded hover:bg-yellow-700 transition duration-300"
          >
            View More Photos
          </button>
        )}
        {showAllPhotos && (
          <button
            onClick={() => setShowAllPhotos(false)}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-yellow-700 transition duration-300"
          >
            View less Photos
          </button>
        )}
      </section>
      <Footer />
    </div>
  );
};
export default Gallery;
