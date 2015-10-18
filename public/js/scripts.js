//CLIENT-SIDE JAVASCRIPT
//On page load

console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  // code in here
  //set up variable for count
  var count = 0;

  $('#newPost').on('submit', function(e){ 
    e.preventDefault(); 

    console.log(this); //the form
    var formData = $(this).serialize(); 
    console.log(formData); 

    $.ajax({ 
        url: '/posts', 
        type: "POST",
        data: formData
    })
    .done(function(data) { 
        console.log("made a post successfully:", data);
         //Object {__v: 0, name: "asdf", _id: "56214316bbacebd50f31
         var postHtml = "<li class='post list-group-item'>" + data.post + "<span data-id='" + data._id + "' class='glyphicon glyphicon-remove pull-right'></span></li>";
          $('.posts').append(postHtml);
          $('#newPost')[0].reset(); 
    })
    .fail(function(data) {
          console.log("Failed to make a post!");
        });
  });




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
  	




  


});
