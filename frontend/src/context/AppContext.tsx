import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import { dummyProducts } from "../assets/assets/assets";
import type { Product, User } from "../components/types/product";
import toast from "react-hot-toast";
type AppContextType = {
    currency: string;
    navigate: NavigateFunction;
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    isSeller: boolean | null;
    setisSeller: React.Dispatch<React.SetStateAction<boolean>>;
    showUserLogin: boolean;          // add this
    setshowUserLogin: React.Dispatch<React.SetStateAction<boolean>>;
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
    cartItems: Record<string, number>;
    setCartItems: React.Dispatch<React.SetStateAction<Record<string, number>>>;
    addToCart: (itemId: string) => void;
    updateCartItem: (itemId: string, quantity: number) => void;
    removeFromCart: (itemId: string) => void
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    getCartCount: () => number;
    getCartAmount: () => number;
};

// 2️⃣ Create context
export const AppContext = createContext<AppContextType | null>(null);

// 3️⃣ Provider props type (inline)
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const currency = import.meta.env.VITE_CURRENCY;
    const navigate = useNavigate();
    //   const [user, setUser] = useState<boolean>(true);
    const [user, setUser] = useState<User | null>(null);
    const [isSeller, setisSeller] = useState<boolean>(false);
    const [showUserLogin, setshowUserLogin] = useState<boolean>(false);
    const [products, setProducts] = useState<Product[]>([])
    const [cartItems, setCartItems] = useState<Record<string, number>>({})
    const [searchQuery, setSearchQuery] = useState<string>("");

    const fetchProduct = async () => {
        await setProducts(dummyProducts)
    }
    useEffect(() => {
        fetchProduct()
    }, [])
    const addToCart = (itemId: string) => {
        let cartData = structuredClone(cartItems)
        if (cartData[itemId]) {
            cartData[itemId] += 1;

        } else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData)
        toast.success("added to cart")
    }

    const updateCartItem = (itemId: string, quantity: number) => {
        let cartData = structuredClone(cartItems)
        cartData[itemId] = quantity
        setCartItems(cartData)
        toast.success("cart Updated")
    }
    const removeFromCart = (itemId: string) => {
        let cartData = structuredClone(cartItems)
        if (cartData[itemId]) {
            cartData[itemId] -= 1
            if (cartData[itemId] === 0) {
                delete cartData[itemId]
            }
        }
        toast.success("removed from cart")
        setCartItems(cartData)
    }
    const getCartCount = () => {
        let totalcount = 0;
        for (const item in cartItems) {
            totalcount += cartItems[item]
        }
        return totalcount
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let iteminfo = products.find((product) => product._id === items)
            if (cartItems[items] > 0) {
                totalAmount += (iteminfo?.offerPrice ?? 0) * cartItems[items];
                // totalAmount+=iteminfo.offerPrice*cartItems[items]
            }
        }
        return Math.floor(totalAmount * 100) / 100
    }

    const value: AppContextType = {
        navigate,
        user,
        setUser,
        isSeller,
        setisSeller,
        showUserLogin,
        setshowUserLogin,
        products,
        setProducts,
        cartItems,
        setCartItems,
        currency,
        addToCart,
        updateCartItem,
        removeFromCart,
        searchQuery,
        setSearchQuery,
        getCartCount,
        getCartAmount
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// 4️⃣ Custom hook for usage
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    return context;
};