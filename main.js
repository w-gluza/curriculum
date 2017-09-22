var trigger = document.querySelector('a.gn-icon-menu');
var menu = document.querySelector('nav.gn-menu-wrapper');
var isMenuOpen = false;

var bodyClickFn = function() {
  closeMenu();
  this.removeEventListener('click', bodyClickFn);
};

trigger.addEventListener('mouseover', function(ev) {
  openIconMenu();
});
trigger.addEventListener('mouseout', function(ev) {
  closeIconMenu();
});
menu.addEventListener('mouseover', function(ev) {
  openMenu();
  document.addEventListener('click', bodyClickFn);
});
trigger.addEventListener('click', function(ev) {
  ev.stopPropagation();
  ev.preventDefault();
  if (isMenuOpen) {
    closeMenu();
    document.removeEventListener('click', bodyClickFn);
  } else {
    openMenu();
    document.addEventListener('click', bodyClickFn);
  }
});

menu.addEventListener('click', function(ev) {
  ev.stopPropagation();
});

var openIconMenu = function() {
  menu.classList.add('gn-open-part');
};
var closeIconMenu = function() {
  menu.classList.remove('gn-open-part');
};
var openMenu = function() {
  if (isMenuOpen) return;
  trigger.classList.add('gn-selected');
  isMenuOpen = true;
  menu.classList.add('gn-open-all');
  closeIconMenu();
};
var closeMenu = function() {
  if (!isMenuOpen) return;
  trigger.classList.remove('gn-selected');
  isMenuOpen = false;
  menu.classList.remove('gn-open-all');
  closeIconMenu();
};


window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('upButton').style.display = 'block';
  } else {
    document.getElementById('upButton').style.display = 'none';
  }
}

document.getElementById('upButton').onclick = function() {
  scrollTo(document.body, 0, 100);
};

function scrollTo(element, to, duration) {
  if (duration < 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 2;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    scrollTo(element, to, duration - 2);
  }, 10);
}

/*
let usedTags = [
  {path: '/business.html', tags: 'business economy management'},
  {path: '/communication.html', tags: 'communication selfdevelopment coreareas'},
  {path: '/design.html', tags: 'design user interface UI'},
  {path: '/programme.html', tags: 'programming coding UX web development'},
  {path: '/elective.html', tags: 'electives erasmus'},
  {path: '/exam.html', tags: 'exam evaluation ECTS grades'},
  {path: '/internship.html', tags: 'internship work ECTS grades'},
  {path: '/practical.html', tags: 'practical FAQ'},
  {path: '/general.html', tags: 'schedule general information'},
]
 usedTags.forEach(function(usedTags2) {
 console.log(' - ' + we use it);

 });

*/
/*
var searchTags = {
    "communication",
    "design",
    "electives",
    "erasmus",
    "exams",
    "intership",
    "programme",
    "schedule",
} */



//SEARCH SZPEJ

        function abroadSearch(){
            window.location.replace('/abroad.html');
        }

        function examSearch(){
            window.location.replace('/exam.html');
        }

        function electiveSearch(){
            window.location.replace('/elective.html');
        }

        function programmeSearch(){
            window.location.replace('/programme.html');
        }

        function practicalSearch(){
            window.location.replace('/practical.html');
        }

        function generalSearch(){
            window.location.replace('/general.html');
        }
