import Avatar from "./Avatar";

function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export default function Profile() {
    return (
        <Card>
            <Avatar
                size={100}
                person={{ 
                    name: 'Fran', 
                    imageId: 'YfeOqp2' 
                }}
            />
        </Card>
    );
}