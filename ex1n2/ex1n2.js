const user = {
  nom: "Karim Benali",
  email: "karim@exemple.com",
  role: "Administrateur",
};

const nom = document.getElementById("user-name")
const email = document.getElementById("user-email")
const role = document.getElementById("user-role")

nom.textContent = user.nom
email.textContent = user.email
role.textContent = user.role
