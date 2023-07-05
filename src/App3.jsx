import { useEffect, useState } from "react"

function App3 () {
    const [name, setName] = useState('Some name')
    const [age, setAge] = useState(1)
    const [gender, setGender] = useState('male')
    
    const updateButton = () => {
        setName('New name')
    }

    return (
        <div>
            <button onClick={updateButton}>
                CLick me
            </button>
            {name} {age} {gender}
        </div>
    )
}

export default App3