import creditCardType from "../../src/Services/card_type_detector";

test("Filter function", () => {
  let TEST_CASES = [
    ["341234567890123", "American Express"],
    ["371234567890123", "American Express"],
    ["38123456789012", "Diners Club"],
    ["5112345678901245", "MasterCard"],
    ["5212345678901245", "MasterCard"],
    ["5312345678901245", "MasterCard"],
    ["5412345678901245", "MasterCard"],
    ["5512345678901245", "MasterCard"],
    ["4512345678901", "Visa"],
    ["4512345678901345", "Visa"],
    ["4512345678901345345", "Visa"],

  ]

  TEST_CASES.forEach((item) => {
    expect(creditCardType(item[0])).toBe(item[1])
  })

});
