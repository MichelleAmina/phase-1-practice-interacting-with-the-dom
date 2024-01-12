/*
  <h1 id='counter'>
    0
  </h1>
  <button id='minus' > ➖ </button>
  <button id='plus' > ➕ </button>
  <button id='heart' > ❤️ </button>
  <button id='pause' > pause </button>

  <ul class='likes'></ul>

  <div>
    <h3>Comments</h3>
    <div id='list' class='comments'></div>

    <h3>Leave a comment</h3>

    <form id="comment-form" action="">
      <input type='text' name="comment" id="comment-input" cols="30" rows="10">
      </br>
      <button id='submit'>submit</button>
    </form>

    */

    // Get the element with the ID "counter"
    const element = document.getElementById("counter");
    
    // Initialize count and intervalId variables
    let count = 0
    let intervalId= null; 
    
    //Create variables for various html elements 
    const plus = document.getElementById("plus")
    const minus = document.getElementById("minus")
    const pause = document.getElementById("pause")
    const like = document.getElementById("heart")
    const submit = document.getElementById("submit")
    const likedCount = document.querySelector('.likes')
    const addComment = document.getElementById("list")
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input")
    
    // Add event listeners to buttons and form
    plus.addEventListener("click", addCount);
    minus.addEventListener("click", reduceCount);
    pause.addEventListener("click", pauseCount);
    like.addEventListener("click", likeCount); 
    commentForm.addEventListener("submit", handleSubmit);
    
    // Function to handle form submission
    function handleSubmit(e){
    e.preventDefault ()
    let comment = commentInput.value 
    let commentElement = document.createElement("p")
    commentElement.innerText = comment
    addComment.appendChild(commentElement)
    // Clear the input after submitting
    commentInput.value=""
    }
    
    // Function to increase the count 
    function addCount() {
    count++
    element.innerHTML = count 
    }
    
    // Function to reduce the count 
    function reduceCount() {
    count--
    element.innerHTML = count
    }
    
    // Function to pause or resume the counter
    function pauseCount () {
    if (intervalId){
    // If counter is running, pause it
    clearInterval(intervalId)
    intervalId = null;
    //change inner text on the button to 'resume' 
    pause.innerText = "resume"
    enableButtons(true); 
    }
    else{
      //if counter is paused, resume it 
    intervalId = setInterval(addCount, 1000);
    //change inner text of button to 'pause' 
    pause.innerText = "pause"
    enableButtons(false); 
    }
    }
    
    // Function to enable or disable buttons
    function enableButtons(enable) {

      //set the disabled property on the plus/minus/like/submit button to the value of the enable param
      //if enable is 'true', it means the button will be disabled
      //if it's 'false' the button will be enabled
      plus.disabled = enable;
      minus.disabled = enable;
      like.disabled = enable;
      submit.disabled = enable; 
      // Add more buttons here if needed
    }
    
    function likeCount () {
    // Check if the count is liked before
    if (!likeCount[count]) {
        likeCount[count] = 1;
      } else {
        likeCount[count]++;
      }
      
    let likeText = likeCount[count] === 1? "time" : "times";
    // Create a list item with the like information
    let li = document.createElement("li")
    li.innerText = `Number ${count} has been liked ${likeCount[count]} ${likeText}`
    // Append the list item to the likes list
    likedCount.appendChild(li)
    }
    
    // Initialize the counter with setInterval
    intervalId = setInterval(addCount, 1000) 
    

  