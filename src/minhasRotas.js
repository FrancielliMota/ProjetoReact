import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from "./Home";
import Atv01 from "./Atv01/Atv01";
import Atv02 from "./Atv02/Atv02";
import Atv03 from "./Atv03/Atv03";
import Atv04 from "./Atv04/Atv04";
import Atv05 from "./Atv05/Atv05";

export default function MinhasRotas() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}> </Route>
            <Route path="/Atv01" element={<Atv01 />}> </Route>
            <Route path="/Atv02" element={<Atv02 />}> </Route> 
            <Route path="/Atv03" element={<Atv03 />}> </Route> 
            <Route path="/Atv04" element={<Atv04 />}> </Route> 
            <Route path="/Atv05" element={<Atv05 />}> </Route> 

        </Routes>
        </BrowserRouter>
    );
}