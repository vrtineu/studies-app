import style from './Clock.module.scss';

interface Props {
  time: number | undefined;
}

export default function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [tensMinute, onesMinute] = String(minutes).padStart(2, '0');
  const [tensSeconds, onesSeconds] = String(seconds).padStart(2, '0');

  return (
    <>
      <span className={style.clockNumber}>{tensMinute}</span>
      <span className={style.clockNumber}>{onesMinute}</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNumber}>{tensSeconds}</span>
      <span className={style.clockNumber}>{onesSeconds}</span>
    </>
  );
}
