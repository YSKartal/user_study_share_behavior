import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import 'reactjs-popup/dist/index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './popup.css';
import React, { useState, useEffect } from 'react';
import './Content.css';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import { mdata } from './data.js';
import { names } from './names.js';
import axios from 'axios';
import pp_1 from './assets/images/pp_1.jpg';
import pp_2 from './assets/images/pp_2.jpg';
import pp_3 from './assets/images/pp_3.jpg';
import pp_4 from './assets/images/pp_4.jpg';
import pp_5 from './assets/images/pp_5.jpg';
import pp_6 from './assets/images/pp_6.jpg';
import pp_7 from './assets/images/pp_7.jpg';
import pp_8 from './assets/images/pp_8.jpg';
import w_1 from './assets/images/w_1.jpg';
import w_3 from './assets/images/w_3.jpg';
import w_4 from './assets/images/w_4.jpg';
import w_5 from './assets/images/w_5.jpg';
import w_6 from './assets/images/w_6.jpg';
import w_7 from './assets/images/w_7.jpg';
import w_8 from './assets/images/w_8.jpg';
import w_9 from './assets/images/w_9.jpg';
import w_10 from './assets/images/w_10.jpg';
import w_11 from './assets/images/w_11.jpg';
import m_1 from './assets/images/m_1.jpg';
import m_2 from './assets/images/m_2.jpg';
import m_3 from './assets/images/m_3.jpg';
import m_4 from './assets/images/m_4.jpg';
import m_5 from './assets/images/m_5.jpg';
import m_6 from './assets/images/m_6.jpg';
import m_7 from './assets/images/m_7.jpg';
import m_8 from './assets/images/m_8.jpg';
import m_9 from './assets/images/m_9.jpg';
import m_10 from './assets/images/m_10.jpg';
import m_11 from './assets/images/m_11.jpg';
import m_12 from './assets/images/m_12.jpg';
import m_13 from './assets/images/m_13.jpg';
import m_14 from './assets/images/m_14.jpg';
import ShowMoreText from "react-show-more-text";
import Swal from 'sweetalert2';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Button from 'react-bootstrap/Button';


const tempURL = process.env.REACT_APP_NODE_URL_R;
function sendMessage(message) {
    axios.post(tempURL, message)
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
}

function ContentView({ order, uid, ct, pid }) {

    const instr_1 = "Imagine you are an active social media user, i.e., you use social media platforms in your daily life interactively and you like to share content with your social circle. Your social circle consists of many people who are interested in various topics, especially in Biomedical and Clinical Sciences, Biological Sciences, Health Sciences, and Psychology. Below you will find your timeline.";
    const instr_2 = "Please check the tweets in the timeline again and tell us how trustworthy you find them. Please briefly describe why you shared the respective posts.";
    const instr_3 = ' For each post, please decide whether or not you would like to SHARE them.';
    const instr_4 = "Imagine you are an active social media user, i.e., you use social media platforms in your daily life interactively and you like to share content with your social circle. Your social circle consists of many people who are interested in various topics, especially in Biomedical and Clinical Sciences, Biological Sciences, Health Sciences, and Psychology. On this page, you will find your timeline.";
    // const tempURL = 'https://localhost:3001/register/';
    const redirectUrl = 'https://www.soscisurvey.de/user-study-smsi/index.php?i=' + ct;
 var er = 0;
    const [init, setInit] = useState(true);
    const [init2, setInit2] = useState(false);
    if (init) {
        sendMessage({ 'type': 'begin', 'uid': uid, 'ct': ct, 'pid': pid, 'order': order});
        setInit(false);
        setInit2(true);

        Swal.fire({
            title: instr_4 + instr_3,
            showCloseButton: false,
            backdrop: false,
            allowEscapeKey: false,
            animation: false,

        });
        Swal.disableButtons();
    }
    useEffect(() => {
        setTimeout(() => init2 ?Swal.enableButtons() : {} , 5000);
    }, []);

    var mainOrd = 1;
    if (order == '2') {
        mainOrd = 2;
    }
    if (order === '3') {
        mainOrd = 3;
    }
    if (order == '4') {
        mainOrd = 4;
    }

    const lPostOrder_1 = [7, 3, 5, 2, 4, 0, 1, 6]
    const lPostOrder_2 = [2, 6, 3, 7, 1, 4, 5, 0]
    const lPostOrder_3 = [3, 0, 6, 5, 7, 1, 4, 2]
    const lPostOrder_4 = [2, 3, 5, 6, 7, 0, 1, 4]
    const lPostTzpes_1 = [1, 1, 1, 1, 1, 1, 1, 1]
    const lPostTzpes_2 = [2, 2, 2, 2, 2, 2, 2, 2]
    const lPostTzpes_3 = [3, 3, 3, 3, 3, 3, 3, 3]
    const lPostTzpes_4 = [0, 0, 0, 0, 0, 0, 0, 0]

    const lImages = [pp_5, pp_6, pp_1, pp_7, pp_2, pp_3, pp_8, pp_4]
    //const lUser = ['Mark', 'Tom', 'Suzan', 'Kevin', 'Martin', 'Hans', 'Clara', 'Isabella', 'Max', 'Angelina', 'Joseph', 'Lily', 'Emma', 'Sophia', 'Alice', 'James']
    const lUser = ['Mark', 'Tom', 'Suzan', 'Kevin', 'Lily', 'Emma', 'Martin', 'Isabella', 'Hans', 'Clara', 'Max', 'Angelina', 'Joseph', 'Sophia', 'Alice', 'James']
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
    const lReplyPIdx = [
        [w_1, m_14, w_3],
        [m_2, m_3, m_4],
        [w_4, m_5, w_5],
        [m_6, m_7, m_8],
        [w_6, m_9, w_7],
        [m_10, w_8, w_9],
        [w_10, m_13, m_1],
        [m_11, m_12, w_11]
    ];


    const [shopCart, setShopCart] = useState({
        posts: [
            {
                share: 0,
                trustRank: 0,
                shareText: '',
            },
            {
                share: 0,
                trustRank: 0,
                shareText: ''
            },
            {
                share: 0,
                trustRank: 0,
                shareText: ''
            },
            {
                share: 0,
                trustRank: 0,
                shareText: ''
            },
            {
                share: 0,
                trustRank: 0,
                shareText: ''
            },
            {
                share: 0,
                trustRank: 0,
                shareText: ''
            },
            {
                share: 0,
                trustRank: 0,
                shareText: ''
            },
            {
                share: 0,
                trustRank: 0,
                shareText: ''
            }
        ]
    });

    const [activeNext, setActiveNext] = useState(true);
    useEffect(() => {
        setTimeout(() => setActiveNext(false), 20000);
    }, []);

    const [visibleRT, setVisibleRT] = useState(false);

    const [onClickHandler, setOnClickHandler] = useState(() => firstFunction);
    function firstFunction() {
        sendMessage({ 'type': 'next_page', 'uid': uid, 'ct': ct, 'pid': pid });

        Swal.fire({
            'text': 'Please check the tweets in the timeline again and tell us how trustworthy you find them. Please briefly describe why you shared the respective posts in the open text box.',
            didClose: () => window.scrollTo(0, 0)
        }).then(() => {
            window.scrollTo(0, 0);
        });
        window.scrollTo(0, 0);
        setVisibleRT(true);
        changeHandler();
    }

    function getValue(id) {
        if (null !== document.getElementById(id)) {
            var er = document.getElementById(id).value;
            console.log(er);
            return er;
        }
        return '';
    }
    function secondFunction() {

        if (null !== document.getElementById('textarea_trust_1')) {
            var er = document.getElementById('textarea_trust_1').value;
            console.log(er);
        }

        let copiedShopCart = { ...shopCart };
        var done = true;
        for (var i = 0; i < copiedShopCart.posts.length; i++) {
            if (copiedShopCart.posts[i]['trustRank'] < 1) {
                done = false;
                break;
            }
        }
        if (done === false) {
            Swal.fire({
                title: 'Error!',
                text: 'Please provide a trustworthy rating for all posts!',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
        else {
            var f_data = {};
            for (var j = 0; j < copiedShopCart.posts.length; j++) {
                var textV = getValue('textarea_trust_' + j);
                copiedShopCart.posts[j]['shareText'] = textV;
                f_data[mdata.posts[lMainOrd[j]].title] = copiedShopCart.posts[j];
            }
            sendMessage({ 'type': 'end', 'ct': ct, 'pid': pid, 'uid': uid });
            //sendMessage({ 'type': 'result', 'uid': uid, 'ct': ct, 'pid': pid, 'data': copiedShopCart });
            axios.post(tempURL, { 'type': 'result_f', 'uid': uid, 'ct': ct, 'pid': pid, 'data': f_data })
                .then((response) => {
                    console.log(response);
                    window.location.replace(redirectUrl);
                }, (error) => {
                    console.log(error);
                });
            axios.post(tempURL, { 'type': 'result', 'uid': uid, 'ct': ct, 'pid': pid, 'data': copiedShopCart })
                .then((response) => {
                    console.log(response);
                    window.location.replace(redirectUrl);
                }, (error) => {
                    console.log(error);
                });
            //window.location.replace(redirectUrl);
        }
    }

    function changeHandler() {
        setOnClickHandler(() => secondFunction); // Switch to secondFunction
    }

    function ButtonShare(btnIdx) {
        const [buttonText, setButtonText] = useState(' Share');
        var btnId = 'share_btn_' + btnIdx;
        function handleClick() {
            let copiedShopCart = { ...shopCart };

            (buttonText === ' Share') ? setButtonText(' Unshare') : setButtonText(' Share');
            (buttonText === ' Share') ? copiedShopCart['posts'][btnIdx]['share'] = 1 : copiedShopCart['posts'][btnIdx]['share'] = 0;
            setShopCart(shopCart => ({
                ...copiedShopCart
            }));
            console.log(shopCart);
            console.log(btnIdx, uid);

            sendMessage({ 'type': 'share', 'uid': uid, 'ct': ct, 'pid': pid, 'index': btnIdx, data: shopCart });
            
        }

        return (
            <div>
                <ToggleButtonGroup type="checkbox" style={{ width: "35%" }}>
                    <ToggleButton disabled={visibleRT} variant="outline-primary" id={btnId} className="btn-lg share-1 d-flex justify-content-center position-relative end-0" style={{ width: "35%" }} onClick={handleClick}>
                        <p style={{ height: "300", marginBottom: "0", fontSize: "23px" }}>
                            <svg id='rt-icon' style={{ height: "30px", width: "30px", fill: "#0d6efd" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-112 0c-17.7 0-32-14.3-32-32l0-128 32 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96l112 0zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128-32 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0 0-128c0-53-43-96-96-96L304 96z" /></svg>
                            {buttonText}
                        </p>
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
        );
    }


    function ShareText(idx) {
        let copiedShopCart = { ...shopCart };
        var value = copiedShopCart['posts'][idx]['share'];
        if (value === 0) {
            return (<p></p>)
        }
        else {
            return (<p>Please briefly explain why you shared this post.</p>)
        }
    }

    function ShareTextArea(value, idx) {

        let copiedShopCart = { ...shopCart };
        var svalue = copiedShopCart['posts'][idx]['share'];
        if (svalue === 0) {
            return (<p></p>)
        }
        else {
            const taid = 'textarea_trust_' + idx;
            return (<Form.Control id={taid} as="textarea" rows={3} />);
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

        const formCheckLabel = "Not at all   ";
        if (visibleRT) {
            return (<div className="d-flex justify-content-left" style={{ width: "100%", marginLeft: "5%", marginTop: "5%", fontSize: "18px" }}>
                <div>
                    <p>How trustworthy do you find this post?</p>
                    <Form>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Label>{formCheckLabel}</Form.Label>
                                <Form.Text>     </Form.Text>
                                <Form.Check
                                    inline
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
                    <Form.Group className="mb-3" >
                        <Form.Label>{ShareText(btnIdx)}</Form.Label>
                        <div>{ShareTextArea(rateValue, btnIdx)}</div>

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
        const [active, setActive] = useState(false);

        function handleClick(ekey) {
            console.log(postIdx, 'response', ekey, uid);
            sendMessage({ 'type': 'accordion', 'uid': uid, 'ct': ct, 'pid': pid, 'index': postIdx, 'sub_type': 'response', 'state': ekey, 'post_id': mdata.posts[lMainOrd[postIdx]].title });
            active ? setActive(false) : setActive(true);
        };


        if (visibleRT) {
            return (<Accordion id={'accr' + postIdx}  >
                <Accordion.Item id={'accri' + postIdx} eventKey="0" onClick={(e) => handleClick(active)}>
                    <Accordion.Header>Show Responses</Accordion.Header>
                    <Accordion.Body>
                        <ul className="d-grid gap-3 list-unstyled">
                            {responses.map((item, index) => (
                                <li key={item}><div className="d-flex justify-content-left ">
                                    <div style={{ marginLeft: "1%" }}>
                                        <p><img className="circular-image" src={lReplyPIdx[postIdx][index]} alt="Logo" style={{ height: "60px", width: "60px", borderRadius: "50%", overflow: "hidden", fontSize: 50 }} /> </p>

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
            </Accordion>);
        }
        else {
            return (
                <div>
                    <Accordion id={'accrc' + postIdx}>
                        <Accordion.Item id={'accdr' + postIdx} eventKey="0" onClick={(e) => handleClick(active)}>
                            <Accordion.Header>Show Responses</Accordion.Header>
                            <Accordion.Body>
                                <ul className="d-grid gap-3 list-unstyled">
                                    {responses.map((item, index) => (
                                        <li key={item}><div className="d-flex justify-content-left ">
                                            <div style={{ marginLeft: "1%" }}>
                                                <p><img className="circular-image" src={lReplyPIdx[postIdx][index]} alt="Logo" style={{ height: "60px", width: "60px", borderRadius: "50%", overflow: "hidden", fontSize: 50 }} /> </p>

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
                    </Accordion>
                </div>
            )
        };
    }

    function AccordionMetadata(data, postIdx) {
        const [active, setActive] = useState(false);

        function handleClick(ekey) {
            sendMessage({ 'type': 'accordion', 'uid': uid, 'ct': ct, 'pid': pid, 'index': postIdx, 'sub_type': 'metadata', 'state': ekey, 'post_id': mdata.posts[lMainOrd[postIdx]].title });
            active ? setActive(false) : setActive(true);
        };
        
        function executeOnClick() {
            sendMessage({ 'type': 'expand', 'uid': uid, 'ct': ct, 'pid': pid, 'index': postIdx, 'sub_type': 'metadata_expand', 'post_id': mdata.posts[lMainOrd[postIdx]].title });
        };
        if (visibleRT) {
            return (<Accordion alwaysOpen>
                <Accordion.Item eventKey="0" onClick={(e) => handleClick(active)}>
                    <Accordion.Header>Information about the cited publication</Accordion.Header>
                    <Accordion.Body>
                        <div className="rounded-3" >
                            <p> <b>Publication Reference:</b> {data.mla_citation} </p>
                            <p> <b>Title:</b> {data.mainTitle} </p>
                            <p> <b>Authors:</b> {data.mainAuthors} </p>

                            <b>Abstract:</b><div>
                                        <ShowMoreText
                                            /* Default options */
                                            lines={1}
                                            more={<b style={{cursor: "pointer"}}>Read more</b>}
                                            less={<b style={{cursor: "pointer"}}>Read less</b>}
                                            className="content-css"
                                            anchorClass="show-more-less-clickable"
                                            onClick={executeOnClick}
                                            expanded={false}
                                            

                                            truncatedEndingComponent={"...   "}
                                        >
                                            {data.mainAbs}
                                        </ShowMoreText>
                                    </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>)
        }
        else {
            return (
                <div>
                    <Accordion defaultActiveKey={"0"} alwaysOpen>
                        <Accordion.Item eventKey="0" onClick={(e) => handleClick(active)}>
                            <Accordion.Header>Information about the cited publication</Accordion.Header>
                            <Accordion.Body>
                                <div className="rounded-3" >
                                    <p> <b>Publication Reference:</b> {data.mla_citation} </p>
                                    <p> <b>Title:</b> {data.mainTitle} </p>
                                    <p> <b>Authors:</b> {data.mainAuthors} </p>
                                    <b>Abstract:</b><div>
                                        <ShowMoreText
                                            /* Default options */
                                            lines={1}
                                            more={<b style={{cursor: "pointer"}}>Read more</b>}
                                            less={<b style={{cursor: "pointer"}}>Read less</b>}
                                            className="content-css"
                                            anchorClass="show-more-less-clickable"
                                            onClick={executeOnClick}
                                            expanded={false}
                                            

                                            truncatedEndingComponent={"...   "}
                                        >
                                            {data.mainAbs}
                                        </ShowMoreText>
                                    </div>

                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            )
        }

    }

    function AccordionPMention(data, postIdx) {
        const [active, setActive] = useState(false);

        function handleClick(ekey) {
            sendMessage({ 'type': 'accordion', 'uid': uid, 'ct': ct, 'pid': pid, 'index': postIdx, 'sub_type': 'mention', 'state': ekey, 'post_id': mdata.posts[lMainOrd[postIdx]].title });
            active ? setActive(false) : setActive(true);
        };

        function executeOnClick() {
            sendMessage({ 'type': 'expand', 'uid': uid, 'ct': ct, 'pid': pid, 'index': postIdx, 'sub_type': 'mention_expand', 'post_id': mdata.posts[lMainOrd[postIdx]].title });
        };

        if (visibleRT) {
            return (<Accordion alwaysOpen>
                <Accordion.Item eventKey="1" onClick={(e) => handleClick(active)}>
                    <Accordion.Header>Relevant quote from the cited publication</Accordion.Header>
                    <Accordion.Body>
                        <p> <b>Publication Reference:</b> {data.mla_citation} </p>
                        <p> <b>Relevant Quote:</b><div>
                                        <ShowMoreText
                                            /* Default options */
                                            lines={1}
                                            more={<b style={{cursor: "pointer"}}>Read more</b>}
                                            less={<b style={{cursor: "pointer"}}>Read less</b>}
                                            className="content-css"
                                            anchorClass="show-more-less-clickable"
                                            onClick={executeOnClick}
                                            expanded={false}

                                            truncatedEndingComponent={"...   "}
                                        >
                                            {data.mentionInPaper} 
                                        </ShowMoreText>
                                    </div>
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>);
        }
        else {
            return (
                <div>
                    <Accordion defaultActiveKey={"1"} alwaysOpen>
                        <Accordion.Item eventKey="1" onClick={(e) => handleClick(active)}>
                            <Accordion.Header>Relevant quote from the cited publication</Accordion.Header>
                            <Accordion.Body>
                                <p> <b>Publication Reference:</b> {data.mla_citation} </p>
                                <p> <b>Relevant Quote:</b><div>
                                        <ShowMoreText
                                            /* Default options */
                                            lines={1}
                                            more={<b style={{cursor: "pointer"}}>Read more</b>}
                                            less={<b style={{cursor: "pointer"}}>Read less</b>}
                                            className="content-css"
                                            anchorClass="show-more-less-clickable"
                                            onClick={executeOnClick}
                                            expanded={false}

                                            truncatedEndingComponent={"...   "}
                                        >
                                            {data.mentionInPaper} 
                                        </ShowMoreText>
                                    </div>
                        </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            );
        }

    }

    function AccordionSummary(data, postIdx) {
        const [active, setActive] = useState(false);

        function handleClick(ekey) {
            sendMessage({ 'type': 'accordion', 'uid': uid, 'ct': ct, 'pid': pid, 'index': postIdx, 'sub_type': 'ai_sum', 'state': ekey, 'post_id': mdata.posts[lMainOrd[postIdx]].title });
            active ? setActive(false) : setActive(true);
        };

        function executeOnClick() {
            sendMessage({ 'type': 'expand', 'uid': uid, 'ct': ct, 'pid': pid, 'index': postIdx, 'sub_type': 'ai_sum_expand', 'post_id': mdata.posts[lMainOrd[postIdx]].title });
        };

        if (visibleRT) {
            return (<Accordion alwaysOpen>
                <Accordion.Item eventKey="2" onClick={(e) => handleClick(active)}>
                    <Accordion.Header>AI generated summary of the cited publication</Accordion.Header>
                    <Accordion.Body>
                        <p> <b>Publication Reference:</b> {data.mla_citation} </p>
                        <p> <b>Summary:</b><div>
                                        <ShowMoreText
                                            /* Default options */
                                            lines={1}
                                            more={<b style={{cursor: "pointer"}}>Read more</b>}
                                            less={<b style={{cursor: "pointer"}}>Read less</b>}
                                            className="content-css"
                                            anchorClass="show-more-less-clickable"
                                            onClick={executeOnClick}
                                            expanded={false}

                                            truncatedEndingComponent={"...   "}
                                        >
                                            {data.extSummaryMention} 
                                        </ShowMoreText>
                                    </div>
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>);
        }
        else {
            return (
                <div>
                    <Accordion defaultActiveKey={"2"} alwaysOpen>
                        <Accordion.Item eventKey="2" onClick={(e) => handleClick(active)}>
                            <Accordion.Header>AI generated summary of the cited publication</Accordion.Header>
                            <Accordion.Body>
                                <p> <b>Publication Reference:</b> {data.mla_citation} </p>
                                <p> <b>Summary:</b><div>
                                        <ShowMoreText
                                            /* Default options */
                                            lines={1}
                                            more={<b style={{cursor: "pointer"}}>Read more</b>}
                                            less={<b style={{cursor: "pointer"}}>Read less</b>}
                                            className="content-css"
                                            anchorClass="show-more-less-clickable"
                                            onClick={executeOnClick}
                                            expanded={false}

                                            truncatedEndingComponent={"...   "}
                                        >
                                            {data.extSummaryMention} 
                                        </ShowMoreText>
                                    </div>
                        </p>
                                
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            );
        }

    }

    function SetCondition(cond, data, idx) {
        switch (cond) {
            case 1:
                return (AccordionMetadata(data, idx));
            case 2:
                return (<div>
                    {AccordionPMention(data, idx)}
                </div>);
            case 3:
                return (<div>
                    {AccordionSummary(data, idx)}
                </div>);
            default:
                return (<div></div>);
        }
    }

    function SetPost(data, cond, btnIdx) {

        function hcLink(post_id) {
            sendMessage({ 'type': 'post', 'uid': uid, 'ct': ct, 'pid': pid, 'index': btnIdx, 'sub_type': 'link_click', 'post_id': post_id });
        };

        return (<div key={btnIdx} className=" border border d-grid gap-3" style={{ alignItems: 'flex-start', paddingLeft: "2%", paddingTop: "2%", paddingBottom: "2%", paddingRight: "2%" }}>
            <div className="d-flex justify-content-center   " >
                <div style={{ marginLeft: "1%" }}>

                    <p><img className="circular-image" src={lImages[btnIdx]} alt="Logo" style={{ height: "60px", width: "60px", borderRadius: "50%", overflow: "hidden", fontSize: 50 }} /> </p>
                </div>
                <div className="rounded-3 d-grid gap-3" style={{ paddingLeft: "1%", width: "150%", fontSize: "18px" }}>
                    <p> <b>{lUser[btnIdx]} @{lUser[btnIdx]}</b></p>
                    <p>  {data.mainPost} <a href={data.mainURL} onClick={(e) => hcLink(data.title)} target="_blank">{data.mainRURL}</a></p>
                    <div>
                        {AccordionResp(data.replies, btnIdx)}
                    </div>
                    <div>
                        {SetCondition(cond, data, btnIdx)}
                    </div>
                    <div>
                        {ButtonShare(btnIdx)}
                    </div>
                </div>

                {RatingTrust(btnIdx)}

            </div>
        </div>);
    }

    var lMainOrd;
    function setOrder(ord, idx) {
        switch (ord) {
            case 1:
                lMainOrd = lPostOrder_1;
                return SetPost(mdata.posts[lPostOrder_1[idx]], lPostTzpes_1[idx], idx);
            case 2:
                lMainOrd = lPostOrder_2;
                return SetPost(mdata.posts[lPostOrder_2[idx]], lPostTzpes_2[idx], idx);
            case 3:
                lMainOrd = lPostOrder_3;
                return SetPost(mdata.posts[lPostOrder_3[idx]], lPostTzpes_3[idx], idx);
            case 4:
                lMainOrd = lPostOrder_4;
                return SetPost(mdata.posts[lPostOrder_4[idx]], lPostTzpes_4[idx], idx);
            default:
                lMainOrd = lPostOrder_1;
                return SetPost(mdata.posts[lPostOrder_1[idx]], lPostTzpes_1[idx], idx);
        }
    }


    return (<div className='ml-1' style={{ marginLeft: "20%", marginRight: "20%", width: "60%", marginTop: "3%", fontSize: 20 }}>
        <div style={{ padding: "2%", borderStyle: "solid", borderRadius: 10, borderColor: "red", borderWidth: "medium" }}>

            <p  ><b>Please read the following instruction carefully!</b></p>
            <p>{visibleRT ? instr_2 : instr_1}</p>
            <p><b>{visibleRT ? '' : 'For each post, please decide whether or not you would like to share it with your circle.'}</b></p>
        </div>
        <hr className="hr" />

        <h1>Timeline</h1>
        <div className="rounded-3 " style={{ marginTop: "2%", marginBottom: "2%" }}>
            <div>
                {mdata.posts.map((item, index) => (
                    setOrder(mainOrd, index)
                ))}
            </div>

        </div>
        <div style={{ marginBottom: "3%" }}>
            <button id='next' type="button" disabled={activeNext} className="btn btn-outline-danger  btn-lg d-flex justify-content-center position-relative end-0" style={{ width: "100%" }} onClick={onClickHandler}>
                <p style={{ height: "300", marginBottom: "0", fontSize: "25px" }}>
                Next Page >
                </p>
            </button>
        </div>

    </div>)

}

export default ContentView;