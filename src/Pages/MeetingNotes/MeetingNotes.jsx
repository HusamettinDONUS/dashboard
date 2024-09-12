import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import styles from "./meetingNotes.module.scss";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import CollapsibleRow from './components/CollapsibleRow';
import AddMeetingNote from "./components/AddMeetingNote";

const MeetingNotesList = () => {
  const Notes = [{
    id: "1",
    department: 'Hukuk Müşavirliği',
    project: 'CFG',
    topic: 'TÜRKCANLAR DOSYASI',
    decisions: 'Dosya Hukuk ile paylaşılacak.',
    status: 'Planlandı',
    meetingDate: '2024-09-09',
  },
  {
    id: "2",
    department: 'Hukuk Müşavirliği',
    project: 'CFG',
    topic: 'TÜRKCANLAR DOSYASI',
    decisions: 'Dosya Hukuk ile paylaşılacak.',
    status: 'Devam Ediyor',
    meetingDate: '2024-09-09',
  },
  {
    id: "3",
    department: 'Hukuk Müşavirliği',
    project: 'CFG',
    topic: 'TÜRKCANLAR DOSYASI',
    decisions: 'Dosya Hukuk ile paylaşılacak.',
    status: 'Planlandı',
    meetingDate: '2024-09-09',
  },
  {
    id: "4",
    department: 'Insan Kaynaklari',
    project: 'CFG',
    topic: 'TÜRKCANLAR DOSYASI',
    decisions: 'Dosya Hukuk ile paylaşılacak.',
    status: 'Planlandı',
    meetingDate: '2024-09-09',
  },
  {
    id: "5",
    department: 'Hukuk Müşavirliği',
    project: 'CFG',
    topic: 'TÜRKCANLAR DOSYASI',
    decisions: 'Dosya Hukuk ile paylaşılacak.',
    status: 'Devam Ediyor',
    meetingDate: '2024-09-09',
  },
  {
    id: "6",
    department: 'Hukuk Müşavirliği',
    project: 'CFG',
    topic: 'TÜRKCANLAR DOSYASI',
    decisions: 'Dosya Hukuk ile paylaşılacak.',
    status: 'Devam Ediyor',
    meetingDate: '2024-09-09',
  },
  {
    id: "7",
    department: 'Insan Kaynaklari',
    project: 'CFG',
    topic: 'TÜRKCANLAR DOSYASI',
    decisions: 'Dosya Hukuk ile paylaşılacak.',
    status: 'Devam Ediyor',
    meetingDate: '2024-09-09',
  },
  {
    id: "8",
    department: 'Insan Kaynaklari',
    project: 'CFG',
    topic: 'TÜRKCANLAR DOSYASI',
    decisions: 'Dosya Hukuk ile paylaşılacak.',
    status: 'Devam Ediyor',
    meetingDate: '2024-09-09',
  },
  {
    id: "9",
    department: 'Hukuk Müşavirliği',
    project: 'CFG',
    topic: 'TÜRKCANLAR DOSYASI',
    decisions: 'Dosya Hukuk ile paylaşılacak.',
    status: 'Devam Ediyor',
    meetingDate: '2024-09-09',
  },
  {
    id: "10",
    department: 'Hukuk Müşavirliği',
    project: 'CFG',
    topic: 'TÜRKCANLAR DOSYASI',
    decisions: 'Dosya Hukuk ile paylaşılacak.',
    status: 'Devam Ediyor',
    meetingDate: '2024-09-09',
  },
  {
    id: "11",
    department: 'Hukuk Müşavirliği',
    project: 'CFG',
    topic: 'TÜRKCANLAR DOSYASI',
    decisions: 'Dosya Hukuk ile paylaşılacak.',
    status: 'Devam Ediyor',
    meetingDate: '2024-09-09',
  },
  {
    id: "12",
    department: 'Hukuk Müşavirliği',
    project: 'CFG',
    topic: 'TÜRKCANLAR DOSYASI',
    decisions: 'Dosya Hukuk ile paylaşılacak.',
    status: 'Devam Ediyor',
    meetingDate: '2024-09-09',
  },
  {
    id: "2",
    department: 'Hukuk Müşavirliği',
    project: 'CFG',
    topic: 'TÜRKCANLAR DOSYASI',
    decisions: 'Dosya Hukuk ile paylaşılacak.',
    status: 'Devam Ediyor',
    meetingDate: '2024-09-09',
  },
  {
    id: "3",
    department: 'Hukuk Müşavirliği',
    project: 'CFG',
    topic: 'TÜRKCANLAR DOSYASI',
    decisions: 'Dosya Hukuk ile paylaşılacak.',
    status: 'Devam Ediyor',
    meetingDate: '2024-09-09',
  },
  {
    id: "4",
    department: 'Hukuk Müşavirliği',
    project: 'CFG',
    topic: 'TÜRKCANLAR DOSYASI',
    decisions: 'Dosya Hukuk ile paylaşılacak.',
    status: 'Devam Ediyor',
    meetingDate: '2024-09-09',
  },
  {
    id: "5",
    department: 'Hukuk Müşavirliği',
    project: 'CFG',
    topic: 'TÜRKCANLAR DOSYASI',
    decisions: 'Dosya Hukuk ile paylaşılacak.',
    status: 'Devam Ediyor',
    meetingDate: '2024-09-09',
  },
  {
    id: "6",
    department: 'Hukuk Müşavirliği',
    project: 'CFG',
    topic: 'TÜRKCANLAR DOSYASI',
    decisions: 'Dosya Hukuk ile paylaşılacak.',
    status: 'Devam Ediyor',
    meetingDate: '2024-09-09',
  },
  {
    id: "7",
    department: 'Hukuk Müşavirliği',
    project: 'CFG',
    topic: 'TÜRKCANLAR DOSYASI',
    decisions: 'Dosya Hukuk ile paylaşılacak.',
    status: 'Devam Ediyor',
    meetingDate: '2024-09-09',
  },
  {
    id: "8",
    department: 'Hukuk Müşavirliği',
    project: 'CFG',
    topic: 'TÜRKCANLAR DOSYASI',
    decisions: 'Dosya Hukuk ile paylaşılacak.',
    status: 'Devam Ediyor',
    meetingDate: '2024-09-09',
  },
  {
    id: "9",
    department: 'Hukuk Müşavirliği',
    project: 'CFG',
    topic: 'TÜRKCANLAR DOSYASI',
    decisions: 'Dosya Hukuk ile paylaşılacak.',
    status: 'Devam Ediyor',
    meetingDate: '2024-09-09',
  },
  {
    id: "10",
    department: 'Hukuk Müşavirliği',
    project: 'CFG',
    topic: 'TÜRKCANLAR DOSYASI',
    decisions: 'Dosya Hukuk ile paylaşılacak.',
    status: 'Devam Ediyor',
    meetingDate: '2024-09-09',
  },
  {
    id: "11",
    department: 'Hukuk Müşavirliği',
    project: 'CFG',
    topic: 'TÜRKCANLAR DOSYASI',
    decisions: 'Dosya Hukuk ile paylaşılacak.',
    status: 'Devam Ediyor',
    meetingDate: '2024-09-09',
  },
  {
    id: "12",
    department: 'Hukuk Müşavirliği',
    project: 'CFG',
    topic: 'TÜRKCANLAR DOSYASI',
    decisions: 'Dosya Hukuk ile paylaşılacak.',
    status: 'Devam Ediyor',
    meetingDate: '2024-09-09',
  },];

  const [department, setDepartment] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [status, setStatus] = useState('');
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingNotes, setMeetingNotes] = useState(Notes);

  const handleFilter = () => {
    setSelectedNote(null);
    let filteredNotes = Notes;
    if (department) {
      filteredNotes = filteredNotes.filter((note) => note.department === department);
    }
    if (status) {
      filteredNotes = filteredNotes.filter((note) => note.status === status);
    }
    if (meetingDate) {
      filteredNotes = filteredNotes.filter((note) => note.meetingDate === meetingDate);
    }
    setMeetingNotes(filteredNotes);
  };

  const handleAddNote = (note) => {
    setSelectedNote(note);
    console.log(selectedNote);
  };

  return (

    <div className={styles.notesContainer}>
      <div className={styles.header}><Header /></div>

      <div className={styles.filterGroup}>
        <div>
          <label>Departman</label>
          <select value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value="">Departman Seçiniz</option>
            <option value="Hukuk Müşavirliği">Hukuk Müşavirliği</option>
            <option value="Insan Kaynaklari">İnsan Kaynakları</option>
            <option value="Mali Isler">Mali İşler</option>
          </select>
        </div>

        <div>
          <label>Durum</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Toplantı Durumu Seçiniz</option>
            <option value="Planlandı">Planlandı</option>
            <option value="Devam Ediyor">Devam Ediyor</option>
          </select>
        </div>

        <div>
          <label>Toplantı Tarihi</label>
          <input
            type="date"
            value={meetingDate}
            onChange={(e) => setMeetingDate(e.target.value)}
          />
        </div>

        <button type="button" onClick={handleFilter}>
          Listele
        </button>
      </div>

      {selectedNote !== null ? (
        <AddMeetingNote note={selectedNote} />
      ) : (
        <div className={styles.tableContainer}>
          <TableContainer component={Paper} sx={{ backgroundColor: '#F0F0F0', padding: '16px', borderRadius: '8px' }}>
            <Table aria-label="collapsible table" sx={{ width: '100%', tableLayout: '' }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold', color: '#333' }}>Departman</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#333' }}>Proje</TableCell>
                  {/* <TableCell sx={{ fontWeight: 'bold', color: '#333' }}>Konu</TableCell> */}
                  <TableCell sx={{ fontWeight: 'bold', color: '#333' }}>Detay</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#333' }}>Ekle</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {meetingNotes.map((note, index) => (
                  <CollapsibleRow key={index} note={note} notEkle={handleAddNote} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
};

export default MeetingNotesList;


