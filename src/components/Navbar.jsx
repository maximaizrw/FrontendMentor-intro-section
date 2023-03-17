import { useState } from "react";
import Logo from "../assets/images/logo.svg";
import IconMenu from "../assets/images/icon-menu.svg";
import IconMenuClose from "../assets/images/icon-close-menu.svg";
import IconArrowUp from "../assets/images/icon-arrow-up.svg";
import IconArrowDown from "../assets/images/icon-arrow-down.svg";
import IconCalendar from "../assets/images/icon-calendar.svg";
import IconPlanning from "../assets/images/icon-planning.svg";
import IconReminders from "../assets/images/icon-reminders.svg";
import IconTodo from "../assets/images/icon-todo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownVisible1, setIsDropdownVisible1] = useState(false);
  const [isDropdownVisible2, setIsDropdownVisible2] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleToggle = () => setIsOpen(!isOpen);

  function toggleDropdown1() {
    setIsDropdownVisible1(!isDropdownVisible1);
    setIsDropdownVisible2(false);
  }
  
  function toggleDropdown2() {
    setIsDropdownVisible2(!isDropdownVisible2);
    setIsDropdownVisible1(false);
  }

  return (
    <nav>
      <div className="w-full px-8 md:pr-0 py-4 flex items-center justify-between text-sm">
        <img src={Logo} alt="Logo" />
        <button className="md:hidden">
          <img src={IconMenu} alt="Open Menu" onClick={handleToggle} />
        </button>
        <div
          className={`text-neutral-medium-gray w-3/5 md:w-full flex flex-col md:flex-row md:justify-between px-8 py-4 absolute md:static top-0 right-0 h-screen md:h-auto bg-neutral-almost-white transition-all z-50 md:items-center ${
            isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0 hidden md:flex"
          }`}
        >
          <div className="flex justify-end md:hidden pb-4">
            <button>
              <img src={IconMenuClose} alt="Close Menu" onClick={handleClose} />
            </button>
          </div>

          <ul className="flex flex-col md:flex-row gap-4 pb-8 md:pb-0">
            <li className="relative">
              <button
                className="hover:text-neutral-almost-black flex items-center gap-2 pb-2"
                onClick={toggleDropdown1}
              >
                Features{" "}
                <img src={isDropdownVisible1 ? IconArrowUp : IconArrowDown} />
              </button>
              <ul
                className={`md:absolute z-50 top-full left-0 md:top-8 md:-left-14 md:bg-white md:shadow-2xl md:rounded-lg md:p-4 min-w-max  flex flex-col gap-y-2 ml-4 md:ml-0 ${
                  isDropdownVisible1 ? "visible" : "hidden"
                }`}
              >
                <li className="">
                  <a href="#" className="flex items-center gap-x-2 md:pb-2">
                    <img src={IconTodo} /> Todo List
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-x-2 md:pb-2">
                    <img src={IconCalendar} /> Calendar
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-x-2 md:pb-2">
                    <img src={IconReminders} /> Reminders
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-x-2 md:pb-2">
                    <img src={IconPlanning} /> Planning
                  </a>
                </li>
              </ul>
            </li>
            <li className="relative">
              <button
                className="hover:text-neutral-almost-black flex items-center gap-2 pb-2"
                onClick={toggleDropdown2}
              >
                Company{" "}
                <img src={isDropdownVisible2 ? IconArrowUp : IconArrowDown} />
              </button>
              <ul
                className={`md:absolute z-50 top-full left-0 md:top-8 md:bg-white md:shadow-2xl md:rounded-lg md:p-4 min-w-max flex flex-col gap-y-1 ml-4 md:ml-0  ${
                  isDropdownVisible2 ? "visible" : "hidden"
                }`}
              >
                <li className="md:pb-2">
                  <a href="#">History</a>
                </li>
                <li className="md:pb-2">
                  <a href="#">Our Team</a>
                </li>
                <li className="md:pb-2">
                  <a href="#">Blog</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-almost-black">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-neutral-almost-black">
                About
              </a>
            </li>
          </ul>
          <ul className="flex flex-col items-center md:flex-row gap-4">
            <li>
              <button className="hover:text-neutral-almost-black">Login</button>
            </li>
            <li className="w-full md:w-auto">
              <button className="py-2 px-4 rounded-xl w-full border-2 hover:border-neutral-almost-black hover:text-neutral-almost-black">
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed w-screen h-screen top-0 left-0 bg-black opacity-60 md:hidden"
          onClick={handleClose}
        />
      )}
    </nav>
  );
};

export default Navbar;
