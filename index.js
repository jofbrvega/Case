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

// Function that checks that inputParentName is not the same value as inputFirstName & that it contains atleast a letter between A-Z
function checkParentNameValue() {
  var firstName = document.getElementById("inputFirstName").value.toLowerCase();
  var parentName = document
    .getElementById("inputParentName")
    .value.toLowerCase();

  if (firstName == parentName) {
    document
      .getElementById("inputParentName")
      .setCustomValidity(
        "Förnamn på förälder får inte vara samma som ditt förnamn"
      );
    return false;
  }
  var parentNamePattern = /^[a-zA-Z]+$/;
  if (!parentNamePattern.test(parentName)) {
    document
      .getElementById("inputParentName")
      .setCustomValidity("Vänligen ange förnamn i rätt format A-Z");
    return false;
  }
  return true;
}
