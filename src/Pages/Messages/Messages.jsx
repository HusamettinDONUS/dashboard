import React, { useState } from 'react';
import Header from "../../Components/Header/Header";
import styles from "./messages.module.scss";

const MessagePage = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Ahmet Yılmaz', subject: 'Toplantı Hatırlatması', date: '2024-09-09', content: 'Yarın saat 10:00\'da toplantımızı unutmayın.', replies: ["Ne toplantısı!", "Emor..."] },
    { id: 2, sender: 'İK Departmanı', subject: 'Politika Güncellemesi', date: '2024-09-08', content: 'Şirket politikalarımızı güncelledik, lütfen en kısa sürede gözden geçirin.', replies: [] },
    { id: 3, sender: 'Büşra Sönmez', subject: 'Proje Teslim Tarihi', date: '2024-09-07', content: 'Hatırlatma: Proje teslim tarihi önümüzdeki Pazartesi.', replies: [] },
    { id: 4, sender: 'Ahmet Yılmaz', subject: 'Toplantı Hatırlatması', date: '2024-09-09', content: 'Yarın saat 10:00\'da toplantımızı unutmayın.', replies: [] },
    { id: 5, sender: 'İK Departmanı', subject: 'Politika Güncellemesi', date: '2024-09-08', content: 'Şirket politikalarımızı güncelledik, lütfen en kısa sürede gözden geçirin.', replies: [] },
    { id: 6, sender: 'Büşra Sönmez', subject: 'Proje Teslim Tarihi', date: '2024-09-07', content: 'Hatırlatma: Proje teslim tarihi önümüzdeki Pazartesi.', replies: [] },
    { id: 7, sender: 'Ahmet Yılmaz', subject: 'Toplantı Hatırlatması', date: '2024-09-09', content: 'Yarın saat 10:00\'da toplantımızı unutmayın.', replies: [] },
    { id: 8, sender: 'İK Departmanı', subject: 'Politika Güncellemesi', date: '2024-09-08', content: 'Şirket politikalarımızı güncelledik, lütfen en kısa sürede gözden geçirin.', replies: [] },
    { id: 9, sender: 'Büşra Sönmez', subject: 'Proje Teslim Tarihi', date: '2024-09-07', content: 'Hatırlatma: Proje teslim tarihi önümüzdeki Pazartesi.', replies: [] }
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyText, setReplyText] = useState('');

  const showMessageDetail = (message) => {
    setSelectedMessage(message);
    setReplyText('');
  };

  const goBack = () => {
    setSelectedMessage(null);
  };

  const handleReplyChange = (e) => {
    setReplyText(e.target.value);
  };

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message.id === selectedMessage.id
            ? { ...message, replies: [...message.replies, replyText] }
            : message
        )
      );
      setReplyText('');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      {selectedMessage ? (
        <div className={styles.messageDetail}>
          <button className={styles.backButton} onClick={goBack}>Geri</button>
          <h2>{selectedMessage.subject}</h2>
          <p><strong>Gönderen:</strong> {selectedMessage.sender}</p>
          <p><strong>Tarih:</strong> {selectedMessage.date}</p>
          <p>{selectedMessage.content}</p>

          <div className={styles.replySection}>
            <h3>Yanıtlar:</h3>
            {selectedMessage.replies.length > 0 ? (
              selectedMessage.replies.map((reply, index) => (
                <p key={index} className={styles.replyItem}>{reply}</p>
              ))
            ) : (
              <p>Henüz yanıt yok.</p>
            )}
            <textarea
              value={replyText}
              onChange={handleReplyChange}
              placeholder="Yanıtınızı buraya yazın"
              className={styles.replyInput}
            />
            <button onClick={handleReplySubmit} className={styles.replyButton}>Yanıtı Gönder</button>
          </div>
        </div>
      ) : (
        <div className={styles.messageList}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={styles.messageItem}
              onClick={() => showMessageDetail(message)}
            >
              <h3>{message.subject}</h3>
              <p><strong>Gönderen:</strong> {message.sender}</p>
              <p>{message.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessagePage;
