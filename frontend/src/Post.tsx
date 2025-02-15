export interface IPost {
  nickname: string;
  title: string;
  decription: string;
}

export const Post = ({ nickname, title, decription }: IPost) => {
  return (
    <div>
      <p>{nickname}</p>
      <h3>{title}</h3>
      <p>{decription}</p>
    </div>
  );
};
