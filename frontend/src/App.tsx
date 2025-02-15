import { IPost, Post } from './Post';

const Posts: IPost[] = [
  {
    nickname: 'allwkadis',
    title: 'OLED MONITOR',
    decription: 'oled dusplay nice!)))',
  },
  {
    nickname: 'lox',
    title: 'CYBERSPORT IN DOTA 2 IS DEAD',
    decription: 'SO BADD((',
  },
];

function App() {
  return (
    <div>
      {Posts.map((post) => (
        <Post key={post.title} title={post.title} decription={post.decription} nickname={post.nickname} />
      ))}
    </div>
  );
}

export default App;
