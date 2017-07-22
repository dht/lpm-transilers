import expect from 'expect'
import {prettifyHtml} from '../../src/_utils/prettify';
import * as mock from './../mocks/utils/mock_jsx';


// a place to run tests before adding the to the main suite
// run with "npm run test:play"

describe('prettify', function () {

    it('should prettify a simple JSX', function () {

        const result  = prettifyHtml(mock.before1, 0);
        expect(result).toEqual(mock.after1)
    });

 it('should prettify a complex JSX', function () {

        const result  = prettifyHtml(mock.before2, 0);
        expect(result).toEqual(mock.after2)
    });

 it('should prettify a complex JSX #2', function () {

        const result  = prettifyHtml(mock.before3, 0);
        expect(result).toEqual(mock.after3)
    });


});
