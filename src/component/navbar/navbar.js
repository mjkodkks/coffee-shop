import  { useState , useEffect } from 'react';
import logo from '../../assets/pic/logo.svg'
import cartIcon from '../../assets/pic/shopping_cart_icon.svg'
import profileIcon from '../../assets/pic/profile_Image.png'

function Navbar () {
    const [count, setCount] = useState(0);
    useEffect (()=> {
        console.log(count)
    })

    return (
        <nav className="flex justify-between items-center pt-5 pl-20 pr-20 bg-transparent">
            <div className=""><img src={logo} alt="logo"/></div>
            <div>
                <ul className="flex text-black">
                    <li className="m-7">Home</li>
                    <li className="m-7">about Us</li>
                    <li className="m-7">Our Land</li>
                    <li className="m-7">Our Suppliers</li>
                    <li className="m-7">Productsd</li>
                    <li className="m-7">Contact Us</li>
                </ul>
            </div>
            <div className="flex">
                <img src={cartIcon} alt="cart" className="mr-10" />
                <img src={profileIcon} alt="profile" className="w-15" />
            </div>
        </nav>
    );
}

export { Navbar }