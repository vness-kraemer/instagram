// Create array with JSON file
let posts = [
    {
        'author': 'Tagesschau',
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
          <img src="${element['img']}"
          <div class="posting-bar>
            <div class="active-icons">
                <img src="/img/icons/comment.png" class="icon" />
            </div>
          </div>
          </div>
          </div>
        `;
    }
}