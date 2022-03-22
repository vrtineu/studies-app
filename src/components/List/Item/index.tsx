import { ITask } from '../../../types/tasks';
import style from './Item.module.scss';

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

export default function Item({
  task,
  time,
  selected,
  completed,
  id,
  selectTask,
}: Props) {
  const itemClass = `${style.item} ${selected ? style['selected-item'] : ''} ${
    completed ? style['completed-item'] : ''
  }`;

  return (
    <li
      className={itemClass}
      onClick={() =>
        !completed && selectTask({ task, time, selected, completed, id })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && (
        <span className={style.completed} aria-label='task completed'></span>
      )}
    </li>
  );
}
