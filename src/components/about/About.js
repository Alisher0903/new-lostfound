import PageOne from "../home/components/Page_one";
import { DefouldNav } from "../navbars/DefouldNav";
import FooTer from "../footer/FooTer";
import { useEffect, useState } from "react";
import axios from "axios";
import { api, byId } from "../api/api";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Container } from "reactstrap";
import "./about.scss";

function AboutLostFound() {

    const [aboutCategory, setAboutCategory] = useState([]);
    const [aboutInfo, setAboutInfo] = useState([]);
    const [open, setOpen] = useState('');

    useEffect(() => {
        getAboutCategory();
        getAboutInfo();
    }, []);

    // get about category
    const getAboutCategory = () => {
        axios.get(`${api}about-category/`)
            .then(res => setAboutCategory(res.data))
            .catch(() => console.log("about yuq!!!"))
    }

    // getAboutInfo
    const getAboutInfo = () => {
        axios.get(`${api}about/`)
            .then(res => setAboutInfo(res.data))
            .catch(() => console.log("about kelmadi!!!"))
    }

    // open accardion
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    const goPageSection = (aboutId) => {
        if (aboutId == "Ma'lumot kiritish") byId("malumot").click();
        else if (aboutId == "Qidirilmoqda") byId("poisk").click();
        else if (aboutId == "Parol savollari") byId("parol").click();
    }

    return (
        <>
            <a href="#goMalumot" id="malumot"></a>
            <a href="#goPoisk" id="poisk"></a>
            <a href="#goParol" id="parol"></a>

            <DefouldNav />
            <PageOne />

            <Container>
                <div className="category-btn text-center">
                    {aboutCategory.map((item, i) =>
                        <button onClick={() => {
                            goPageSection(item.name);
                        }} key={i}>{item.name}</button>
                    )}
                </div>

                <div>
                    <h2 id="goMalumot" className="about-accardions">Ma'lumot kiritish</h2>
                    {aboutInfo.map((item, i) =>
                        item.name === aboutCategory[0].id ?
                            <Accordion flush open={open} toggle={toggle}>
                                <AccordionItem className="accardion-style">
                                    <AccordionHeader className="accardion-header" targetId={i}>
                                        {item.question}
                                    </AccordionHeader>
                                    <AccordionBody accordionId={i}>
                                        {item.title}
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                            : ""
                    )}
                    <h2 id="goPoisk" className="about-accardions">Qidirilmoqda</h2>
                    {aboutInfo.map((item, i) =>
                        item.name === aboutCategory[1].id ?
                            <Accordion flush open={open} toggle={toggle}>
                                <AccordionItem className="accardion-style">
                                    <AccordionHeader className="accardion-header" targetId={i}>
                                        {item.question}
                                    </AccordionHeader>
                                    <AccordionBody accordionId={i}>
                                        {item.title}
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                            : ""
                    )}
                    <h2 id="goParol" className="about-accardions">Parol savollari</h2>
                    {aboutInfo.map((item, i) =>
                        item.name === aboutCategory[2].id ?
                            <Accordion flush open={open} toggle={toggle}>
                                <AccordionItem className="accardion-style">
                                    <AccordionHeader className="accardion-header" targetId={i}>
                                        {item.question}
                                    </AccordionHeader>
                                    <AccordionBody accordionId={i}>
                                        {item.title}
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                            : ""
                    )}
                </div>
            </Container>





            <FooTer />
        </>
    );
}

export default AboutLostFound;