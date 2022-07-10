function rot13(str) {
  const CHARACTER_CHART = {
    A: "N",
    B: "O",
    C: "P",
    D: "Q",
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
    N: "A",
    O: "B",
    P: "C",
    Q: "D",
    R: "E",
    S: "F",
    T: "G",
    U: "H",
    V: "I",
    W: "J",
    X: "K",
    Y: "L",
    Z: "M",
  }

  let decodedStr = "";

  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      decodedStr += CHARACTER_CHART[str[i]]
    }
    else {
      decodedStr += str[i];
    }
  }
  return decodedStr;
}

//Input you text here
console.log(rot13(""));

