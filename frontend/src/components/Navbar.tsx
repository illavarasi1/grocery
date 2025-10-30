import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/assets/greencart.png'
import search from '../assets/assets/search_icon.svg'
import cart from '../assets/assets/cart_icon.svg'
import menu from '../assets/assets/menu_icon.svg'
import profile from '../assets/assets/profile_icon.png'
import '../index.css'
import { useAppContext } from '../context/AppContext'
const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const { user, setUser, setshowUserLogin, navigate, searchQuery, setSearchQuery, getCartCount } = useAppContext()
    const logout = async () => {
        setUser(null)
        navigate('/')
    }
    useEffect(() => {
        if (searchQuery.length > 0) {
            navigate('/products')

        }
    }, [searchQuery])

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink to={"/"} onClick={() => setOpen(false)}>
                <img src={logo} alt='logo' className='h-12 w-38' />

            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to={"/"} className="text-sm hover:text-primary-dull transition">Home</NavLink>
                <NavLink to={"/products"} className="text-sm hover:text-primary-dull transition">AllProduct</NavLink>
                <NavLink to={"/contact"} className="text-sm hover:text-primary-dull transition">Contact</NavLink>

                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input onChange={(e) => setSearchQuery(e.target.value)} className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <img src={search} alt="search" className='w-4 h-4' />
                </div>

                <div className="relative cursor-pointer">
                    <img src={cart} alt="cart" className='w-6 opacity-80' />
                    <button onClick={() => navigate('/cart')} className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{
                        getCartCount()}</button>
                </div>

                {!user ?
                    (<button onClick={() => setshowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
                        Login
                    </button>)
                    :
                    (
                        <div className='relative group'>
                            <img src={profile} className='w-10' alt='profile' />
                            <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40'>
                                <li onClick={() => navigate('myorders')} className='p-1.5 hover:bg-primary/10 cursor-pointer'>MyOrder</li>
                                <li onClick={logout} className='p-1.5 hover:bg-primary/10 cursor-pointer'>Logout</li>
                            </ul>
                        </div>
                    )}
            </div>
            <div className='flex items-center gap-6 sm:hidden'>
                <div className="relative cursor-pointer">
                    <img src={cart} alt="cart" className='w-6 opacity-80' />
                    <button onClick={() => navigate('/cart')} className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{
                        getCartCount()}</button>
                </div>
                <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" >
                    {/* Menu Icon SVG */}
                    <img src={menu} alt="menu" />
                </button>

            </div>

            {/* Mobile Menu */}
            {open && (
                <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                    <NavLink to={'/'} onClick={() => setOpen(false)}>Home</NavLink>
                    <NavLink to={'/product'} onClick={() => setOpen(false)}>AllProduct</NavLink>
                    {
                        user &&
                        <NavLink to={'/order'} onClick={() => setOpen(false)}>MyOrder</NavLink>
                    }
                    <NavLink to={'/contect'} onClick={() => setOpen(false)}>contect</NavLink>
                    {!user ? (
                        <button onClick={() => {
                            setOpen(false);
                            setshowUserLogin(true)
                        }}
                            className="cursor-pointer px-6 py-2 mt-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dull)] transition text-white rounded-full text-sm">
                            Login

                        </button>
                    ) : (
                        <button onClick={logout} className="cursor-pointer px-6 py-2 mt-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dull)] transition text-white rounded-full text-sm">
                            Logout

                        </button>
                    )}
                </div>)
            }
        </nav>
    )
}

export default Navbar