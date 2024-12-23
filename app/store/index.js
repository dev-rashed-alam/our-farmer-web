import { createStore } from 'redux';
import { toast } from "react-toastify";
import axios from "axios";
import {API_BASE_URL} from "@/app/config/constant";

// Define your reducer(s)
const initialState = {
    cartItems: [],
    totalCartItems: 0,
    allProducts: [
        {
            id: 1,
            name: "Cauliflower (ফুলকপি)",
            price: 5.99,
            slug: "cauliflower",
            image: "/images/products/1.png",
            description: "Fresh organic apple from the farm",
            discount: "10% off",
            discount_percent: 10,
            types: "Sales",
            isFeatured: false,
            category_id: 1,
            stock: 10,
            category: {
                id: 1,
                name: "Vegetables"
            }
        },
        {
            id: 14,
            name: "Pumpkin (কুমড়ো)",
            price: 16.99,
            slug: "pumpkin",
            image: "/images/products/9.webp",
            description: "Fresh organic pumpkin from the farm",
            discount: "20% off",
            types: null,
            isFeatured: false,
            stock: 0,
            category_id: 1
        },
        {
            id: 15,
            name: "Spinach (পালং)",
            price: 17.99,
            slug: "spinach",
            image: "/images/products/9.jpeg",
            description: "Fresh organic spinach from the farm",
            discount: null,
            types: "Organic",
            isFeatured: true,
            stock: 10,
            category_id: 3
        },
        {
            id: 4,
            name: "Lady's finger (ঢেঁড়স)",
            price: 6.99,
            slug: "ladys-finger",
            image: "/images/products/3.jpeg",
            description: "Fresh organic Ladies-finger from the farm",
            discount: "20% off",
            stock: 10,
            types: null,
            category_id: 1
        },
        {
            id: 5,
            name: "Rice (চাল)",
            price: 7.99,
            image: "/images/products/4.jpeg",
            description: "Fresh organic pineapple from the farm",
            discount: null,
            types: "Organic",
            stock: 10,
            category_id: 5,
            isFeatured: true,
            slug: "rice"
        },
        {
            id: 6,
            name: "Potato (আলু)",
            price: 8.99,
            image: "/images/products/6.jpeg",
            description: "Fresh organic watermelon from the farm",
            discount: "10% off",
            types: "Sales",
            isFeatured: true,
            category_id: 1,
            stock: 0,
            slug: "potato"
        },
        {
            id: 7,
            name: "Tomato (টমেটো)",
            price: 9.99,
            image: "/images/products/14.jpeg",
            description: "Fresh organic tomato from the farm",
            discount: "5% off",
            types: "Sales",
            isFeatured: true,
            stock: 10,
            category_id: 1,
            slug: "tomato"
        },
        {
            id: 9,
            name: "Cabbage (বাঁধাকপি)",
            price: 11.99,
            image: "/images/products/10.jpeg",
            description: "Fresh organic cabbage from the farm",
            discount: "20% off",
            types: null,
            isFeatured: true,
            stock: 10,
            category_id: 1,
            slug: "cabbage"
        },
        {
            id: 10,
            name: "Green Chilli (মরিচ)",
            price: 12.99,
            image: "/images/products/11.webp",
            description: "Fresh organic green chilli from the farm",
            discount: null,
            types: "Organic",
            isFeatured: false,
            stock: 10,
            category_id: 1,
            slug: "green-chilli"

        },
        {
            id: 11,
            name: "Ginger (আদা)",
            price: 13.99,
            image: "/images/products/12.jpeg",
            description: "Fresh organic ginger from the farm",
            discount: "10% off",
            types: "Sales",
            isFeatured: true,
            stock: 10,
            category_id: 1,
            slug: "ginger"
        },
        {
            id: 12,
            name: "Garlic (রসুন)",
            price: 14.99,
            image: "/images/products/13.webp",
            description: "Fresh organic garlic from the farm",
            discount: "5% off",
            types: "Sales",
            stock: 10,
            category_id: 1,
            slug: "garlic"
        },
        {
            id: 13,
            name: "Onion (পেঁয়াজ)",
            price: 15.99,
            image: "/images/products/8.jpeg",
            description: "Fresh organic onion from the farm",
            discount: "15% off",
            types: "Organic",
            stock: 10,
            category_id: 1,
            slug: "onion"
        },
    ],
    products: [],
    user: null,
    error: null,
    categories: [],
    orders: [],
    ordersByTracking: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.cartItems.length > 0 && state.cartItems.find(item => item.id === action.payload.id);

            if (existingItem) {
                toast.warning(action.payload.name+ ' is already in cart', {position: "top-center"});
                return state;
            } else {
                try {
                    let currentCartItems = state.cartItems || [];

                    const newCartItems = [...currentCartItems, {
                        id: action.payload.id,
                        name: action.payload.name,
                        price: action.payload.price,
                        image: action.payload.image,
                        description: action.payload.description,
                        discount: action.payload.discount,
                        types: action.payload.types,
                        isFeatured: action.payload.isFeatured,
                        quantity: 1,
                        stock: action.payload.stock
                    }];

                    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
                    toast.success(action.payload.name+' is added to cart', {position: "top-center"});
                    return {
                        ...state,
                        cartItems: newCartItems,
                        totalCartItems: state.totalCartItems + 1
                    };
                } catch (error) {
                    console.log(error)
                }
            }
        case 'REMOVE_FROM_CART':
            console.log('REMOVE_FROM_CART', action.payload)
            const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            toast.warning(
                action.payload.name+' is removed from cart', {position: "top-center"});
            return {
                ...state,
                cartItems: updatedCartItems,
                totalCartItems: state.totalCartItems - 1
            };
        case 'INCREASE_QUANTITY':
            const increasedCartItems = state.cartItems.map(item =>{
                    // check stock before increasing quantity
                    if (item.id === action.payload.id && item.quantity >= item.stock) {
                        toast.warning('Out of stock', {position: "top-center"});
                        return item
                    }
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    return item
                }
            );
            localStorage.setItem('cartItems', JSON.stringify(increasedCartItems));
            return {
                ...state,
                cartItems: increasedCartItems
            };
        case 'DECREASE_QUANTITY':
            if (action.payload.quantity === 1) {
                toast.warning('Quantity can not be less than 1', {position: "top-center"});
                return state;
            }
            const decreasedCartItems = state.cartItems.map(item =>
                item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
            );
            localStorage.setItem('cartItems', JSON.stringify(decreasedCartItems));
            return {
                ...state,
                cartItems: decreasedCartItems
            };
        case 'TOTAL_CART_ITEMS':
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            const total = cartItems.length
            return {
                ...state,
                totalCartItems: total,
                cartItems: cartItems
            };
        case 'GET_PRODUCTS':
            let allProducts = JSON.parse(localStorage.getItem('products'));
            if (action.payload.src && action.payload.src != '') {
                const products = allProducts.filter(product => product.name.toLowerCase().includes(action.payload.src.toLowerCase()))
                return {
                    ...state,
                    products: products
                };
            }
            if (action.payload.category) {
                console.log(allProducts)
                const products = allProducts && allProducts.filter(product => {
                    if (!product.category){
                        return false
                    }
                    return product.category.id == action.payload.category
                })
                return {
                    ...state,
                    products: products
                };
            }

            if (action.payload.isTrending) {
                const products = allProducts.filter(product => product.isTrending == action.payload.isTrending)
                return {
                    ...state,
                    products: products
                };
            }

            if (action.payload.isFeatured) {
                const products = allProducts.filter(product => product.isFeatured == action.payload.isFeatured)
                return {
                    ...state,
                    products: products
                };
            }
            
            return {
                ...state,
                products: allProducts,
                allProducts: allProducts
            };
        case 'GET_SINGLE_PRODUCT':
            const product = state.allProducts.find(product => product.slug === action.payload);
            return {
                ...state,
                products: product
            };
        case 'GET_ALL_CATEGORY':
            //get all categories from local storage
            const categories = JSON.parse(localStorage.getItem('categories'));
            return {
                ...state,
                categories: categories
            };
        case 'SIGN_IN_USER':
            localStorage.setItem('auth_info', JSON.stringify(action.payload));
            return {
                ...state,
                user: action.payload
            };
        case 'GET_ORDERS':
            const orders = JSON.parse(localStorage.getItem('orders'));
            return {
                ...state,
                orders: orders
            };
        case 'GET_ORDERS_BY_TRACKING':
            const ordersByTracking = JSON.parse(localStorage.getItem('orderByTrackingNumber'));
            return {
                ...state,
                ordersByTracking: ordersByTracking
            };
        default:
            return {
                ...state,
                products: state.allProducts
            };
    }
};

// Create the store
const store = createStore(rootReducer);

export default store;
