import SideBarSyllabus from "./SideBarSyllabus";
import { useRouter } from "next/router";

export default function FacultyDetails({
  data,
  syllabus,
  timetable,
  studymaterial,
  deptName,
}) {
  //   const [facultyData, setfacultyData] = useState(data[0]?.fa);
  //   const [mission, setMission] = useState(data[0]?.mission);
  //   const [data[0]?, setdata[0]?] = useState(data[0]?.data[0]?);

  //console.log(data);
  const router = useRouter();

  return (
    <>
      {/* Dept Nav Bar */}
      <div className="grid grid-cols-12 lg:bg-transparent lg:relative font-body">
        <div className="col-span-full h-8 border-[1px] place-self-start lg:sticky lg:top-10 border-blue-ramaiah rounded-md  bg-opacity-30 text-blue-ramaiah space-x-3 mx-auto lg:col-start-2 lg:col-end-4 lg:inline-flex lg:flex-col lg:h-auto lg:w-full">
          <div className="lg:w-full lg:flex lg:flex-col text-center">
            <a
              onClick={() => router.back()}
              className="lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah active:bg-opacity-100 bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2 hover:cursor-pointer"
            >
              Go back to Previous Page
            </a>
            <a
              href="faculty"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Faculty
            </a>
            <a
              href="research"
              className="lg:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Research
            </a>
            <a
              href="bos"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              BOS|BOE
            </a>
            <a
              href="achievements"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Achievements
            </a>
            <a
              href="activities"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Activities
            </a>
          </div>
        </div>

        {/* Dept Main Content*/}
        <div className="col-span-full m-2 p-2 lg:col-start-4 lg:col-end-10 h-auto text-black border-gray-100 border-2 bg-white">
          <h2 className="text-2xl font-heading text-blue-ramaiah text-center">
            Details of{" "}
            <span className="capitalize">{data[0]?.faculty_Full_Name}</span>
            <br />
          </h2>
          <br />

          <div className="rounded-sm border-gray-400 bg-gray-deptHeader mb-6 shadow-md p-4">
            <div
              key={data[0]?.id}
              className={"flex mb-6 items-start w-full" /* items-center*/}
            >
              <div className="mr-2 flex-grow w-[20%]">
                <img
                  className="border-white border-[1.5px] drop-shadow-2xl object-contain rounded-full w-full"
                  src={data[0]?.profile_Pic_URL}
                />
              </div>

              <div className="flex-shrink w-[80%] bg-white rounded-md shadow-md p-2">
                <h2 className="font-heading text-pink-ramaiah pb-2 text-3xl self-start">
                  {data[0]?.faculty_Full_Name}
                </h2>
                <hr className="border-gray-400 text-justify " />
                <div className="flex flex-row flex-wrap gap-4 justify-between">
                  <p className="leading-relaxed italic font-bold">
                    Email:{" "}
                    <span className="font-normal">{data[0]?.email_Address}</span>
                  </p>
                  <p className="leading-relaxed italic font-bold">
                    Phone:{" "}
                    <span className="font-normal">
                      {data[0]?.phone_Number === "none"
                        ? "Not Provided"
                        : data[0]?.phone_Number}
                    </span>
                  </p>
                </div>
                <hr className="border-gray-400 " />
                <p className="leading-relaxed text-justify italic mt-2">
                  {data[0]?.short_Bio}
                </p>
              </div>
            </div>
            <div>
              <div className="font-heading text-2xl text-blue-ramaiah">
                Education Details
              </div>
              {/* <hr className="border-gray-400 text-justify " /> */}
              {data[0]?.do_you_have_educational_details_to_write === "Yes" && (
                <div class="flex flex-col">
                  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="overflow-x-auto rounded-md shadow-lg">
                        <table class="min-w-full">
                          <thead class="border-b bg-gradient-to-r from-orange-ramaiah to-pink-ramaiah text-white">
                            <tr>
                              <th
                                scope="col"
                                class="text-sm font-medium  px-6 py-4 text-left"
                              >
                                Degree
                              </th>
                              <th
                                scope="col"
                                class="text-sm font-medium  px-6 py-4 text-left"
                              >
                                Year
                              </th>
                              <th
                                scope="col"
                                class="text-sm font-medium  px-6 py-4 text-left"
                              >
                                University
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="border-b bg-white">
                              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                {data[0]?.degree_1}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                {data[0]?.year_of_Completion_of_Degree_1}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                {
                                  data[0]?.university_from_which_Degree_1_was_obtained
                                }
                              </td>
                            </tr>
                            <tr class="bg-white border-b">
                              <td class="px-6 py-4  text-sm font-medium text-gray-900">
                                {data[0]?.degree_2}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                {data[0]?.year_of_Completion_of_Degree_2}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                {
                                  data[0]?.university_from_which_Degree_2_was_obtained
                                }
                              </td>
                            </tr>
                            <tr class="bg-white border-b">
                              <td class="px-6 py-4  text-sm font-medium text-gray-900">
                                {data[0]?.degree_3}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                {data[0]?.year_of_Completion_of_Degree_3}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                {
                                  data[0]?.university_from_which_Degree_3_was_obtained
                                }
                              </td>
                            </tr>
                            <tr class="bg-white border-b">
                              <td class="px-6 py-4  text-sm font-medium text-gray-900">
                                {data[0]?.degree_4}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                {data[0]?.year_of_Completion_of_Degree_4}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                {
                                  data[0]?.university_from_which_Degree_4_was_obtained
                                }
                              </td>
                            </tr>
                            <tr class="bg-white border-b">
                              <td class="px-6 py-4  text-sm font-medium text-gray-900">
                                {data[0]?.degree_5}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                {data[0]?.year_of_Completion_of_Degree_5}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                {
                                  data[0]?.university_from_which_Degree_5_was_obtained
                                }
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="mb-2">
              {" "}
              <div className="font-heading text-2xl mb-2 text-blue-ramaiah">
                Areas of Interest
              </div>
              {/* <hr className="border-gray-400 text-justify " />{" "} */}
              <div className="flex flex-row flex-wrap justify-evenly bg-white shadow-lg rounded-md p-2 space-x-1">
                <div className="mb-2 border-[1px] border-blue-ramaiah rounded-md bg-gray-100 shadow-md p-2">
                  {data[0]?.areas_of_Interest_1}
                </div>
                <div className="mb-2  border-[1px] border-blue-ramaiah rounded-md bg-gray-100 shadow-md p-2">
                  {data[0]?.areas_of_Interest_2}
                </div>
                <div className="mb-2  border-[1px] border-blue-ramaiah rounded-md bg-gray-100 shadow-md p-2">
                  {data[0]?.areas_of_Interest_3}
                </div>
                <div className="mb-2  border-[1px] border-blue-ramaiah rounded-md bg-gray-100 shadow-md p-2">
                  {data[0]?.areas_of_Interest_4}
                </div>
                <div className="mb-2 border-[1px] border-blue-ramaiah rounded-md bg-gray-100 shadow-md p-2">
                  {data[0]?.areas_of_Interest_5}
                </div>
              </div>
            </div>
            <div className="mb-2">
              {" "}
              <div className="font-heading text-2xl mb-2 text-blue-ramaiah">
                Subjects Taught:
              </div>
              {/* <hr className="border-gray-400 text-justify " />{" "} */}
              <div className="flex flex-row flex-wrap justify-evenly bg-white rounded-md shadow-lg p-2 space-x-1">
                <div className="mb-2 border-[1px] border-blue-ramaiah rounded-md bg-gray-100 shadow-md p-2">
                  {data[0]?.teaching_Subject_1}
                </div>
                <div className="mb-2 border-[1px] border-blue-ramaiah rounded-md bg-gray-100 shadow-md p-2">
                  {data[0]?.teaching_Subject_2}
                </div>
                <div className="mb-2 border-[1px] border-blue-ramaiah rounded-md bg-gray-100 shadow-md p-2">
                  {data[0]?.teaching_Subject_3}
                </div>
                <div className="mb-2 border-[1px] border-blue-ramaiah rounded-md bg-gray-100 shadow-md p-2">
                  {data[0]?.teaching_Subject_4}
                </div>
                <div className="mb-2 border-[1px] border-blue-ramaiah rounded-md bg-gray-100 shadow-md p-2">
                  {data[0]?.teaching_Subject_5}
                </div>{" "}
              </div>
            </div>
            <div className="mb-2">
              {" "}
              <div className="font-heading text-2xl text-blue-ramaiah">
                Professional Service
              </div>
              {/* <hr className="border-gray-400 text-justify " /> */}
              <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-x-auto rounded-md shadow-lg">
                      <table class="min-w-full">
                        <thead class="border-b bg-gradient-to-r from-orange-ramaiah to-pink-ramaiah text-white">
                          <tr>
                            <th
                              scope="col"
                              class="text-sm font-medium  px-6 py-4 text-left"
                            >
                              Designation
                            </th>
                            <th
                              scope="col"
                              class="text-sm font-medium  px-6 py-4 text-left"
                            >
                              Place of Work
                            </th>
                            <th
                              scope="col"
                              class="text-sm font-medium  px-6 py-4 text-left"
                            >
                              Duration
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-b bg-white">
                            <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                              {data[0]?.designation_1}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                              {data[0]?.place_of_Work_of_Designation_1}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                              {data[0]?.duration_of_Designation_1}
                            </td>
                          </tr>
                          <tr class="bg-white border-b">
                            <td class="px-6 py-4  text-sm font-medium text-gray-900">
                              {data[0]?.designation_2}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                              {data[0]?.place_of_Work_of_Designation_2}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                              {data[0]?.duration_of_Designation_2}
                            </td>
                          </tr>
                          <tr class="bg-white border-b">
                            <td class="px-6 py-4  text-sm font-medium text-gray-900">
                              {data[0]?.designation_3}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                              {data[0]?.place_of_Work_of_Designation_3}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                              {data[0]?.duration_of_Designation_3}
                            </td>
                          </tr>
                          <tr class="bg-white border-b">
                            <td class="px-6 py-4  text-sm font-medium text-gray-900">
                              {data[0]?.designation_4}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                              {data[0]?.place_of_Work_of_Designation_4}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                              {data[0]?.duration_of_Designation_4}
                            </td>
                          </tr>
                          <tr class="bg-white border-b">
                            <td class="px-6 py-4  text-sm font-medium text-gray-900">
                              {data[0]?.designation_5}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                              {data[0]?.place_of_Work_of_Designation_5}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                              {data[0]?.duration_of_Designation_5}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <div className="font-heading text-2xl text-blue-ramaiah">
                Funded Projects
              </div> */}
              {/* <hr className="border-gray-400 text-justify " /> */}
              {data[0]?.do_you_have_any_funded_projects === "Yes" && (
                <>
                  <div className="font-heading text-2xl text-blue-ramaiah">
                    Funded Projects
                  </div>
                  <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-x-auto rounded-md shadow-lg">
                          <table class="min-w-full">
                            <thead class="border-b bg-gradient-to-r from-orange-ramaiah to-pink-ramaiah text-white">
                              <tr>
                                <th
                                  scope="col"
                                  class="text-sm font-medium  px-6 py-4 text-left"
                                >
                                  Project Title
                                </th>
                                <th
                                  scope="col"
                                  class="text-sm font-medium  px-6 py-4 text-left"
                                >
                                  Duration
                                </th>
                                <th
                                  scope="col"
                                  class="text-sm font-medium  px-6 py-4 text-left"
                                >
                                  Funding Agency
                                </th>
                                <th
                                  scope="col"
                                  class="text-sm font-medium  px-6 py-4 text-left"
                                >
                                  Funding Amount
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="border-b bg-white">
                                <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                  {data[0]?.title_of_the_Project_1}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                  {data[0]?.duration_of_Project_1}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                  {data[0]?.funding_Agency_for_Project_1}
                                </td>{" "}
                                <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                  {data[0]?.funding_Amount_for_Project_1}
                                </td>
                              </tr>
                              <tr class="bg-white border-b">
                                <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                  {data[0]?.title_of_the_Project_2}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                  {data[0]?.duration_of_Project_2}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                  {data[0]?.funding_Agency_for_Project_2}
                                </td>{" "}
                                <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                  {data[0]?.funding_Amount_for_Project_2}
                                </td>
                              </tr>
                              <tr class="bg-white border-b">
                                <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                  {data[0]?.title_of_the_Project_3}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                  {data[0]?.duration_of_Project_3}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                  {data[0]?.funding_Agency_for_Project_3}
                                </td>{" "}
                                <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                  {data[0]?.funding_Amount_for_Project_3}
                                </td>
                              </tr>
                              <tr class="bg-white border-b">
                                <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                  {data[0]?.title_of_the_Project_4}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                  {data[0]?.duration_of_Project_4}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                  {data[0]?.funding_Agency_for_Project_4}
                                </td>{" "}
                                <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                  {data[0]?.funding_Amount_for_Project_4}
                                </td>
                              </tr>
                              <tr class="bg-white border-b">
                                <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                  {data[0]?.title_of_the_Project_5}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                  {data[0]?.duration_of_Project_5}
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                  {data[0]?.funding_Agency_for_Project_5}
                                </td>{" "}
                                <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                  {data[0]?.funding_Amount_for_Project_5}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div>
              {" "}
              {/* <div className="font-heading text-2xl mb-2 text-blue-ramaiah">
                Honours & Achievements
              </div> */}
              {/* <hr className="border-blue-ramaiah text-justify " /> */}
              {data[0]?.do_you_have_honors_awards_and_achievements === "Yes" && (
                <>
                  <div className="font-heading text-2xl mb-2 text-blue-ramaiah">
                    Honours & Achievements
                  </div>
                  <div className="bg-white shadow-lg rounded-md">
                    {" "}
                    <ul className="list-decimal ml-7">
                      <li className="mb-3">{data[0]?.ha1}</li>
                      <li className="mb-3">{data[0]?.ha2}</li>
                      <li className="mb-3">{data[0]?.ha3}</li>
                      <li className="mb-3">{data[0]?.ha4}</li>
                      <li className="mb-3">{data[0]?.ha5}</li>
                      <li className="mb-3">{data[0]?.ha6}</li>
                      <li className="mb-3">{data[0]?.ha7}</li>
                      <li className="mb-3">{data[0]?.ha8}</li>
                      <li className="mb-3">{data[0]?.ha9}</li>
                      <li className="mb-3">{data[0]?.ha10}</li>
                    </ul>{" "}
                  </div>
                </>
              )}
            </div>
            <div>
              {" "}
              {/* <hr className="border-gray-400 text-justify " /> */}
              {data[0]?.do_you_have_research_publications === "Yes" && (
                <>
                  {" "}
                  <div className="font-heading text-2xl mb-2 text-blue-ramaiah">
                    Research Publications
                  </div>
                  <div className="bg-white shadow-lg rounded-md">
                    <ul className="list-decimal ml-7">
                      <li className="mb-3">{data[0]?.rp1}</li>
                      <li className="mb-3">{data[0]?.rp2}</li>
                      <li className="mb-3">{data[0]?.rp3}</li>
                      <li className="mb-3">{data[0]?.rp4}</li>
                      <li className="mb-3">{data[0]?.rp5}</li>
                      <li className="mb-3">{data[0]?.rp6}</li>
                      <li className="mb-3">{data[0]?.rp7}</li>
                      <li className="mb-3">{data[0]?.rp8}</li>
                      <li className="mb-3">{data[0]?.rp9}</li>
                      <li className="mb-3">{data[0]?.rp10}</li>
                    </ul>
                  </div>
                </>
              )}
            </div>
            <div className="mb-2">
              {" "}
              {/* <hr className="border-gray-400 text-justify " /> */}
              {data[0]?
                .have_you_attended_any_workshops_or_delivered_guest_lectures ===
                "Yes" && (
                <>
                  {" "}
                  <div className="font-heading text-2xl mb-2 text-blue-ramaiah">
                    Workshops/FDPs Attended | Guest Lectures Delivered
                  </div>
                  <div className="bg-white shadow-lg rounded-md">
                    <ul className="list-decimal ml-7">
                      <li className="mb-3">{data[0]?.wg1}</li>
                      <li className="mb-3">{data[0]?.wg2}</li>
                      <li className="mb-3">{data[0]?.wg3}</li>
                      <li className="mb-3">{data[0]?.wg4}</li>
                      <li className="mb-3">{data[0]?.wg5}</li>
                      <li className="mb-3">{data[0]?.wg6}</li>
                      <li className="mb-3">{data[0]?.wg7}</li>
                      <li className="mb-3">{data[0]?.wg8}</li>
                      <li className="mb-3">{data[0]?.wg9}</li>
                      <li className="mb-3">{data[0]?.wg10}</li>
                    </ul>
                  </div>
                </>
              )}
            </div>
            <div className="mb-2">
              {/* <hr className="border-gray-400 text-justify " /> */}
              {data[0]?.do_you_have_any_membership_of_professional_societies ===
                "Yes" && (
                <>
                  {" "}
                  <div className="font-heading text-2xl mb-2 text-blue-ramaiah">
                    Membership of Professional Societies
                  </div>
                  <div className="bg-white shadow-lg rounded-md">
                    <ul className="list-decimal ml-7">
                      <li className="mb-3">{data[0]?.ps1}</li>
                      <li className="mb-3">{data[0]?.ps2}</li>
                      <li className="mb-3">{data[0]?.ps3}</li>
                      <li className="mb-3">{data[0]?.ps4}</li>
                      <li className="mb-3">{data[0]?.ps5}</li>
                      <li className="mb-3">{data[0]?.ps6}</li>
                      <li className="mb-3">{data[0]?.ps7}</li>
                      <li className="mb-3">{data[0]?.ps8}</li>
                      <li className="mb-3">{data[0]?.ps9}</li>
                      <li className="mb-3">{data[0]?.ps10}</li>
                    </ul>
                  </div>
                </>
              )}
            </div>
            <div className="mb-2">
              {/* <hr className="border-gray-400 text-justify " /> */}
              {data[0]?.do_you_have_books_and_patents === "Yes" && (
                <>
                  {" "}
                  <div className="font-heading text-2xl mb-2 text-blue-ramaiah">
                    Patents & Books
                  </div>
                  <div className="bg-white shadow-lg rounded-md">
                    <ul className="list-decimal ml-7">
                      <li className="mb-3">{data[0]?.bp1}</li>
                      <li className="mb-3">{data[0]?.bp2}</li>
                      <li className="mb-3">{data[0]?.bp3}</li>
                      <li className="mb-3">{data[0]?.bp4}</li>
                      <li className="mb-3">{data[0]?.bp5}</li>
                      <li className="mb-3">{data[0]?.bp6}</li>
                      <li className="mb-3">{data[0]?.bp7}</li>
                      <li className="mb-3">{data[0]?.bp8}</li>
                      <li className="mb-3">{data[0]?.bp9}</li>
                      <li className="mb-3">{data[0]?.bp10}</li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Dept Right Sidebar */}
        <div className="col-span-full lg:col-start-10 lg:col-end-12 h-auto lg:absolute lg:w-full text-blue-ramaiah">
          <div className=" text-center mb-5 w-[85%] m-auto lg:w-full">
            {/*syllabus*/}
            <div className="bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah rounded-t-xl text-white p-1 font-heading">
              Syllabus
            </div>
            <div className="lg:bg-gray-600 lg:bg-opacity-30 bg-white rounded-b-2xl">
              <SideBarSyllabus syllabus={syllabus} />
            </div>
          </div>
          <div className=" text-center mb-5 w-[85%] m-auto lg:w-full">
            {/*syllabus*/}
            <div className="bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah rounded-t-xl text-white p-1 font-heading">
              Timetable
            </div>
            <div className="lg:bg-gray-600 lg:bg-opacity-30 bg-white rounded-b-2xl">
              <SideBarSyllabus syllabus={timetable} />
            </div>
          </div>
          <div className=" text-center mb-5 w-[85%] m-auto lg:w-full">
            {/*syllabus*/}
            <div className="bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah rounded-t-xl text-white p-1 font-heading">
              Study Materials
            </div>
            <div className="lg:bg-gray-600 lg:bg-opacity-30 bg-white rounded-b-2xl">
              <SideBarSyllabus syllabus={studymaterial} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
