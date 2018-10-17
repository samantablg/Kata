export const fizzbuzz = (value) => {
    var n = value.toString();
    if ( n%3 == 0 ) {
        if ( n%5 == 0){
            return 'FIZZBUZZ';
        }
        else {
            return 'FIZZ'
        }
    }
    else if ( n%5 == 0 ) {
        return 'BUZZ';
    }
    else { 
        return n;
    }
};