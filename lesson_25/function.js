function chiaHetCho3(num) {
    return num % 3 == 0;
}
console.log(chiaHetCho3(3));
// Bài 1------------------------------
var array = ['Hảo', 'Toàn', 'Thảo'];
array.forEach(function (name) {
    console.log('Xin chào ' + name);
});
// Bài 2----------------------------------
var array = [1, 99, 5, 9, 10];
var numbers = array.map(function (num) {
    return (num * 2);
});
console.log(numbers.sort(function (a, b) { return a - b }));
// Bài 3----------------------------------------
var array = [
    'Nguyễn Phước Hảo',
    'Trần Kim Thảo',
    'Nguyễn Quang Quang Hoàng',
    'Hiếu hhuang'
];
var dem = 0
var people = array.forEach(function (name) {
    var fullname = name.split(' ');
    var firstname = (fullname[fullname.length - 1]);
    if (firstname.includes('h') || firstname.includes('H')) {
        dem++;
    }
})
console.log('Số lượng tên chứa kí tự H:' + dem);
// Bài 4 -----------------------------
var array = [2, 5, 1, 23];
var soKhongChiaHetCho3 = array.filter(function (num) {
    if ((num + 2) % 3 == 0) {
        return;
    } else {
        return num + 2
    }

});
console.log(soKhongChiaHetCho3);
// Bài 5--------------------------------
var size = [154, 176, 167, 170]
var s = 0;
var m = 0;
var l = 0;
var height = size.forEach( num=> {
    if (num < 165) {
        s++;
    }
    if (num >= 165 && num < 170) {
        m++;
    }
    if (num >= 170) {
        l++;
    }
});
console.log('Số người mặc áo size s:' + s);
console.log('Số người mặc áo size m:' + m);
console.log('Số người mặc áo size l:' + l);

