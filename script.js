const toggleMenu = () => {
    const toggle = document.getElementById("menu-toggle"),
      nav = document.getElementById("navigation")
  
    if (toggle && nav) {
      
        document.body.classList.toggle("nav-active");
    }
  };
  $(document).ready(function(){
    $("#music").click(function(){
      $("#music").toggleClass("active");
    });

    $("#about").click(function(){
        $("#about").toggleClass("active");
    });
    $("#event").click(function(){
        $("#event").toggleClass("active");
    });
    $("#programming").click(function(){
        $("#programming").toggleClass("active");
    });
  });

//   const openSubmenu = (initial) => {

//     var initial = document.querySelector('.has-submenu');
        
//         // initial values of clickable variables
//         var clickedInside = false;
//         var clickedOutside = true;
//         initial.addEventListener('click', function () {
//             if (!clickedInside) {
//                 initial.classList.toggle('active');
//                 clickedInside = true;
//                 clickedOutside = false;
//             }
//         });
//         document.addEventListener('click', function (event) {
//             if (event.target !== initial && !clickedOutside) {
//                 initial.classList.toggle('active');
//                 clickedInside = false;
//                 clickedOutside = true;
//             }
//         });
// }

