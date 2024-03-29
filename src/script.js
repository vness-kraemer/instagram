// Create array with JSON file
let posts = [
    {
        'author': 'Doglovers',
        'profileImage': 'img/profiles/dog.png',
        'img': 'img/postings/dogposting.jpg', 
        'description': 'Chefarzt zeigt Gesicht von Baby',
        'location': 'Aachen', 
        'comments': []

    },

    {
      'author': 'Peter Pettigrew',
      'profileImage': 'img/profiles/man-2.png',
      'img': 'img/postings/posting2.jpg', 
      'description': 'Frohe Ostern!',
      'location': 'Hogwarts', 
      'comments': []

  }
]

let likes = 84;

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
                <img onclick="like(${i});" id="likeImg" class="interactive-icons like-button" src="/img/icons/heart-line.svg">
                <img onclick="deleteLike(${i})" id="filledImg" class="interactive-icons like-button d-none" src="/img/icons/heart-red-fill.svg">
                <img class="interactive-icons" src="/img/icons/comment.png">
                <img class="interactive-icons" src="/img/icons/direct-message.png">
            </div>
            <div class="save-container">
            <img class="interactive-icons" src="/img/icons/save.png">
            </div>
          </div>
          </div>
          <div class="like-text">
            <p">Gefällt <span id="likeCount">84</span> Mal</p>
          </div>
          <div class="name">
          <h4>${element['author']}</h4>
          </div>
          <div class="comment-section">
            <input id="inputField" class="input-field" type="text" placeholder="Kommentieren...">
            <input onclick="addComment()" type="submit">
          </div>
          <div class="comments">${element.comments[i]}</div>
          </div>
        `;
    }
}

function like() {
    const likeButton = document.getElementById('likeImg');
    const filledButton = document.getElementById('filledImg');
    const likeCounter = document.getElementById('likeCount');

   likes++;
   likeCounter.innerHTML = likes;

   likeButton.classList.add('d-none');
   filledButton.classList.remove('d-none');
    
}

function deleteLike() {
  const likeButton = document.getElementById('likeImg');
  const filledButton = document.getElementById('filledImg');
  const likeCounter = document.getElementById('likeCount');

 likes--;
 likeCounter.innerHTML = likes;

 likeButton.classList.remove('d-none');
 filledButton.classList.add('d-none');
  
}


function addComment() {
    let commentInput = document.getElementById('inputField');
    // let commentText = commentInput.value.trim();

   posts[0]['comments'].push(commentInput.value);

   save();
   show();

}

function save() {
  let postsAsText = JSON.stringify(posts['comments']);
  localStorage.setItem('posts', postsAsText);
}
