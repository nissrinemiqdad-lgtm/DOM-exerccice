const user = {
  nom: "Karim Benali",
  email: "karim@exemple.com",
  role: "Administrateur",
};

const nom =document.getElementById("user-name")
nom.textContent = user.nom

const email = document.getElementById("user-email")
email.textContent = user.email

const role = document.getElementById("user-role")
role.textContent  = user.role