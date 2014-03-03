var snail = function(arr) {
    var sorted = []; //this is the array snailed
    var i = 0; 
    var j = 0;
    var iFinal = false;
    var aux = 0;
    var n = arr.length;
    var n2 = 0;

    while (sorted.length/n < n ) {

        //rigth
        if (i === (aux) && n > i) {
            console.log('rigth');
            j = aux ;

            while (j < (n-aux)) {
                sorted.push(arr[i][j]);             
                j++;
            }
            j--;
            i++;

        } 
        //down
        if (i !== aux && j > i && i < n && j < n) {console.log('down');
            while(i <= j){
               // console.log(i,j);
            sorted.push(arr[i][j]);
            i++;
            }
            
        }
        //left
        if (i == n && !iFinal) {i--;console.log('left');
            iFinal = true;
            //i--;
            i = i-aux;

            while (j > aux ) {
                //j--;

                sorted.push(arr[i][j]);
                
                j--;

            }
            i = j;
            j = aux;
            //aux++;
           
        }
        //up
        if(iFinal && j < n)
        {     
        console.log('up');  
            i--;

           
                while(i >= (aux+1)){
                    sorted.push(arr[i][j]);               
                    i--;
                    }
                iFinal = false; 
                aux++;
        }

        
   n2++;
   if(n2 === 100){
    break;
   }    

    }
    return sorted;
};

var test;

test = function(input, expected) {
    var output;
    output = snail(input);
    console.log(("" + expected) === ("" + output), "Expected " + expected + " but got " + output);
};

test([
    []
], []);

test([
    [1]
], [1]);

test([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
], [1, 2, 3, 6, 9, 8, 7, 4, 5]);

test([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
], [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);

test([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11]
], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);


