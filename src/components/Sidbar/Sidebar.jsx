import { useContext, useState } from "react";
import { assets } from '../../assets/assets';
import { Context } from "../../context/Context";
import './Sidebar.css';
const Sidebar = () => {

    const [extended, setExtended] = useState(false)

    const { prevPrompts, onSent, setRecentPrompt, newChat } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className="sidebar">
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className="menu" src={assets.menu_icon} alt="" />
                <div onClick={() => newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {
                            prevPrompts.map((item, index) => {
                                return (
                                    <div onClick={() => loadPrompt(item)} key={index} className="recent-entry">
                                        <img src={assets.message_icon} alt="" />
                                        <p>{item.slice(0, 18)}..</p>
                                    </div>
                                )
                            })
                        }

                    </div> : null
                }
            </div>
            <div className="buttom">
                <div className="buttom_item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="buttom_item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="buttom_item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Setting</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;