import Container from '../Container/Container';
import './TaskInput.css'
import { IoIosAdd } from 'react-icons/io'
import { useState } from 'react';


function TaskInput() {
    const [inputValue, setInputValue] = useState('')

    const inputChangeHandler = e => {
        setInputValue(e.target.value)
    }

    const handleClick = () => {
        console.log('Вы нажали на кнопку!')
    }

    return (
        <Container>
            <div style={{
                marginBottom: '12px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '30px'
            }}>
                <input
                    type='text'
                    value={inputValue}
                    onChange={inputChangeHandler}
                    placeholder="Введите задачу"
                    className='task__input'
                />
                <button
                    className='input__add_button'
                    onClick={handleClick}
                >
                    <IoIosAdd />
                </button>
            </div>
        </Container>
    )
}

export default TaskInput;