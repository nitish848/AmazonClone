import React from 'react';
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg" />
            </div> 
            <div className="home__row">
                < Product 
                    id={1234556}
                    title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not! Mass Market Paperback "
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg"
                    rating={5}
                />
                < Product 
                id="1234557"
                    title="The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life Paperback"
                    price={19.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/511vJPN7p5L._SX331_BO1,204,203,200_.jpg"
                    rating={4}
                />
            </div>
            <div className="home__row">
            < Product 
            id={1234558}
                    title="Vivo X60 (Shimmer Blue, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
                    price={190.99}
                    image="https://m.media-amazon.com/images/I/71EshsD+G7L._AC_SX480_SY360_.jpg"
                    rating={4}
                />
            < Product 
            id={1234550}
                    title="boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)"
                    price={19.99}
                    image="https://images-eu.ssl-images-amazon.com/images/I/31IdiM9ZM8L._SX300_SY300_QL70_FMwebp_.jpg"
                    rating={4}
                />
            < Product 
            id={1234559}
                    title="Fire TV Stick (3rd Gen, 2021) with all-new Alexa Voice Remote (includes TV and app controls) | HD streaming device | 2021 release"
                    price={19.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51-1DEGYWjS._SL1000_.jpg"
                    rating={4}
                />
            </div>
            <div className="home__row">
            < Product 
            id={1234551}
                    title="MI Notebook 14 (IC) Intel Core i5-10210U 10th Gen 14-inch (35.56 cms) Thin and Light Laptop(8GB/512GB SSD/Windows 10/Intel UHD Graphics/Silver/1.5Kg), XMA1901-FK
                    "
                    price={19.99}
                    image="https://m.media-amazon.com/images/I/513XIkrVeuL._AC_UY218_.jpg"
                    rating={4}
                />
            </div>
        </div>
    )
}

export default Home
