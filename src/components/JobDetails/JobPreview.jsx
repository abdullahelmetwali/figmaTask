/* eslint-disable react/prop-types */
import AboutJob from "./JobPreviewData/AboutJob"
import CompanyData from "./JobPreviewData/CompanyData"
import JobHeader from "./JobPreviewData/JobHeader"
import JobMainDetails from "./JobPreviewData/JobMainDetails"
JobHeader
const JobPreview = ({ recruiterJobPost , companyData }) => {
    return (
        <section className="w-3/4">
        <JobHeader recruiterJobPost={recruiterJobPost}/>
        <JobMainDetails recruiterJobPost={recruiterJobPost}/>
        <AboutJob recruiterJobPost={recruiterJobPost}/>
        <CompanyData companyData={companyData}/>
        </section>
    )
}
export default JobPreview