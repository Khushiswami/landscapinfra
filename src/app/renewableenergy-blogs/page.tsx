"use client";

import Insightbanner from "yes/Components/Insightbanner";
import Blogs from "yes/Components/insights/blog";
import Blogbanner from "yes/Components/insights/Blogbanner";
import Whitepaper from "yes/Components/insights/Whitepaper";
import Whitepaperbanner from "yes/Components/insights/Whitepaperbanner";
import Renewfooter from "yes/Components/Renewable/Renewfooter";
import Renewableheader from "yes/Components/Renewableheader";
import ResourcesPage from "yes/Components/Resources";

export default function Renewablenergywhitepaper() {
  return (
    <>
      <Renewableheader />
      <Blogbanner />
      <Blogs />
      <Whitepaper />
      <Renewfooter />
    </>
  );
}
