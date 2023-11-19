"use client";
import React from "react";
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
import { Grid } from "@mui/material";

function PageName({ title }) {
  // Parameter bernama title
  return (
    <div id="page_name" className="mt-2">
      <h2>My Task</h2>
    </div>
  );
}

function Content() {
  return (
    <div>
      <Link
        href="/pages/schedule"
        className="mb-[-5px] flex justify-center hover:text-gray-400 p-2 m-[20px]"
      >
        <CalendarTodayIcon className="mr-2" />
        My Schedule
      </Link>
      <Paper elevation={3} style={styles.paper}>
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
              <TableCell style={{ ...styles.leftHeader }}>00.00</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell></TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...styles.leftHeader }}>01.00</TableCell>
              <TableCell>Data 1</TableCell>
              <TableCell>Data 2</TableCell>
              <TableCell>Data 3</TableCell>
              <TableCell></TableCell>
              <TableCell>Data 3</TableCell>
              <TableCell>Data 3</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...styles.leftHeader }}>02.00</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell></TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...styles.leftHeader }}>03.00</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell></TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...styles.leftHeader }}>04.00</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell></TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...styles.leftHeader }}>05.00</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell></TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
            </TableRow>
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
            <TableRow>
              <TableCell style={{ ...styles.leftHeader }}>21.00</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell></TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...styles.leftHeader }}>22.00</TableCell>
              <TableCell>Data 4</TableCell>
              <TableCell></TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
              <TableCell>Data 6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ ...styles.leftHeader }}>23.00</TableCell>
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

      <Grid container spacing={2} className="mt-[-30px]">
        <Grid item xs={12} sm={9}>
          <Link
            href="/pages/task"
            className="mb-[-5px] flex justify-center hover:text-gray-400 p-2 m-[20px]"
          >
            <AssignmentTurnedInIcon className="mr-2" />
            My Tasks
          </Link>

          <Paper elevation={3} style={styles.paperBot}>
            <Link
              href="#"
              className="flex justify-center text-white bg-gray-800 hover:bg-gray-400 hover:text-gray-800"
            >
              <AddCircleOutlineIcon className="mr-2" />
            </Link>
            <Table className="h-[300px]">
              <TableHead>
                <TableRow>
                  <TableCell style={styles.topHeader}>Task Name</TableCell>
                  <TableCell style={styles.topHeader}>Deadline</TableCell>
                  <TableCell style={styles.topHeader}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Task 1</TableCell>
                  <TableCell>2023-12-01</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      className="bg-gray-800 hover:bg-gray-600"
                    >
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Task 2</TableCell>
                  <TableCell>2023-12-01</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      className="bg-gray-800 hover:bg-gray-600"
                    >
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Task 3</TableCell>
                  <TableCell>2023-12-01</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      className="bg-gray-800 hover:bg-gray-600"
                    >
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Task 4</TableCell>
                  <TableCell>2023-12-01</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      className="bg-gray-800 hover:bg-gray-600"
                    >
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Task 1</TableCell>
                  <TableCell>2023-12-01</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      className="bg-gray-800 hover:bg-gray-600"
                    >
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Link
            href="/pages/note"
            className="mb-[-5px] flex justify-center hover:text-gray-400 p-2 m-[20px]"
          >
            <NoteAddIcon className="mr-2" />
            Note
          </Link>
          <Paper elevation={3} style={styles.paperBot}>
            <Link
              href="#"
              className="flex justify-center text-white bg-gray-800 hover:bg-gray-400 hover:text-gray-800"
            >
              <AddCircleOutlineIcon className="mr-2" />
            </Link>
            <Table className="h-[300px]">
              <TableHead>
                <TableRow>
                  <TableCell style={styles.topHeader}>Title</TableCell>
                  <TableCell style={styles.topHeader}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Note 1</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      className="bg-gray-800 hover:bg-gray-600"
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
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
    height: "400px",
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
