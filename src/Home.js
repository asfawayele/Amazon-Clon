import React from 'react';
import "./Home.css";
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg " alt="" />

            <div className="home_row">
                < Product
                    id="12321341"
                    title="The Lean Starup: How Constant Innovation Creates Radicallu Successful Business Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />

          
                < Product
                    id="49538094"
                    title="PHISINIC Stand Mixer, 6.5-QT 800W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Power Hub for Attachment (Red)
                    Color:Red"
                    price={209.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71PcRhHJaSL._AC_SL1500_.jpg"
                />
            </div>

            <div className="home_row">
                < Product
                    id="4903850"
                    title="Samsung LC49RG90SSUXEN 49 LED Gaming Monitor "
                    price={199.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />

          
                < Product
                    id="23445930"
                    title="Amazon Echo (3rd generation | Smart Speaker With Alexa,Charcol Fabric)"
                    price={98.99}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />

               < Product
                    id="3254354345"
                    title="New Apple ipad Pro (12.9-inch, wi-fi 128GB -silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />              
            </div>

            <div className="home_row">
                < Product
                    id="90829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED"
                    price={1094.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_sx355_.jpg"
                />
           </div>

        </div>
    )
}

export default Home
