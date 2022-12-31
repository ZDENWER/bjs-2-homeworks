function compareArrays(arr1, arr2){
    return (arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index])) 
}

function getUsersNamesInAgeRange(users, gender) {
    let resultFilter = users.filter(user => user.gender === gender);

    if (users.length === 0 || resultFilter.length === 0){
        return 0;
    }

    let resultMap = resultFilter.map(user => user.age);

    return resultMap.reduce((acc, age) => acc + age) / resultMap.length;
}

