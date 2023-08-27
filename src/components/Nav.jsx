import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

// const Navbar = () => {
//   return (
//     <header className="padding-x absolute z-10 py-8 w-full bg-amber-400">
//       <nav
//         className="flex justify-between items-center max-container
//       bg-amber-500"
//       >
//         <a href="#">
//           <img src={headerLogo} alt="logo" width={130} height={29} />
//         </a>
//         <ul className="flex-1 flex justify-center gap-16 items-center max-lg:hidden">
//           {navLinks.map((item) => (
//             <li key={item.label}>
//               {" "}
//               <a
//                 href={item.href}
//                 className="font-montserrat leading-normal text-lg text-slate-gray"
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <div className="lg:hidden">
//           <img src={hamburger} alt="hamburger" width={25} height={25} />
//         </div>
//       </nav>
//     </header>
//   );
// };

const Nav = () => {
  return (
    <header className="py-8 sm:px-16 px-8 absolute z-10 w-full ">
      <nav className="flex  justify-between items-center max-container ">
        <a href="#">
          <img src={headerLogo} alt="logo" width={130} />
        </a>

        <ul className="flex flex-1 justify-center gap-16 items-center lg:flex hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden ">
          <img src={hamburger} alt="hamburger" width={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
