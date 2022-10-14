import DayList from "./component/DayList";
import Header from "./component/Haeder";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Day from "./component/Day";
import EmptyPage from "./component/EmptyPage";

export default function VocaApp(){
    return (
        <BrowserRouter>
        <div className="VocaApp">
            <Header />
            <Routes>
            <Route path="/" element={<DayList />}></Route>
            <Route path="/day/:day" element={ <Day />}></Route>
            <Route path="/*" element={ <EmptyPage />}></Route>
            </Routes>
        </div>
        </BrowserRouter>
    );
}