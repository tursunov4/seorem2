import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import log from '../../Assets/Images/log.svg'
function Header() {
  const {bar} = useContext(Context)
  return <div className="w-[100%] mb-5 py-[18px] px-5 bg-slate-100">
       <div className="flex justify-between">
        <h2 className="text-[22px] font-bold  text-slate-800">{bar}</h2>
        <img className="rounded-full" src={log} alt="dff" width={40} height={40} />
       </div>
  </div>;
}

export default Header;
