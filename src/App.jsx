import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Bell from '/public/icons/bell.svg'
import Travel from '/public/icons/travel.svg'
import MessagesSvg from "../public/icons/messages.svg";
import PaymentSvg from '../public/icons/payments.svg'
import Chevron from '../public/icons/chevron.svg'
import Jobs from "./views/Jobs";
import Messages from "./views/Messages";
import Payments from "./views/Payments";
const App = () => {
  return (
    <Router>
      <nav className="makeShadow flex justify-between items-center px-8 py-4">
        <div className="bg-[#E7E7E7] flex justify-center text-[#DC4A2D] px-4 py-2 ">Logo</div>
        <div className="flex items-center gap-4 rounded-3xl border p-3">
            <NavLink to={`/`} className={`flex gap-2`}>
            <img src={Travel} alt="jobs" />
            Jobs
            </NavLink>
          <NavLink to={`/messages`} className={`flex gap-2`}>
          <span className="relative">
          <span className="orangeBullet"></span>
          <img src={MessagesSvg} alt="messages" />
          </span>
          Messages
          </NavLink>
          
          <NavLink to={`/payments`} className={`flex gap-2`}>
          <img src={PaymentSvg} alt="payments" />
          Payments
          </NavLink>
        </div>
        <div className="flex items-center">
          <span className="relative mx-3">
            <span className="orangeBullet"></span>
          <img src={Bell} alt="notification" className="" />
          </span>
        <img src="/public/imgs/Logo.png" alt="logo" className="w-[1.7rem] h-auto mb-1" />
        <img src={Chevron} className=" cursor-pointer mb-1"/>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </Router>
  );
};

export default App;
