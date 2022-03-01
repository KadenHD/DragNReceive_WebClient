import { assert } from 'chai';
import { roledName, reformatedDates } from '../src/functions/index.js';

describe('Functions', () => {
    describe('Rôle format', () => {
        it('Rôle format is valid', () => {
            let result = roledName("1");
            assert.equal(result, "Super Administrateur");
        });
        it('Rôle key is out of range', () => {
            let result = roledName("5");
            assert.equal(result, null);
        });
    });

    describe('Reformated dates', () => {
        it('Dates format n+1', () => {
            let result = reformatedDates("2022-03-01T20:55:10.000Z");
            assert.equal(result, "01/03/2022 - 21:55:10");
        });
        it('Dates format n+1 while 9', () => {
            let result = reformatedDates("2022-03-01T19:55:10.000Z");
            assert.equal(result, "01/03/2022 - 20:55:10");
        });
        it('Wrong format send null', () => {
            let result = reformatedDates("15 Janvier");
            assert.equal(result, null);
        });
    })
});

