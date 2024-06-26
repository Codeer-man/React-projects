import Styles from './body.module.css'
import Btn from './button.jsx'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Pic from './pic.jpg'
import { useState } from 'react';

function body() {
    const [name,SetName]= useState("")
    const [email,SetEmail]= useState("")
    const [text,SetText]= useState("")

    function onSubmit(e) {
        SetName(e.target[0].value);
        SetEmail(e.target[1].value);
        SetText(e.target[2].value);
        e.preventDefault();
    }

    return (
        <div className={Styles.body}>
            <div className={Styles.left_side}>
                <div className={Styles.top_btn}>
                    <Btn    
                        text=" VIA SUPORT CHAT" icon={<MdMessage />} />
                    <Btn text=" VIA CALL" icon={<FaPhoneAlt />} />
                </div>
                <div >
                    <Btn isOutline={true}
                        text=" VIA EMAIL FORML" icon={<MdMessage />} />
                </div>

                <form onSubmit={onSubmit} className={Styles.newForm}>
                    <div className={Styles.form_container}>
                        <label htmlFor="Name">Name</label>
                        <input type="text" />
                    </div>
                    <div className={Styles.form_container}>
                        <label htmlFor="Email">Email</label>
                        <input type="email" />
                    </div>
                    <div className={Styles.form_container}>
                        <label htmlFor="text">Text</label>
                        <input type="text" className={Styles.text} />
                        {/* <textarea name="text" rows="8"></textarea> */}
                    </div>
                    <input type="submit" className={Styles.submit} />
                    <div>
                        <p>Name: {name}</p>
                        <p>Email: {email}</p>
                        <p>Text: {text}</p>
                    </div>
                </form>

            </div>
            <div>
                <img className={Styles.pic} src={Pic} alt="Lady pic" />
            </div>
        </div>
    );
}
export default body



