document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".div5").addEventListener("click", function () {
    window.location.href = "https://bsky.app/profile/mrpandaman.bsky.social";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".div6").addEventListener("click", function () {
    window.location.href =
      "https://static-cdn.jtvnw.net/jtv_user_pictures/4335ea33-2725-4ae5-b919-b521043f2ad2-profile_image-300x300.png";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".div7").addEventListener("click", function () {
    window.location.href = "https://t.me/mrpandaman22";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".div8").addEventListener("click", function () {
    window.location.href = "https://twitter.com/MrPandaman22";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".div9").addEventListener("click", function () {
    window.location.href = "https://www.instagram.com/mr.pandaman22";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".div10").addEventListener("click", function () {
    window.location.href = "./about.html";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".div11").addEventListener("click", function () {
    window.location.href = "./index.html";
  });
});

function calculateAge(birthDate) {
  var today = new Date();
  var birthDate = new Date(birthDate);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

function updateAge() {
  var birthDate = "2001-07-13";
  var age = calculateAge(birthDate);
  document.getElementById("age").textContent = age;
}

window.onload = updateAge;