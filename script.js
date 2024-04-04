var user = [
  {
    displayPic: "./images/main.avif",
    profilePic: "./images/profile1'.avif",
    pandingMassage: 12,
    location: "Delhi India",
    name: "Harshi",
    age: 20,
    interests: [{
      icon: `<i class="ri-music-2-fill"></i>`,
      interest: "Music"
    },
    {
      icon: `<i class="ri-music-2-fill"></i>`,
      interest: "Music"
    },],    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatum dignissimos beatae, temporibus deserunt?",
    isFriends: null,
  },

  {
    displayPic: "./images/display2.avif",
    profilePic: "./images/profile2.avif",
    pandingMassage: 22,
    location: "Panjab India",
    name: "Megha",
    age: 20,
    interests: [{
      icon: `<i class="ri-music-2-fill"></i>`,
      interest: "Music"
    },
    {
      icon: `<i class="ri-roadster-fill"></i>`,
      interest: "Traveling"
    },],    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatum dignissimos beatae, temporibus deserunt?",
    isFriends: null,
  },

  {
    displayPic: "./images/display3.avif",
    profilePic: "./images/profile3.avif",
    pandingMassage: 69,
    location: "Odisha India",
    name: "Niki",
    age: 20,
    interests: [{
      icon: `<i class="ri-music-2-fill"></i>`,
      interest: "Music"
    },
    {
      icon: `<i class="ri-music-2-fill"></i>`,
      interest: "Music"
    },
    {
      icon: `<i class="ri-edit-2-fill"></i>`,
      interest: "Writing"
    },
  ],    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatum dignissimos beatae, temporibus deserunt?",
    isFriends: null,
  },

  {
    displayPic: "./images/display4.avif",
    profilePic: "./images/profile4.avif",
    pandingMassage: 10,
    location: "Bhopal India",
    name: "preeti",
    age: 20,
    interests: [{
      icon: `<i class="ri-music-2-fill"></i>`,
      interest: "Music"
    },
    {
      icon: `<i class="ri-edit-2-fill"></i>`,
      interest: "Writing"
    },],    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatum dignissimos beatae, temporibus deserunt?",
    isFriends: null,
  },

  {
    displayPic: "./images/display5.avif",
    profilePic: "./images/profile5.avif",
    pandingMassage: 20,
    location: "Mumbai India",
    name: "Palak",
    age: 25,
    interests: [{
      icon: `<i class="ri-music-2-fill"></i>`,
      interest: "Music"
    },
    {
      icon: `<i class="ri-mic-2-fill"></i>`,
      interest: "Singing"
    },],    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatum dignissimos beatae, temporibus deserunt?",
    isFriends: null,
  },

  {
    displayPic: "./images/display6.avif",
    profilePic: "./images/profile6.avif",
    pandingMassage: 29,
    location: "kolkata India",
    name: "Neha",
    age: 24,
    interests: [{
      icon: `<i class="ri-music-2-fill"></i>`,
      interest: "Music"
    },
    {
      icon: `<i class="ri-quill-pen-fill"></i>`,
      interest: "Painting"
    },],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatum dignissimos beatae, temporibus deserunt?",
    isFriends: null,
  },
  
];

function select(elem) {
 return document.querySelector(elem);
}

function setData (index) {
  select(".massagecontain h5").textContent = user[index].pandingMassage;
  select(".navimg img").src = user[index].profilePic;
  select(".location").textContent = user[index].location;
  select(".name").textContent = user[index].name;
  select(".age").textContent = user[index].age;

  var cluter = "";
  user[index].interests.forEach(function (elem) {
    cluter += `   <div class="flex gap-2 bg-white/50 rounded-2xl px-2 py-1">
    ${elem.icon}
    <h5>${elem.interest}</h5>
</div>`
  })
  select(".tag").innerHTML = cluter;
  select(".bio p").textContent = user[index].bio;
}

var curr = 0;
isAnimating = false;
(function setIntial(){
  select(".maincard img").src = user[curr].displayPic;
  select(".upcomingcard img").src = user[curr+1]?.displayPic;
  setData(curr);
  curr = 2;
})();

function imageChange () {
  if(!isAnimating) {
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimating = false;
       let main = select(".maincard");
       let upcomingcard = select(".upcomingcard");
        upcomingcard.classList.remove("z-[2]");
        upcomingcard.classList.add("z-[3]");
        upcomingcard.classList.remove("upcomingcard");
  
        main.classList.remove("z-[3]");
        main.classList.remove("z-[2]");
        gsap.set(main,{
          scale: 1,
          opacity: 1,
        })
  
        if(curr === user.length) curr = 0;
        select(".maincard img").src = user[curr].displayPic;
        curr++;
        main.classList.remove("maincard");
        upcomingcard.classList.add("maincard");
        main.classList.add("upcomingcard");
  
      }
    });
    tl.to(".maincard",{
      scale: 1.1,
      opacity: 0,
      ease: Circ,
      duration: 0.8,
    },"a")
   
    .from(".upcomingcard",{
      scale: .9,
      opacity: 0,
      ease: Circ,
      duration: 1.3,
    },"a")
  }
  
}

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function () {
  imageChange();
  setData(curr-1);
  gsap.from(".details .elem",{
    y: "100%",
    opacity: 0,
    duration: 1,
    ease: Power4.easeInOut,
  })
});

accept.addEventListener("click", function () {
  imageChange();
  setData(curr-1);
  gsap.from(".details .elem",{
    y: "100%",
    opacity: 0,
    duration: 1,
    ease: Power4.easeInOut,
  })
});


function containerCreater () {
  document.querySelectorAll(".elem").forEach(function (elem) {
    let div = document.createElement("div")
    div.classList.add(`${elem.classList[1]}container`,'overflow-hidden');
    div.appendChild(elem);
    select(".details").appendChild(div);
  })
}

containerCreater ();

