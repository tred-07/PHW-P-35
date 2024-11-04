console.log("video.js added");

let showVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => videos(data))
    .catch((er) => console.log("Error"));
};

let videos = (data) => {
  console.log(data);
  for (let it of data.videos) {
    console.log(`thumbnail: ${it.thumbnail}`);
    console.log(`profile_name: ${it.authors[0].profile_name}`);
    console.log(`profile_picture: ${it.authors[0].profile_picture}`);
    console.log(`title: ${it.title}`);
    console.log(`views: ${it.others.views}`);
    console.log(it);
    let div = document.createElement("div");
    div.innerHTML = `
        <div>
                <div id="thumbnailDiv"><img src="${it.thumbnail}" alt=""></div>
                <div id="titleDiv"><img src="${it.authors[0].profile_picture}" alt=""><p id="title">${it.title}</p></div>
                <div id="authorsDiv"><p id="authors">${it.authors[0].profile_name}</p></div>
                <div id="viewsDiv"><p id="views">${it.others.views}</p></div>
            </div>
        `;
    document.getElementById("videos").appendChild(div);
  }
};

showVideos();

/*

*/
