import css from './FriendList.module.css';

export const FriendList = ({ children }) => {
  return <ul className={css.friendList}>{children}</ul>;
};
