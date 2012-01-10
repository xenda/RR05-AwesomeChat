// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(function() {
  updateContentForOembed("#chat_container");
});

function scrollToLastElement(){
  
  scrollingTop = 0;

  $("#chat_container li").each(function(index, item){
    scrollingTop += $(item).outerHeight();
  });

  $("#chat_container").scrollTop(scrollingTop);

}

function updateContentForOembed(element){
  // We capture the Message content
  text = $(element).html();

  // If there are URLs on it, we changed them to links
  regMatches = (text.match(/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.])(?:[^\s()<>]+|\([^\s()<>]+\))+(?:\([^\s()<>]+\)|[^`!()\[\]{};:'".,<>?«»“”‘’\s]))/gi));
  if (regMatches) {

  // Iterate through each link found and convert it to link
  $.each(regMatches, function(index,value){
      reg_value = value.replace("?","\\?");
      var re = new RegExp("\\s*"+reg_value+"\\s*","gim");
      text = text.replace(re,"<a href='"+ value +"' class='oembed'>"+value+"</a>");
   
  });

  $(element).html(text);
  $(element + " .oembed").oembed(null, 
                        {
                        defaultOEmbedProvider: "embed.ly",
                        embedMethod: "append", 
                        maxWidth: 500,
                        vimeo: { autoplay: false, maxWidth: 500, maxHeight: 300}  
                        });

  }

}