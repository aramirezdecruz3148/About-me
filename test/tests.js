const test = QUnit.test;

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

test('all answers wrong', (assert) => {
    // arrange
    const qOne = '';
    const qTwo = '';
    const qThree = '';
    const qFour = '';
    const qFive = '';
    const expected = 0;
    // act

    const result = scoreResult(qOne, qTwo, qThree, qFour, qFive);

    // assert
    assert.equal(result, expected);
});

test('all answers right equal 5', (assert) => {
    // arrange
    const qOne = 'bugs';
    const qTwo = 'pizza';
    const qThree = 'kitties';
    const qFour = 'Trump';
    const qFive = 'humaniod';
    const expected = 5;
    // act

    const result = scoreResult(qOne, qTwo, qThree, qFour, qFive);

    // assert
    assert.equal(result, expected);
});

test('does lowercase work correctly', (assert) => {
    //Arrange
    const qOne = 'buGs';
    const qTwo = 'PIzza';
    const qThree = 'kiTTies';
    const qFour = 'TrumP';
    const qFive = 'humANiod';
    const expected = 5;
    //Act
    const result = scoreResult(qOne, qTwo, qThree, qFour, qFive);
    //Assert
    assert.equal(result, expected);
});
