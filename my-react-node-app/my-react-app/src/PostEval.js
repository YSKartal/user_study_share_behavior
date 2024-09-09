import 'bootstrap/dist/css/bootstrap.css';
import 'reactjs-popup/dist/index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './popup.css';
import React, { useState } from 'react';
import './Content.css';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import { mdata } from './data.js';
import { Button } from 'bootstrap';

function ContentView() {

    const lPostTzpes = [3, 3, 3, 3, 1, 1, 1, 1, 2, 2, 2, 2, 0, 0, 0, 0]
    const [shopCart, setShopCart] = useState({
        posts: [
            {
                share: 0
            },
            {
                share: 0
            },
            {
                share: 0
            },
            {
                share: 0
            },
            {
                share: 0
            },
            {
                share: 0
            },
            {
                share: 0
            },
            {
                share: 0
            },
            {
                share: 0
            },
            {
                share: 0
            },
            {
                share: 0
            },
            {
                share: 0
            },
            {
                share: 0
            },
            {
                share: 0
            },
            {
                share: 0
            },
            {
                share: 0
            }
        ]
    });

    const [visibleRT, setVisibleRT] = useState(false);

    function makeVisible() {
        setVisibleRT(true);
    }

    let idx = 0;
    let content = mdata.posts[idx];

    function ButtonShare(btnIdx) {
        const [buttonText, setButtonText] = useState(' Share');



        function handleClick() {
            let copiedShopCart = { ...shopCart };

            (buttonText === ' Share') ? setButtonText(' Unshare') : setButtonText(' Share');
            (buttonText === ' Share') ? copiedShopCart['posts'][btnIdx]['share'] = 1 : copiedShopCart['posts'][btnIdx]['share'] = 0;
            setShopCart(shopCart => ({
                ...copiedShopCart
            }));
            console.log(shopCart);
            console.log(btnIdx);
        }


        return (<button type="button" data-bs-toggle="button" class="btn btn-outline-primary  btn-lg share-1 d-flex justify-content-center position-relative end-0" style={{ width: "35%" }} onClick={handleClick}>
            <p style={{ height: "300", marginBottom: "0", fontSize: "23px" }}>
                <svg style={{ height: "30px", width: "30px", fill: "blue" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-112 0c-17.7 0-32-14.3-32-32l0-128 32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96l112 0zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128-32 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0 0-128c0-53-43-96-96-96L304 96z" /></svg>
                {buttonText}
            </p>
        </button>);
    }



    function RatingText(value) {
        if (value > 3) {
            return (<p>Please briefly describe why you trust this post?</p>)
        }
        else if (value < 3) {
            return (<p>Please briefly describe why you distrust this post?</p>)
        }
        else {
            return (<p>Please briefly explain why you neither trust nor distrust this article?</p>)
        }
    }

    function RatingTrust() {

        const [rateValue, setRateValue] = useState(3);
        const setRV1 = () => setRateValue(1);
        const setRV2 = () => setRateValue(2);
        const setRV3 = () => setRateValue(3);
        const setRV4 = () => setRateValue(4);
        const setRV5 = () => setRateValue(5);


        if (visibleRT) {
            return (<div className="d-flex justify-content-center" style={{ width: "100%", marginLeft: "5%", marginTop: "5%", fontSize: "18px"}}>
                <div>
                    <p>How trustworthy do you find this post on a scale of 1 (lowest) to 5 (highest)?</p>
                    <Form>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="1"
                                    name="group1"
                                    type={type}
                                    onChange={setRV1}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="2"
                                    name="group1"
                                    type={type}
                                    onChange={setRV2}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    inline
                                    label="3"
                                    name="group1"
                                    type={type}
                                    onChange={setRV3}
                                    id={`inline-${type}-3`}
                                />
                                <Form.Check
                                    inline
                                    label="4"
                                    name="group1"
                                    type={type}
                                    onChange={setRV4}
                                    id={`inline-${type}-4`}
                                />
                                <Form.Check
                                    inline
                                    label="5"
                                    name="group1"
                                    type={type}
                                    onChange={setRV5}
                                    id={`inline-${type}-5`}
                                />
                            </div>
                        ))}
                    </Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>{RatingText(rateValue)}</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                </div>
            </div>
            );
        }
        else {
            return (
                <div>

                </div>
            );
        }
    }

    function AccordionResp(responses) {
        return (<Accordion alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Show Responses</Accordion.Header>
                <Accordion.Body>
                    <ul className="d-grid gap-3 list-unstyled">
                        {responses.map((item, index) => (
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
        </Accordion>)
    }

    function AccordionMetadata(data) {
        return (<Accordion alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header>More Information about the Publication</Accordion.Header>
                <Accordion.Body>
                    <div className="rounded-3" >
                        <p> <b>Title:</b> {data.mainTitle} </p>
                        <p> <b>Authors:</b> {data.mainAuthors} </p>
                        <p> <b>Publisher:</b> {data.mainPublisher} </p>
                        <p> <b>Abstract:</b> {data.mainAbs} </p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>)
    }

    function AccordionPMention(data) {
        return (<Accordion alwaysOpen>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Short Evidence in the Publication</Accordion.Header>
                <Accordion.Body>
                    <p>  {data.mentionInPaper} </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>);
    }

    function AccordionSummary(data) {
        return (<Accordion alwaysOpen>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Short AI-Generated Summary of the Publication</Accordion.Header>
                <Accordion.Body>
                    <p> {data.extSummaryMention} </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>);
    }

    function SetCondition(cond, data) {
        switch (cond) {
            case 1:
                return (AccordionMetadata(data));
            case 2:
                return (<div>
                    {AccordionMetadata(data)}
                    {AccordionPMention(data)}
                </div>);
            case 3:
                return (<div>
                    {AccordionMetadata(data)}
                    {AccordionPMention(data)}
                    {AccordionSummary(data)}
                </div>);
            default:
                return (<div></div>);
        }
    }

    function SetPost(data, cond, btnIdx) {
        return (<div className=" border border d-grid gap-3" style={{ alignItems: 'flex-start', paddingLeft: "2%", paddingTop: "2%", paddingBottom: "2%", paddingRight: "2%" }}>
            <div className="d-flex justify-content-center   " >
                <div style={{ marginLeft: "1%" }}>
                    <p><i class="bi bi-person-circle" style={{ height: "40px", width: "40px", fontSize: 40 }}></i> </p>
                </div>
                <div className="rounded-3 d-grid gap-3" style={{ paddingLeft: "1%", width: "150%", fontSize:"18px" }}>
                    <p> <b>Max @max</b></p>
                    <p>  {data.mainPost} <a href={data.mainURL}>{data.mainRURL}</a></p>
                    <div>
                        {AccordionResp(content.replies)}
                    </div>
                    <div>
                        {SetCondition(cond, data)}
                    </div>
                    <div>
                        {ButtonShare(btnIdx)}
                    </div>
                </div>

                {RatingTrust()}

            </div>
        </div>);
    }

    return (<div className='ml-1' style={{ marginLeft: "20%", marginRight: "20%", width: "60%", marginTop: "3%", fontSize: 20 }}>
        <h1>Timeline</h1>
        <div className="rounded-3 " style={{ marginTop: "2%", marginBottom: "2%" }}>
            <div>
                {mdata.posts.map((item, index) => (
                    SetPost(item, lPostTzpes[index], index)
                ))}
            </div>

        </div>
        <div style={{ marginBottom: "3%" }}>
            <button type="button" class="btn btn-outline-danger  btn-lg share-1 d-flex justify-content-center position-relative end-0" style={{ width: "100%" }} onClick={makeVisible}>
                <p style={{ height: "300", marginBottom: "0", fontSize: "25px" }}>
                Next Page >
                </p>
            </button>
        </div>

    </div>)

}

export default ContentView;