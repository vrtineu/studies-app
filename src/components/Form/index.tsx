import { useState } from 'react';
import { ITask } from '../../types/tasks';
import Button from '../Button';
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function Form({ setTasks }: Props) {
  const [task, setTask] = useState('');
  const [time, setTime] = useState('00:00');

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      { task, time, selected: false, completed: false, id: uuidv4() },
    ]);
    setTask('');
    setTime('00:00');
  }

  return (
    <form className={style['new-task']} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor='task'>Add a new study:</label>
        <input
          value={task}
          onChange={(event) => setTask(event.target.value)}
          type='text'
          name='task'
          id='task'
          placeholder='What do you want to study?'
          autoComplete={'off'}
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor='time'>Time:</label>
        <input
          value={time}
          onChange={(event) => setTime(event.target.value)}
          type='time'
          step='1'
          name='time'
          id='time'
          min='00:00:00'
          max='01:30:00'
          required
        />
      </div>
      <Button type='submit'>Add</Button>
    </form>
  );
}

export default Form;
