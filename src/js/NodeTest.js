function PrefixInteger(num, length) {
    return (Array(length).join('0') + num).slice(-length);
}

let deskid = 1; //座位号
let classid = 1; //考场号

let CETNumbers = "3400301811" + PrefixInteger(classid, 3) + PrefixInteger(deskid, 2)
console.log(CETNumbers)

setInterval(function() {
    if(deskid < 30) {
        deskid++;
    } else {
        classid++;
        deskid = 1;
    }

    let CETNumbers = "3400301811" + PrefixInteger(classid, 3) + PrefixInteger(deskid, 2)
    console.log(CETNumbers)
}, 500)