import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Messages() {
  const [messages, setMessages] = useState([]);
  const [messageData, setMessageData] = useState({ sender: '', recipient: '', content: '' });

  useEffect(() => {
    axios.get('http://localhost:5003/messages')
      .then(response => setMessages(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleChange = (e) => {
    setMessageData({ ...messageData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5003/messages', messageData)
      .then(() => {
        setMessages([...messages, messageData]);
        setMessageData({ sender: '', recipient: '', content: '' });
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="sender" placeholder="Expéditeur" value={messageData.sender} onChange={handleChange} required />
        <input type="text" name="recipient" placeholder="Destinataire" value={messageData.recipient} onChange={handleChange} required />
        <textarea name="content" placeholder="Message" value={messageData.content} onChange={handleChange} required></textarea>
        <button type="submit">Envoyer</button>
      </form>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg.sender} → {msg.recipient}: {msg.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Messages;
