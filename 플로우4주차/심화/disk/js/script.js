const musicListData = [
  {
    src: "./assets/img/iu_0.jpg",
    color: ["#0272a4", "#f6a564"],
  },
  {
    src: "./assets/img/iu_1.jpg",
    color: ["#b6bfc8", "#36595b"],
  },
  {
    src: "./assets/img/iu_2.jpg",
    color: ["#e58e82", "#6f569f"],
  },
];

const imgUl = document.querySelector("ul");
const diskInner = document.querySelector(".disk_inner")
const main = document.querySelector("main");
const playBtnGroup = document.querySelectorAll(".play_btn_group button");
const listBtnGroup = document.querySelectorAll(".list_btn_group button");
const disk = document.querySelector(".disk");
const cover = document.querySelector(".filter");
let musicSelect;
let selectId;
let selectMusicColor;
//
const renderAlbumImg = (list) => {
  let img = document.createElement("img");
  let musicId = imgUl.children.length;
  img.setAttribute("src", list.src);
  img.setAttribute("musicId", musicId);
  imgUl.append(img);

  img.addEventListener("click", () => {
    if (musicSelect) {
      musicSelect.classList.remove("musicSelect");
    }
    img.classList.add("musicSelect");
    musicSelect = img;
    selectId = musicSelect.getAttribute("musicId");
    selectMusicColor = musicListData[parseInt(selectId)].color;
    main.style.background = `linear-gradient(120deg, ${selectMusicColor[0]}, ${selectMusicColor[1]})`;
    diskInner.style.backgroundColor = `${selectMusicColor[0]}`
  });
};

listBtnGroup[1].addEventListener("click", () => {
  nextMusicId = (parseInt(selectId) + 1) % imgUl.children.length;
  const nextImage = imgUl.querySelector(`[musicId="${nextMusicId}"]`);

  if (musicSelect) {
    musicSelect.classList.remove("musicSelect");
  }
  nextImage.classList.add("musicSelect");
  musicSelect = nextImage;
  selectId = nextMusicId;
  selectMusicColor = musicListData[parseInt(nextMusicId)].color;
  main.style.background = `linear-gradient(120deg, ${selectMusicColor[0]}, ${selectMusicColor[1]})`;
  diskInner.style.backgroundColor = `${selectMusicColor[0]}`
});

// stop버튼을 누르지 않으면 opacity때문에 나타나는 효과가 안보이는데 어떻게 해결해야할지 모르겠다,,,,,호흡곤란온다,,
playBtnGroup[0].addEventListener("click", () => {
  if (musicSelect) {
    disk.style.animation = "rotateAni 2s linear infinite";
    // style="background: url('./assets/img/iu_0.jpg') no-repeat center;"
    cover.style.background = `url(${musicSelect.src}) no-repeat center`;
    cover.style.backgroundSize = "cover";
    cover.style.filter = `blur(8px)`;
    cover.style.animation = "upToDown 1s ease";
    cover.style.opacity = "1";
  } else {
    alert("선택된 음악이 없습니다");
  }
});

playBtnGroup[1].addEventListener("click", () => {
  disk.style.animationPlayState = "paused";
  cover.style.animation = "downToUp 1s ease";
  cover.style.opacity = "0";
});

for (list of musicListData) {
  renderAlbumImg({
    ...list,
  });
}
/*

문제1.
    디스크 문제 구현하기. 필요한 html, css, animation은 모두 구현하였으나
    혹 본인 재량하에 추가하고 싶은 css와 animation이 있으면 추가해두시면 됩니다.

    요구사항
    
        (1) 구현영상을 참고하여 구현영상과 같은 효과를 진행해보세요 
        (2) play 버튼 클릭시에는 해당 이미지에 맞는 이미지가 배경화면으로 보이고 disk가 회전되어야합니다 o
        (3) stop 버튼을 누르면 배경화면이 사라지고 disk는 멈추어야합니다. o
        (4) 앨범은 총 3개가 있으며 만약 진행 중 다른 앨범을 선택하고 play를 누르면 다른 앨범이 play 되어야합니다. o
        (5) 앨범 리스트는 (next, prev) 버튼으로도 움직일 수 있으며 클릭으로도 원하는 앨범으로 이동할 수 있습니다. o
        (6) 현재 선택된 앨범은 focus되어 크기가 커지는 효과를 추가해야합니다. o
        (7) 저작권 상 음악은 넣지 못했지만 만약 넣고 싶다면 본인이 다운로드 하여 audio 태그를 활용하여 실행할 수 있습니다.
        (8) 이 외 다른 구현 사항은 영상을 참고하여 만들어보세요 :)

    주의사항

        단, 아래의 조건만 채운다면 반드시 똑같이 만들 필요는 없습니다.
        즉 애니메이션과 css를 구현 영상과 똑같이 하실 필요는 없으며, 이를 위해 html이나 css를 따로 건드셔도 괜찮습니다.
        해당 html과 css, animation은 제가 빠른 시일 내에 급히 작성한 것이기 때문에 이해가 조금 어려울 수 있습니다

        (1) 각 노래에 맞는 앨범 자켓 이미지로 배경이 바뀌어야함 
        (2) 각 노래에 맞는 색상으로 disk_inner와 stop 상태의 배경이 바뀌어야함
        (3) start 시에는 disk가 돌아가고 stop 시에는 disk가 멈춰야함
        (4) 선택된 앨범에는 하이라이트 호과가 있어야하며 클릭 및 버튼을 통해 선택이 가능함
*/
