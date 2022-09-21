const myArgs = process.argv.slice(2);
for (let each of myArgs) {
  if (each.length > 256) {
    console.log("string contains too many symbols");
  }
}
if (myArgs.length === 0) {
  return "";
} else if (myArgs.length > 64) {
  console.log("too many strings in list");
} else if (isNaN(myArgs[0]) && !isNaN(myArgs[1])) {
  console.log(myArgs[0]);
} else if (!isNaN(myArgs[0]) && isNaN(myArgs[1])) {
  console.log(myArgs[0]);
} else {
  console.log(lcs(myArgs));
}

function lcs(arr) {
  let length = arr.length;
  let first = arr[0],
    res = "";
  for (let i = 0; i < first.length; i++) {
    for (let j = i + 1; j <= first.length; j++) {
      let sub = first.substr(i, j - i),
        b = 1;
      for (b = 1; b < length; b++) if (!arr[b].includes(sub)) break;
      if (b == length && res.length < sub.length) res = sub;
    }
  }
  return res;
}
