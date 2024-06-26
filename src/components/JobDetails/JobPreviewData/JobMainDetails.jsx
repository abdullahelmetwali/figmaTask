/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
const JobMainDetails = ({ recruiterJobPost }) => {
  return (
    <section className="makeShadow flex items-start justify-between px-10 pt-6 pb-4 mob:flex-wrap">
      <div>
        <h3>Skills Required</h3>
        <ul>
          {recruiterJobPost.skillsRequired?.map((skill, index) => (
            <li
              key={index}
              className="border text-[#3D3D3D] rounded-2xl flex items-center gap-1 py-1 px-2 w-fit my-2"
            >
              <div>
                <img src={skill.skillImg} alt={skill.skillName} />
              </div>
              <span>{skill.skillName}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Preffered Language</h3>
        {recruiterJobPost.prefferedLangs?.map((lang, index) => (
          <p key={index} className="text-[#3D3D3D] my-2">
            {lang}
          </p>
        ))}
      </div>
      <div>
        <h3>Type</h3>
        {recruiterJobPost.jobType?.map((type, index) => (
          <p key={index} className="text-[#3D3D3D] my-2">
            {type}
          </p>
        ))}
      </div>
      <div>
        <h3>{recruiterJobPost.jobExperience ? 'Years of Experience' : null}</h3>
        <p className="text-[#3D3D3D] my-2">{recruiterJobPost.jobExperience}+ Years of Experience</p>
      </div>
    </section>
  );
};
JobMainDetails.propsType = {
  recruiterJobPost: PropTypes.shape({
    skillsRequired: PropTypes.arrayOf(
      PropTypes.shape({
        skillImg: PropTypes.string,
        skillName: PropTypes.string,
      })
    ),
    prefferedLangs: PropTypes.arrayOf(PropTypes.string),
    jobType: PropTypes.arrayOf(PropTypes.string),
    jobExperience: PropTypes.number,
  }),
};
export default JobMainDetails;
