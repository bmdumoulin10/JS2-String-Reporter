var word = prompt("Enter any word...");

alert("You enterred:" + " " + word  + "\n" + "There are" + " " + word.length + " " + "characters in the word." + "\n" + "The third character is" + " " + "'" + word.charAt(2) + "'" + "\n" + "Lowercase:" + " " + word.toLowerCase() + "\n" + "Uppercase:" + " " + word.toUpperCase() + "\n" + "Example:" + " " + "Most of the matter is taken" + " " + word + " " + "from the notebook of one of his students." + "\n" + "Subword:" + " " + word.substr(1,3))
