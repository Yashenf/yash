/*
* Created by : @yash
*              4/30/2023 , Sunday
*              07:09 PM
* Project : MyProfile
* Contact me : contact.yashen@gmail.com 
*/

$(document).ready(()=>{
    $('.hamburger').click(()=>{
       $('nav').toggleClass('active');
       $('active').css({
           transaction:'all 1s'
       });
    });
});

