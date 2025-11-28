"use client";

import { useState, useEffect } from "react";
import Footer from "yes/Components/Footer";
import Insightbanner from "yes/Components/Insightbanner";
import Blogs from "yes/Components/insights/blog";
import Blogbanner from "yes/Components/insights/Blogbanner";
import Navbar from "yes/Components/Navbar";
import ResourcesPage from "yes/Components/Resources";

export default function Bloghome() {
  return (
    <>
      <Navbar />
      <Blogbanner />
      <Blogs />
      <Footer />
    </>
  );
}
