import SideBarSyllabus from "./SideBarSyllabus";
import { useRouter } from "next/router";

export default function FacultyMainContent({
  data,
  syllabus,
  timetable,
  studymaterial,
  deptName,
}) {
  //   const [facultyData, setfacultyData] = useState(data[0].fa);
  //   const [mission, setMission] = useState(data[0].mission);
  //   const [profile, setProfile] = useState(data[0].profile);

  // console.log(data);
  const router = useRouter();
  return (
    <>
      {/* Dept Nav Bar */}
      <div className="grid grid-cols-12 lg:bg-transparent lg:relative font-body">
        <aside className="col-start-2 col-end-12 h-8 border-[1px] place-self-start sticky top-0 lg:top-10 border-blue-ramaiah rounded-md bg-opacity-30 text-blue-ramaiah space-x-3 mx-auto lg:col-end-4 lg:inline-flex lg:flex-col lg:h-auto lg:w-full">
          {/* <div className="col-start-2 col-end-12 h-8 border-[1px] place-self-start sticky top-0 lg:top-10 border-blue-ramaiah rounded-md bg-opacity-30 text-blue-ramaiah space-x-3 mx-auto lg:col-end-4 lg:inline-flex lg:flex-col lg:h-auto lg:w-full"> */}
          <div className="flex flex-row w-full justify-evenly flex-wrap space-x-3 lg:w-full lg:flex lg:flex-col text-center">
            <a
              href="./"
              className="lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah active:bg-opacity-100 bg-opacity-75 lg:p-2 lg:m-2"
            >
              Overview
            </a>
            <a
              href="faculty"
              className="sm:hover:font-bold lg:text-white lg:p-2 lg:m-2 lg:bg-gradient-to-r lg:from-pink-ramaiah lg:to-orange-ramaiah"
            >
              Faculty
            </a>
            <a
              href="research"
              className="lg:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-opacity-75 lg:p-2 lg:m-2"
            >
              Research
            </a>
            <a
              href="bos"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-opacity-75 lg:p-2 lg:m-2"
            >
              BOS|BOE
            </a>
            <a
              href="achievements"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-opacity-75 lg:p-2 lg:m-2"
            >
              Achievements
            </a>
            <a
              href="activities"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-opacity-75 lg:p-2 lg:m-2"
            >
              Activities
            </a>
          </div>
          {/* </div> */}
        </aside>

        {/* Dept Main Content*/}
        <div className="col-span-full m-2 p-2 lg:col-start-4 lg:col-end-10 h-auto text-black border-gray-100 border-2 bg-white">
          <h2 className="text-2xl font-heading text-blue-ramaiah text-center">
            Faculty of <span className="capitalize">{deptName}</span>
          </h2>
          <br />
          <div className="grid grid-cols-2 grid-flow-row md:grid-cols-1">
            {data.map((profile, i) => {
              return (
                <div
                  key={profile.id}
                  className="rounded-sm border-gray-400 flex flex-col md:flex-row items-start bg-gray-50 space-x-2 mb-6 shadow-md p-4"
                >
                  <div className="h-[75%] md:h-full md:min-w-[20%] md:max-w-[20%] shadow-2xl rounded-box">
                    <a
                      className="w-full"
                      href={router.pathname + "/" + profile.id}
                    >
                      <img
                        className="object-center h-full md:w-full rounded-box shadow-lg"
                        src={profile.profile_Pic_URL}
                      />
                    </a>
                  </div>

                  <div className="pt-2">
                    <div className="flex flex-row flex-wrap justify-between">
                      <a
                        href={router.pathname + "/" + profile.id}
                        className="w-full"
                      >
                        <h2 className="font-body text-pink-ramaiah pb-2 text-sm md:text-xl leading-tight tracking-tighter text-center md:text-left hover:underline">
                          {profile.faculty_Full_Name}
                        </h2>
                      </a>
                      {profile.facultyId == 1 && (
                        <div className="hidden md:badge md:badge-outline mb-2">
                          {" "}
                          Head of the Department
                        </div>
                      )}{" "}
                    </div>
                    <div className="hidden md:block badge badge-outline leading-tight tracking-tighter">
                      {profile.current_designation}
                    </div>
                    <p className="hidden md:block">{profile.short_Bio}</p>
                    <div className="block md:hidden badge badge-outline leading-tight tracking-tighter">
                      {profile.current_designation}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dept Right Sidebar */}
        <aside className="col-span-full lg:col-start-10 lg:col-end-12 h-auto lg:absolute lg:w-full text-blue-ramaiah">
          {/* <div className="col-span-full lg:col-start-10 lg:col-end-12 h-auto lg:absolute lg:w-full text-blue-ramaiah "> */}
          <div className=" text-center mb-5 w-[85%] m-auto lg:w-full">
            {/*syllabus*/}
            <div className="bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah rounded-t-xl text-white p-1 font-heading">
              Syllabus
            </div>
            <div className="bg-white rounded-b-2xl shadow">
              <SideBarSyllabus syllabus={syllabus} />
            </div>
          </div>
          <div className=" text-center mb-5 w-[85%] m-auto lg:w-full">
            {/*syllabus*/}
            <div className="bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah rounded-t-xl text-white p-1 font-heading">
              Timetable
            </div>
            <div className=" bg-white rounded-b-2xl shadow">
              <SideBarSyllabus syllabus={timetable} />
            </div>
          </div>
          <div className=" text-center mb-5 w-[85%] m-auto lg:w-full">
            {/*syllabus*/}
            <div className="bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah rounded-t-xl text-white p-1 font-heading">
              Study Materials
            </div>
            <div className="bg-white rounded-b-2xl">
              <SideBarSyllabus syllabus={studymaterial} />
            </div>
          </div>
          {/* </div> */}
        </aside>
      </div>
    </>
  );
}
