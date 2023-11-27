import css from './StatsContainer.module.css';
export const StatsContainer = ({ children }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>
      <ul className={css.statList}>{children}</ul>
    </section>
  );
};
