import { VscBug } from "react-icons/vsc";

export const Posts = () => {
    return <button onClick={() => {
        fetch('https://jsonplaceholder.typicode.com/')
        .then(response => response.json)
        .then(data  => console.log(data))
    }}>
        <VscBug/>
        Traer Tarea
    </button>
}