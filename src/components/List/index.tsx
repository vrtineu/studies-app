import Item from './Item';
import { ITask } from '../../types/tasks';
import style from './List.module.scss';

interface Props {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style['task-list']}>
      {tasks.length > 0 && <h2>Studies of the day</h2>}
      <ul>
        {tasks.map((item) => (
          <Item key={item.id} {...item} selectTask={selectTask} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
