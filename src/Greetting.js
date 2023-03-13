export function Greetting({name, amount, married, address, greet}) {
    return (
        <div>
            <h1>{name}</h1>
            <p>💵{amount}</p>
            <p>{married ? 'married' : 'single'}</p>
            <ul>
                <li>{address.street}</li>
                <li>{address.city}</li>
            </ul>
        </div>
    )
}

export function UserCard({title}){
    console.log(title)
    return <h1>{title}</h1>
}
