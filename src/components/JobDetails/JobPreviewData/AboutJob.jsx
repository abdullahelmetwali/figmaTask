/* eslint-disable react/prop-types */
const AboutJob = ({ recruiterJobPost }) => {
  return (
    <section className=" makeShadow px-10 pt-6 pb-4">
      <h2>About this job</h2>
      <div className="text-[#3D3D3D]">
        <div>
          {recruiterJobPost.jobDetails.jobDescription ? (
            recruiterJobPost.jobDetails.jobDescription.map((desc, index) => (
              <p key={index}>
                {index + 1}. {desc}
              </p>
            ))
          ) : (
            <p>NO JOB DESCRIPTION</p>
          )}
        </div>
        <div>
          <h2 className="my-2">
            {recruiterJobPost.jobDetails.jobBenefits ? "Benefits :" : null}
          </h2>
          <ul className="list-disc pl-10">
            {recruiterJobPost.jobDetails.jobBenefits?.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="my-2">
            {recruiterJobPost.jobDetails.jobSchedule ? "Schedule :" : null}
          </h2>
          <ul className="list-disc pl-10">
            {recruiterJobPost.jobDetails.jobSchedule?.map((sched, index) => (
              <li key={index}>{sched}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="my-2">
            {recruiterJobPost.jobDetails.jobPayTypes
              ? "Supplemental pay types :"
              : null}
          </h2>
          <ul className="list-disc pl-10">
            {recruiterJobPost.jobDetails.jobPayTypes?.map((payType, index) => (
              <li key={index}>{payType}</li>
            ))}
          </ul>
        </div>
        <div>
          <span className="my-2">
            {recruiterJobPost.jobDetails.jobWorkLocation
              ? "Work Location : "
              : null}
          </span>
          {recruiterJobPost.jobDetails.jobWorkLocation?.map((wrkLoc, index) => (
            <span key={index}>
              {wrkLoc} {index > 0 ? "-" : null}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutJob;
