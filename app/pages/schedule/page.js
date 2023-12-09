"use client";
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import FolderIcon from "@mui/icons-material/Folder";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function PageName({ title }) {
  // Parameter bernama title
  return (
    <div id="page_name" className="mt-2 flex">
      <CalendarTodayIcon />
      <h2>My Schedule</h2>
    </div>
  );
}

function Content() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    if (isFormOpen) {
      closeForm();
    } else {
      openForm();
    }
    setIsFormOpen(!isFormOpen);
  };

  const openForm = () => {
    document.getElementById("myForm").style.display = "block";
    // document.getElementById("main").style.marginLeft = "250px";
    // document.getElementById("content").style.marginLeft = "250px";
  };

  const closeForm = () => {
    document.getElementById("myForm").style.display = "none";
    // document.getElementById("main").style.marginLeft = "0";
    // document.getElementById("content").style.marginLeft = "0";
  };

  const [topic, setTopic] = useState("math");

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };
  return (
    <div>
        <Paper elevation={3} style={styles.paper}>
        <Link
          href="#"
          className="flex justify-center text-white bg-gray-800 hover:bg-gray-400 hover:text-gray-800"
          onClick={toggleForm}
        >
          <AddCircleOutlineIcon className="mr-2" /> Add Schedule
        </Link>
        <div id="myForm" className="myform m-8 ml-[100px] mr-[100px] hidden">
          <form>
            <h2 className="text-center">Topic</h2>
            <Select
              id="topic"
              name="topic"
              fullWidth
              // value={formData.topic}
              onChange={handleTopicChange}
            >
              <MenuItem value="math">Math</MenuItem>
              <MenuItem value="science">Science</MenuItem>
              <MenuItem value="history">History</MenuItem>
              <MenuItem value="custom">Other (Specify Below)</MenuItem>
            </Select>
            {topic === "custom" && (
              <TextField
                type="text"
                id="customTopic"
                name="customTopic"
                fullWidth
                placeholder="Enter Custom Topic"
              />
            )}
            <h2 className="text-center">Day</h2>
            <Select
              id="day"
              name="day"
              fullWidth
              // value={formData.topic}
              // onChange={handleTopicChange}
            >
              <MenuItem value="monday">Monday</MenuItem>
              <MenuItem value="tuesday">Tuesday</MenuItem>
              <MenuItem value="wednesday">Wednesday</MenuItem>
              <MenuItem value="thursday">Thursday</MenuItem>
              <MenuItem value="friday">Friday</MenuItem>
              <MenuItem value="saturday">Saturday</MenuItem>
              <MenuItem value="sunday">Sunday</MenuItem>
            </Select>
            <h2 className="text-center">Time</h2>
            <Select
              id="time"
              name="time"
              fullWidth
              // value={formData.topic}
              // onChange={handleTopicChange}
            >
              <MenuItem value="six">6</MenuItem>
              <MenuItem value="seven">7</MenuItem>
              <MenuItem value="eight">8</MenuItem>
              <MenuItem value="nine">9</MenuItem>
              <MenuItem value="ten">10</MenuItem>
              <MenuItem value="eleven">11</MenuItem>
              <MenuItem value="twelve">12</MenuItem>
              <MenuItem value="thirteen">13</MenuItem>
              <MenuItem value="fourteen">14</MenuItem>
              <MenuItem value="fifteen">15</MenuItem>
              <MenuItem value="sixteen">16</MenuItem>
              <MenuItem value="seventeen">17</MenuItem>
              <MenuItem value="twelve">18</MenuItem>
              <MenuItem value="twelve">19</MenuItem>
              <MenuItem value="twelve">20</MenuItem>
            </Select>
            <h2 className="text-center">Note</h2>
            <TextField
              id="note_field"
              multiline
              rows={5}
              fullWidth
              variant="outlined"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className="bg-gray-800 hover:bg-gray-600"
            >
              Submit
            </Button>
          </form>
        </div>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={styles.topHeader}></TableCell>
              <TableCell style={styles.topHeader}>Monday</TableCell>
              <TableCell style={styles.topHeader}>Tuesday</TableCell>
              <TableCell style={styles.topHeader}>Wednesday</TableCell>
              <TableCell style={styles.topHeader}>Thursday</TableCell>
              <TableCell style={styles.topHeader}>Friday</TableCell>
              <TableCell style={styles.topHeader}>Saturday</TableCell>
              <TableCell style={styles.topHeader}>Sunday</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell style={{ ...styles.leftHeader }}>06.00</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell></TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...styles.leftHeader }}>07.00</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell></TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...styles.leftHeader }}>08.00</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell></TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...styles.leftHeader }}>09.00</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell></TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...styles.leftHeader }}>10.00</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell></TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...styles.leftHeader }}>11.00</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell></TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...styles.leftHeader }}>12.00</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell></TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...styles.leftHeader }}>13.00</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell></TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...styles.leftHeader }}>14.00</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell></TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...styles.leftHeader }}>15.00</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell></TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...styles.leftHeader }}>16.00</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell></TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...styles.leftHeader }}>17.00</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell></TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...styles.leftHeader }}>18.00</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell></TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...styles.leftHeader }}>19.00</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell></TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...styles.leftHeader }}>20.00</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell></TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {}
      <div>
        <PageName />
        <Content />
      </div>
    </>
  );
}

const styles = {
  paper: {
    height: "600px",
    overflowY: "auto",
    // margin: "20px",
  },
  paperBot: {
    height: "300px",
    overflowY: "auto",
    // margin: "20px",
  },
  topHeader: {
    backgroundColor: "#1F2937",
    color: "white",
    fontWeight: "bold",
    position: "sticky",
    top: 0,
    zIndex: 2,
  },
  leftHeader: {
    backgroundColor: "#1F2937",
    color: "white",
    position: "sticky",
    zIndex: 1,
    left: 0,
  },
};
