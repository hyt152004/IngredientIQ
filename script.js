function displayAlternativesForIngredient(ingredientName) {
  ingredientName = capitalizeWords(ingredientName);

  fetch("./data/ingredients.json")
    .then(function (resp) {
      return resp.json();
    })

    .then(function (data) {
      var ingredient = data.substitutions.find(function (item) {
        return item.ingredient === ingredientName;
      });

      if (ingredient) {
        var substitutesContainer = document.getElementById(
          "ingredientNameContainer"
        );
        substitutesContainer.innerHTML =
          "<div class='itemsHeader'>" +
          "Alternatives for " +
          ingredientName +
          ": " +
          "</div>";

        ingredient.substitutes.forEach(function (substitute) {
          substitutesContainer.innerHTML +=
            "<a href='detail.html?substitute=" +
            encodeURIComponent(JSON.stringify(substitute)) +
            "'>" +
            "<div class='item'>" +
            "<div class='itemName'>" +
            substitute.name +
            "</div>" +
            "<div class='itemCalories'>" +
            "Calories: " +
            substitute.calories_per_cup +
            "</div>" +
            "</div>" +
            "</a>";
        });
      } else {
        document.getElementById("ingredientNameContainer").innerHTML =
          "Ingredient not found: " + ingredientName;
      }
    });
}

function capitalizeWords(str) {
  var words = str.trimEnd().trimStart().split(" ");

  var capitalizedWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return capitalizedWords.join(" ");
}

// Ingredient Page
document.addEventListener("DOMContentLoaded", function () {
  var ingredientInput = document.getElementById("ingredientInput");
  var searchButton = document.querySelector(".search_icon");
  var coffeeBeanIcon = document.getElementById("coffeeBeanIcon");
  var sugarIcon = document.getElementById("sugarIcon");
  var milkIcon = document.getElementById("milkIcon");
  var beefIcon = document.getElementById("beefIcon");
  var spinachIcon = document.getElementById("spinachIcon");
  var flourIcon = document.getElementById("flourIcon");
  var peanutIcon = document.getElementById("peanutIcon");

  ingredientInput.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      displayAlternativesForIngredient(ingredientInput.value);
    }
  });

  searchButton.addEventListener("click", function () {
    displayAlternativesForIngredient(ingredientInput.value);
  });

  coffeeBeanIcon.addEventListener("click", function () {
    displayAlternativesForIngredient("coffee bean");
  });

  sugarIcon.addEventListener("click", function () {
    displayAlternativesForIngredient("sugar");
  });

  milkIcon.addEventListener("click", function () {
    displayAlternativesForIngredient("milk");
  });

  beefIcon.addEventListener("click", function () {
    displayAlternativesForIngredient("beef");
  });

  spinachIcon.addEventListener("click", function () {
    displayAlternativesForIngredient("spinach");
  });

  flourIcon.addEventListener("click", function () {
    displayAlternativesForIngredient("flour");
  });

  peanutIcon.addEventListener("click", function () {
    displayAlternativesForIngredient("peanut");
  });
});

// Home Page
document.addEventListener("DOMContentLoaded", function () {
  var ingredientInput = document.getElementById("ingredientInputHome");

  ingredientInput.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      window.location.href =
        "ingredient.html?search=" + encodeURIComponent(ingredientInput.value);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the button element
  var changePageButton = document.getElementById("search_button");
  var ingredientInput = document.getElementById("ingredientInputHome");

  // Add a click event listener to the button
  changePageButton.addEventListener("click", function () {
    // Navigate to the destination.html page
    window.location.href =
      "ingredient.html?search=" + encodeURIComponent(ingredientInput.value);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the search bar element on the destination page
  var ingredientInputNew = document.getElementById("ingredientInput");

  // Parse the query parameter to get the search value
  var searchValue = getParameterByName("search");

  // Set the search bar text with the retrieved value
  ingredientInputNew.value = searchValue;
  displayAlternativesForIngredient(ingredientInput.value);
});

// Function to extract query parameters from the URL
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

document.addEventListener("DOMContentLoaded", function () {
  var coffeeBeanIcon = document.getElementById("coffeeBeanIcon");
  var sugarIcon = document.getElementById("sugarIcon");
  var milkIcon = document.getElementById("milkIcon");
  var beefIcon = document.getElementById("beefIcon");
  var spinachIcon = document.getElementById("spinachIcon");
  var flourIcon = document.getElementById("flourIcon");
  var peanutIcon = document.getElementById("peanutIcon");

  coffeeBeanIcon.addEventListener("click", function () {
    window.location.href =
      "ingredient.html?search=" + encodeURIComponent("Coffee bean");
    displayAlternativesForIngredient("coffee bean");
  });

  sugarIcon.addEventListener("click", function () {
    window.location.href =
      "ingredient.html?search=" + encodeURIComponent("Sugar");
    displayAlternativesForIngredient("sugar");
  });

  milkIcon.addEventListener("click", function () {
    window.location.href =
      "ingredient.html?search=" + encodeURIComponent("Milk");
    displayAlternativesForIngredient("milk");
  });

  beefIcon.addEventListener("click", function () {
    window.location.href =
      "ingredient.html?search=" + encodeURIComponent("Beef");
    displayAlternativesForIngredient("beef");
  });

  spinachIcon.addEventListener("click", function () {
    window.location.href =
      "ingredient.html?search=" + encodeURIComponent("Spinach");
    displayAlternativesForIngredient("spinach");
  });

  flourIcon.addEventListener("click", function () {
    window.location.href =
      "ingredient.html?search=" + encodeURIComponent("Flour");
    displayAlternativesForIngredient("flour");
  });

  peanutIcon.addEventListener("click", function () {
    window.location.href =
      "ingredient.html?search=" + encodeURIComponent("Peanut");
    displayAlternativesForIngredient("peanut");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var ingredientInput = document.getElementById("ingredientInputHome");

  ingredientInput.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      window.location.href =
        "ingredient.html?search=" + encodeURIComponent(ingredientInput.value);
    }
  });
});
