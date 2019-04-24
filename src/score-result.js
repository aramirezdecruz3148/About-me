function scoreResult(qOne, qTwo, qThree, qFour, qFive) {
    qOne = qOne.toLowerCase();
    qTwo = qTwo.toLowerCase();
    qThree = qThree.toLowerCase();
    qFour = qFour.toLowerCase();
    qFive = qFive.toLowerCase();

    let score = 0;

    if(qOne === 'bugs') {
        score++;
    }

    if(qTwo === 'pizza') {
        score++;
    }

    if(qThree === 'kitties') {
        score++;
    }

    if(qFour === 'trump') {
        score++;
    }

    if(qFive === 'humaniod') {
        score++;
    }
    return score;
}
export default scoreResult;