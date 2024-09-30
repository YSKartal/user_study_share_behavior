import 'bootstrap/dist/css/bootstrap.css';
import 'reactjs-popup/dist/index.css';
import Popup from 'react-popup';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './popup.css';
import React, { useState } from 'react';
import './Content.css';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import { mdata } from './data.js';
import { names } from './names.js';
import axios from 'axios';
import { Button } from 'bootstrap';
import Alert from 'react-bootstrap/Alert';
import pp_1 from './assets/images/pp_1.jpg';
import pp_2 from './assets/images/pp_2.jpg';
import pp_3 from './assets/images/pp_3.jpg';
import pp_4 from './assets/images/pp_4.jpg';
import pp_5 from './assets/images/pp_5.jpg';
import pp_6 from './assets/images/pp_6.jpg';
import pp_7 from './assets/images/pp_7.jpg';
import pp_8 from './assets/images/pp_8.jpg';

function ContentView({order}) {
    
    var mainOrd = 1;
    if (order==2) {
        mainOrd = 2;
    }
    if (order==3) {
        mainOrd = 3;
    }
    if (order==4) {
        mainOrd = 4;
    }

    const _lPostOrder_1 = [10, 7, 3, 15, 5, 2, 12, 11, 8, 14, 4, 0, 1, 13, 6, 9]
    const _lPostTzpes_1 = [2,  3, 3, 3,  1, 2,  0,  3, 0, 2, 0, 0, 1, 1, 2, 1]
    const lPostOrder_1 = [7, 3, 5, 2, 4, 0, 1, 6]
    const lPostTzpes_1 = [1, 1, 1, 1, 1, 1, 1, 1]
    const _lPostOrder_2 = [2, 14, 13, 6, 10, 3, 7, 9, 1, 4, 15, 11, 8, 12, 5, 0]
    const _lPostTzpes_2 = [1,  1,  0, 1,  1, 2, 2, 0, 0, 3,  2,  2, 3, 3,  0, 3]
    const lPostOrder_2 = [2, 6, 3, 7, 1, 4, 5, 0]
    const lPostTzpes_2 = [2, 2, 2, 2, 2, 2, 2, 2]
    const _lPostOrder_3 = [14, 9, 10, 3, 0, 12, 6, 13, 5, 7, 15, 1, 11, 4, 8, 2]
    const _lPostTzpes_3 = [0,  3, 0, 1, 2,  2,  0, 3, 3,  1, 1,  3, 1, 2, 2, 0]
    const lPostOrder_3 = [3, 0, 6, 5, 7, 1, 4, 2]
    const lPostTzpes_3 = [3, 3, 3, 3, 3, 3, 3, 3]
    const _lPostOrder_4 = [12, 2, 14, 3, 5, 13, 8, 9, 6, 11, 7, 0, 1, 10, 4, 15]
    const _lPostTzpes_4 = [1,  3,  3,  0, 2, 2, 1, 2, 3, 0,  0, 1, 2, 3, 1, 0]
    const lPostOrder_4 = [2, 3, 5, 6, 7, 0, 1, 4]
    const lPostTzpes_4 = [0, 0, 0, 0, 0, 0, 0, 0]

    const lImages = [ pp_5, pp_6, pp_1, pp_7,  pp_2, pp_3, pp_8, pp_4]
    //const lUser = ['Mark', 'Tom', 'Suzan', 'Kevin', 'Martin', 'Hans', 'Clara', 'Isabella', 'Max', 'Angelina', 'Joseph', 'Lily', 'Emma', 'Sophia', 'Alice', 'James']
    const lUser = ['Mark', 'Tom', 'Suzan', 'Kevin','Lily', 'Emma',  'Martin', 'Isabella',  'Hans', 'Clara', 'Max', 'Angelina', 'Joseph', 'Sophia', 'Alice', 'James']
    const lReplyIdx = [
        [223, 122, 117],
        [1, 206, 286],
        [268, 9, 178],
        [263, 174, 116],
        [224, 106, 46],
        [236, 29, 108],
        [198, 119, 65],
        [136, 278, 239]
       ];

    const [shopCart, setShopCart] = useState({
        posts: [
            {
                share: 0,
                trustRank: 0
            },
            {
                share: 0,
                trustRank: 0
            },
            {
                share: 0,
                trustRank: 0
            },
            {
                share: 0,
                trustRank: 0
            },
            {
                share: 0,
                trustRank: 0
            },
            {
                share: 0,
                trustRank: 0
            },
            {
                share: 0,
                trustRank: 0
            },
            {
                share: 0,
                trustRank: 0
            }
        ]
    });

    const [visibleRT, setVisibleRT] = useState(false);

    const [onClickHandler, setOnClickHandler] = useState(() => firstFunction);
    function firstFunction() {
        alert('Please check the tweets in the timeline again and tell us how trustworthy do you find them. Please justify your judgement with a few sentences in the open text box.')
        window.scrollTo(0, 0);
        setVisibleRT(true);
        changeHandler();
    }

    const [show, setShow] = useState(true);

    function secondFunction() {
        console.log('Second function');
        let copiedShopCart = { ...shopCart };
        for (var i = 0; i < copiedShopCart.posts.length; i++) {
            if (copiedShopCart.posts[i]['trustRank'] < 1) {
                console.log(i);
                alert("Please provide a trustworthy ranking for all posts!");
                return (
                    <>
                        <Alert show={show} variant="success">
                            <Alert.Heading>My Alert</Alert.Heading>
                            <p>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                                lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                                fermentum.
                            </p>
                            <hr />
                            <div className="d-flex justify-content-end">
                                <Button onClick={() => setShow(false)} variant="outline-success">
                                    Close me
                                </Button>
                            </div>
                        </Alert>
                    </>
                );
            }
        }


    }

    function changeHandler() {
        setOnClickHandler(() => secondFunction); // Switch to secondFunction
    }

    let idx = 0;

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
            axios.post('http://localhost:3001/register/', shopCart)
                .then((response) => {
                    console.log(response);
                }, (error) => {
                    console.log(error);
                });
        }


        return (<button type="nbutton" disabled={visibleRT} data-bs-toggle="button" class="btn btn-outline-primary  btn-lg share-1 d-flex justify-content-center position-relative end-0" style={{ width: "35%" }} onClick={handleClick}>
            <p style={{ height: "300", marginBottom: "0", fontSize: "23px" }}>
                <svg id='rt-icon' style={{ height: "30px", width: "30px", fill: "#0d6efd" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-112 0c-17.7 0-32-14.3-32-32l0-128 32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96l112 0zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128-32 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0 0-128c0-53-43-96-96-96L304 96z" /></svg>
                {buttonText}
            </p>
        </button>);
    }



    function RatingText(value) {

        if (value == 0) {
            return (<p></p>)
        }
        else if (value > 3) {
            return (<p>Please briefly describe why you trust this post.</p>)
        }
        else if (value < 3) {
            return (<p>Please briefly describe why you distrust this post.</p>)
        }
        else {
            return (<p>Please briefly explain why you neither trust nor distrust this article.</p>)
        }
    }

    function shop1(value, btnIdx) {
        let copiedShopCart = { ...shopCart };
        copiedShopCart['posts'][btnIdx]['trustRank'] = value;
        setShopCart(shopCart => ({
            ...copiedShopCart
        }));
        console.log(shopCart);
    }

    function RatingTrust(btnIdx) {

        const [rateValue, setRateValue] = useState(0);
        const setRV1 = () => {
            setRateValue(1);
            shop1(1, btnIdx);
        };
        const setRV2 = () => {
            setRateValue(2);
            shop1(2, btnIdx);
        };
        const setRV3 = () => {
            setRateValue(3);
            shop1(3, btnIdx);
        };
        const setRV4 = () => {
            setRateValue(4);
            shop1(4, btnIdx);
        };
        const setRV5 = () => {
            setRateValue(5);
            shop1(5, btnIdx);
        };


        if (visibleRT) {
            return (<div className="d-flex justify-content-center" style={{ width: "100%", marginLeft: "5%", marginTop: "5%", fontSize: "18px" }}>
                <div>
                    <p>How trustworthy do you find this post?</p>
                    <Form>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Not at all"
                                    name="group1"
                                    type={type}
                                    onChange={setRV1}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    name="group1"
                                    type={type}
                                    onChange={setRV2}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    inline
                                    name="group1"
                                    type={type}
                                    onChange={setRV3}
                                    id={`inline-${type}-3`}
                                />
                                <Form.Check
                                    inline
                                    name="group1"
                                    type={type}
                                    onChange={setRV4}
                                    id={`inline-${type}-4`}
                                />
                                <Form.Check
                                    inline
                                    label="Totally"
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

    function AccordionResp(responses, postIdx) {
        return (<Accordion >
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
                                    <p> <b>{names[lReplyIdx[postIdx][index]]} @{names[lReplyIdx[postIdx][index]]}</b></p>
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
                <Accordion.Header>More information about the cited publication</Accordion.Header>
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
                <Accordion.Header>Relevant quote from the cited publication</Accordion.Header>
                <Accordion.Body>
                    <p>  {data.mentionInPaper} </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>);
    }

    function AccordionSummary(data) {
        return (<Accordion alwaysOpen>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Short AI-generated summary of the cited publication</Accordion.Header>
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
                    {AccordionPMention(data)}
                </div>);
            case 3:
                return (<div>
                    {AccordionSummary(data)}
                </div>);
            default:
                return (<div></div>);
        }
    }

    function SetPost(data, cond, btnIdx) {

        var idxplus = btnIdx + 1;
        const path = './assets/images/pp_' + idxplus +'.jpg';
        console.log(path);
        return (<div className=" border border d-grid gap-3" style={{ alignItems: 'flex-start', paddingLeft: "2%", paddingTop: "2%", paddingBottom: "2%", paddingRight: "2%" }}>
            <div className="d-flex justify-content-center   " >
                <div style={{ marginLeft: "1%" }}>

                    <p><img className="circular-image" src={lImages[btnIdx]} alt="Logo" style={{ height: "60px", width: "60px", borderRadius: "50%", overflow: "hidden", fontSize: 50 }} /> </p>
                </div>
                <div className="rounded-3 d-grid gap-3" style={{ paddingLeft: "1%", width: "150%", fontSize: "18px" }}>
                    <p> <b>{lUser[btnIdx]} @{lUser[btnIdx]}</b></p>
                    <p>  {data.mainPost} <a href={data.mainURL} target="_blank">{data.mainRURL}</a></p>
                    <div>
                        {AccordionResp(data.replies, btnIdx)}
                    </div>
                    <div>
                        {SetCondition(cond, data)}
                    </div>
                    <div>
                        {ButtonShare(btnIdx)}
                    </div>
                </div>

                {RatingTrust(btnIdx)}

            </div>
        </div>);
    }

    function setOrder(ord, idx) {
        console.log(idx);
        switch (ord) {
            case 1:
                return SetPost(mdata.posts[lPostOrder_1[idx]], lPostTzpes_1[idx], idx);
            case 2:
                return SetPost(mdata.posts[lPostOrder_2[idx]], lPostTzpes_2[idx], idx);
            case 3:
                return SetPost(mdata.posts[lPostOrder_3[idx]], lPostTzpes_3[idx], idx);
            case 4:
                return SetPost(mdata.posts[lPostOrder_4[idx]], lPostTzpes_4[idx], idx);
        }
    }

    return (<div className='ml-1' style={{ marginLeft: "20%", marginRight: "20%", width: "60%", marginTop: "3%", fontSize: 20 }}>
        <p><b>Please read the following instruction carefully!</b></p>
        <p>Imagine you are an active social media user, i.e., you use social media platforms in your daily life interactively and you like to share content with your social circle. Your social circle consists of many people who are interested in various topics, especially in Biomedical and Clinical Sciences, Biological Sciences, Health Sciences, and Psychology. Below you will find your timeline. For each post, please decide whether or not you would like to <b>share</b> them with your circle.</p>
        <hr class="hr" />
        <div style={visibleRT ? {} : { display: 'none' }}>
            <p>Please check the tweets in the timeline again and tell us how trustworthy do you find them. Please justify your judgement with a few sentences in the open text box.</p>
            <hr class="hr" />
        </div>
        <h1>Timeline {order}</h1>
        <div className="rounded-3 " style={{ marginTop: "2%", marginBottom: "2%" }}>
            <div>
                {mdata.posts.map((item, index) => (
                    
                    setOrder(mainOrd, index)
                ))}
            </div>

        </div>
        <div style={{ marginBottom: "3%" }}>
            <button id='next' type="button" class="btn btn-outline-danger  btn-lg d-flex justify-content-center position-relative end-0" style={{ width: "100%" }} onClick={onClickHandler}>
                <p style={{ height: "300", marginBottom: "0", fontSize: "25px" }}>
                Next Page >
                </p>
            </button>
        </div>

    </div>)

}

export default ContentView;