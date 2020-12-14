function mathSolver(x) {
  //Regex to remove spaces from interfering inside loop
  let error = "";
  let numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let numArray1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "(", ")"];

  function newLoop(string) {
    if (
      numArray1.includes(string[0]) == false ||
      numArray1.includes(string[string.length - 1]) == false
    ) {
      error = `Invalid Regular Expression`;
      return true;
    }
    for (let i = 0; i < string.length; i++) {
      const checker =
        string[i + 1] == "+" ||
        string[i + 1] == "-" ||
        string[i + 1] == "*" ||
        string[i + 1] == "/" ||
        string[i + 1] == "%" ||
        string[i + 1] == "^" ||
        string[i + 1] == undefined ||
        string[i - 1] == undefined ||
        string[i - 1] == "+" ||
        string[i - 1] == "-" ||
        string[i - 1] == "*" ||
        string[i - 1] == "/" ||
        string[i - 1] == "%" ||
        string[i - 1] == "^" ||
        string[i - 1] == "(" ||
        string[i + 1] == ")";

      if (numArray.includes(string[i]) == true) {
        if (string[i - 1] == ")" || string[i + 1] == "(") {
          error = "Not A Function";
          return true;
        }
      }
      if (numArray1.includes(string[i]) !== true && checker) {
        error = `Invalid left-hand side expression in postfix operation`;
        return true;
      }
    }
    return false;
  }

  if (typeof x === "string") {
    let newString = x.split(/[\s]/).join("");
    //Check if non-relatable token is inside string
    if (
      newString.length !== newString.split(/[^0-9-+*=/%()]/).join("").length
    ) {
      console.log("unexpected token");
    } else if (newLoop(newString) == true) {
      console.log(`Recieved Error, ${error}`);
    } else {
      console.log(eval(newString));
    }
  } else {
    console.log(`Error it is a ${typeof x}`);
  }
}

const string = "144+4/1*(7)";

module.exports = mathSolver
