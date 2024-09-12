import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Collapse,
    Box,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { AddCircle, KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const CollapsibleRow = ({ note, notEkle }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow
                sx={{
                    backgroundColor: '#F7F9FC',
                    '&:hover': {
                        backgroundColor: '#E0E0E0',
                    },
                }}
            >
                <TableCell sx={{ fontWeight: '500', color: '#333' }}>
                    {note.department}
                </TableCell>
                <TableCell sx={{ fontWeight: '500', color: '#333' }}>
                    {note.project}
                </TableCell>
                <TableCell sx={{ fontWeight: '500', color: '#333' }}>
                    {note.topic}
                </TableCell>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                        sx={{
                            transition: 'transform 0.3s ease',
                            color: '#007BFF',
                            '&:hover': {
                                transform: 'rotate(180deg)',
                                color: '#0056b3',
                            },
                        }}
                    >
                        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                </TableCell>
                <TableCell>
                    <IconButton
                        aria-label="add note"
                        size="small"
                        onClick={() => notEkle(note)}
                        sx={{
                            color: '#28a745',
                            '&:hover': {
                                color: '#218838',
                                backgroundColor: 'rgba(40, 167, 69, 0.1)',
                                borderRadius: '50%',
                            },
                        }}
                    >
                        <AddCircle />
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box
                            margin={1}
                            sx={{
                                backgroundColor: '#FFFFFF',
                                borderRadius: '8px',
                                padding: '16px',
                                border: '1px solid #E0E0E0',
                                color: '#333',
                            }}
                        >
                            <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                                Details
                            </Typography>
                            <Table size="small" aria-label="details">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 'bold', color: '#555' }}>Kararlar</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold', color: '#555' }}>Durum</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold', color: '#555' }}>Toplantı Tarihi</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell sx={{ color: '#666' }}>{note.decisions}</TableCell>
                                        <TableCell sx={{ color: '#666' }}>{note.status}</TableCell>
                                        <TableCell sx={{ color: '#666' }}>{note.meetingDate}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
};

export default CollapsibleRow;