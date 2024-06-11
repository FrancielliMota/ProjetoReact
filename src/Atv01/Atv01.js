import DateTimePicker from "./DateTimePicker";
import TypingSign from "./TypingSign";
import Header from '../Header';
import Footer from '../Footer';
import '../style.css';

export default function Atv01() {
    return (

        
        <>
           
            <Header />
        
            <h1 className="h1Dif">Atividade 01</h1>

            <main>
            <DateTimePicker />
            <h1><TypingSign /></h1>
            </main>
            <br />
            
            <Footer />
        
        </>
    );
}