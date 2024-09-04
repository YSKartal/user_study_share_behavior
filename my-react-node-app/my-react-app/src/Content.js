import 'bootstrap/dist/css/bootstrap.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './popup.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Content.css';
import Accordion from 'react-bootstrap/Accordion';

const data = {
    posts: [{
        title: "Post 1",
        mainPost: "A Cochrane review is considered the highest level of scientific evidence becauae it evaluates and scores all existing studies on a particular scientific topic. The masks don't make a difference but handwriting all by itself decreased infections by 1/3. ",
        mainURL: "https://link.springer.com/article/10.1007/s00376-022-1461-3",
        mainRURL: "https://t.co/F61X8Q6Olt",
        mainImage: "./cnt1.jfif",
        mainTitle: "Physical interventions to interrupt or reduce the spread of respiratory viruses",
        mainAbs: "The increased concentration of greenhouse gases in the atmosphere from human activities traps heat within the climate system and increases ocean heat content (OHC). Here, we provide the first analysis of recent OHC changes through 2021 from two international groups. The world ocean, in 2021, was the hottest ever recorded by humans, and the 2021 annual OHC value is even higher than last year’s record value by 14 ± 11 ZJ (1 zetta J = 1021 J) using the IAP/CAS dataset and by 16 ± 10 ZJ using NCEI/NOAA dataset. The long-term ocean warming is larger in the Atlantic and Southern Oceans than in other regions and is mainly attributed, via climate model simulations, to an increase in anthropogenic greenhouse gas concentrations. The year-to-year variation of OHC is primarily tied to the El Niño-Southern Oscillation (ENSO). In the seven maritime domains of the Indian, Tropical Atlantic, North Atlantic, Northwest Pacific, North Pacific, Southern oceans, and the Mediterranean Sea, robust warming is observed but with distinct inter-annual to decadal variability. Four out of seven domains showed record-high heat content in 2021. The anomalous global and regional ocean warming established in this study should be incorporated into climate risk assessments, adaptation, and mitigation.",
        mainAuthors: "Tom JeffersonLiz DooleyEliana FerroniLubna A Al-AnsaryMieke L van DrielGhada A BawazeerMark A JonesTammy C HoffmannJustin ClarkElaine M BellerPaul P GlasziouJohn M Conly",
        mainPublisher: "Advances in Atmospheric Sciences",
        replies: ["Wrong, that study was about mandate adherence not masks themselves. Read it again if you missed it. Covid is transmitted in the air, not fomites. N95 masks make a big difference.", "These people are freaks, let them live in their world of fear", "Did you bother reading the review you cited? 'The high risk of bias in the trials, variation in outcome measurement,  and relatively low adherence with the interventions during the studies  hampers drawing firm conclusions."],
        extSummary: "The paper analyzes recent changes in ocean heat content (OHC) through 2021, finding that 2021 recorded the highest ocean temperatures ever observed, primarily due to increased anthropogenic greenhouse gas concentrations.",
        extSummaryMention: "The Cochrane review included in the attached paper assessed the effectiveness of different interventions, including masks and hand hygiene, in preventing respiratory infections like COVID-19. It concluded that masks did not significantly reduce the spread of infections. However, hand hygiene alone was found to be effective, reducing the risk of infections by approximately one-third. Cochrane reviews are highly regarded because they systematically evaluate all relevant studies on a particular topic, providing the highest level of scientific evidence.",
        mentionInPaper: "... Compared with wearing no mask in the community studies only, wearing a mask may make little to no difference in how many people caught a flu-like illness/COVID-like illness (9 studies; 276,917people)"
    },
    {
        title: "Post 1",
        mainPost: "I’ve often heard it claimed that covid causes myocarditis. A large population-based study finds that it doesn’t. https://mdpi.com/2077-0383/11/8/2219",
        mainURL: "https://link.springer.com/article/10.1007/s00376-022-1461-3",
        mainRURL: "https://t.co/F61X8Q6Olt",
        mainImage: "./cnt1.jfif",
        mainTitle: "The Incidence of Myocarditis and Pericarditis in Post COVID-19 Unvaccinated Patients—A Large Population-Based Study",
        mainAbs: "The increased concentration of greenhouse gases in the atmosphere from human activities traps heat within the climate system and increases ocean heat content (OHC). Here, we provide the first analysis of recent OHC changes through 2021 from two international groups. The world ocean, in 2021, was the hottest ever recorded by humans, and the 2021 annual OHC value is even higher than last year’s record value by 14 ± 11 ZJ (1 zetta J = 1021 J) using the IAP/CAS dataset and by 16 ± 10 ZJ using NCEI/NOAA dataset. The long-term ocean warming is larger in the Atlantic and Southern Oceans than in other regions and is mainly attributed, via climate model simulations, to an increase in anthropogenic greenhouse gas concentrations. The year-to-year variation of OHC is primarily tied to the El Niño-Southern Oscillation (ENSO). In the seven maritime domains of the Indian, Tropical Atlantic, North Atlantic, Northwest Pacific, North Pacific, Southern oceans, and the Mediterranean Sea, robust warming is observed but with distinct inter-annual to decadal variability. Four out of seven domains showed record-high heat content in 2021. The anomalous global and regional ocean warming established in this study should be incorporated into climate risk assessments, adaptation, and mitigation.",
        mainAuthors: "Lijing Cheng, John Abraham, Kevin E. Trenberth, John Fasullo, Tim Boyer, Michael E. Mann, Jiang Zhu, Fan Wang, Ricardo Locarnini, Yuanlong Li, Bin Zhang, Zhetao Tan, Fujiang Yu, Liying Wan, Xingrong Chen, Xiangzhou Song, Yulong Liu, Franco Reseghetti, Simona Simoncelli, Viktor Gouretski, Gengxin Chen, Alexey Mishonov & Jim Reagan",
        mainPublisher: "",
        replies: ["Don't know how many studies (vaxx sponsored?) you read, but Pfizer recently had to relaese several pages of known side-effects, myocarditis being one of them. Are you aware of the almost total censorship of doctors/scientists who object to the 'vaccine'?", "Another lie used to coerce/scare people into vaccinating blows up", "Ocean Heat Content (OHC) courtesy of  the #I’m sure everything is causing myocarditis except the jab"],
        extSummary: "The paper analyzes recent changes in ocean heat content (OHC) through 2021, finding that 2021 recorded the highest ocean temperatures ever observed, primarily due to increased anthropogenic greenhouse gas concentrations.",
        extSummaryMention: "The paper by Russell L. Blaylock criticizes global COVID-19 policies, describing them as a 'rolling disaster.' The author, a retired neurosurgeon, argues that the pandemic response was heavily manipulated, driven by bureaucracies, media, and powerful individuals with no medical expertise. Blaylock highlights the suppression of alternative treatments, demonization of dissenting medical professionals, and widespread censorship. He asserts that measures like lockdowns and mask mandates were ineffective, and early treatments could have prevented many deaths. The paper portrays the COVID-19 response as a significant failure, with severe consequences for public trust and medical ethics.",
        mentionInPaper: "... Nevertheless, it is evident that according to both IAP/CAS and NCEI/NOAA, the 2021 oceans were the hottest ever recorded by humans."
    }]
}

function ContentView() {

    let idx = 0;
    let content = data.posts[idx];
    let content_2 = data.posts[1];
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const [buttonText, setButtonText] = useState(' Share');


    function handleClick() {
        const cardDescription = document.querySelector('.card-description');
        const readMoreButton = document.querySelector('.read-more');
        cardDescription.classList.toggle('expanded');
        readMoreButton.textContent = cardDescription.classList.contains('expanded') ? 'Read less' : 'Read more';
    }

    function handleShare() {
        (buttonText == ' Share') ? setButtonText(' Unshare') : setButtonText(' Share')
    }

    return (<div className='ml-1' style={{ marginLeft: "20%", marginRight: "20%", width: "60%", marginTop: "3%", fontSize: 20 }}>

        <h1>Timeline</h1>
        <div className="rounded-3 " style={{ marginTop: "2%", marginBottom: "2%" }}>
            <div className=" border border-dark d-grid gap-3" style={{ alignItems: 'flex-start', paddingLeft: "2%", paddingTop: "2%", paddingBottom: "2%", paddingRight: "2%" }}>
                <div className="d-flex justify-content-center   " >
                    <div style={{ marginLeft: "1%" }}>
                        <p><i class="bi bi-person-circle" style={{ height: "40px", width: "40px", fontSize: 40 }}></i> </p>
                    </div>
                    <div className="rounded-3 gap-3" style={{ paddingLeft: "1%", marginRight: "1%" }}>
                        <p> <b>Max @max</b></p>
                        <p>  {content.mainPost} <a href={content.mainURL}>{content.mainRURL}</a></p>
                        <div>
                            <Accordion  alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Show Responses</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="d-grid gap-3 list-unstyled">
                                            {content_2.replies.map((item, index) => (
                                                <li key={item}><div className="d-flex justify-content-left ">
                                                    <div style={{ marginLeft: "1%" }}>
                                                        <p><i class="bi bi-person-circle" style={{ height: "40px", width: "40px", fontSize: 40 }}></i> </p>

                                                    </div>
                                                    <div style={{ paddingLeft: "1%", paddingRight: "1%" }}>
                                                        <p> <b>Mark @mark</b></p>
                                                        <p>  {item}</p>

                                                    </div>
                                                </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div class="d-flex justify-content-center gap-3">

                        </div>



                    </div>

                </div>

                <div style={{ alignItems: "right"}}>
                    <button type="button" class="btn btn-primary  btn-lg share-1 d-flex justify-content-center position-relative end-0" style={{width: "100%"}} onClick={handleShare}>
                    <p style={{ height: "300", marginBottom: "0", fontSize: "30px" }}>
                        <svg style={{ height: "40px", width: "40px", fill: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-112 0c-17.7 0-32-14.3-32-32l0-128 32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96l112 0zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128-32 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0 0-128c0-53-43-96-96-96L304 96z" /></svg>
                        {buttonText}
                    </p>
                </button>
                </div>
                




                {/* < img style={{ marginLeft: "5%", marginTop: "2%" }} src={content.mainImage} />*/}

            </div>
            <div className=" border border-dark d-grid gap-3" style={{ alignItems: 'flex-start', paddingLeft: "2%", paddingTop: "2%", paddingBottom: "2%", paddingRight: "2%" }}>
                <div className="d-flex justify-content-center   " >
                    <div style={{ marginLeft: "1%" }}>
                        <p><i class="bi bi-person-circle" style={{ height: "40px", width: "40px", fontSize: 40 }}></i> </p>
                    </div>
                    <div className="rounded-3 d-grid gap-3" style={{ paddingLeft: "1%", paddingRight: "1%" }}>
                        <p> <b>Max @max</b></p>
                        <p>  {content_2.mainPost} <a href={content_2.mainURL}>{content_2.mainRURL}</a></p>
                        <div>
                            <Accordion  alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Show Responses</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="d-grid gap-3 list-unstyled">
                                            {content_2.replies.map((item, index) => (
                                                <li key={item}><div className="d-flex justify-content-left ">
                                                    <div style={{ marginLeft: "1%" }}>
                                                        <p><i class="bi bi-person-circle" style={{ height: "40px", width: "40px", fontSize: 40 }}></i> </p>

                                                    </div>
                                                    <div style={{ paddingLeft: "1%", paddingRight: "1%" }}>
                                                        <p> <b>Mark @mark</b></p>
                                                        <p>  {item}</p>

                                                    </div>
                                                </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div>
                            <Accordion alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>More Information about the Publication</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="rounded-3" >
                                            <p> <b>Title:</b> {content_2.mainTitle} </p>
                                            <p> <b>Authors:</b> {content_2.mainAuthors} </p>
                                            <p> <b>Publisher:</b> {content_2.mainPublisher} </p>
                                            <p> <b>Abstract:</b> {content_2.mainAbs} </p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>



                    </div>

                </div>


                <button type="button" class="btn btn-primary  btn-lg share-1 d-flex justify-content-center" onClick={handleShare}>
                    <p style={{ height: "300", marginBottom: "0", fontSize: "30px" }}>
                        <svg style={{ height: "40px", width: "40px", fill: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-112 0c-17.7 0-32-14.3-32-32l0-128 32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96l112 0zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128-32 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0 0-128c0-53-43-96-96-96L304 96z" /></svg>
                        {buttonText}
                    </p>
                </button>




                {/* < img style={{ marginLeft: "5%", marginTop: "2%" }} src={content.mainImage} />*/}

            </div>
            <div className=" border border-dark d-grid gap-3" style={{ alignItems: 'flex-start', paddingLeft: "2%", paddingTop: "2%", paddingBottom: "2%", paddingRight: "2%" }}>
                <div className="d-flex justify-content-center   " >
                    <div style={{ marginLeft: "1%" }}>
                        <p><i class="bi bi-person-circle" style={{ height: "40px", width: "40px", fontSize: 40 }}></i> </p>
                    </div>
                    <div className="rounded-3 d-grid gap-3" style={{ paddingLeft: "1%", paddingRight: "1%" }}>
                        <p> <b>Max @max</b></p>
                        <p>  {content_2.mainPost} <a href={content_2.mainURL}>{content_2.mainRURL}</a></p>
                        <div>
                            <Accordion  alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Show Responses</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="d-grid gap-3 list-unstyled">
                                            {content_2.replies.map((item, index) => (
                                                <li key={item}><div className="d-flex justify-content-left ">
                                                    <div style={{ marginLeft: "1%" }}>
                                                        <p><i class="bi bi-person-circle" style={{ height: "40px", width: "40px", fontSize: 40 }}></i> </p>

                                                    </div>
                                                    <div style={{ paddingLeft: "1%", paddingRight: "1%" }}>
                                                        <p> <b>Mark @mark</b></p>
                                                        <p>  {item}</p>

                                                    </div>
                                                </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div>
                            <Accordion  alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>More Information about the Publication</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="rounded-3" >
                                            <p> <b>Title:</b> {content_2.mainTitle} </p>
                                            <p> <b>Authors:</b> {content_2.mainAuthors} </p>
                                            <p> <b>Publisher:</b> {content_2.mainPublisher} </p>
                                            <p> <b>Abstract:</b> {content_2.mainAbs} </p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Post Content Mention in the Publication</Accordion.Header>
                                    <Accordion.Body>
                                        <p>  {content_2.mentionInPaper} </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>



                    </div>

                </div>


                <button type="button" class="btn btn-primary  btn-lg share-1 d-flex justify-content-center" onClick={handleShare}>
                    <p style={{ height: "300", marginBottom: "0", fontSize: "30px" }}>
                        <svg style={{ height: "40px", width: "40px", fill: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-112 0c-17.7 0-32-14.3-32-32l0-128 32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96l112 0zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128-32 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0 0-128c0-53-43-96-96-96L304 96z" /></svg>
                        {buttonText}
                    </p>
                </button>




                {/* < img style={{ marginLeft: "5%", marginTop: "2%" }} src={content.mainImage} />*/}

            </div>
            <div className=" border border-dark d-grid gap-3" style={{ alignItems: 'flex-start', paddingLeft: "2%", paddingTop: "2%", paddingBottom: "2%", paddingRight: "2%" }}>
                <div className="d-flex justify-content-center   " >
                    <div style={{ marginLeft: "1%" }}>
                        <p><i class="bi bi-person-circle" style={{ height: "40px", width: "40px", fontSize: 40 }}></i> </p>
                    </div>
                    <div className="rounded-3 d-grid gap-3" style={{ paddingLeft: "1%", paddingRight: "1%" }}>
                        <p> <b>Max @max</b></p>
                        <p>  {content_2.mainPost} <a href={content_2.mainURL}>{content_2.mainRURL}</a></p>
                        <div>
                            <Accordion  alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Show Responses</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="d-grid gap-3 list-unstyled">
                                            {content_2.replies.map((item, index) => (
                                                <li key={item}><div className="d-flex justify-content-left ">
                                                    <div style={{ marginLeft: "1%" }}>
                                                        <p><i class="bi bi-person-circle" style={{ height: "40px", width: "40px", fontSize: 40 }}></i> </p>

                                                    </div>
                                                    <div style={{ paddingLeft: "1%", paddingRight: "1%" }}>
                                                        <p> <b>Mark @mark</b></p>
                                                        <p>  {item}</p>

                                                    </div>
                                                </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div>
                            <Accordion alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>More Information about the Publication</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="rounded-3" >
                                            <p> <b>Title:</b> {content_2.mainTitle} </p>
                                            <p> <b>Authors:</b> {content_2.mainAuthors} </p>
                                            <p> <b>Publisher:</b> {content_2.mainPublisher} </p>
                                            <p> <b>Abstract:</b> {content_2.mainAbs} </p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Post Content Mention in the Publication</Accordion.Header>
                                    <Accordion.Body>
                                        <p>  {content_2.mentionInPaper} </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Summary of the Publication</Accordion.Header>
                                    <Accordion.Body>
                                    <p> {content_2.extSummaryMention} </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                       
                    </div>

                </div>


                <button type="button" class="btn btn-primary  btn-lg share-1 d-flex justify-content-center" onClick={handleShare}>
                    <p style={{ height: "300", marginBottom: "0", fontSize: "30px" }}>
                        <svg style={{ height: "40px", width: "40px", fill: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-112 0c-17.7 0-32-14.3-32-32l0-128 32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96l112 0zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128-32 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0 0-128c0-53-43-96-96-96L304 96z" /></svg>
                        {buttonText}
                    </p>
                </button>




                {/* < img style={{ marginLeft: "5%", marginTop: "2%" }} src={content.mainImage} />*/}

            </div>


        </div>







    </div>)

}

export default ContentView;