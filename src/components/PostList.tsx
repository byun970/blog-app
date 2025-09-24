import { Link } from "react-router-dom";

interface PostListProps {
  hasNavigation?: boolean;
}

export default function PostList({ hasNavigation = true }: PostListProps) {
  return (
    <>
      {hasNavigation && (
        <div className='post__navigation'>
          <div className='post__navigation-active'>전체</div>
          <div>나의 글</div>
        </div>
      )}

      <div className='post__list'>
        {[...Array(10)].map((e, index) => (
          <div key={index} className='post__box'>
            <Link to={`/posts/${index}`}>
              <div className='post__profile-box'>
                <div className='post__profile'></div>
                <div className='post__author-name'>성진</div>
                <div className='post__date'>2025.09.23 화요일</div>
              </div>
              <div className='post__title'>게시글 {index}</div>
              <div className='post__text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, reiciendis exercitationem, inventore
                necessitatibus repellat natus nobis quos ratione sit voluptatibus expedita! Atque esse dignissimos
                incidunt asperiores aliquid accusantium quia repellat?
              </div>
              <div className='post__utils-box'>
                <div className='post__delete'>삭제</div>
                <div className='post__edit'>수정</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
