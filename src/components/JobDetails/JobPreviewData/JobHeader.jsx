/* eslint-disable react/prop-types */
import LocationSvg from '/public/icons/location.svg'
import Money from '/public/icons/money.svg'
const JobHeader = ({ recruiterJobPost }) => {
    return (
        <header className="makeShadow px-10 pt-6 pb-4">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl text-[#3D3D3D] font-bold tracking-wide mob:text-xl">
                {recruiterJobPost.jobName}
              </h1>
              <span className="greyBullet"></span>
              <span>posted {recruiterJobPost.dayPosted} days ago</span>
              <span className="bg-[#ABEFC6] flex items-center gap-1 px-2 border rounded-2xl">
                <span className="greenBullet"></span>
                <span
                  className={` ${
                    recruiterJobPost.dayPosted === 5
                      ? "text-red-600"
                      : "text-[#067647]"
                  }`}
                >
                  {recruiterJobPost.dayPosted === 5 ? "Close" : "Open"}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-4 my-4">
              <img src={LocationSvg} alt="location" />
              <h2>{recruiterJobPost.recruiterLocation}</h2>
              <span className="greyBullet"></span>
              <img src={Money} alt="salary" />
              <h2>
                ${recruiterJobPost.jobSalary[0] ? recruiterJobPost?.jobSalary[0] : 0 }k - $
                {recruiterJobPost.jobSalary[1] ? recruiterJobPost.jobSalary[1] : 0}k
                
              </h2>
            </div>
          </header>
    )
}
export default JobHeader