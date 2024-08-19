function duplicates(nums){
    const count = {};
    let duplicatesCount = 0;

    nums.forEach(num => { count[num] = (count[num] || 0) + 1;
    });

    for (let key in count) {
        if ( count[key] > 1) {
            duplicatesCount++;
        }
    }

    console.log(duplicatesCount);
    return duplicatesCount
}

const nums = [1,2,2,3,4,4,4,5];

duplicates(nums);