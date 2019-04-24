function scoreResult(qOne, qTwo, qThree, qFour, qFive) {
    qOne = qOne.toLowerCase();
    qTwo = qTwo.toLowerCase();
    qThree = qThree.toLowerCase();
    qFour = qFour.toLowerCase();
    qFive = qFive.toLowerCase();

    let score = 0;

    if(qOne === 'bugs') {
        score += 1;
    }

    if(qTwo === 'pizza') {
        score += 1;
    }

    if(qThree === 'kitties') {
        score += 1;
    }

    if(qFour === 'trump') {
        score += 1;
    }

    if(qFive === 'humaniod') {
        score += 1;
    }
    return score;
}
export default scoreResult;