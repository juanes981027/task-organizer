import '../App.css';
import { NavLink } from 'react-router-dom';
import {VscPass} from "react-icons/vsc";
import {MdPendingActions} from "react-icons/md";
import {GiNotebook} from "react-icons/gi";


const AsideOptions = ({tasks}) => {

    

    return<>
    <div className="aside-content">
    <h1 className='mt-4'>Menu</h1>
    <ul>
        <li>
            <NavLink to='/all-tasks'> <GiNotebook/>Todas</NavLink>
            <p>{tasks.length}</p>
        </li>
        <li>
            <NavLink to='/pending-tasks'> <MdPendingActions/>Pendientes</NavLink>
            <p>{tasks.filter((item)=>item.status === false) .length}</p>       
        </li>
        <li>
            <NavLink to='/done-tasks'><VscPass/>Hechas</NavLink>
            <p>{tasks.filter((item)=>item.status === true) .length}</p>
        </li>
    </ul>

    </div>
    </>
}
export default AsideOptions