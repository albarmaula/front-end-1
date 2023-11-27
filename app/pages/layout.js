"use client";
// import React from "react";
import React, { useState } from 'react';
import Avatar from "@mui/material/Avatar";
import CycloneRoundedIcon from "@mui/icons-material/CycloneRounded";
import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import FolderIcon from "@mui/icons-material/Folder";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import Link from "next/link";

export default function PagesLayout({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    if (isNavOpen) {
      closeNav();
    } else {
      openNav();
    }
    setIsNavOpen(!isNavOpen);
  };

  const openNav = () => {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("content").style.marginLeft = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("content").style.marginLeft = "0";
  };

  return (
    <>
      <div id="mySidebar" className="sidebar">
        <Link href="/pages/home" className="px-4">
          <HomeIcon className="mr-2" />
          Home
        </Link>
        <Link href="/pages/schedule" className="px-4">
          <CalendarTodayIcon className="mr-2" />
          My Schedule
        </Link>
        <Link href="/pages/task" className="px-4">
          <AssignmentTurnedInIcon className="mr-2" />
          My Tasks
        </Link>
        <Link href="/pages/resource" className="px-4">
          <FolderIcon className="mr-2" />
          My Resource
        </Link>
        <Link href="/pages/note" className="px-4">
          <NoteAddIcon className="mr-2" />
          Note
        </Link>
      </div>

      <div id="main" className="header h-16 flex items-center bg-gray-800">

      <button className="openbtn" onClick={toggleNav}>
        {isNavOpen ? 'X' : '☰'}
      </button>
        <Avatar sx={{ m: 1 }} className="ml-5 bg-white text-gray-800">
          <CycloneRoundedIcon />
        </Avatar>
      </div>

      <div id="content" className="px-20 items-center">
        {children}
      </div>

      <div className=" flex flex-col">
        <footer className="footer bg-gray-800 mt-[50px]">
          &copy; Ini punya Widaad Albar Maula. RPL. 1201200022
        </footer>
      </div>
    </>
  );
}
