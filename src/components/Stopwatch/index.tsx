import { useEffect, useState } from 'react';
import { timeToSeconds } from '../../common/utils/time';
import { ITask } from '../../types/tasks';
import Button from '../Button';
import Clock from './Clock';
import style from './Stopwatch.module.scss';

interface Props {
  selected: ITask | undefined;
  finishTask: () => void;
}

export default function Stopwatch({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) setTime(timeToSeconds(selected.time));
  }, [selected]);

  function countdown(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        return countdown(count - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Choose a card and start the timer!</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => countdown(time)}>Start</Button>
    </div>
  );
}
