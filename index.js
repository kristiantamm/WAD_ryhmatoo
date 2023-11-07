
let url = "https://api.npoint.io/c8ef7e88fedaefe958f4"





async function getPosts() {
    let posts
    const res = await fetch(url)
    posts = await res.json()
    return posts
}

async function init() {
    const wrapper = document.getElementById("posts")
    const posts = await getPosts();
    let numPosts = Object.keys(posts).length;
    for (let i = 0; i < numPosts; i++) {
        let post = posts[Object.keys(posts)[i]]
        let div = document.createElement("div")
        div.className = "post";
        let postHeader = document.createElement("div")
        postHeader.className = "postHeader"
        let postProfile = document.createElement("img")
        postProfile.className = "postProfile"
        postProfile.src = post["profilePic"]
        let postDate = document.createElement("p")
        postDate.className = "postDate"
        postDate.innerText = post["date"]
        let postPic = document.createElement("img")
        postPic.className = "postPic"
        postPic.src = post["postPic"]
        let postText = document.createElement("p")
        postText.className = "postText"
        postText.innerText = post["postText"]
        let likeBtn = document.createElement("img")
        likeBtn.className = "likeButton"
        likeBtn.src = "thumb.png"
        
        div.appendChild(postHeader)
        postHeader.appendChild(postProfile)
        postHeader.appendChild(postDate)
        if (post["postPic"] != "") {
            div.appendChild(postPic)
        }
        div.appendChild(postText)
        div.appendChild(likeBtn)
        wrapper.appendChild(div)

        const profile = document.getElementById("profile")
        profile.addEventListener("click", showDropDown);
    }
}

window.onload = init;

function showDropDown() {
    const dropdownContent = document.getElementById("dropdown-content");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}





