/* eslint-disable react/prop-types */
const CompanyData = ({ companyData }) => {
    return(
        <section className="makeShadow px-10 py-5">
            <div className="flex items-center gap-3 my-2">
                <img src={companyData.companyLogo} alt={`${companyData.companyName} Logo`} />
                <h1 className="textSeen text-lg">{companyData.companyName}</h1>
            </div>
            <section className="grid grid-cols-2 my-4 mob:gap-16">
            <div>
                <div className="my-3">
                    <h2>Company Size</h2>
                    <p className="textSeen">{companyData.companySize[0]}k {companyData.companySize[1] ? ` - ${companyData.companySize[1]}k` : null} Employees</p>
                </div>
                <div className="my-3">
                <h2>Sector</h2>
                    <div className="flex gap-1 text-nowrap mob:flex-col mob:gap-0">
                        {companyData.companySector.map((sec , index) => (
                        <span key={index} className="textSeen">{sec}{companyData.companySector.length !== index + 1 ? `,` : null}</span>
                    ))}
                    </div>
                
                </div>
                <div className="my-3">
                    <h2>Founded In</h2>
                    <p className="textSeen">{companyData.companyFoundedIn}</p>
                </div>
            </div>
            <div>
                <div className="my-3">
                    <h2>Type</h2>
                    <p className="textSeen">{companyData.companyType}</p>
                </div>
                <div className="my-3">
                    <h2>Funding</h2>
                    <p className="textSeen">{companyData.companyFunding}</p>
                </div>
                <div className="my-3">
                    <h2>Founded By</h2>
                    <div className="flex gap-1 text-nowrap mob:flex-col mob:gap-0">
                    {
                        companyData.companyFoundedBy?.map((founder , index) => (
                            <a href={`https://www.google.com/search?q=${founder}`} target="_blank" key={index} className="textSeen">{founder}{companyData.companyFoundedBy.length !== index + 1 ? `,` : null}</a>
                        ))
                    }
                    </div>
                </div>
            </div>
            </section>
        </section>
    )
}
export default CompanyData