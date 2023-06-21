const users = [
    {
        name: "Kaleem",
        email: "kaleem@gmail.com",
    },
    {
        name: "Kavya",
        email: "kavya@gmail.com",
    },
    {
        name: "Noushi",
        email: "noushi@gmail.com",
    },
];


function UserCard(props) {
    const userCardsContainer = document.getElementById("user-cards-container");
    let div = document.createElement("div");
    let para1 = document.createElement("p");
    let para2 = document.createElement("p");

    div.className = "user-card";

    para1.innerText = props.name;
    para2.innerText = props.email;

    div.appendChild(para1);
    div.appendChild(para2);

    userCardsContainer.appendChild(div);
}

{/* 
definition
function UserCard(props){
    return (
        <div className="user-card">
            <p>{props.name}</p>
            <p>{props.email}</p>
        </div> 
    );
}

Invoking
    <UserCard name={users[0].name} email={users[0].email} />

*/}

for(let i=0; i<users.length; i++){
    UserCard(users[i]);
}