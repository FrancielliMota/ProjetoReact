import FormQuiz from "./FormQuiz";
import FormTicket from "./FormTicket";
import Accordion from "./Accordion";
import Messenger from "./Messenger";
import { Link } from 'react-router-dom';

export default function Atv05() {
    return (
        <>
            <Link to="/">Home</Link>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>FormQuiz component</h2>
                <FormQuiz />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>FormTicket component</h2>
                <FormTicket />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>Accordion component</h2>
                <Accordion />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>Messenger component</h2>
                <Messenger />
            </div>
        </>
    );
}
