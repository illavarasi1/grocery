import { useAppContext } from "../../context/AppContext";
import addicon from "../../assets/assets/add_icon.svg"
import productlist from "../../assets/assets/product_list_icon.svg"
import orderlist from "../../assets/assets/order_icon.svg"
import logo from "../../assets/assets/greencart.png"
import { Link, NavLink, Outlet } from "react-router-dom";

const SellerLayout = () => {
    const { setisSeller } = useAppContext()


    const sidebarLinks = [
        { name: "add product", path: "/seller", icon: addicon },
        { name: "product list", path: "/seller/product-list", icon: productlist },
        { name: "orders", path: "/seller/orders", icon: orderlist },
    ];
    const logout = async () => {
        setisSeller(false)
    }

    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white">
                <Link to="/">
                    <img src={logo} alt="logo" className="cursor-pointer h-12 w-38" />
                </Link>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button onClick={logout} className='border rounded-full text-sm px-4 py-1'>Logout</button>
                </div>
            </div>
            <div className="flex">
                <div className="md:w-64 w-16 border-r h-[95vh] text-base border-gray-300 pt-4 flex flex-col">
                    {sidebarLinks.map((item) => (
                        <NavLink to={item.path} key={item.name} end={item.path === "/seller"}
                            className={({ isActive }) => `flex items-center py-3 px-4 gap-3 
                            ${isActive ? "border-r-4 md:border-r-[6px] bg-primary/10 border-primary text-primary"
                                    : "hover:bg-gray-100/90 border-white"
                                }`
                            }
                        >
                            <img src={item.icon} alt="" className="w-7 h-7" />
                            <p className="md:block hidden text-center">{item.name}</p>
                        </NavLink>
                    ))}
                </div>
                <Outlet />
            </div>

        </>

    )
}

export default SellerLayout