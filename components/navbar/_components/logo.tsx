
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
         <>
            <Link href={"/"}>
                <Image
                    src="/assets/logo/fupre-waste_logo nobg.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="
                    w-10 ml-6 mr-10
                  "
                    />
            </Link>
    </> 
    );
}
 
export default Logo;