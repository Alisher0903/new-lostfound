import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import axios from "axios";
import { api } from "../../api/api";

function LostItems() {
    const [lost, setLost] = useState([]);
    const [lostInfo, setLostInfo] = useState([]);

    useEffect(() => {
        getLost();
    }, [])

    // getLost
    const getLost = () => {
        axios.get(`${api}item/`)
            .then(res => {
                setLost(res.data.filter(t => t.type == "LOST"))
            })
            .catch(() => console.log("lost klemadi!!!"))
    }
    console.log(lostInfo);

    const responsive = {
        0: { items: 1.8 },
        500: { items: 2.8 },
        700: { items: 3 },
        991: { items: 5 },
    }

    return (
        <div style={{
            marginTop: "5rem",
        }}>
            <h1 className="text-center fs-1 mb-5 fw-bolder">
                <span style={{ color: "#CF1010" }}>Lost </span>
                product
            </h1>

            <div className="text-center">
                <AliceCarousel
                    items={lost.map((item, i) =>
                        <div key={i} className="p-4 lost_items">
                            <img src={item.image} alt="img" />
                            <p>{item.name}</p>
                            <p>Location: {item.city}</p>
                            <button onClick={() => {
                                setLostInfo(item);
                            }}>Info</button>
                        </div>
                    )}
                    responsive={responsive}
                    autoPlay
                    autoPlayInterval={5000}
                    infinite
                    mouseTracking
                    disableButtonsControls
                />
            </div>
        </div>
    );
}

export default LostItems;