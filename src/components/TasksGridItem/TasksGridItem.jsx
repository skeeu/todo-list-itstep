import TaskBox from '../TaskBox/TaskBox';
import './TasksGridItem.css'


function TasksGridItem({ name }) {
    return (
        <div className="tasks__grid__item">
            <div className='tasks__header'>
                {name}
            </div>

            <div
                style={{ 
                    marginTop: '6px',
                    display: 'flex', 
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
            >
                {[0, 1].map(el => {
                    return <TaskBox key={el} />
                })}
            </div>
        </div>
    )
}

export default TasksGridItem;