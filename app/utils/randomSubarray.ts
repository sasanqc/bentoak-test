function randomSubarray(originalArray: any[], subarraySize: number) {
  if (subarraySize > originalArray.length) {
    throw new Error(
      "Subarray size cannot be greater than the original array size."
    );
  }

  for (let i = originalArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [originalArray[i], originalArray[j]] = [originalArray[j], originalArray[i]];
  }

  const randomSubarray = originalArray.slice(0, subarraySize);

  return randomSubarray;
}
export default randomSubarray;
