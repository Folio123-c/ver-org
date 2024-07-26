import { FiActivity } from "react-icons/fi";
import { RiProgress6Fill } from "react-icons/ri";
import { TbDeviceVisionPro } from "react-icons/tb";

const MissionAndVision = () => {
  const missionAndVisisonInfo = [
    {
      title: "Vision",
      details:
        "“Working towards prosperous communities that conserve their environment”",
    },
    {
      title: "Mission",
      details:
        "We are committed to sustainably improve the well-being of poor people in Rwanda by using community-based approach tofinding solutions to food insecurity, livelihoods and environmental challenges",
    },
  ];
  return (
    <>
      <div class="overflow-hidden px-5 xl:pl-20 grid  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 bg-gray-50 py-6 sm:py-12">
        {missionAndVisisonInfo?.map((el) => {
          return (
            <>
              <div class="group h-[23rem] relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mxs-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#8fb569] transition-all duration-300 group-hover:scale-[10]"></span>
                <div class="relative z-10 mx-auto max-w-md">
                  <span class="grid h-20 w-20 place-items-center rounded-full bg-[#8fb569] transition-all duration-300 group-hover:bg-[#8fb569]">
                   
                    <TbDeviceVisionPro color="white" size={42}/>
                  <h1 className="text-center text-lg absolute right-[7rem] font-bold">{el?.title}</h1>
                  </span>
                  <div class="space-y-6 pt-2 text-base leading-7 text-gray-600 transition-all duration-300 ">
                    <p>{el?.details}.</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}

        <div class="group relative h-[23rem] cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mxs-auto sm:max-w-sm sm:rounded-lg sm:px-10">
          <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#8fb569] transition-all duration-300 group-hover:scale-[10]"></span>
          <div class="relative z-10 mx-auto max-w-md">
            <span class="grid h-20 w-20 place-items-center rounded-full bg-[#8fb569] transition-all duration-300 group-hover:bg-[#8fb569]">
            <FiActivity color="white" size={42}/>
            <h1 className="text-center text-lg absolute right-[7rem] font-bold">Activities</h1>
            </span>
            <div class="space-y-6 pt-2 text-base leading-7 text-gray-600 transition-all duration-300 ">
              {/* <p>VER programmes are focused on:.</p> */}
              <ul>
                <li>Environmental research & Advocacy</li>
                <li>
                  Climate & Disaster resilience (Food security & livelihoods
                  projects)
                </li>
                <li>
                  {" "}
                  Capacity building (Community mobilization, Environmental
                  literacy)
                </li>
                <li>Environment conservation activ​ities</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="group h-[23rem] relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mxs-auto sm:max-w-sm sm:rounded-lg sm:px-10">
          <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#8fb569] transition-all duration-300 group-hover:scale-[10]"></span>
          <div class="relative z-10 mx-auto max-w-md">
            <span class="grid h-20 w-20 place-items-center rounded-full bg-[#8fb569] transition-all duration-300 group-hover:bg-[#8fb569]">
            <RiProgress6Fill color="white" size={42}/>
            <h1 className="text-center text- absolute right-[7rem] font-bold">Progress</h1>
            </span>
            <ul className="mt-2 !list-disc">
              <li>
                Training on Conservation of Mukura Gishwati national park.
              </li>
              <li>Livelihoods security initiative in rural Rwanda.</li>
              <li>Training in soil conservation to rural farmers.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default MissionAndVision;
