arrUsers = [];
let arrPosts = [];

let fUsers = ("https://jsonplaceholder.typicode.com/users")
fetch(fUsers)
.then(function(response) {
    return response.json();
})
    .then(function(users) {
        arrUsers = users; 
        
    let fPosts = ("https://jsonplaceholder.typicode.com/posts")
    fetch(fPosts)
    .then(function(response){
        return response.json();
    })
    .then(function(posts){
        arrPosts = posts;
        {
            if(arrUsers && arrPosts)
            {
                creatUserPost()
            }
            
        }
        
})
    })        




function creatUserPost () {
for (let user of arrUsers) {
    const postUserId = user.id;
    const postUserName = user.name;

    for (let post of arrPosts) {
       if(postUserId === post.userId) 
       {        
        const cont = document.querySelector('.container');
        let postsList = document.createElement('div'); 
        postsList.classList.add('postsbox');
        let userId = document.createElement('div');        
        let id = document.createElement('div');        
        let userName = document.createElement('div');                 
        let body = document.createElement('div');              
        let title = document.createElement('h1');  
        userId.textContent = "UserId: " + postUserId;        
        id.textContent = "id: " + post.id;
        userName.textContent = "Name: " + postUserName;         
        body.textContent = post.body;
        title.textContent = post.title;
        postsList.append(userId, id, userName, title, body);
        cont.appendChild(postsList);
       }
    } 
}     
}