import { Link } from "react-router-dom";

export default function PostDetail() {
  return (
    <>
      <div className='post__detail'>
        <div className='post__box'>
          <div className='post__title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
          <div className='post__profile-box'>
            <div className='post__profile'></div>
            <div className='post__author-name'>성진</div>
            <div className='post__date'>2025.09.23 화요일</div>
          </div>
          <div className='post__utils-box'>
            <div className='post__delete'>삭제</div>
            <div className='post__edit'>
              <Link to={`/posts/edit/1`}>수정</Link>
            </div>
          </div>
          <div className='post__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, reiciendis exercitationem, inventore
            necessitatibus repellat natus nobis quos ratione sit voluptatibus expedita! Atque esse dignissimos incidunt
            asperiores aliquid accusantium quia repellat?
          </div>
        </div>
      </div>
    </>
  );
}
