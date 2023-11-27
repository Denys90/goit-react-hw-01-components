import friends from '../../Data/friends.json';
import css from './FriendListItem.module.css';

export const FriendListItem = () => {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <li className={css.item} key={id}>
      <span
        className={`${css.status} ${isOnline ? css.isOnline : css.isOffline}`}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  ));
};
