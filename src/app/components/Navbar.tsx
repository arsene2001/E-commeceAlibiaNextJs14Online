import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
// import SearchBar from "./SearchBar";
import NavBarIcons from "./NavBarIcons";
const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative md:pt-6 border-b border-orange-500  shadow-lg">
      {/**MOBILE */}
      <div className="flex items-center justify-between h-full md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">ALIBIA</div>
        </Link>
        <Menu />
      </div>
      {/**Bigger scrrens */}
      <div className="">
        <div className="hidden md:flex items-center justify-between h-full gap-8 ">
          {/**Left */}
          <div className="flex items-center gap-12  justify-between  w-full">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Logo" width={24} height={24} />
              <div className="text-2xl tracking-wide text-orange-500">
                ALIBIA
              </div>
            </Link>
            <div className="hidden xl:flex gap-4">
              <Link href="/">Accueil</Link>
              <Link href="../produits">Toutes les catégories</Link>
              <Link href="../a-propos">À propos </Link>
              <Link href="../contact">Contact</Link>
            </div>

            <div className="flex items-center justify-between gap-8">
              <NavBarIcons />
            </div>
          </div>
          {/**RIGHT */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
