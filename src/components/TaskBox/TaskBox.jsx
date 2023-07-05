import styles from './TaskBox.module.css'
import { HiArrowSmRight } from 'react-icons/hi'

function TaskBox ({ value }) {
    return (
        <div className={styles.task__box}>
            <div>
                {value}
            </div>
            <button
                className={styles.input__add_button}
            >
                <HiArrowSmRight />
            </button>
        </div>
    )
}

export default TaskBox;