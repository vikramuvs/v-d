import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <>
      <div className="rounded-lg absolute bg-transparent drawer drawer-end w-full h-[50vh] z-[40]">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col drawer-content">
          <div className="w-full navbar bg-white">
            <div className="flex-1 px-2 mx-2">
              <div className="relative w-[300px] h-[100px]">
                <a href="/home">
                  <img
                    src="../Institute-of-Technology.png"
                    alt="Logo"
                    className="absolute h-full w-full"
                  />
                </a>
              </div>
            </div>

            <div class="dropdown dropdown-hover xs:hidden md:inline-block">
              <div tabindex="0" class="m-1 btn bg-blue-ramaiah">
                About Us
              </div>
              <ul
                tabindex="0"
                class="p-2 shadow menu dropdown-content top-[100%] bg-blue-ramaiah rounded-box w-52"
              >
                <li>
                  <a>Overview</a>
                </li>
                <li>
                  <a>Evolution</a>
                </li>
                <li>
                  <a>Governance</a>
                </li>
                <li>
                  <a>Other Committees</a>
                </li>
              </ul>
            </div>
            <div class="dropdown dropdown-hover xs:hidden md:inline-block ">
              <div tabindex="0" class="m-1 btn bg-blue-ramaiah">
                Departments
              </div>
              <ul
                tabindex="0"
                class="p-2 h-[300px] shadow menu overflow-y-auto dropdown-content top-[100%] bg-blue-ramaiah rounded-box w-52"
              >
                <li>
                  <a>Architecture</a>
                </li>
                <li>
                  <a>Artificial Intelligence & Data Science</a>
                </li>
                <li>
                  <a>Artificial Intelligence & Machine Learning</a>
                </li>
                <li>
                  <a>Biotechnology</a>
                </li>
                <li>
                  <a>Chemical Engineering</a>
                </li>
                <li>
                  <a>Chemistry</a>
                </li>
                <li>
                  <a>Civil Engineering</a>
                </li>
                <li>
                  <a>Computer Science & Engg.</a>
                </li>
                <li>
                  <a>Computer Science & Engg. (AI & ML)</a>
                </li>
                <li>
                  <a>Computer Science & Engg. (Cyber Security)</a>
                </li>
                <li>
                  <a>Electrical & Electronics Engg.</a>
                </li>
                <li>
                  <a>Electronics & Communications Engg.</a>
                </li>
                <li>
                  <a>Electronics & Instrumentation Engg.</a>
                </li>
                <li>
                  <a>Electronics & Telecommunications Engg.</a>
                </li>
                <li>
                  <a>Humanities</a>
                </li>
                <li>
                  <a>Mathematics</a>
                </li>
                <li>
                  <a>Mechanical Engineering</a>
                </li>
                <li>
                  <a>Medical Electronics Engg.</a>
                </li>
                <li>
                  <a>Physics</a>
                </li>
              </ul>
            </div>
            <div class="dropdown dropdown-hover xs:hidden md:inline-block">
              <div tabindex="0" class="m-1 btn bg-blue-ramaiah">
                Facilites
              </div>
              <ul
                tabindex="0"
                class="p-2 shadow menu dropdown-content top-[100%] bg-blue-ramaiah rounded-box w-52"
              >
                <li>
                  <a>Library</a>
                </li>
                <li>
                  <a>Hostel</a>
                </li>
                <li>
                  <a>Internet</a>
                </li>
                <li>
                  <a>Fitness Center</a>
                </li>
                <li>
                  <a>Other Facilities</a>
                </li>
              </ul>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu horizontal space-x-2">
                <li>
                  <a className="rounded-btn bg-blue-ramaiah">Examination</a>
                </li>
                <li>
                  <a className="rounded-btn bg-blue-ramaiah">Placement</a>
                </li>
                <li>
                  <a className="rounded-btn bg-blue-ramaiah">Contact</a>
                </li>
              </ul>
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
          </div>
        </div>
        <div className="drawer-side">
          <label for="my-drawer-3" className="drawer-overlay"></label>
          <ul className="p-4 overflow-y-auto menu w-80 bg-base-100">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>

            <div class="dropdown dropdown-hover">
              <div tabindex="0" class="m-1 btn bg-blue-ramaiah">
                Dropdown
              </div>
              <ul
                tabindex="0"
                class="p-2 shadow menu dropdown-content bg-blue-ramaiah rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
