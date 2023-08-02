const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$^*ùm!:;,&é\"'(-è_ç)";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  //   Création d'une sécurité au cas où aucun critère n'est été sélectionné
  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  passwordOutput.value = password;

  //   SI on veut sélectionner et copier directement le mdp
  passwordOutput.select();
  document.execCommand("copy");

  //   Fonction setTimeout pour prévenir l'utilisation que le mot de passe est copié et changer ce qu'il y a dans le bouton

  generateButton.textContent = "Copié !";

  setTimeout(() => {
    generateButton.textContent = "Générer un nouveau mot de passe";
  }, 900);
}

generateButton.addEventListener("click", generatePassword);
