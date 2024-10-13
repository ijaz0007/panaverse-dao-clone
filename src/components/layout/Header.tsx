import Link from "next/link"
import Logo from "/Public/logo.png"
import Image from "next/image"
import Wrapper from "@/components/shared/Wrapper"

const Header = () => {
    return (
        <header className="sticky top-0 z-10 bg-white">
                <Wrapper>
                <div className="flex justify-between  py-4 items-center">
                        <div>
                            {/* <h2 className="text-xl font-bold">Panaverse Dao</h2> */}
                            <Image src={Logo} alt="Panverse Dao Logo"  />
                        </div>
                        {/* navigation bar */}
                        <ul className="flex space-x-8 font-medium">
                            <li>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link href={"/Courses"}>Courses</Link>
                            </li>
                        </ul>
                </div>
            </Wrapper>
        </header>
)
}

export default Header
