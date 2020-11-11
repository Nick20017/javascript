function generate(min, max) {
    var num;

    do {
        num = Math.round(Math.random() * 100);
    } while(num > max || num < min);

    return num;
}

// Task 1
var arr1 = new Array();

for(var i = 0; i < 50; i++) {
    arr1.push(generate(1, 50));
}

for(var i = 50; i < 100; i++) {
    arr1[i] = generate(51, 100);
}

// Task 2
var arr2 = new Array();

var n = 0;
while(n < 50) {
    arr2.push(n + 1);
    n++;
}

n = 0;
while(n < arr2.length) {
    document.getElementById('task2').innerHTML += "<li>" + arr2[n] + "</li>";
    n++;
}

// Task 3
var arr3 = new Array();

for(var i = 0; i < 50; i++) {
    arr3.push(generate(1, 50));
}

// Array with numbers that can't be divided by 3
var arr3_1 = new Array();

// Array with number that can be divided by 3
var arr3_2 = new Array();

for(num in arr3) {
    if(num % 3 == 0)
        arr3_2.push(num);
    else
        arr3_1.push(num);
}

arr3_1.sort(function(a, b) { a - b});
arr3_2.sort(function(a, b) { a - b});

arr3_1.reverse();

arr3 = arr3_1.concat(arr3_2);

// Task 4
var arr4 = new Array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");

arr4.unshift(arr4.pop());

var content = new Vue({
    el: '#content',
    components: {
        'task1': {
            data: function() {
                return {
                    arr1: arr1
                }
            },

            template: '<div><p>Task 1</p><ul><li v-for="el in arr1">{{ el }}</li></ul></div>'
        },
        'task3': {
            data: function() {
                return {
                    arr3: arr3
                }
            },

            template: '<div><p>Task 3</p><ul><li v-for="el in arr3">{{ el }}</li></ul></div>'
        },
        'task4': {
            data: function() {
                return {
                    arr4: arr4
                }
            },

            template: '<div><p>Task 4</p><ul><li v-for="el in arr4">{{ el }}</li></ul></div>'
        }
    }
});
