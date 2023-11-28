import user from './Task_1/user.json';
import data from './Task_2/data.json';
import friends from './Task_3/friends.json';
import transactions from './Task_4/transactions.json';
import { Profile } from './Task_1/Profile';
import { Stats } from './Task_2/Stats';
import { FriendList } from './Task_3/FriendList';
import { TransactionHistory } from './Task_4/TransactionHistory';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Stats data={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />;
    </div>
  );
};
