import { createContext, FC, ReactNode, useContext, useState } from "react";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category?: string;
    careType?: string;
    effect?: string;
    weight?: string;
    volume?: string;
    hairType?: string;
}

interface ProductsContextProps {
    allProducts: {
        pizza: Product[];
        rolls: Product[];
        newProduct: Product[];
        recommended: Product[];
    };
};

const defaultAllProducts = {
    pizza: [],
    rolls: [],
    newProduct: [],
    recommended: [],
};

const ProductsContext = createContext<ProductsContextProps>({ allProducts: defaultAllProducts });

export const ProductsProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const assignIds = (products: Omit<Product, 'id'>[]): Product[] =>
        products.map((product, index) => ({ ...product, id: index + 1 }));

    const [allProducts, setAllProducts] = useState<ProductsContextProps['allProducts']>({
        pizza: assignIds([
            {

                name: 'Мясная пицца',
                description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
                price: 400,
                image: '/Images/pizza1.svg',
                category: 'Pizza',
                weight: '500 г',
                volume: 'Большая'
            },
            {

                name: 'Сырная пицца',
                description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
                price: 350,
                image: '/Images/pizza2.svg',
                category: 'Pizza',
                weight: '450 г',
                volume: 'Средняя'
            },
            {

                name: 'Мафия',
                description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г', price: 350,
                image: '/Images/pizza3.svg',
                category: 'Pizza',
                weight: '450 г',
                volume: 'Средняя'
            },
            {

                name: '4 Мяса',
                description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
                price: 350,
                image: '/Images/pizza4.svg',
                category: 'Pizza',
                weight: '450 г',
                volume: 'Средняя'
            },
            {

                name: 'Блю чиз',
                description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
                price: 350,
                image: '/Images/pizza1.svg',
                category: 'Pizza',
                weight: '450 г',
                volume: 'Средняя'
            },
            {

                name: 'Деревенская',
                description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
                price: 350,
                image: '/Images/pizza3.svg',
                category: 'Pizza',
                weight: '450 г',
                volume: 'Средняя'
            },
            {

                name: 'Гавайская',
                description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
                price: 350,
                image: '/Images/pizza2.svg',
                category: 'Pizza',
                weight: '450 г',
                volume: 'Средняя'
            },
            {

                name: 'Остарая',
                description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
                price: 350,
                image: '/Images/pizza1.svg',
                category: 'Pizza',
                weight: '450 г',
                volume: 'Средняя'
            }

        ]),
        rolls: assignIds([
            {

                name: 'ФилАадельфия ролл',
    description: 'Классический ролл с нежным лососем и кремовым сливочным сыром, обернутый в рис и нори.',                price: 300,
                image: '/Images/set1.svg',
                category: 'Rolls',
                weight: '200 г',
                volume: '8 шт'
            },
            {
                name: 'Калифорния ролл',
                description: 'Классический ролл с нежным лососем и кремовым сливочным сыром, обернутый в рис и нори.',                price: 250,
                image: '/Images/set2.svg',
                category: 'Rolls',
                weight: '180 г',
                volume: '8 шт'
            },
            {

                name: 'Калифорния ролл',
                description: 'Классический ролл с нежным лососем и кремовым сливочным сыром, обернутый в рис и нори.',                price: 250,
                image: '/Images/set3.svg',
                category: 'Rolls',
                weight: '180 г',
                volume: '8 шт'
            },
            {

                name: 'Калифорния ролл',
                description: 'Классический ролл с нежным лососем и кремовым сливочным сыром, обернутый в рис и нори.',                price: 250,
                image: '/Images/set4.svg',
                category: 'Rolls',
                weight: '180 г',
                volume: '8 шт'
            },
            {
                name: 'Калифорния ролл',
                description: 'Классический ролл с нежным лососем и кремовым сливочным сыром, обернутый в рис и нори.',                price: 250,
                image: '/Images/set5.svg',
                category: 'Rolls',
                weight: '180 г',
                volume: '8 шт'
            },
            {

                name: 'Калифорния ролл',
                description: 'Классический ролл с нежным лососем и кремовым сливочным сыром, обернутый в рис и нори.',                price: 250,
                image: '/Images/set6.svg',
                category: 'Rolls',
                weight: '180 г',
                volume: '8 шт'
            },
            {

                name: 'Калифорния ролл',
                description: 'Классический ролл с нежным лососем и кремовым сливочным сыром, обернутый в рис и нори.',                price: 250,
                image: '/Images/set7.svg',
                category: 'Rolls',
                weight: '180 г',
                volume: '8 шт'
            },
            {

                name: 'Калифорния ролл',
                description: 'Классический ролл с нежным лососем и кремовым сливочным сыром, обернутый в рис и нори.',                price: 250,
                image: '/Images/set8.svg',
                category: 'Rolls',
                weight: '180 г',
                volume: '8 шт'
            },
            {

                name: 'Калифорния ролл',
                description: 'Классический ролл с нежным лососем и кремовым сливочным сыром, обернутый в рис и нори.',                price: 250,
                image: '/Images/set9.svg',
                category: 'Rolls',
                weight: '180 г',
                volume: '8 шт'
            },
            {

                name: 'Калифорния ролл',
                description: 'Классический ролл с нежным лососем и кремовым сливочным сыром, обернутый в рис и нори.',
                price: 250,
                image: '/Images/set2.svg',
                category: 'Rolls',
                weight: '180 г',
                volume: '8 шт'
            }
        ]),
        recommended: assignIds([
            {
                name: 'Спайси ролл',
                description: 'Ролл с острым соусом и тунцом.',
                price: 270,
                image: 'Images/set3.svg',
                category: 'Rolls',
                weight: '190 г',
                volume: '8 шт'
            },
            {
                name: 'Маргарита пицца',
                description: 'Классическая пицца с томатами и сыром.',
                price: 300,
                image: 'Images/pizza3.svg',
                category: 'Pizza',
                weight: '500 г',
                volume: 'Средняя'
            },
            {
                name: 'Маргарита пицца',
                description: 'Классическая пицца с томатами и сыром.',
                price: 300,
                image: 'Images/pizza4.svg',
                category: 'Pizza',
                weight: '500 г',
                volume: 'Средняя'
            }, {
                name: 'Спайси ролл',
                description: 'Ролл с острым соусом и тунцом.',
                price: 270,
                image: 'Images/set9.svg',
                category: 'Rolls',
                weight: '190 г',
                volume: '8 шт'
            },
            {
                name: 'Спайси ролл',
                description: 'Ролл с острым соусом и тунцом.',
                price: 270,
                image: 'Images/set4.svg',
                category: 'Rolls',
                weight: '190 г',
                volume: '8 шт'
            },
            {
                name: 'Спайси ролл',
                description: 'Ролл с острым соусом и тунцом.',
                price: 270,
                image: 'Images/set5.svg',
                category: 'Rolls',
                weight: '190 г',
                volume: '8 шт'
            },
        ]),
        newProduct: assignIds([
            {
                name: 'Мексиканская пицца',
                description: 'Острая пицца с кукурузой и перцем.',
                price: 450,
                image: 'Images/pizza1.svg',
                category: 'Pizza',
                weight: '500 г',
                volume: 'Большая'
            },
            {

                name: 'Ролл с угрём',
                description: 'Ролл с копченым угрём и огурцом.',
                price: 320,
                image: 'Images/set4.svg',
                category: 'Rolls',
                weight: '200 г',
                volume: '8 шт'
            },
            {
                name: 'Мексиканская пицца',
                description: 'Острая пицца с кукурузой и перцем.',
                price: 450,
                image: 'Images/pizza2.svg',
                category: 'Pizza',
                weight: '500 г',
                volume: 'Большая'
            },
            {

                name: 'Ролл с угрём',
                description: 'Ролл с копченым угрём и огурцом.',
                price: 320,
                image: 'Images/set2.svg',
                category: 'Rolls',
                weight: '200 г',
                volume: '8 шт'
            },
            {
                name: 'Мексиканская пицца',
                description: 'Острая пицца с кукурузой и перцем.',
                price: 450,
                image: 'Images/pizza2.svg',
                category: 'Pizza',
                weight: '500 г',
                volume: 'Большая'
            },
            {

                name: 'Ролл с угрём',
                description: 'Ролл с копченым угрём и огурцом.',
                price: 320,
                image: 'Images/set9.svg',
                category: 'Rolls',
                weight: '200 г',
                volume: '8 шт'
            },
            {
                name: '4 Сфрв',
                description: 'Острая пицца с кукурузой и перцем.',
                price: 450,
                image: 'Images/pizza4.svg',
                category: 'Pizza',
                weight: '500 г',
                volume: 'Большая'
            },
            {
                name: 'Ролл с угрём',
                description: 'Ролл с копченым угрём и огурцом.',
                price: 320,
                image: 'Images/set4.svg',
                category: 'Rolls',
                weight: '200 г',
                volume: '8 шт'
            }
        ])

    });

    return (
        <ProductsContext.Provider value={{ allProducts }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        console.warn('useProducts должен использоваться внутри ProductsProvider');
    }
    return context;
};
