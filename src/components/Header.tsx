'use client'
import { useAuthContext } from "@/context/AuthContext";
import Link from "next/link"


const Header = () => {
    const {user, logout} = useAuthContext();

    console.log(user)

    return (
        <header>
            <h1>Nobox Blog</h1>

            <nav>
                <ul>
                    <li>
                        <Link href={"/"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={"/post"}>
                            Post
                        </Link>
                    </li>
                    <li>
                        {
                            !user ? (
                                <Link href={"/auth/login"}>
                                    Login
                                </Link>) :
                                (
                                    <Link href={"/auth/logout"} onClick={(e)=>{
                                        e.preventDefault()
                                        logout();
                                    }}>
                                        {user.username}
                                    </Link>
                                )
                        }
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
