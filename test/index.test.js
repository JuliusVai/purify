const functions = require("../src/index");

test("multiplier", function() {
  const expected = [2, 4, 6];
  const numbers = [1, 2, 3];
  const expectedNumbers = [1, 2, 3];
  const result = functions.multiply(numbers, 2);
  expect(result).toEqual(expected);
  expect(numbers).toEqual(expectedNumbers);
});

test("absolute", function() {
  const expected = [2, 4, 6];
  const numbers = [-1, 2, -3, 4, 6];
  const expectedNumbers = [-1, 2, -3, 4, 6];
  const result = functions.absolute(numbers);
  expect(result).toEqual(expected);
  expect(numbers).toEqual(expectedNumbers);
});

test("concatNames", function() {
  const expected = ["Alan Sugar", "Hamza Julius"];
  const array = [
    {
      firstName: "Alan",
      lastName: "Sugar"
    },
    {
      firstName: "Hamza",
      lastName: "Julius"
    }
  ];
  const expectedArray = [
    {
      firstName: "Alan",
      lastName: "Sugar"
    },
    {
      firstName: "Hamza",
      lastName: "Julius"
    }
  ];
  const result = functions.concatNames(array);
  expect(result).toEqual(expected);
  expect(array).toEqual(expectedArray);
});

test("numberStrings", function() {
  const expected = ["Hello", "2", "World", "6"];
  const array = ["Hello", 2, "World", 6];
  const expectedArray = ["Hello", 2, "World", 6];
  const result = functions.numbersToStrings(array);
  expect(result).toEqual(expected);
  expect(array).toEqual(expectedArray);
});

test("length", function() {
  const expected = ["125", "World", "ASDASDASD"];
  const array = ["ASDASDASD", "125", "World"];
  const expectedArray = ["ASDASDASD", "125", "World"];
  const result = functions.sortByLength(array);
  expect(result).toEqual(expected);
  expect(array).toEqual(expectedArray);
});

test("splice", function() {
  const expected = [2, 1];
  const array = [5, 4, 3, 2, 1];
  const expectedArray = [5, 4, 3, 2, 1];
  const result = functions.lastTwo(array);
  expect(result).toEqual(expected);
  expect(array).toEqual(expectedArray);
});

test("cars", function() {
  const expected = [
    {
      make: "Vauxhall",
      model: "Astra",
      year: 1993
    },
    {
      make: "Mercedes-Benz",
      model: "A-class",
      year: 2018
    },
    {
      make: "Toyata",
      model: "Prius",
      year: 2000
    }
  ];
  const array = [
    {
      make: "Vauxhall",
      model: "Astra",
      year: 1992
    },
    {
      make: "Mercedes-Benz",
      model: "A-class",
      year: 2017
    },
    {
      make: "Toyata",
      model: "Prius",
      year: 1999
    }
  ];
  const expectedArray = [
    {
      make: "Vauxhall",
      model: "Astra",
      year: 1992
    },
    {
      make: "Mercedes-Benz",
      model: "A-class",
      year: 2017
    },
    {
      make: "Toyata",
      model: "Prius",
      year: 1999
    }
  ];
  const result = functions.incrementYear(array);
  expect(result).toEqual(expected);
  expect(array).toEqual(expectedArray);
});
