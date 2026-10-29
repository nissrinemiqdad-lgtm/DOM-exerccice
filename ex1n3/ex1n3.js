const user = {
  nom: "Karim Benali",
  email: "karim@exemple.com",
  role: "Administrateur",
};
const card = document.querySelector(".card user-card")
const nom = document.querySelector('.card-title')
const email = document.querySelector('.card-email')
const role = document.querySelector('.card-role')

nom.textContent = user.nom;
email.textContent = user.email;
role.textContent = user.role;