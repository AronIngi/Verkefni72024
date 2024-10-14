/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if(isString(str))
  {
    var longest_word = "";
    words = str.split(' ');
    for(const word of words)
    {
      if(word.length > longest_word.length)
      {
        longest_word = word;
      }
    }
    return longest_word;
  }
  return null;
}
console.assert(longest("a ab") === "ab");
console.assert(longest("") === "");
console.assert(longest(null) === null);

function shortest(str) {
  if(isString(str))
  {
    var shortest_word = str;
    words = str.split(' ');
    for(const word of words)
    {
      if(word.length < shortest_word.length)
      {
        shortest_word = word;
      }
    }
    return shortest_word;
  }
  return null;
}
console.assert(shortest("a ab") === "a");
console.assert(shortest("") === "");
console.assert(shortest(null) === null);

function reverse(str) {
  if(isString(str))
  {
    var words = str.split('');
    var reverse = str.split('');
    var j = words.length-1;
    var i = 0;
    while(j >= 0)
    {
      reverse[i] = words[j];
      i++;
      j--;
    }
    return reverse.join("");
  }
  return null;
}
console.assert(reverse("abc") === "cba");
console.assert(reverse("") === "");
console.assert(reverse(null) === null);

function palindrome(str) {
  if(isString(str))
  {
    if(str === "")
      return false;
    else if(str === reverse(str))
      return true;
  }
  return false;
}
console.assert(palindrome("racecar") === true, "1");
console.assert(palindrome("") === false, "2");
console.assert(palindrome(null) === false, "3");

function vowels(str) {
  if(isString(str))
  {
    const words = str.split('');
    var count = 0;
    for(const word of words)
    {
      if(VOWELS.includes(word))
      {
        count++;
      }

    }
    return count;
  }
  return 0;
}
console.assert(vowels("aba") === 2, "1");
console.assert(vowels("") === 0, "2");
console.assert(vowels(null) === 0, "3");

function consonants(str) {
  if(isString(str))
  {
    const words = str.split('');
    var count = 0;
    for(const word of words)
    {
      if(CONSONANTS.includes(word))
      {
        count++;
      }

    }
    return count;
  }
  return 0;
}
console.assert(consonants("aba") === 1, "1");
console.assert(consonants("") === 0, "2");
console.assert(consonants(null) === 0, "3");

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert("Ýttu á OK og skrifaðu inn streng í texta boxið sem kemur upp");
  var input = prompt();
  alert("longest: " + longest(input)
        + "\n"
        + "shortest: " + shortest(input)
        + "\n"
        + "reverse: " + reverse(input)
        + "\n"
        + "palindrome: " + palindrome(input)
        + "\n"
        + "vowels: " + vowels(input)
        + "\n"
        + "consonants: " + consonants(input)
  );
}
