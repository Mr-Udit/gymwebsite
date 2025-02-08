
import { Menu, School } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavigationMenuDemo } from "./NavigationMenuDemo";
// import { Link, } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-16  bg-[#0A0A0A] border-b pt-4 border-b-gray-800  top-0 left-0 right-0 duration-300 z-10">
      {/* desktop */}
      <div className="items-center justify-between hidden mx-auto max-w-7xl md:flex">
        <div className="flex justify-center gap-2">
          <School size={30} className="text-white" />
          <h1 className="hidden text-2xl font-extrabold text-white md:block" >E Learning</h1>
        </div>
        <NavigationMenuDemo />
        {/* user icon and dark mode icon */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Button variant="outline" >Login</Button>
            <Button>Signup</Button>
          </div>
          {/* mobile device */}
        </div>
      </div>
      <div className="flex items-center justify-between h-full px-4 md:hidden">
        <School size={30} />
        <h1 className="text-2xl font-extrabold md:block" >E Learning</h1>
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;


const MobileNavbar = () => {
  const role = "mentor"

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-black bg-gray-100 rounded-full hover:bg-gray-200">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col" >
        <SheetHeader className="flex flex-col items-center justify-between mt-2">
          <SheetTitle>E Learning</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4">
          <a to="/my-learning">My Learning</a>
          <a to="/profile">Edit Profile</a>
          <p>Log out</p>
        </nav>
        {
          role === "mentor" && (
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Dashboard</Button>
              </SheetClose>
            </SheetFooter>
          )
        }
      </SheetContent>
    </Sheet>
  );
};

