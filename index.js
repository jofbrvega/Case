// Function that toggles class name on information block
function showInformation() {
  var informationBlock = document.querySelector(".information-block");
  if (
    informationBlock.style.display === "none" ||
    informationBlock.style.display === ""
  ) {
    informationBlock.style.display = "block";
  } else {
    informationBlock.style.display = "none";
  }
}

/*  Custom validation messages depending on page language */
function setCustomValidityMessages() {
  var lang = document.documentElement.lang;

  if (lang === "sv") {
    document
      .getElementById("inputFirstName")
      .setCustomValidity("Vänligen fyll i med ditt förnamn");
    document
      .getElementById("inputEmail")
      .setCustomValidity("Vänligen ange en giltig e-postadress");
    document
      .getElementById("inputZipcode")
      .setCustomValidity("Vänligen ange ett giltigt postnummer t.ex. 123 45");
    document
      .getElementById("inputParentName")
      .setCustomValidity("Vänligen ange förnamn i rätt format A-Z");
  } else {
    // Default to English messages
    document
      .getElementById("inputFirstName")
      .setCustomValidity("Please fill in with your first name");
    document
      .getElementById("inputEmail")
      .setCustomValidity("Please enter a valid email address");
    document
      .getElementById("inputZipcode")
      .setCustomValidity("Please enter a valid postal code e.g. 123 45");
    document
      .getElementById("inputParentName")
      .setCustomValidity("Please enter a first name in the correct format A-Z");
  }
}

// Call the function when the page loads
window.onload = setCustomValidityMessages;