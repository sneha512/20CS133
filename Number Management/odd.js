num = parseInt(range.value,30);
let j = 0;
for(let i=1; i<=num; i++) {
    if(i%2 != 0) {
        odd[j] = i;
        j++;
    }
    document.write(odd[j]+" ");
}
