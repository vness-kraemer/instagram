// JSON file with arrays of user information, postings for instaclone and 
// comments and likes

let posts = [
    {
        'author': 'Doglovers',
        'profileImage': 'img/profiles/dog.png',
        'img': 'img/postings/dogposting.jpg', 
        'description': 'Chefarzt zeigt Gesicht von Baby',
        'location': 'Aachen', 
        'comments': [],
        'likes': 24

    },

    {
      'author': 'Peter Pettigrew',
      'profileImage': 'img/profiles/man-2.png',
      'img': 'img/postings/posting2.jpg', 
      'description': 'Frohe Ostern!',
      'location': 'Hogwarts', 
      'comments': [],
      'likes': 89 

  },

  {
    'author': 'James Bond',
    'profileImage': 'img/profiles/man-3.png',
    'img': 'img/postings/posting3.jpg', 
    'description': 'Trip nach Berlin!',
    'location': 'Berlin', 
    'comments': [],
    'likes': 1005 

}

]



// The function `show` displays a list of posts on instaclone "InstaVista"

function show() {
    load();
    let post = document.getElementById('postings');
    post.innerHTML = ``;
    
    for(let i = 0; i < posts.length; i++) {
        // Create a variable to display position 'i' 
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
              <img onclick="toggleLike(${i});" id="likeImg-${i}" class="interactive-icons like-button ${element.liked ? 'd-none' : ''}" src="./img/icons/heart-line.svg">
              <img onclick="toggleLike(${i});" id="filledImg-${i}" class="interactive-icons like-button ${element.liked ? '' : 'd-none'}" src="./img/icons/heart-red-fill.svg">
              <img class="interactive-icons" src="./img/icons/comment.png">
              <img class="interactive-icons" src="./img/icons/direct-message.png">
          </div>
          <div class="save-container">
          <img class="interactive-icons" src="./img/icons/save.png">
          </div>
        </div>
        </div>
          <div class="like-text">
          <p id="likeCount-${i}">Gefällt ${posts[i].likes} Mal</p></div>
          <div class="name">
          <h4>${element['author']}</h4>
          </div>
          <div class="comment-section">
          <form id="commentForm-${i}">
            <input id="inputField-${i}" class="input-field" type="text" placeholder="Kommentieren...">
            <input onclick="addComment(${i})" type="submit" class="d-none">
            </form>
          </div>
          <div class="comments">
          ${element.comments.map(comment => `<p>${comment}</p>`).join('')}
        </div>
        `;

      addEnterKeyListener(i);
       
    }
}



// The function `toggleLike` toggles the like status of a post and updates the like count and button 
// if the status changed by clicking on it

function toggleLike(i) {
  const likeButton = document.getElementById(`likeImg-${i}`);
  const filledButton = document.getElementById(`filledImg-${i}`);
  const likeCounter = document.getElementById(`likeCount-${i}`); 

  if (posts[i].liked) {
      posts[i].likes--;
      likeCounter.innerHTML = posts[i].likes;
      likeButton.classList.remove('d-none');
      filledButton.classList.add('d-none');
  } else {
      posts[i].likes++;
      likeCounter.innerHTML = posts[i].likes;
      likeButton.classList.add('d-none');
      filledButton.classList.remove('d-none');
  }

  posts[i].liked = !posts[i].liked;

  save();
  
}



// Create function to add comments 
function addComment(i) {
  let commentInput = document.getElementById(`inputField-${i}`);
  let commentText = commentInput.value.trim();

  if (commentText !== "") {
      posts[i].comments.push(commentText);
     
  }

  save();
  show();
  
}


function addEnterKeyListener(index) {
  document.getElementById(`commentForm-${index}`).addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
          addComment(index);
      }
  });

  save();

}


// Save it to localStorage
function save() {
  let postsAsText = JSON.stringify(posts);
  localStorage.setItem('posts', postsAsText);
}

// Load JSON file from localStorage
function load() {
  let postsAsText = localStorage.getItem(posts);

  if(postsAsText) {
    posts = JSON.parse(postsAsText);
  }
}

show();
