import Link from "next/link";
import {FaGithub, FaLinkedinIn,FaTiktok} from 'react-icons/fa'

const socials = [
    {icon : <FaGithub/>, path: "https://github.com/cherif06"},
    {icon : <FaLinkedinIn/>, path: "https://www.linkedin.com/in/cherif-bakhoum-841506397"},
    {icon : <FaTiktok/>, path: "https://www.tiktok.com/@cherif_code"},
    // {icon : <FaYoutube/>, path: ""},
    // {icon : <FaTwitter/>, path: ""},
]
const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item,index)=> {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                    
                )
            })}
        </div>
    );
}

export default Social;