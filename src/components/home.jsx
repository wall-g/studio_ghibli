import React from 'react'
import pic from '../images/pic.jpg'
import img from '../images/pic2.jpg'
import '../styles/style.css';
export default function home() {
    return (
        <>
            <div>
                <img src={pic} className="img-fluid" alt=""/>
                <div className="logo">
                    <img src={img} className="img" alt=""/>
                </div>
                <h3 className="hd">Studio Ghibli</h3>
            </div>
            <div className="container-fluid">
                <div className="container-sm pt-3 pb-3">
                    <h1 className="text-center">The Studio Ghibli Collection</h1>
                    <p className="text-center">One of the most acclaimed studios in the world, Studio Ghibli is the home of some of the most revered and beloved animated works to have ever graced the screen.</p>
                    <p className="text-center">The Studio Ghibli catalogue is now available to buy or rent on digital platforms. Click on your favourite film below to order.</p>

                    <div className="row justify-content-around">
                        <button type="button" className="btn col-2">films</button>
                        <button type="button" className="btn col-2">people</button>
                    </div>

                </div>
            </div>
        </>
    )
}
