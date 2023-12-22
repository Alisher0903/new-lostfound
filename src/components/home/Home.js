import React from "react";
import "./style.scss";
import {DefouldNav} from "../navbars/DefouldNav";
import PageOne from "./components/Page_one";
import {Category} from "./components/Category";

function HomeDefault() {
    return (
        <>
            <section className="home_main">
                {/*navbar*/}
                <DefouldNav/>
                {/*page one carousel*/}
                <PageOne/>

                {/*button section*/}
                <div className="text-center category__filter-btn">
                    <button>All product</button>
                    <button>Lost product</button>
                    <button>Found product</button>
                </div>

                {/* categores */}
                <Category />
            </section>
        </>
    );
}

export default HomeDefault;