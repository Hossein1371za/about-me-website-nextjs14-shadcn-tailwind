import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
const links = [
  { path: "/", name: "خانه" },
  { path: "/projects", name: "پروژه های من" },
  { path: "/contacts", name: "ارتباط با من" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((item, index) => (
        <Link
          className={`capitalize ${linkStyles}`}
          key={index}
          href={item.path}
        >
          {item.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 7}}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlineStyles}`}
            />
          )}
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
