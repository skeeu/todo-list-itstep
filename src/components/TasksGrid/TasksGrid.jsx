import { TaskType } from "../../types/TaskType";
import Container from "../Container/Container";
import TasksGridItem from "../TasksGridItem/TasksGridItem";
import styles from './TasksGrid.module.css'

const listsTypes = [
    {name: 'Tasks to do', type: TaskType['TODO']},
    {name: 'Tasks in progress', type: TaskType['PROGRESS']},
    {name: 'Completed tasks', type: TaskType['FINISHED']}
]

function TasksGrid({ tasks }) {
    return (
        <Container>
            <div className={styles.tasks__container}>
                {listsTypes.map(el => {
                    return (
                        <TasksGridItem 
                            key={el.name} 
                            tasks={tasks}
                            name={el.name}
                            type={el.type}
                        />
                    )
                })}
            </div>
        </Container>
    )
}

export default TasksGrid;