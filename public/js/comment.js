 
const addCommentEl = document.querySelector('#comment');
// const NameEl = document.querySelector('');
console.log('hello i am in my js file');




const addComment = async (event) => 
{
    event.preventDefault();
    //const name = NameEl.value.trim();
    const comment = addCommentEl.value.trim();
    console.log("****************GENERATING DATA 1****************")
    console.log(comment)
    if ( comment) {
      // console.log('Submitting info')
      const response = await fetch('api/comments/post', {
       // const response = await fetch('/api/users', {
          method:'POST',
          body: JSON.stringify({comment}),
          headers: { 'Content-Type': 'application/json' },
        });
        console.log('RESPONSE:',response)
        if (response.ok) {
          console.log("****************RESPONSE IS OK 1****************")
          document.location.replace('/');
        } else {
          alert(response.statusText," Failed to add comment");
        }
      }
    
}

addCommentEl.addEventListener("click", addComment);