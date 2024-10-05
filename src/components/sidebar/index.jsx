/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import logo from 'assets/svg/logo.svg'
import SidebarCard from "components/sidebar/componentsrtl/SidebarCard";
import routes from "routes.js";

const Sidebar = ({ open, onClose }) => {
  return (
    <div
      className={`bg-bg_color sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col  pb-10 shadow-2xl shadow-white/8 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute text-white top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[56px] mt-[50px] flex items-center `}>
        <div className="mt-1 ml-1 ">
          <img src={logo} className="h-full object-cover" alt="logo" />
        </div>
      </div>
      <div class="mt-[58px] mb-7 h-px dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

      {/* Free Horizon Card */}
      {/* <div className="flex justify-center">
        <SidebarCard />
      </div> */}

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
