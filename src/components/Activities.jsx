import { useEffect, useState } from "react";
import { ActivitiesData } from "../assets/Data/Activities"
import { Avatar, Card, Skeleton, Switch } from 'antd';
import { Base_url } from "../Services/Constants";
import DOMPurify from "dompurify";
import { createDirectus, readItems, rest } from "@directus/sdk";
const { Meta } = Card;
const Activities = () => {
    const [achievementsData, setAchievementData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  
  async function fetchData() {
    const client = createDirectus(Base_url).with(rest());
  
    const result = await client.request(
      readItems('achivements', {
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
    fetchData().then(data => {
      setAchievementData(data);
    });
  }, []);
  const createMarkup = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };
  console.log("achievementsData", achievementsData);
    return (
        <>
        {isFetching? <div className="flex gap-5">
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
            <div className="row align-items-center justify-content-center">
                {achievementsData?.slice(0, 3)?.map((el) => {
                    return (
                        <div className="col-lg-4" key={el?.id}>
                            <div className="services-box-05 mb-30 hover-zoomin wow fadeInUp  animated" data-animation="fadeInUp" data-delay=".4s">
                                <div className="services-icon-05 w-full h-[12rem] overflow-hidden">
                                    <img src={`${Base_url}/assets/${el?.image?.id}`} alt="icon01" className="h-full w-full"/>
                                </div>
                                <div className="services-content-05 w-full h-[20rem]">
                                    <div className="icon">
                                        <h4> {el.title}</h4>
                                    </div>
                                    {el?.descriptions?.length > 400? <div dangerouslySetInnerHTML={createMarkup(el?.descriptions.substring(0, 400))}/>:<div dangerouslySetInnerHTML={createMarkup(el?.descriptions)}/>}
                                    {/* <p className="pb-2">{el?.descriptions?.length > 400 ? `${el.descriptions.substring(0, 400)}.` : el.descriptions}</p> */}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>}
        </>
    )
}

export default Activities