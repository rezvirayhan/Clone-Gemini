import { useContext } from 'react';

import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';
import './Main.css';
const Main = () => {




    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)







    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">




                {
                    !showResult ? <>
                        <div className="greet">
                            <p><span>Hello, Rezvi </span></p>
                            <p>How Can I Help You today? </p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Explain how something works like an engineer</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Help me get organized with a list of 10 tips</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Write a thank you note to my colleague</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                        : <div className="result">
                            <div className="result-title">
                                <img src={assets.user_icon} alt="" />
                                <p>{recentPrompt}</p>
                            </div>
                            <div className="resutData">
                                <img src={assets.gemini_icon} alt="" />
                                {loading ? <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div> :

                                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                }

                            </div>
                        </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="buttom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses.
                        <a href="">
                            Your privacy & Gemini Apps
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;