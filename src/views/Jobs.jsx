import { useEffect, useState } from "react";
import JobPreview from "../components/JobDetails/JobPreview";
import SideBar from "../components/SideBar";
const Jobs = () => {
  const [seenSec, setSeenSet] = useState("Job preview");
  // Here I use (useEffect) , beacuse the data surely be changed , if the constant I'll make it like a normal object (const recruiterJobPost = {data})
  const [recruiterJobPost , setRecruiterJobPost] = useState({
    jobName : '',
    dayPosted : 0, 
    recruiterLocation : '',
    jobSalary : [],
    skillsRequired : [],
    prefferedLangs : [],
    jobType : [],
    jobExperience : 0,
    jobDetails : {
      jobDescription : [],
      jobBenefits : [],
      jobSchedule : [],
      jobPayTypes : [],
      jobWorkLocation : []
    },
  })
  const [companyData , setCompanyData] = useState({
    companyLogo : '',
    companyName : '',
    companySize : [],
    companySector : [],
    companyFoundedIn : 0,
    companyType : '',
    companyFunding : '',
    companyFoundedBy : []

  })
  useEffect(() => {
    setRecruiterJobPost({
    jobName: "Senior Product Designer",
    dayPosted: new Date().getDate() - 24,
    recruiterLocation: "Delaware, USA",
    jobSalary: [300, 400],
    jobExperience : 3,
    skillsRequired: [
      {
        skillImg: "/imgs/figma.png",
        skillName: "Figma",
      },
      {
        skillImg: "/imgs/AdobeIII.png",
        skillName: "Adobe Illustrator",
      },
      {
        skillImg: "/imgs/AdobeXd.png",
        skillName: "Adobe XD",
      },
    ],
    prefferedLangs: ["English"],
    jobType: ["Full Time"],
    jobDetails: {
      jobDescription: [
        "Handle the UI/UX research design",
        "Work on researching on latest web applications",
        "Work on conceptualizing and visualizing",
        "Work on creating graphics content and other graphic related works",
      ],
      jobBenefits: ["Health insurance", "Provident Fund"],
      jobSchedule: ["Day shift"],
      jobPayTypes: ["Performance bonus", "Yearly bonus"],
      jobWorkLocation: ["In Person"],
    },
    })
    setCompanyData({
      companyLogo : '/imgs/companyLogo.png',
      companyName : 'Atlassian',
      companySize : [1,2],
      companySector : ['Information Technology','Infrastructure'],
      companyFoundedIn : 2019,
      companyType : 'Private',
      companyFunding : 'Bootstrapped',
      companyFoundedBy : ['Scott Farquhar','Mike Cannon-Brookes']
    })
  }, [])
  return (
    <>
      <nav className="makeShadow flex gap-5 px-10 py-6">
        {["Job preview", "Applicants", "Match", "Messages"].map(
          (section, index) => (
            <h1
              key={index}
              onClick={() => setSeenSet(section)}
              className={`  tracking-wide cursor-pointer ${
                seenSec === section ? "underlineSection" : ""
              }`}
            >
              {section}
            </h1>
          )
        )}
      </nav>
      <main className="flex">
        <JobPreview recruiterJobPost={recruiterJobPost} companyData={companyData}/>
        <SideBar/>
      </main>
    </>
  );
};
export default Jobs;
