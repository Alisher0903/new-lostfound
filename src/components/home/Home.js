import React from "react";
import "./style.scss";
import { DefouldNav } from "../navbars/DefouldNav";
import PageOne from "./components/Page_one";

function HomeDefault() {
    return (
        <>
            <section className="home_main">
                <DefouldNav />
                <PageOne />

            </section>
        </>
    );
}

export default HomeDefault;