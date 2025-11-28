"use client";

import Insightbanner from "yes/Components/Insightbanner";
import Blogs from "yes/Components/insights/blog";
import Blogbanner from "yes/Components/insights/Blogbanner";
import ResourcesPage from "yes/Components/Resources";
import Rndfooter from "yes/Components/Rndfooter";
import Rndheader from "yes/Components/Rndheader";

export default function Rndblog() {
  return (
    <>
      <Rndheader />
      <Blogbanner />
      <Blogs />
      <Rndfooter />
    </>
  );
}
