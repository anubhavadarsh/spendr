export const getMinimumBills = (set, maxLimit) => {
  let subsets = [[]];
  let ans = [];
  let maxTillNow = 0;
  for (const el of set) {
    const last = subsets.length - 1;
    for (let i = 0; i <= last; i++) {
      let temp = [];
      let sum = 0;
      subsets.push([...subsets[i], el]);
      temp = [...subsets[i], el];
      sum = temp.reduce(
        (partialSum, a) => partialSum + parseFloat(a["amt"]),
        0
      );

      if (sum <= maxLimit) {
        let last_sum = 0;
        if (ans.length > 0) {
          for (let m of ans[ans.length - 1]) {
            last_sum += +m["amt"];
          }
        }
        if (maxTillNow < sum) {
          maxTillNow = sum;
          ans = [];
        }
        if (ans.length > 0 && last_sum <= sum) {
          if (last_sum < sum) {
            ans.shift();
          }
          ans.push(temp);
        }
        if (ans.length === 0) {
          ans.push(temp);
        }
      }
    }
  }
  return ans;
};
