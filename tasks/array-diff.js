// https://www.codewars.com/kata/523f5d21c841566fde000009

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// If a value is present in b, all of its occurrences must be removed from the other:

const arrayDiff = (a, b) => {
    const diff = a.filter((item) => !b.includes(item));

    return diff;
}
