import Footer from "./Footer";
import logo from "/assets/images/Institute-of-Technology.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import { EmblaCarousel } from "./Carousel";
import Navbar from "./utilities/navbar";
import Logcaro from "./utilities/logcaro";
import CountUp from "react-countup";

function NewHome({ latestNews, latestEvents }) {
  const [lnDatesState, setLnDatesState] = useState([]);
  const [lnUrlState, setLnUrlState] = useState([]);
  const [lnTextState, setLnTextState] = useState([]);
  const [leDatesState, setLeDatesState] = useState([]);
  const [leUrlState, setLeUrlState] = useState([]);
  const [leTextState, setLeTextState] = useState([]);
  const [menuItemCLicked, setMenuItemClicked] = useState(false);
  const [faciltiesItemClicked, setFaciltiesItemClicked] = useState(false);
  const [aboutItemClicked, setAboutItemClicked] = useState(false);
  const [deptItemClicked, setDeptItemClicked] = useState(false);

  // console.log(latestEvents);

  const [NewsItems, setNewsItems] = useState([
    "CHANGE OF BRANCH NOTIFICATION (III SEMESTER)",
    "Dept of Information Science and Engineering, RIT organizes Online Certification Course on Practical Approach of Deep Learning for Artificial Intelligence",
    "KSCST Student Project Programme - 2021 - Best Project of the Year Award",
  ]);
  const [EventItems, setEventItems] = useState([
    "International Conference on Innovative Interventions for Inclusive and Sustainable Business Landscape (IIISBL - 2021) organized by Department of Management Studies, RIT",
    "iot-deathon by Intel Developer Students Club, RIT",
    "My Story Session - A talk by Mr. Arvind Nadig, Co-founder & CEO at Li2 & Brahma3, Alumni of RIT",
  ]);
  const [NewsDates, setNewsDates] = useState([
    "08-Nov-2021",
    "27-Oct-2021",
    "10-Oct-2021",
  ]);
  const [EventDates, setEventDates] = useState([
    "02-Nov-2021",
    "22-Oct-2021",
    "06-Oct-2021",
  ]);
  const [newsItemURL, setNewsItemURL] = useState([
    "https://drive.google.com/file/d/1sgySy98SJ_fovyEnP7p9fquJYcu_bcAV/view?usp=sharing",
    "https://drive.google.com/file/d/1W20Vyr98KyHVo-m3srf78FurQDIC0Ah2/view?usp=sharing",
    "https://drive.google.com/file/d/1eJ_9WBtD9vDkCTcBpOEUjJYL5LNIu7Jn/view?usp=sharing",
  ]);
  const [eventItemURL, setEventItemURL] = useState([
    "https://drive.google.com/file/d/1RgPVsDEdcKi7fnYqoApSFUryveQ-L4Sk/view?usp=sharing",
    "https://drive.google.com/file/d/1FWHMQRLz6gn4NlXgkc7n8qkOWgQSuQA7/view?usp=sharing",
    "https://drive.google.com/file/d/1FHszh7JyBQc7JRrXP8UPdz0tX3DG1Lx9/view?usp=sharing",
  ]);

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       setNewsIndex((newsIndex + 1) % 3);
  //       setEventsIndex((eventsIndex + 1) % 3);
  //     }, 4000);
  //     return () => clearTimeout(intervalId);
  //   }, [newsIndex, eventsIndex]);

  useEffect(() => {
    doLatestNews(latestNews);
    doLatestEvents(latestEvents);
    // timerInc();
    // const intervalId = setInterval(() => {
    //   setNewsIndex((newsIndex) => (newsIndex + 1) % 3);
    //   setEventsIndex((eventsIndex) => (eventsIndex + 1) % 3);
    // }, 4000);
    // return () => clearTimeout(intervalId);
  }, []);

  function doLatestNews(latestNewsObj) {
    setLnTextState([
      ...latestNewsObj?.map((newsItem, i) => {
        return newsItem.title;
      }),
    ]);

    setLnUrlState([
      ...latestNewsObj?.map((newsItem, i) => {
        return newsItem.linkURL;
      }),
    ]);
    setLnDatesState([
      ...latestNewsObj?.map((newsItem, i) => {
        const extractedContent = {
          date: newsItem.publishedDate.substring(8, 10),
          month: renderMonth(newsItem.publishedDate.substring(5, 7)),
          year: newsItem.publishedDate.substring(0, 4),
        };

        return {
          datesJoined:
            extractedContent.date.toString() +
            " " +
            extractedContent.month.toString() +
            " " +
            extractedContent.year.toString(),
        };
      }),
    ]);
    // console.log(lnUrlState);
    // (
    //   <>
    //     <span key={i} className="font-heading lg:text-2xl">
    //       {newsItem.publishedDate.substring(8, 10)}
    //     </span>
    //     <span>
    //       {" "}
    //       {renderMonth(newsItem.publishedDate.substring(5, 7)) +
    //         " " +
    //         newsItem.publishedDate.substring(0, 4)}{" "}
    //     </span>
    //   </>
    // );
  }

  function doLatestEvents(latestEventsObj) {
    //  console.log(latestEventsObj);
    setLeTextState([
      ...latestEventsObj?.map((eventItem, i) => {
        return eventItem.title;
      }),
    ]);

    setLeUrlState([
      ...latestEventsObj?.map((eventItem, i) => {
        return eventItem.linkURL;
      }),
    ]);
    setLeDatesState([
      ...latestEventsObj.map((eventItem, i) => {
        const extractedContent = {
          date: eventItem.eventStartDate?.substring(8, 10),
          month: renderMonth(eventItem.eventStartDate?.substring(5, 7)),
          year: eventItem.eventStartDate?.substring(0, 4),
        };

        return {
          datesJoined:
            extractedContent.date?.toString() +
            " " +
            extractedContent.month?.toString() +
            " " +
            extractedContent.year?.toString(),
        };
      }),
    ]);
    //  console.log(leDatesState);
    // (
    //   <>
    //     <span key={i} className="font-heading lg:text-2xl">
    //       {newsItem.publishedDate.substring(8, 10)}
    //     </span>
    //     <span>
    //       {" "}
    //       {renderMonth(newsItem.publishedDate.substring(5, 7)) +
    //         " " +
    //         newsItem.publishedDate.substring(0, 4)}{" "}
    //     </span>
    //   </>
    // );
  }

  function renderMonth(month) {
    //console.log(month);
    switch (month) {
      case "01":
        return "Jan";
      case "02":
        return "Feb";
      case "03":
        return "Mar";
      case "04":
        return "Apr";
      case "05":
        return "May";
      case "06":
        return "Jun";
      case "07":
        return "Jul";
      case "08":
        return "Aug";
      case "09":
        return "Sep";
      case "10":
        return "Oct";
      case "11":
        return "Nov";
      case "12":
        return "Dec";
      default:
        return null;
    }
  }

  // useEffect(() => {
  //   setInterval(() => {
  //     setEventsIndex(eventsIndex + 1);
  //   }, 4000);
  // }, []);

  return (
    <div>
      {/* Home Page Module */}
      {/* <Navbar /> */}
      <main className="relative antialiased">
        {/* Header */}

        <div className="grid grid-cols-12 grid-rows-12 md:grid-rows-6 z-0 h-[99vh] md:gap-4 gap-3">
          <header className="col-span-10 flex items-center justify-between col-start-2 shadow-md rounded-b-lg md:-mt-2 row-span-1 max-h-full">
            <div className="h-full inline-flex items-center">
              <a href="/">
                <img
                  src="../Institute-of-Technology.png"
                  alt="Logo"
                  className="h-[50px] md:h-[100px]"
                />
              </a>
            </div>
            <div className="h-full lg:inline-flex lg:items-center lg:flex-col lg:justify-center hidden">
              <div className="max-h-1/2 ml-auto mr-2 space-x-2">
                <a
                  href="https://www.facebook.com/RamaiahInstituteofTechnologyRIT"
                  className="fa fa-facebook"
                ></a>

                <a
                  href="https://in.linkedin.com/school/m.s.-ramaiah-institute-of-technology/"
                  className="fa fa-linkedin"
                ></a>
                <a
                  href="https://www.youtube.com/c/RamaiahInstituteofTechnology"
                  className="fa fa-youtube"
                ></a>
              </div>
              <nav className=" max-h-1/2 navbar">
                <div class="dropdown dropdown-hover xs:hidden md:inline-block">
                  <div
                    tabindex="0"
                    className="m-1 btn bg-white text-pink-ramaiah hover:text-white"
                  >
                    About Us{" "}
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline-block ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg> */}
                  </div>
                  <ul
                    tabindex="0"
                    class="p-2 shadow menu dropdown-content top-[100%] bg-pink-ramaiah rounded-box w-52 text-white"
                  >
                    <li>
                      <a href="/about">Overview</a>
                    </li>
                    <li>
                      <a href="/about#evolution">Evolution</a>
                    </li>
                    <li>
                      <a href="/about/governance">Governance</a>
                    </li>
                    <li>
                      <a href="/about/other-committees">Other Committees</a>
                    </li>
                  </ul>
                </div>
                <a
                  href="/admission"
                  className="btn rounded-btn text-pink-ramaiah font-semibold bg-white hover:bg-black hover:text-white"
                >
                  ADMISSIONS
                </a>

                <div class="dropdown dropdown-hover hidden md:inline-block ">
                  <div
                    tabindex="0"
                    className="m-1 btn bg-white text-pink-ramaiah hover:text-white"
                  >
                    Departments
                  </div>

                  <ul
                    tabindex="0"
                    class="p-2 h-[300px] shadow menu dropdown-content top-[100%] bg-pink-ramaiah rounded-box w-[330px] overflow-y-scroll text-white hide-scroll"
                  >
                    <li>
                      <a href="/dept/ar">Architecture</a>
                    </li>
                    <li>
                      <a href="#">Artificial Intelligence & Data Science</a>
                    </li>
                    <li>
                      <a href="#">Artificial Intelligence & Machine Learning</a>
                    </li>
                    <li>
                      <a href="/dept/bt">Biotechnology</a>
                    </li>
                    <li>
                      <a href="/dept/ch">Chemical Engineering</a>
                    </li>
                    <li>
                      <a href="/dept/chy">Chemistry</a>
                    </li>
                    <li>
                      <a href="/dept/cv">Civil Engineering</a>
                    </li>
                    <li>
                      <a href="/dept/cse">Computer Science & Engg.</a>
                    </li>
                    <li>
                      <a href="#">Computer Science & Engg. (AI & ML)</a>
                    </li>
                    <li>
                      <a href="#">Computer Science & Engg. (Cyber Security)</a>
                    </li>
                    <li>
                      <a href="/dept/eee">Electrical & Electronics Engg.</a>
                    </li>
                    <li>
                      <a href="/dept/ece">Electronics & Communications Engg.</a>
                    </li>
                    <li>
                      <a href="/dept/eie">
                        Electronics & Instrumentation Engg.
                      </a>
                    </li>
                    <li>
                      <a href="/dept/ete">
                        Electronics & Telecommunications Engg.
                      </a>
                    </li>
                    <li>
                      <a href="/dept/hss">Humanities</a>
                    </li>
                    <li>
                      <a href="/dept/iem"> Industrial Engineering & Mgmt</a>
                    </li>
                    <li>
                      <a href="/dept/ise"> Information Science & Engg.</a>
                    </li>
                    <li>
                      <a href="/dept/mat">Mathematics</a>
                    </li>
                    <li>
                      <a href="/dept/mech">Mechanical Engineering</a>
                    </li>
                    <li>
                      <a href="/dept/ml">Medical Electronics Engg.</a>
                    </li>
                    <li>
                      <a href="/dept/phy">Physics</a>
                    </li>
                  </ul>
                </div>
                <div class="dropdown dropdown-hover xs:hidden md:inline-block">
                  <div
                    tabIndex={"0"}
                    className="m-1 btn bg-white text-pink-ramaiah hover:text-white"
                  >
                    FACILITIES
                  </div>
                  <ul
                    tabIndex="0"
                    class="p-2 shadow menu dropdown-content top-[100%] bg-pink-ramaiah rounded-box w-52 text-white"
                  >
                    <li>
                      <a href="/facilities/library">Library</a>
                    </li>
                    <li>
                      <a href="/facilities/hostel">Hostel</a>
                    </li>
                    <li>
                      <a href="/facilities/internet">Internet</a>
                    </li>
                    <li>
                      <a href="/facilities/fitness-center">Fitness Center</a>
                    </li>
                    <li>
                      <a href="/facilities/others">Other Facilities</a>
                    </li>
                  </ul>
                </div>

                <div className="flex-none hidden lg:block">
                  <ul className="menu horizontal space-x-2 text-pink-ramaiah text-sm">
                    <li>
                      <a
                        href="/exam"
                        className="btn rounded-btn font-semibold bg-white  hover:bg-black hover:text-white"
                      >
                        EXAMINATION
                      </a>
                    </li>
                    <li>
                      <a
                        href="/placement"
                        className="btn rounded-btn font-semibold bg-white  hover:bg-black hover:text-white"
                      >
                        PLACEMENT
                      </a>
                    </li>
                    <li className="mr-[-2px]">
                      <a
                        href="/contact"
                        className="btn rounded-btn font-semibold bg-white  hover:bg-black hover:text-white"
                      >
                        CONTACT
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="flex-none lg:hidden">
              <label for="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </header>
          {/* left-half-div */}
          {/* <div className="col-span-6 bg-homeBanner bg-gray-100 bg-no-repeat bg-cover bg-top opacity-50 bg-blend-luminosity grid grid-rows-3">
            <div></div>
            <div></div>
            <div className="space-y-3 opacity-100 relative">
              
              <div className="h-40 bg-white shadow-2xl mx-auto w-[60%] z-10 before:h-auto before:w-auto before:-top-6 before:absolute before:rounded-t-lg before:text-white before:bg-orange-ramaiah before:z-0 before:content-['Latest_News'] ">
                <div className="p-2 ">
                  <div className=" bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah text-white text-center">
                    <p className="text-4xl font-extrabold inline-block">26</p>
                    <span>Aug 2021</span>
                  </div>
                  <div className="my-auto">
                    Exam Fee Notification for Supplementary Semester Offline
                    Examinations - B.E./B.Arch III to VIII Sem |
                    MBA/MCA/M.TECH/M.ARCH All Semesters (Theory & Practical) -
                    Sept / Oct 2021
                  </div>
                </div>
              </div>

              
              <div className="h-40 bg-white  shadow-2xl mx-auto w-[60%] ">
                <div className="p-2 ">
                  <div className=" bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah text-white text-center">
                    <p className="text-4xl font-extrabold inline-block">26</p>
                    <span>Aug 2021</span>
                  </div>
                  <div className="my-auto">
                    Five day Online FDP on "Mathematical Developments in
                    Cryptography and Data Science" by Dept. of Mathematics, RIT.
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="col-start-2 col-span-10 row-span-3 md:col-span-6 md:row-span-3 md:col-start-2 md:row-start-2 rounded-lg shadow-lg">
            <EmblaCarousel className="rounded-md min-h-full" />
            {/* <Carousel
              plugins={[
                "infinite",
                {
                  options: {
                    interval: 2000,
                  },
                },
              ]}
              animationSpeed={1000}
            >
              <img src="right-side.png" />
              <img src="home-page-banner-2.png" />
            </Carousel> */}

            {/* <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={101}
              totalSlides={2}
              className="max-h-full"
            >
              <Slider>
                <Slide index={0}>
                  <img src="right-side.png" className="h-full w-full" />
                </Slide>
                <Slide index={1}>
                  <img src="home-page-banner-2.png" className="h-full w-full" />
                </Slide>
              </Slider>
              <Dot slide={0}> . </Dot>
              <Dot slide={1}> . </Dot>
            </CarouselProvider> */}

            {/* <div className="h-[25%] flex-shrink"></div>
            <div className="h-[35%] flex-grow">
              <div className="text-7xl text-white font-semibold leading-[1.125]">
                Open your world to{" "}
                <span className="text-orange-ramaiah border-orange-ramaiah border-b-[1px]">
                 {
                    <Typical
                      steps={[
                        "OPPORTUNITIES",
                        10000,
                        "TECHNOLOGY",
                        10000,
                        "INNOVATION",
                        10000,
                      ]}
                      wrapper="p"
                      loop={Infinity}
                    />
                  } 
                </span>{" "}
                <br />
                with us
              </div>
            </div>
            <div className="h-[40%] flex-grow">
              <div className="space-y-5">
                <div className="flex flex-row justify-evenly flex-wrap">
                  <div className="h-auto w-auto mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center p-3">
                    <div className="text-5xl font-heading p-3">
                      65
                      <sup className="font-thin after:content-['th'] after:text-white after:text-3xl"></sup>
                    </div>
                    <div>
                      All India Rank <br />
                      (2021)
                    </div>
                  </div>
                  <div className="h-auto w-auto mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center p-1">
                    <div className="text-5xl font-heading p-3">Best</div>
                    <div>
                      among VTU <br /> institutions
                    </div>
                  </div>
                  <div className="h-auto w-auto mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center p-2">
                    <div className="text-5xl font-heading p-3">46</div>
                    <div>
                      Industrial <br /> Collaborations
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-evenly flex-wrap">
                  <div className="h-auto w-auto bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center py-2">
                    <div className="text-5xl font-heading p-3">95%</div>
                    <div>
                      Placement <br /> Average
                    </div>
                  </div>
                  <div className="h-30 w-30 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center p-2">
                    <div className="text-5xl font-heading p-3">350</div>
                    <div>
                      Avg. Publications <br />
                      per year
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div className="col-start-2 col-span-10 row-span-3 md:col-span-2 md:row-span-3 md:col-start-8 md:row-start-2 bg-white shadow-lg rounded-lg flex flex-col">
            <div className="shadow-inner drop-shadow-lg">
              <h1 className="bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah font-book text-3xl text-center rounded-t-lg text-white">
                News
              </h1>
            </div>
            {/* <hr></hr> */}
            <div className="overflow-x-auto md:overflow-y-auto h-[95%] md:h-[90%] bg-white flex flex-row md:flex-col">
              {latestNews.map((ln, id) => {
                return (
                  <div className="p-2">
                    <div className="rounded-md shadow-md w-[270px] md:w-full border-gray-400 h-auto flex justify-between items-center hover:bg-pink-ramaiah hover:text-white transition-all duration-500 ease-in-out">
                      {/* <img className="w-20 border-2 border-gray-600" src="" /> */}
                      <div className="text-center w-1/3 text-pink-ramaiah bg-white border-[1px] border-pink-ramaiah rounded-t-none rounded-l-md rounded-r-md shadow-md">
                        <p className="font-bold text-4xl">
                          {ln.publishedDate.toString().substring(8, 10)}
                        </p>
                        <p>
                          {renderMonth(
                            ln.publishedDate.toString().substring(5, 7)
                          )}
                        </p>
                        <p>{ln.publishedDate.toString().substring(0, 4)}</p>
                      </div>
                      <div className="flex max-w-[65%] text-blue-ramaiah">
                        <a
                          id={id}
                          href={ln.linkURL}
                          className="hover:font-bold hover:underline hover:text-white leading-tight"
                        >
                          {ln.title}
                        </a>
                        {/* <p>lorem ipsum</p>
                        <p>lorem ipsum</p> */}
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* <div className="p-2">
                <div className="rounded-md border-2 border-gray-400 h-auto flex space-x-2">
                  <img className="w-20 border-2 border-gray-600" src="" />
                  <div className="flex flex-col space-y-2">
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="rounded-md border-2 border-gray-400 h-auto flex space-x-2">
                  <img className="w-20 border-2 border-gray-600" src="" />
                  <div className="flex flex-col space-y-2">
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="rounded-md border-2 border-gray-400 h-auto flex space-x-2">
                  <img className="w-20 border-2 border-gray-600" src="" />
                  <div className="flex flex-col space-y-2">
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                  </div>
                </div>
              </div>

              <div className="p-2">
                <div className="rounded-md border-2 border-gray-400 h-auto flex space-x-2">
                  <img className="w-20 border-2 border-gray-600" src="" />
                  <div className="flex flex-col space-y-2">
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                    <p>lorem ipsum</p>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="p-1 inline-block ml-auto">
              Read More{" "}
              <a href="/latestevents" className="hover: underline">
                {" "}
                <i className="fa fa-r fa-angle-right hover: cursor-pointer"></i>
              </a>{" "}
            </div>
          </div>

          <div className="col-start-2 col-span-10 row-span-3 md:col-span-2 md:row-span-3 md:col-start-10 md:row-start-2 shadow-lg bg-white rounded-lg overflow-y-auto flex flex-col">
            <div className="shadow-inner drop-shadow-lg">
              <h1 className="bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah font-book text-2xl md:text-3xl text-center rounded-t-lg text-white">
                Events
              </h1>
            </div>
            {/* <hr></hr> */}
            <div className="overflow-x-auto md:overflow-y-auto h-[95%] md:h-[90%] bg-white flex flex-row md:flex-col">
              {latestEvents.map((ln, id) => {
                return (
                  <div className="p-2 md:w-auto">
                    <div className="rounded-md shadow-md w-[270px] md:w-full border-gray-400 flex justify-between items-center hover:bg-pink-ramaiah hover:text-white transition-all duration-500 ease-in-out">
                      {/* <img className="w-20 border-2 border-gray-600" src="" /> */}
                      <div className="text-center leading-none md:leading-normal w-1/3 text-pink-ramaiah bg-white border-[1px] border-pink-ramaiah rounded-t-none rounded-l-md rounded-r-md shadow-md">
                        <p className="font-bold text-xl md:text-4xl">
                          {ln.eventStartDate.toString().substring(8, 10)}
                        </p>
                        <p>
                          {renderMonth(
                            ln.eventStartDate.toString().substring(5, 7)
                          )}
                        </p>
                        <p>{ln.eventStartDate.toString().substring(0, 4)}</p>
                      </div>
                      <div className="flex max-w-[65%] text-blue-ramaiah">
                        <a
                          id={id}
                          href={ln.linkURL}
                          className="hover:font-bold hover:underline hover:text-white leading-tight pl-1 text-xs md:text-base"
                        >
                          {ln.title}
                        </a>
                        {/* <p>lorem ipsum</p>
                        <p>lorem ipsum</p> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="p-1 inline-block ml-auto">
              Read More{" "}
              <a href="/latestevents" className="hover: underline">
                {" "}
                <i className="fa fa-r fa-angle-right hover: cursor-pointer"></i>
              </a>{" "}
            </div>
          </div>

          <div className="hidden md:col-span-2 md:row-span-2 md:col-start-2 md:row-start-5 bg-white shadow-lg rounded-lg md:inline-block">
            <div className="shadow-inner drop-shadow-lg">
              <h1 className="bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah font-book text-3xl text-center rounded-t-lg text-white">
                &nbsp;
              </h1>
            </div>
            {/* <hr></hr> */}
            <div className="h-[90%] grid grid-flow-row grid-cols-2 grid-rows-2 gap-1">
              <div className="flex flex-col items-center">
                <div>
                  <h3 className="font-bold text-xl block">Placement</h3>
                </div>
                <div>
                  <p className="font-extrabold text-5xl text-center text-pink-ramaiah">
                    {/* 220 */}
                    <CountUp end={220} duration={3} />
                  </p>
                  <p className="text-center leading-tight">
                    students placed from 2022 batch till date
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center m-0 p-0 box-border">
                <div>
                  <h3 className="font-bold text-xl block text-center">
                    Research
                  </h3>
                </div>
                <div>
                  <p className="font-extrabold text-5xl text-center text-pink-ramaiah">
                    {/* 220 */}
                    <CountUp end={341} duration={3.75} />
                  </p>
                  <p className="text-center leading-tight">
                    research papers published in 2021
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div>
                  <h3 className="font-bold text-xl block">Patents</h3>
                </div>
                <div>
                  <p className="font-extrabold text-5xl text-center text-pink-ramaiah">
                    {/* 220 */}
                    <CountUp end={20} duration={2.5} />
                  </p>
                  <p className="text-center leading-tight">
                    patents in the name of the Institute
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div>
                  <h3 className="font-bold text-xl text-center leading-tight tracking-tighter">
                    Student Awards
                  </h3>
                </div>
                <div>
                  <p className="font-extrabold text-5xl text-center text-pink-ramaiah">
                    {/* 220 */}
                    <CountUp end={2200} duration={4.5} />
                  </p>
                  <p className="text-center leading-tight">
                    students awarded <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-start-2 h-auto col-span-10 row-start-11 md:row-start-5 md:row-span-2 md:col-start-4 md:col-span-8 bg-white row-span-2 rounded-lg text-center text-xl drop-shadow-lg">
            <Logcaro />
          </div>

          {/* right-half-div */}
          {/* <div className="col-span-6 bg-blue-ramaiah grid grid-rows-3">
            <div></div>

            <div className="text-7xl text-white font-semibold leading-[1.125]">
              Open your world to{" "}
              <span className="text-orange-ramaiah border-orange-ramaiah border-b-[1px]">
                OPPORTUNITIES
              </span>{" "}
              <br />
              with us
            </div>

            <div className="space-y-3">
              <div className="flex flex-row justify-evenly flex-wrap border-[1px] border-gray-500">
                <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
                <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
                <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
              </div>
              <div className="flex flex-row justify-evenly flex-wrap">
                <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
                <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-span-6 h-full">
            <EmblaCarousel /> */}
          {/* <Carousel
              plugins={[
                "infinite",
                {
                  options: {
                    interval: 2000,
                  },
                },
              ]}
              animationSpeed={1000}
            >
              <img src="right-side.png" />
              <img src="home-page-banner-2.png" />
            </Carousel> */}

          {/* <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={101}
              totalSlides={2}
              className="max-h-full"
            >
              <Slider>
                <Slide index={0}>
                  <img src="right-side.png" className="h-full w-full" />
                </Slide>
                <Slide index={1}>
                  <img src="home-page-banner-2.png" className="h-full w-full" />
                </Slide>
              </Slider>
              <Dot slide={0}> . </Dot>
              <Dot slide={1}> . </Dot>
            </CarouselProvider> */}

          {/* <div className="h-[25%] flex-shrink"></div>
            <div className="h-[35%] flex-grow">
              <div className="text-7xl text-white font-semibold leading-[1.125]">
                Open your world to{" "}
                <span className="text-orange-ramaiah border-orange-ramaiah border-b-[1px]">
                 {
                    <Typical
                      steps={[
                        "OPPORTUNITIES",
                        10000,
                        "TECHNOLOGY",
                        10000,
                        "INNOVATION",
                        10000,
                      ]}
                      wrapper="p"
                      loop={Infinity}
                    />
                  } 
                </span>{" "}
                <br />
                with us
              </div>
            </div>
            <div className="h-[40%] flex-grow">
              <div className="space-y-5">
                <div className="flex flex-row justify-evenly flex-wrap">
                  <div className="h-auto w-auto mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center p-3">
                    <div className="text-5xl font-heading p-3">
                      65
                      <sup className="font-thin after:content-['th'] after:text-white after:text-3xl"></sup>
                    </div>
                    <div>
                      All India Rank <br />
                      (2021)
                    </div>
                  </div>
                  <div className="h-auto w-auto mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center p-1">
                    <div className="text-5xl font-heading p-3">Best</div>
                    <div>
                      among VTU <br /> institutions
                    </div>
                  </div>
                  <div className="h-auto w-auto mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center p-2">
                    <div className="text-5xl font-heading p-3">46</div>
                    <div>
                      Industrial <br /> Collaborations
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-evenly flex-wrap">
                  <div className="h-auto w-auto bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center py-2">
                    <div className="text-5xl font-heading p-3">95%</div>
                    <div>
                      Placement <br /> Average
                    </div>
                  </div>
                  <div className="h-30 w-30 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center p-2">
                    <div className="text-5xl font-heading p-3">350</div>
                    <div>
                      Avg. Publications <br />
                      per year
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          {/* </div> */}
        </div>

        {/* <div className="absolute top-0 left-[10%] bg-transparent min-w-[80%] flex flex-col items-center p-2 justify-between z-11">
         
          <div className="relative lg:w-[300px] lg:h-[100px]">
            <a href="/home">
              <img
                src="../Institute-of-Technology.png"
                alt="Logo"
                className="absolute h-full w-full"
              />
            </a>
          </div> */}
        {/* <div className="relative lg:w-[300px] lg:h-[100px]">
            <a href="/home">
              <img
                src="../Institute-of-Technology.png"
                alt="Logo"
                className="absolute h-full w-full"
              />
            </a>
          </div> */}
        {/* <div className="w-[200px] h-[75px]">
            <a href="/home">
              <img
                src="../Institute-of-Technology.png"
                alt="Logo"
                className="h-full w-full"
              />
            </a>
          </div>

          <div className="text-xl h-auto w-auto text-white lg:hidden cursor-pointer">
            <input
              type={"checkbox"}
              id="chk-mob-menu"
              defaultChecked={false}
              hidden
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div> 
        </div>*/}

        {/* Virtual Tour Module */}
        <section className="bg-gray-50 h-[60vh] text-center ">
          {/* <section className="bg-gray-homeSection h-[60vh] text-center "> */}
          <div className="text-blue-ramaiah underline capitalize font-heading text-3xl md:text-4xl w-[83%] rounded-lg mx-auto h-full space-y-3 py-3">
            Campus Virtual Tour
            <br />
            <iframe
              src="https://www.easytourz.com/BT-EmabedTour/all/87002a26d035a1f7"
              width="100%"
              height="90%"
              webkitallowfullscreen=""
              mozallowfullscreen=""
              allowFullScreen=""
              className="rounded-lg"
            ></iframe>
          </div>
        </section>

        {/* Jnanam Vigyanam Module */}
        <div className="grid grid-cols-12">
          <div className="bg-homeBannerJnanam h-auto bg-no-repeat bg-cover bg-bottom space-y-3 py-3 col-span-full md:col-span-10 md:col-start-2 rounded-lg">
            <div className="mx-auto">
              <img src="sam-msr.png" className="mx-auto"></img>
            </div>
            <div className="flex flex-col md:flex-row w-full md:mx-auto justify-center md:space-x-8 space-y-2">
              <div className="max-w-[95%] mx-auto md:w-auto md:mx-0">
                <img src="msr.png" className="rounded-full" />
              </div>
              <div className="text-white w-full md:max-w-[30%] self-center space-y-10">
                <div className="text-4xl md:text-5xl font-bold w-full">
                  <p className="w-full text-center">A Tribute to</p>{" "}
                  <p className="w-full text-center">Dr. M. S. Ramaiah</p>{" "}
                </div>
                <div className="italic text-xl font-bold">
                  “What we have done for ourselves alone dies with us. What we
                  have done for others and the world remains and is immortal.”
                </div>
                <div className="w-full flex justify-center">
                  <button className="bg-orange-ramaiah p-2 text-white text-lg ">
                    EXPLORE BOARD OF MANAGEMENT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NewHome;
