export default function NewHeader() {
  return (
    <div className="grid grid-cols-12 gap-3 md:gap-4">
      <header className="col-span-10 flex items-center justify-between col-start-2 shadow-md rounded-b-lg row-span-1 max-h-full">
        <div className="h-full inline-flex items-center">
          <a href="/">
            <img
              src={
                "https://lh3.googleusercontent.com/nk-g8BVkPMJQMs50Nvr3FaqEydozqQKXauW_E1n5vx33kaUyJdBAcG-od6K9IaeCw38xLgJlO9zvmlNCqL5qOpywKr6jDOU1rg3A-8BfO05TAHEXE4I9MWRNBXbD_M_UCrohVBEmWWRDy1nCGksNjZQOU_ufcSz3AO7-GbhXOGUz-YbLWPX8s-32x08-I0gAd93oDuh6r7COyUBntyQ9JjHtK4WV5OZHH3VtpxtfErQOAf7KnB4cJhBD_tPg4OHGWFmvUusuxy5LKv6tynXmeUI9d8hnMTVcOPxNzoBQAXtzQHOnIEa73EDxhGxmbFS3pR3buExh6q_RUhnIZaZEK-j78e_p8syxvue1-3Z3CS--pu1tZsyDkgOdnner1C81ODuk8SBU8dnxW4gihiP_AjiiKLxPK5-stPlzZAHN_GhLbTUfyiwaiUtSskT8bEQkXccw7NxZq3Fy8L_8jnijyTqAKpAns84qDe9f066Iyf-CxsRwm-R317euc36oAyeXOxwaTZcrhQ_vQbvmDwZjeOHL13d9N1LXoiE7m1-F_muA13HrxO0O0KIpkVCwGLpb6AGYL6Ze4_dIV_yvKL9eoTikuquL2bDt19iyc8FiKSxXYuUH7dC12QWCvILcJ2mXKmwkTNm8xYiuvwvJaCYVvVWhSJdlciQRzQAm3v0zxP0FOgYlt3HC5sfYm5D219OfhQDrclX5pm14GkqqGp1qS3oJ=w409-h122-no?authuser=0"
              }
              alt="Logo"
              className="h-[50px] md:h-[90px]"
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
          <nav className="max-h-1/2 navbar">
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
                  <a href="/dept/eie">Electronics & Instrumentation Engg.</a>
                </li>
                <li>
                  <a href="/dept/ete">Electronics & Telecommunications Engg.</a>
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
    </div>
  );
}
