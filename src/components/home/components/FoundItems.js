import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import axios from "axios";
import { api } from "../../api/api";

function FoundItems() {
    const [found, setFound] = useState([]);
    const [foundInfo, setFoundInfo] = useState([]);

    useEffect(() => {
        getFound();
    }, [])

    // getFound
    const getFound = () => {
        axios.get(`${api}item/`)
            .then(res => {
                setFound(res.data.filter(t => t.type == "FOUND"))
            })
            .catch(() => console.log("found klemadi!!!"))
    }

    const responsive = {
        0: { items: 1 },
        500: { items: 2 },
        700: { items: 3 },
        1000: { items: 4 },
    }

    return (
        <div style={{
            marginTop: "5rem",
        }}>
            <h1 className="text-center fs-1 mb-5 fw-bolder">
                <span style={{ color: "#21C11E" }}>Found </span>
                product
            </h1>

            <div className="text-center">
                <AliceCarousel
                    items={found.map((item, i) =>
                        <div key={i} className="p-4 lost_items">
                            <img src={item.image} alt="img" />
                            <h4>{item.name}</h4>
                            <p>Location: {item.city}</p>
                            <button onClick={() => {
                                setFoundInfo(item);
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

export default FoundItems;