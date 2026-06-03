let cards = document.querySelector(".cards");
let input = document.querySelector("#search")
const users = [
  {
    name: "John Doe",
    bio: "Frontend Developer who loves JavaScript and modern web technologies.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "Emma Wilson",
    bio: "UI/UX Designer passionate about creating beautiful user experiences.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "Michael Brown",
    bio: "Backend Developer specializing in scalable web applications.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "Sophia Davis",
    bio: "Creative Graphic Designer with experience in branding.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "Daniel Miller",
    bio: "Full Stack Developer who enjoys solving challenging problems.",
    image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "Olivia Taylor",
    bio: "Content Creator and Digital Marketing Specialist.",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "James Anderson",
    bio: "Cybersecurity enthusiast focused on ethical hacking.",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "Ava Martinez",
    bio: "Mobile App Developer building Android and iOS apps.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "William Thomas",
    bio: "Data Analyst who loves working with large datasets.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60"
  },
  {
    name: "Mia Garcia",
    bio: "AI Engineer interested in machine learning and deep learning.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60"
  }
];

function showCards(arr){
    arr.forEach((user)=>{
        let card = document.createElement("div");
        card.classList.add("card");
        card.style.backgroundImage = `url(${user.image})`

        let info = document.createElement("div");
        info.classList.add("info");

        let h2 = document.createElement("h2");
        h2.textContent = `${user.name}`

        let p = document.createElement("p");
        p.textContent = `${user.bio}`

        cards.appendChild(card);
        card.appendChild(info);
        info.appendChild(h2);
        info.appendChild(p);
    })
}

showCards(users);

input.addEventListener("input", ()=>{
    let searchResult = users.filter((user)=>{
        return user.name.toLowerCase().includes(input.value.toLowerCase());
    });

    if(searchResult.length === 0){
        cards.innerHTML = "<h2>No User Found</h2>"
    }
    else{
        cards.innerHTML = ""
    showCards(searchResult);
    }

    
});