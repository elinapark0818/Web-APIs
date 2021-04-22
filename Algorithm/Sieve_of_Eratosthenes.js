function sieve(n) {
    const arr = [];
    for (let i = 0; i < n + 1; i += 1) {
        arr.push(true);
    }
    for (let i = 2; i * i <= n; i += 1) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += 1) {
                arr[j] = false;
            }
        }
    }
    arr.splice(0, 2, false, false);
    const result = arr.filter((value) => {
        return value !== false;
    })
    return result.length;
}

// 다른 방법

let solution = (n) => {
    let arr = Array(n + 1).fill(true).fill(false, 0, 2);

    for (let i = 2; i * i <= n; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }

    return arr.filter(e => e).length;
}

