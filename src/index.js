import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
/* import { Greetting, UserCard } from './Greetting';
import Product from './Product';
import {Button} from './Button';
import { TaskCard } from './Task';
import { Saludar } from './Saludar';
import { Posts } from './Posts'; */

const root = ReactDOM.createRoot(document.getElementById('root'))

/* function Counter() {
    const [counter, setCounter] = useState(10);
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>
                Sumar
            </button>
            <button onClick={() => {
                setCounter(counter - 1)
            }}>
                Restar
            </button>
            <button onClick={() => {
                setCounter(100)
            }}>
                Reiniciar
            </button>
        </div>
    )
} */

function Counter() {
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        console.log('render')
    }, [ ])

    return (
        <div>
            <input onChange={e => setMensaje(e.target.value)}/>
            <button onClick={() => {
                alert('El mensaje es: ' + mensaje)
            }}>
                Sumar
            </button>
        </div>
    )
}

/* const users = [
    {
        id: 1,
        name: 'Rigo Prenda',
       image: 'https://robohash.org/user1'
    },
    {
        id: 2,
        name: 'Rigo Saldo',
        image: 'https://robohash.org/user2'
    }
] */

root.render(
    <>
        <Counter/>
        {/* {users.map((user, i) =>{
            return (
                <div key= {i}>
                    <h1>{user.name}</h1>
                    <img src={user.image}/>
                </div>
            )
        })}
        <TaskCard/>
        <Button text='Click Me'/>
        <Button text='Pay'/>
        <Button text='Go To' name='Joe'/>
        <Greetting 
        name='Mauricio Cayasso' 
        amount={5000} 
        married={true} 
        points={[99, 20,2, 33.5]} 
        address={{street: '123 MainStreet', city: 'New York'}}
        greet={function() {alert('Hello')}}
        />
        <Saludar/>
        <Posts/> */}
    </>
)
