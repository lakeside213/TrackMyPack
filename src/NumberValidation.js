export function validateNumber(number) {
  let numberToValidate = number.toString();
  if (
    numberToValidate.length === 20 ||
    numberToValidate.length === 11 ||
    (numberToValidate.length === 16 && numberToValidate.matches("[0-9]+"))
  ) {
    return true;
  } else {
    return false;
  }
}

export function getCourier(number) {
  let numberToValidate = number.toString();
  if (numberToValidate.length === 20) {
    return "DHL";
  } else if (numberToValidate.length === 11) {
    return "GLS";
  } else if (numberToValidate.length === 16) {
    return "HERMES";
  }
}
