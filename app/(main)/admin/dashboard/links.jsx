import {
  MdBookmark,
  MdDashboard,
  MdFeedback,
  MdFormatListBulletedAdd,
  MdOutlineAddchart,
  MdOutlineDashboardCustomize,
  MdRoom,
} from "react-icons/md";
import { RiApps2AddFill } from "react-icons/ri";
import { IoPersonAddOutline, IoPersonAddSharp } from "react-icons/io5";
import { SiWikibooks } from "react-icons/si";
import { CgFeed } from "react-icons/cg";
import { AiFillMeh, AiOutlineGroup, AiOutlineMenuUnfold } from "react-icons/ai";
import { BiSolidAddToQueue } from "react-icons/bi";

export const links = [
  {
    name: "Dashboard",
    link: "/admin/dashboard",
    icon: <MdOutlineDashboardCustomize className="text-lg" />,
    iconCurrent: <MdDashboard className="text-lg text-main" />,
  },
  {
    name: "Bookings",
    link: "/admin/dashboard/all-bookings",
    icon: <SiWikibooks className="text-lg" />,
    iconCurrent: <MdBookmark className="text-lg" />,
  },
  {
    name: "Feedbacks",
    link: "/admin/dashboard/all-feedbacks",
    icon: <CgFeed className="text-lg" />,
    iconCurrent: <MdFeedback className="text-lg" />,
  },
  {
    name: "Rooms",
    link: "/admin/dashboard/rooms",
    icon: <AiOutlineGroup className="text-lg" />,
    iconCurrent: <MdRoom className="text-lg" />,
  },
  {
    name: "Hotels",
    link: "/admin/dashboard/hotels",
    icon: <MdOutlineAddchart className="text-lg" />,
    iconCurrent: <BiSolidAddToQueue className="text-lg" />,
  },
  {
    name: "Add Room",
    link: "/admin/dashboard/add-room",
    icon: <MdFormatListBulletedAdd className="text-lg" />,
    iconCurrent: <RiApps2AddFill className="text-lg" />,
  },
  {
    name: "Add Admin",
    link: "/admin/dashboard/add-admin",
    icon: <IoPersonAddOutline className="text-lg" />,
    iconCurrent: <IoPersonAddSharp className="text-lg" />,
  },
  {
    name: "Add Hotel",
    link: "/admin/dashboard/add-hotel",
    icon: <AiOutlineMenuUnfold className="text-lg" />,
    iconCurrent: <AiFillMeh className="text-lg" />,
  },
];
