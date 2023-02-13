const removeAnagrams = (Globalarr) => {
  let resultArray : string[] = [];

  if (!Array.isArray(Globalarr)) {
    throw Error('INVALID_ARGUMENT');
  }
  if (Globalarr.some((elem) => typeof elem !== 'string')) {
    throw Error('INVALID_ELEMENT_IN_ARRAY');
  }

  const sortingArray = Globalarr.map((elem) => {
    return elem.split('').sort().join('');
  });

  sortingArray.forEach((SortElem, i, arr) => {
    const copy = [...sortingArray];

    const index = sortingArray.indexOf(SortElem);

    copy.splice(index, 1);

    if (!copy.some((elem) => elem === SortElem)) {
        let something : string = Globalarr[i];
      resultArray.push(something);
    }
  });

  return resultArray;
};

export default removeAnagrams;
