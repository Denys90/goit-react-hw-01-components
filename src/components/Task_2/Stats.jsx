import css from './Stats.module.css';
import data from '../../Data/data.json';

export const Stats = () => {
  const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };
  return data.map(data => (
    <li
      className={css.item}
      key={data.id}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className={css.label}>{data.label}</span>
      <span className={css.percentage}>{data.percentage}%</span>
    </li>
  ));
};
