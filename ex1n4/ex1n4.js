const users = [
  { id: 1, nom: "Karim Benali", email: "karim@exemple.com", role: "Administrateur" },
  { id: 2, nom: "Sofia Martin", email: "sofia@exemple.com", role: "Éditrice" },
  { id: 3, nom: "Yanis Haddad", email: "yanis@exemple.com", role: "Développeur" },
  { id: 4, nom: "Léa Dubois", email: "lea@exemple.com", role: "Designer" },
];

const cards = document.querySelectorAll(".user-card")

cards.forEach((card, index) => {
  const user = users[index];
  card.querySelector(".card-title").textContent = user.nom;
  console.log(card)
  card.querySelector(".card-email").textContent = user.email;
  card.querySelector(".card-role").textContent = user.role;
});
