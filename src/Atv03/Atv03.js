import Gallery from "./Gallery";
import List from "./List";
import PackingList from "./PackingList";
import Profile from "./Profile";
import TeaGathering from "./TeaGathering";
import TeaSet from "./TeaSet";
import TodoList from "./TodoList";
import { Link } from 'react-router-dom';


export default function atv03() {
    return (
        <>
            <Link to="/">Home</Link>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>Gallery component</h2>
                <Gallery />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>List component</h2>
                <List />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>PackingList component</h2>
                <PackingList />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>Profile component</h2>
                <Profile />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>TeaGathering component</h2>
                <TeaGathering />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>TeaSet component</h2>
                <TeaSet />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>TodoList component</h2>
                <TodoList />
            </div>
        </>
        
    );
}