"use client";
import Link from "next/link"
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
  RiFacebookFill,
} from "react-icons/ri";
const icons=[
  {
    path:"/",
    name:<RiYoutubeFill/>,
  },
  {
    path:"/",
    name:<RiLinkedinFill/>,
  },
  {
    path:"/",
    name:<RiGithubFill/>,
  },
  {
    path:"/",
    name:<RiInstagramFill/>,
  },
  {
    path:"/",
    name:<RiFacebookFill/>,
  },
]
const Socials = ({containerStyle,iconsStyle}) => {
  return <div className={`${containerStyle}`}>
    {icons.map((icon,index)=>{
      return(
        <Link href={icon.path} key={index}>
          <div className={`${iconsStyle}`}>{icon.name}</div>
        </Link>
      )
    })}
    
  </div>;
};

export default Socials;
