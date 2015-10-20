// CLIENT-SIDE JAVASCRIPT
// On page load
$(document).ready(function(){
  pageLoad();
});

// function definitions

function pageLoad() {
  // set event listeners
  $("#new-post-form").on("submit", function(e){
    // prevent form submission
    e.preventDefault();
    // post serialized form to server
    console.log($(this).serialize());
    $.post("/api/posts", $(this).serialize(), function(response){
      // append new post to the page
      console.log('response: ', response);
      var newPost = response;
      // clear new post form
      var postString = makeHTMLString(newPost);
      console.log('postString: ', postString);
      $("#post-ul").prepend(postString);
      // reset the form 
      $("#new-post-form")[0].reset();
      // give focus back to the post text input
      $("#post-text-input").focus();
    });
  });


  // set event listener for all delete buttons
  $(document).on('click', 'button.close', function(e){
    e.preventDefault();

    deletePost(this);

  });
}

function deletePost(context) {

  console.log('context in deletePost: ', context);
  // context is the button that was clicked
  var postId = $(context).data().id;
  $.ajax({
    url: '/api/posts/' + postId,
    type: 'DELETE',
    success: function(response) {
      // once successful, remove food from the DOM
      $(context).closest('li').remove();
    }

  });




}
// $('.posts').on('click', '.close', function(e) {
//     e.preventDefault();
//     var postId = $(this).data().id;
//     var deletedPost = $(this).closest('li');

//     $.ajax({
//       url:'/posts/' + postId,
//       type: "DELETE"
//     })
//     .done(function(data) {
//       console.log(data);
//       $(deletedPost).remove();
//       console.log("post has been deleted");
//     })
//     .fail(function(data) {
//       console.log("failed to delete post");

//     });
// });

// function deletePost(context) {
//   console.log('context in deletePost: ', context);
//   // context is the button that was clicked
//   var postId = $(context).data().id;
//   $.ajax({
//     url: '/api/posts/' + postId,
//     type: 'DELETE',
//     success: function(response) {
//       // once successful, remove food from the DOM
//       $(context).closest('li').remove();
//     }
//   });
// }


function makeHTMLString(post){
  return '<li class="list-group-item"><h4 class="list-group-item-heading">' + post.text +
  '<button data-id='+ post._id + ' type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
  '</li>';
}



  // function deleteText(context) {
  //   console.log('context in deleteText: ', context);
  //   //context is the button that was clicked
  //   var textId = $(context).data().id; 
  //   $.ajax({
  //     url: '/api/posts' + postId, 
  //     type: 'DELETE',
  //     success: function(response) {
  //       //once successful, remove post from the DOM
  //       $(context).closest('li').remove();
  //     }
  //   });
  // }
  // $('#newPost').on('submit', function(e){ 
  //   e.preventDefault(); 

  //   console.log(this); //the form
  //   var formData = $(this).serialize(); 
  //   console.log(formData); 

  //   $.ajax({ 
  //       url: '/posts', 
  //       type: "POST",
  //       data: formData
  //   })
  //   .done(function(data) { 
  //       console.log("made a post successfully:", data);
  //        //Object {__v: 0, name: "asdf", _id: "56214316bbacebd50f31
  //        var postHtml = "<li class='post list-group-item'>" + data.post + "<span data-id='" + data._id + "' class='glyphicon glyphicon-remove pull-right'></span></li>";
  //         $('.posts').append(postHtml);
  //         $('#newPost')[0].reset(); 
  //   })
  //   .fail(function(data) {
  //         console.log("Failed to make a post!");
  //       });
  





  // $('#new-post-form').on('click', function(e) { 
  // 	//prevent page refresh
  // 	e.preventDefault(); 
  // 	//check length of post
  // 	if ($('#post-content').val().trim().length > 0) {
  //   	var postContent = $('#post-content').val();
  
     
  //   	var newPost = '<li class="list-group-item" id="' + count + '">' + postContent + '<span class="glyphicon glyphicon-remove pull-right">' + '</li>';
  //   	//add new posts to posts
     
  //   	$('#posts').append(newPost);
      
          
  //   	localStorage.setItem('newPost', (this.newPost));
  //   	$('#post-content').val('');


  //   	console.log('#posts');
  //   	// each post addes one count 
  //   	count +=1; 
  //   	console.log(count);   
  //   }

 

// tooltip function
//   $(function () {
//   $('[data-toggle="tooltip"]').tooltip();
// });
// //adding Glyphicon click to remove lists 
//   $(function(){
//   	console.log(count);
//     $(' .glyphicon').on('click', function() {
  		
//       console.log(count);
//       console.log(this);// this = span
//       $(this).parent().animate({  
//   			opacity: 0.0,
//   			paddingLeft: '+=80'
//   		}, 500, function() {
//         console.log(this); // this = li
//   			$(this).remove();
//   		});
//   	});
//   });
  	




  



