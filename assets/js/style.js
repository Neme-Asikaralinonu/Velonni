// Marquee
const marquee = `<div class="marquee"><p>Upcoming Event - Velonni Runway 2025: Join us for exclusive fashion showcases, private fittings, and curated style experiences. <button>View Event</button></p></div>`;
document.querySelector(".navbar").innerHTML =
  marquee + document.querySelector(".navbar").innerHTML;

const buttons = document.querySelectorAll("button");
const imgs = document.querySelectorAll("img");
const lis = document.querySelectorAll("li");

imgs.forEach((img) => {
  if (
    img.src.endsWith("assets/Images/VelonniLogo.png") ||
    img.src.endsWith("assets/Images/VelonniMobileLogo.png")
  ) {
    img.addEventListener("click", (e) => {
      e.preventDefault();
      window, (location.href = "./index.html");
    });
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    var text = button.innerHTML;
    if (text == "Learn More" || text == "Discover More") {
      window, (location.href = "./about.html");
    } else if (text == "Explore Collections" || text == "See All Collections") {
      window, (location.href = "./collections.html");
    } else if (text == "Book Appointment") {
      window, (location.href = "./appointments.html");
    } else if (text == "Explore All Services") {
      window, (location.href = "./services.html");
    } else if (text == "Read More") {
      window, (location.href = "./blog.html");
    } else if (text == "See All Events" || text == "View Event") {
      window, (location.href = "./events.html");
    } else if (text == "View Full Team") {
      window, (location.href = "./teams.html");
    } else if (text == "Meet All Trustees") {
      window, (location.href = "./trustees.html");
    } else if (text == "Contact Us") {
      window, (location.href = "./contact.html");
    }
  });
});

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.preventDefault();
    var text = li.innerText;
    if (text == "About") {
      window, (location.href = "./about.html");
    } else if (text == "Collections") {
      window, (location.href = "./collections.html");
    } else if (text == "Appointments") {
      window, (location.href = "./appointments.html");
    } else if (text == "Services") {
      window, (location.href = "./services.html");
    } else if (text == "Blog") {
      window, (location.href = "./blog.html");
    } else if (text == "Events") {
      window, (location.href = "./events.html");
    } else if (text == "Teams") {
      window, (location.href = "./teams.html");
    } else if (text == "Trustees") {
      window, (location.href = "./trustees.html");
    } else if (text == "Contact") {
      window, (location.href = "./contact.html");
    }
  });
});

window.addEventListener("scroll", (e) => {
  hs();
});

hs();

function hs() {
  let height = heightScrolled();
  const navbar = document.querySelector(".navbar");
  if (height > 1) {
    navbar.classList.add("scrolling");
  } else {
    navbar.classList.remove("scrolling");
  }
}

function heightScrolled() {
  var winheight =
    window.innerHeight ||
    (document.documentElement || document.body).clientHeight;
  var docheight = getDocHeight();
  var scrollTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;
  var trackLength = docheight - winheight;
  var pctScrolled = Math.floor((scrollTop / trackLength) * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
  // console.log(pctScrolled + '% scrolled')
  return pctScrolled;
}

function getDocHeight() {
  var D = document;
  return Math.max(
    D.body.scrollHeight,
    D.documentElement.scrollHeight,
    D.body.offsetHeight,
    D.documentElement.offsetHeight,
    D.body.clientHeight,
    D.documentElement.clientHeight
  );
}
