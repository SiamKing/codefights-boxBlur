function boxBlur(image) {
      var results = [],
          lineArr = [],
          i = 0,
          j = 0,
          k;


    while (i < image.length - 2) {
        var arr = []
        arr.push(image[i].slice(j, j + 3));
        arr.push(image[i + 1].slice(j, j + 3));
        arr.push(image[i + 2].slice(j, j + 3));
        arr = [].concat(...arr)
        lineArr.push(Math.floor(arr.reduce((tot, val) => tot + val, 0) / 9))

        if (image[i][j + 3] !== undefined) {
            j++;
        } else if (i + 2 == image.length && image[i + 2][j + 4] === undefined) {
            results.push(lineArr);
            break;
        } else {
            results.push(lineArr);
            lineArr = [];
            i++;
            j = 0;
        }
    }

   return results
}
