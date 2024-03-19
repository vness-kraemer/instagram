// Create array with JSON file
let posts = [
    {
        'author': 'Doglovers',
        'profileImage': 'img/profiles/dog.png',
        'img': 'img/postings/dogposting.jpg',
        'description': 'Chefarzt zeigt Gesicht von Baby',
        'location': 'Aachen',

    }
]

function show() {
    let post = document.getElementById('postings');
    post.innerHTML = ``;

    for(let i = 0; i < posts.length; i++) {
        // create a variable to display position 'i' 
        const element = posts[i];
        post.innerHTML += `
            <div class="posting-container-javascript">
            <hr class="divider">
            <div class="preview-container">
            <div class="profile-img">
              <img class="profile-picture story-picture" src="${element['profileImage']}"
              />
            </div>
            <div class="username">
              <div class="name">
                <h4>${element['author']}</h4>
                <p>${element['location']}</p>
              </div>
            </div>
          </div>
          <div class="posting-picture">
          <img src="${element['img']}">
          <div class="posting-bar">
            <div class="interactive-icons-container">
                <img id="likeImg" class="interactive-icons like-button" src="/img/icons/like.png">
                <img class="interactive-icons" src="/img/icons/comment.png">
                <img class="interactive-icons" src="/img/icons/direct-message.png">
            </div>
            <div class="save-container">
            <img class="interactive-icons" src="/img/icons/save.png">
            </div>
          </div>
          </div>
          <div class="like-text">
            <p id="counter">Gefällt 9.145 Mal</p>
          </div>
          <div class="name">
          <h4>${element['author']}</h4>
          </div>
          <div class="comment-section">
            <input class="input-field" type="text" placeholder="Kommentieren...">
            <input class="d-none" type="submit">
          </div>
          </div>
        `;
    }
}

function like() {
    const likeButton = document.getElementById('likeImg');
    const likeCounter = document.getElementById('counter');

    let likes = 0;

    likeButton.addEventListener("click", () => {
        likes++;

        likeCounter.innerHTML = likes;

        likeButton.classList.toggle("active");
    });
}

function redLikeButton() {
    let newLike = "/img/icons/reels.png"

    
}