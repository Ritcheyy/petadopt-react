import { PropsWithChildren } from "react";
import SideNav from "../components/generic/SideNav";
import NavBar from "../components/generic/NavBar";

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <SideNav />
      <main className="ml-auto w-10/12 bg-grey-20 h-full">
        <NavBar />
        <div>
          {children}
        </div>
      </main>
    </>
  );
};

export default DefaultLayout;
