import Delete from '/public/icons/delete.svg'
import Edit from '/public/icons/edit.svg'
import Applicants from '/public/icons/applicants.svg'
import Matches from '/public/icons/matches.svg'
import Messages from '/public/icons/messages.svg'
import Views from '/public/icons/views.svg'
const SideBar = () => {
    const sideBarData = [
        {
            icon : Applicants,
            title : 'Applicants',
            count : 400
        },
        {
            icon : Matches,
            title : 'Matches',
            count : 100
        },
        {
            icon : Messages,
            title : 'Messages',
            count : 147
        },
        {
            icon : Views,
            title : 'Views',
            count : 800
        },

]
    return (
    <aside className="w-1/4 p-4 mob:px-3">
        <div className="flex gap-3 items-center mob:flex-col">
        <button type="button" className='flex justify-center items-center gap-1 px-5 py-1 mob:px-2 deleteBtn'>
        <img src={Delete} alt="delete job" />
       <span> Delete job</span>
        </button>
        <button type='button' className='flex justify-center items-center gap-1 px-5 py-1 mob:px-2 editBtn'>
        <img src={Edit} alt="edit job" />
        <span>Edit job</span>
        </button>
        </div>
        <div className='my-8 text-[#3D3D3D]'>
            {
                sideBarData.map((data , index) =>  (
                    <div key={index} className='flex py-4 items-center justify-between mob:flex-col mob:items-start mob:gap-2 makeShadow'>
                        <div className='flex items-center gap-1'>
                    <img src={data.icon} alt={`${data.title} Icon`} />
                    <span>{data.title}</span>
                </div>
                <h2 className='font-bold text-lg'>{data.count}</h2>
                    </div>
                ))
            }
        </div>
    </aside>
    )
}
export default SideBar