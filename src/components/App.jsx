import user from '../Data/user.json';
import data from '../Data/data.json';
import friends from '../Data/friends.json';
import transactions from '../Data/transactions.json';
import { Profile } from './Task_1/Profile';
import { Stats } from './Task_2/Stats';
import { StatsContainer } from './Task_2/StatsContainer';
import { FriendList } from './Task_3/FriendList';
import { FriendListItem } from './Task_3/FriendListItem';
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
      <StatsContainer>
        <Stats stats={data} />
      </StatsContainer>
      <FriendList>
        <FriendListItem
          avatar={friends.avatar}
          name={friends.name}
          isOnLine={friends.isOnLine}
          key={friends.id}
        />
      </FriendList>
      <TransactionHistory items={transactions} />;
    </div>
  );
};
