function printAllSubsets(arr) {
    return arr.reduce((subsets, value) => {
        return subsets.concat(
            subsets.map(set => [ ...set, value ])
        )
    }, [[]]);
}

console.log(printAllSubsets([1, 2, 3]));