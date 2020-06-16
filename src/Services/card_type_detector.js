const creditCardType = (number) => {
  if (number.match(RegExp("^(34|37)(\\d{13})$"))) {
    return "American Express"
  } else if (number.match(RegExp("^(38|39)(\\d{12})$"))) {
    return "Diners Club"
  } else if (number.match(RegExp("^(4)(\\d{12}|\\d{15}|\\d{18})$"))) {
    return "Visa"
  } else if (number.match(RegExp("^(51|52|53|54|55)(\\d{14})$"))) {
    return "MasterCard"
  }
}

export default creditCardType;
