
var satr = 'SHDilsuz'
for(i = 0;i<=satr.length;i++)
{
    satr[i]=='D'? satr = satr.replace('D','Д'):''
    satr[i]=='i'? satr = satr.replace('i','и'):''
    satr[i]=='l'? satr = satr.replace('l','л'):''
    satr[i]=='s'? satr = satr.replace('s','с'):''
    satr[i]=='u'? satr = satr.replace('u','у'):''
    satr[i]=='z'? satr = satr.replace('z','з'):''
    satr[i]=='SH'? satr = satr.replace('SH','Ш'):''
    satr[i]=='h'? satr = satr.replace('h','x'):''
    
}
console.log(satr)
// satr.replace('i','и')
// satr.replace('l','л')
// satr.replace('s','с')
// satr.replace('u','у')
// satr.replace('z','з')
// console.log(satr[i])

// console.log(satr.replace('D','Д'))