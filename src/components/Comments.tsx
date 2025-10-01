import { useState } from "react";

const COMMENTS = [
  {
    id: 1,
    email: "test1@example.com",
    content: "첫 번째 댓글이에요.",
    createdAt: "2025-10-01",
  },
  {
    id: 2,
    email: "user2@mail.com",
    content: "좋은 정보 감사합니다!",
    createdAt: "2025-10-02",
  },
  {
    id: 3,
    email: "third.user@web.net",
    content: "정말 유용하네요 3",
    createdAt: "2025-10-03",
  },
  {
    id: 4,
    email: "data4@test.co.kr",
    content: "네 번째 의견 남깁니다.",
    createdAt: "2025-10-04",
  },
  {
    id: 5,
    email: "commenter5@test.com",
    content: "다섯 번째 댓글입니다. 👍",
    createdAt: "2025-10-05",
  },
  {
    id: 6,
    email: "six_user@email.com",
    content: "이거 정말 최고네요.",
    createdAt: "2025-10-06",
  },
  {
    id: 7,
    email: "seven@site.net",
    content: "궁금했던 내용이에요.",
    createdAt: "2025-10-07",
  },
  {
    id: 8,
    email: "eight_tester@data.kr",
    content: "여덟 번째 코멘트.",
    createdAt: "2025-10-08",
  },
  {
    id: 9,
    email: "nine_comment@example.net",
    content: "아홉 번째 사용자 의견입니다.",
    createdAt: "2025-10-09",
  },
  {
    id: 10,
    email: "final.user@last.com",
    content: "마지막 열 번째 댓글입니다!",
    createdAt: "2025-10-10",
  },
];

export default function Comments() {
  const [comment, setComment] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "comment") {
      setComment(value);
    }
  };
  return (
    <div className='comments'>
      <form className='comments__form'>
        <div className='form__block'>
          <label htmlFor='comment'>댓글 입력</label>
          <textarea name='comment' id='comment' required value={comment} onChange={onChange} />
        </div>

        <div className='form__block form__block-reverse'>
          <input type='submit' value='입력' className='form__btn-submit' />
        </div>
      </form>

      <div className='comments__list'>
        {COMMENTS?.map((comment) => (
          <div key={comment.id} className='comment_box'>
            <div className='comment__profile-box'>
              <div className='comment__email'>{comment?.email}</div>
              <div className='comment__date'>{comment?.createdAt}</div>
              <div className='comment__delete'>삭제</div>
            </div>
            <div className='comment__text'>{comment?.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
