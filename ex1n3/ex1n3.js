const user = {
  nom: "Karim Benali",
  email: "karim@exemple.com",
  role: "Administrateur",
};

const card = document.querySelector(".user-card")
card.querySelector(".card-title").textContent = user.nom ;
card.querySelector(".card-email").textContent = user.email ;
card.querySelector(".card-role").textContent = user.role ;
