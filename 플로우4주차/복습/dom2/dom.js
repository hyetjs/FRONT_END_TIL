import mockPost from "./mock.json" assert { type: "json" };
console.log(mockPost);

const $postDetail = document.querySelector("#post-detail");
const $repliesList = document.querySelector("#replies-list");
const $button = document.querySelector("button");
const $input = document.querySelector("input");

const postTitle = document.createElement("h3");
postTitle.textContent = mockPost.post.title;

const postContent = document.createElement("p");
postContent.textContent = mockPost.post.content;

const postWriter = document.createElement("span");
postWriter.textContent = mockPost.post.User.nickName;

$postDetail.appendChild(postTitle);
$postDetail.appendChild(postContent);
$postDetail.appendChild(postWriter);

const renderReply = (replies) => {
  const replyUser = document.createElement("li");
  replyUser.textContent = replies.User.nickName;

  const replyContent = document.createElement("p");
  replyContent.textContent = replies.content;

  $repliesList.appendChild(replyUser);
  replyUser.appendChild(replyContent);
};

for (let post of mockPost.post.Replies) {
  renderReply({
    ...post,
  });
}

$button.addEventListener("click", () => {
  if (!$input.value.trim()) {
    return alert("내용을 입력해주세요");
  }
  const newReply = {
    User: { nickName: "비회원" },
    content: $input.value,
  };
  mockPost.post.Replies.push(newReply);
  renderReply(newReply);
  $input.value = "";
});

/* 
    import(참조)한 json data를
    게시글 상세와 댓글창에 나타내고 게시글 객체의 상세 내용은 console.log로 출력해두었습니다

    댓글 추가 버튼을 누르면 댓글이 추가되도록 해보세요 :)

    삭제 및 수정기능은 본인의 자유로 구현하시면 됩니다 :)
*/
