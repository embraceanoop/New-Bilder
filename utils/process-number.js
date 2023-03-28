exports.processNumber = (number) => {
  let finalNumber = number;
  if (!number.includes("@s.whatsapp.net")) number = number + "@s.whatsapp.net";
  if (number[0] == "9" && number[1] == "1") return number;
  if (number[0] == "+" && number[1] == "9" && number[2] == ["2"])
    return finalNumber.substring(1);
  if (number[0] == "0" && number[1] == "8") {
    let deleted = number.substring(1);
    finalNumber = "91" + deleted;
    return finalNumber;
  }
  if (number[0] == "8") return "91" + number;

  return number;
};
