import React, { useState } from "react";

import api from "../../services/api";
import "./styles.css";

function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [text, setText] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post("/send-sms", {
      from,
      to,
      text,
    });

    const { message } = response.data;

    alert(`${message}`);

    //Limpando campos do input
    setFrom("");
    setTo("");
    setText("");
  }

  return (
    <>
      <div className="container">
        <main className="content">
          <form onSubmit={handleSubmit}>
            <h4>Envie SMS</h4>

            <div className="inputGroup1">
              <input
                type="text"
                placeholder="De"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
              <input
                type="text"
                placeholder="Para exemplo:5582981029294"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
            <div className="inputGroup">
              <h4>Conteúdo da messagem</h4>
              <textarea
                className="textArea"
                name="text"
                id="text"
                cols="30"
                rows="10"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            <div className="btnGroup">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

export default Home;
