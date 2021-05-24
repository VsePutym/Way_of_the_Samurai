import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import React from "react";
import {updateNewMessageText} from "../../Redux/state";



const Dialogs = (props) => {

  // Аватарки для диалогов
  const Img = (props) => {
    return (
      <div>
        <img className={s.ava} src="https://whatsism.com/uploads/posts/2018-07/1530546393_jrfqb4zrp6m.jpg" alt=""/>
      </div>
    );
  };

  const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
      <div className={s.dialogs}>
        < Img/>
        <NavLink className={s.dialog} activeClassName={s.active} to={path}>{props.name}</NavLink>
      </div>
    );
  };

  const Message = (props) => {
    return (
      <div className={s.dialog}>
        {props.message}
      </div>
    );
  };

  const dialogsElements = props.dialogsPage.dialogs.map((d, i) => <DialogItem key={i} name={d.name} id={d.id}/>);
  const messagesElements = props.dialogsPage.messages.map((m, i) => <Message key={i} message={m.message}/>);


  //даём Ареи ссылку
  let newMessage = React.createRef();

  //Functions for Dialogs

  //Добовляем сообщение
  const addMessage = () => {
    let texts = newMessage.current.value;
    alert(texts);
  }

// Меняем текст арии
  const onMessageChange = () => {
    let text = newMessage.current.value;
    let action = updateNewMessageText(text);
    props.dispatch(action);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div className={s.textarea}>
          <textarea onChange={onMessageChange} ref={newMessage} value={props.dialogsPage.newMessageText} name="" id=""
                    cols="50" rows="3"/>
          <button  onClick={addMessage} className={s.addMessage}>addMessage</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;