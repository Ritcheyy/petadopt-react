import { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assets/svgs/logo.svg";
import HomeIcon from "../../../assets/svgs/sidenav/home.svg";
import GroupIcon from "../../../assets/svgs/sidenav/group.svg";
import FavouriteIcon from "../../../assets/svgs/sidenav/favourite.svg";
import ChatIcon from "../../../assets/svgs/sidenav/chat.svg";
import SettingsIcon from "../../../assets/svgs/sidenav/settings.svg";
import { SideNavs } from "../../../types/layout";

const sideNavLinks: SideNavs = [
  {
    name: "Home",
    icon: HomeIcon,
    link: "/",
    active: true,
  },
  {
    name: "Group",
    icon: GroupIcon,
    link: "/",
    active: false,
  },
  {
    name: "Favourite",
    icon: FavouriteIcon,
    link: "/",
    active: false,
  },
  {
    name: "Chat",
    icon: ChatIcon,
    link: "/",
    active: false,
  },
  {
    name: "Settings",
    icon: SettingsIcon,
    link: "/",
    active: false,
  },
];

const SideNav: NextComponentType = () => {
  return (
    <aside className="h-full w-2/12 fixed top-0 bottom-0 bg-primary">
      <div className="mt-14 text-center">
        <Image width="95%" src={Logo} alt="App Logo" />
        <h1 className="!text-3xl font-medium mt-5 text-white">Petadopt</h1>
      </div>

      <div className="pl-8 mt-20">
        {sideNavLinks.map((item) => (
          <Link href={item.link} key={item.name}>
            <div className="cursor-pointer flex items-center mb-8">
              <Image src={item.icon} alt="App Logo" />
              <span
                className={`text-grey-10 text-2xl ml-5 hover:text-gray-100 ${
                  item.active ? "text-white font-medium" : "font-light"
                }`}
              >
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};
export default SideNav;
