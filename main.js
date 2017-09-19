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

window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("upButton").style.display = "block";
        } else {
        document.getElementById("upButton").style.display = "none";
    }
}

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
}

var usedTags = [
  {path: „/business.html”, tags: „business economy management”},
  {path: „/communication.html”, tags: „communication selfdevelopment coreareas”},
  {path: „/design.html”, tags: „design user interface UI”},
  {path: „/programme.html”, tags: „programming coding UX web development”},
  {path: „/elective.html”, tags: „electives erasmus”},
  {path: „/exam.html”, tags: „exam evaluation ECTS grades”},
  {path: „/internship.html”, tags: „internship work ECTS grades”},
  {path: „/practical.html”, tags: „practical FAQ”},
  {path: „/general.html”, tags: „schedule general information”},
]

function usedTags {
    if(usedTags[i]) = tags
console.log(path);

}
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
