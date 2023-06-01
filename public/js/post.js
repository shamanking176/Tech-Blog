const postIdEl = document.querySelector('#postid')
const addPostEl = document.querySelector('#post');
const addPostbtnEl = document.querySelector('#post-btn');
const titleEl = document.querySelector('#postTitle');
// const NameEl = document.querySelector('');
console.log('hello i am in my js file');




const addPost = async (event) => 
{
    event.preventDefault();
    //const name = NameEl.value.trim();
    const post = addPostEl.value.trim();
    const postId = postIdEl.textContent.trim();
    const title = titleEl.textContent.trim();
    console.log("****************GENERATING DATA 1****************")
    
    console.log(post)
    if ( post && postId && title) {
      // console.log('Submitting info')
      const response = await fetch('/api/comments/post', {
       // const response = await fetch('/api/users', {
          method:'POST',
          body: JSON.stringify({title:title , description:post, postId}),
          headers: { 'Content-Type': 'application/json' },
        });
        console.log('RESPONSE:',response)
        if (response.ok) {
          console.log("****************RESPONSE IS OK 1****************")
          document.location.reload();
        } else {
          alert(response.statusText," Failed to add post");
        }
      }
    
}

addPostbtnEl.addEventListener("click", addPost);