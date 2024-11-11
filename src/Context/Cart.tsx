import { createContext, FC, ReactNode, useContext, useState } from "react";
import { Product } from "./Products";


type CartItem = Pick<Product, 'name' | 'price' | 'image' | 'description'> & { quantity: number } & { id: number };

export interface CartContextType {
    addToCart: (newCartItem: CartItem) => void;
    increaseItemQuantity: (productId: number) => void;
    desrememtionItemQuantity: (productId: number) => void;
    ClearCart: (cart: CartItem[]) => void;
    updatedCart: (cart: number) => void;
    cart: CartItem[];
    totalPrice: number;
    totalCount: number | undefined;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (productToAdd: CartItem) => {
        setCart((currentCartItems) => {
            const existingCartItem = currentCartItems.find(cartItem => cartItem.id === productToAdd.id);
            if (existingCartItem) {
                return currentCartItems.map(cartItem =>
                    cartItem.id === productToAdd.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...currentCartItems, { ...productToAdd, quantity: 1 }];
            }
        });
    };

    const increaseItemQuantity = (productId: number) => {
        setCart((currentCartItems) => {
            return currentCartItems.map(cartItem =>
                cartItem.id === productId
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            );
        });
    };

    const desrememtionItemQuantity = (productId: number) => {
        setCart((currentCartItems) => {
            return currentCartItems.map(cartItem => {
                if (cartItem.id === productId) {
                    // Если количество больше 1, уменьшаем его
                    if (cartItem.quantity > 1) {
                        return { ...cartItem, quantity: cartItem.quantity - 1 };
                    } else {
                        // Если количество 1, просто возвращаем текущий cartItem
                        return cartItem; // Ничего не меняем
                    }
                }
                return cartItem; // Возвращаем оригинальный cartItem, если id не совпадает
            });
        });
    };

    const updatedCart = (productId: number) => {
        setCart((currentCartItems) => {
            const productExists = currentCartItems.find(cartItem => cartItem.id === productId);

            if (!productExists) {
                return currentCartItems;
            }
            return currentCartItems.filter(cartItem => cartItem.id !== productId);
        });
    };

    const ClearCart = () => {
        setCart([])
    }

    const totalPrice = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    const totalCount = cart.length > 0 ? cart.reduce((count, item) => count + item.quantity, 0) : undefined;

    return (
        <CartContext.Provider value={{ addToCart, increaseItemQuantity, desrememtionItemQuantity, ClearCart, updatedCart, cart, totalPrice, totalCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart должен использоваться внутри CartProvider");
    }
    return context;
};
