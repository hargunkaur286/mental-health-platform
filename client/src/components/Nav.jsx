import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className='padding-h absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          {/* <img
            src={headerLogo}
            alt='logo'
            width={200}
            height={49}
            className='m-0 w-[200px] h-[200px]'
          /> */}
          <h2 className="mt-10 pl-16 text-2xl tracking-wider text-orange-600 font-bold font-serif">EMPATHEAR</h2>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden mt-8'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-mono leading-normal text-lg text-slate-600'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-mono max-lg:hidden wide:mr-24 pr-16 mt-8'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
