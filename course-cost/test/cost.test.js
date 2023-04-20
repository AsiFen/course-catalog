describe('courseCost function', function () {
    describe('This function calculate the cost 3 different courses and applies discounts if applicable.', function () {
        it('returns the cost of the Python course when its the 23rd day of the month and 40% discount is applicaple', function () {
            assert.deepEqual({
                status: 'success',
                code: 'r1',
                description: 'Python',
                cost: 7850,
                discount: 3140,
                amountDue: 4710
            }, courseCost('p1', "2023-05-23"));
        });

        it('returns the cost of the Ruby course when its the 13th day of the month and 20% discount is applicable', function () {
            assert.deepEqual({
                status: 'success',
                code: 'r1',
                description: 'Ruby on Rails intro',
                cost: 5675,
                discount: 1135,
                amountDue: 4540
            }, courseCost('r1', '2023-07-13'));
        });

        it('returns "Invalid code" when wrong course code is entered', function () {
            assert.deepEqual({ status: 'Invalid code' }, courseCost('P2', '2023-06-22'))
        });

        it('returns "Invalid day" when day entered is not a number', function () {
            assert.deepEqual({ status: 'Invalid day' }, courseCost('p2', '2023-13-22'));

        });

        it('returns the cost of the Python course on the 1st of the month when no discount is applicable', function () {
            assert.deepEqual({
                status: 'success',
                code: 'r1',
                description: 'Intro to PHP course',
                cost: 8990,
                discount: 0,
                amountDue: 8990
            }, courseCost('p2', '2023-04-01'));
        });

    });
});