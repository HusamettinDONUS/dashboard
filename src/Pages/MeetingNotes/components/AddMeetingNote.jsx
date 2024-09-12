import React, { useEffect, useState } from 'react';
import styles from './addMeetingNote.module.scss';

const AddMeetingNote = ({ note, onSave }) => {
  const [department, setDepartment] = useState('');
  const [project, setProject] = useState('');
  const [topic, setTopic] = useState('');
  const [meetingDate, setMeetingDate] = useState('');
  const [status, setStatus] = useState('');
  const [decisions, setDecisions] = useState('');

  useEffect(() => {
    if (note) {
      setDepartment(note.department || '');
      setProject(note.project || '');
      setTopic(note.topic || '');
      setMeetingDate(note.meetingDate || '');
      setStatus(note.status || 'Planlandı');
      setDecisions(note.decisions || '');
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      id: note?.id || Date.now().toString(),
      department,
      project,
      topic,
      decisions,
      status,
      meetingDate,
    };

    // Pass the new note to a parent component or perform save operation
    if (onSave) {
      onSave(newNote);
    }

    // Reset the form after saving
    handleReset();
  };

  const handleReset = () => {
    setDepartment('');
    setProject('');
    setTopic('');
    setMeetingDate('');
    setStatus('Planlandı');
    setDecisions('');
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label>Departman</label>
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="">Departman Seçiniz</option>
          <option value="Hukuk Müşavirliği">Hukuk Müşavirliği</option>
          <option value="İnsan Kaynakları">İnsan Kaynakları</option>
          <option value="Finans">Finans</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>Durum</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Planlandı">Planlandı</option>
          <option value="Devam Ediyor">Devam Ediyor</option>
          <option value="Tamamlandı">Tamamlandı</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>Proje</label>
        <input
          type="text"
          value={project}
          onChange={(e) => setProject(e.target.value)}
          placeholder="Proje Bilgisi Giriniz"
        />
      </div>

      <div className={styles.formGroup}>
        <label>Konu</label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Konu Detayı Giriniz"
        />
      </div>

      <div className={styles.formGroup}>
        <label>Toplantı Tarihi</label>
        <input
          type="date"
          value={meetingDate}
          onChange={(e) => setMeetingDate(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Alınan Kararlar</label>
        <textarea
          value={decisions}
          onChange={(e) => setDecisions(e.target.value)}
          placeholder="Alınan Kararları Giriniz"
        ></textarea>
      </div>

      <div>
        <button type="submit">Kaydet</button>
        <button type="reset" onClick={handleReset}>Sıfırla</button>
      </div>
    </form>
  );
};

export default AddMeetingNote;
