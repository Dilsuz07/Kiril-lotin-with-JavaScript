function transliterate(word){

    var answer = "";

    A = new Array();
    satr[i] =='I'? satr = satr.replace('I','и'):''
    satr[i] =='i'? satr = satr.replace('i','и'):''
    satr[i] =='TS'? satr = satr.replace('TS','Ц'):''
    satr[i] =='ts'? satr = satr.replace('ts','ц'):''
    satr[i] =='U'? satr = satr.replace('U','У'):''
    satr[i] =='u'? satr = satr.replace('u','у'):''
    satr[i] =='K'? satr = satr.replace('K','K'):''
    satr[i] =='k'? satr = satr.replace('k','k'):''
    satr[i] =='E'? satr = satr.replace('E','E'):''
    satr[i] =='e'? satr = satr.replace('e','e'):''
    satr[i] =='E'? satr = satr.replace('E','E'):''
    satr[i] =='e'? satr = satr.replace('e','e'):''
    satr[i] =='N'? satr = satr.replace('N','Н'):''
    satr[i] =='n'? satr = satr.replace('n','н'):''
    satr[i] =='G'? satr = satr.replace('G','Г'):''
    satr[i] =='g'? satr = satr.replace('g','г'):''
    satr[i] =='Sh'? satr = satr.replace('SH','Ш'):''
    satr[i] =='sh'? satr = satr.replace('sh','ш'):''
    satr[i] =='Sch'? satr = satr.replace('Sch','Щ'):''
    satr[i] =='sch'? satr = satr.replace('sch','щ'):''
    satr[i] =='Z'? satr = satr.replace('Z','З'):''
    satr[i] =='z'? satr = satr.replace('z','з'):''
    satr[i] =='H'? satr = satr.replace('H','X'):''
    satr[i] =='h'? satr = satr.replace('h','x'):''
    satr[i] =="'" ? satr = satr.replace("'" ,'ь'):''
    satr[i] =='Yo'? satr = satr.replace('Yo','Ё'):''
    satr[i] =='yo'? satr = satr.replace('yo','ё'):''
    satr[i] =='I'? satr = satr.replace('I','Й'):''
    satr[i] =='i'? satr = satr.replace('i','й'):''
    satr[i] =='F'? satr = satr.replace('F','Ф'):''
    satr[i] =='f'? satr = satr.replace('f','ф'):''
    satr[i] =='V'? satr = satr.replace('V','B'):''
    satr[i] =='v'? satr = satr.replace('v','b'):''
    satr[i] =='A'? satr = satr.replace('A','A'):''
    satr[i] =='a'? satr = satr.replace('a','a'):''
    satr[i] =='P'? satr = satr.replace('P','П'):''
    satr[i] =='p'? satr = satr.replace('p','п'):''
    satr[i] =='R'? satr = satr.replace('R','Р'):''
    satr[i] =='r'? satr = satr.replace('r','р'):''
    satr[i] =='O'? satr = satr.replace('O','o'):''
    satr[i] =='L'? satr = satr.replace('L','Л'):''
    satr[i] =='l'? satr = satr.replace('l','л'):''
    satr[i] =='D'? satr = satr.replace('D','Д'):''
    satr[i] =='d'? satr = satr.replace('d','д'):''
    satr[i] =='J'? satr = satr.replace('J','Ж'):''
    satr[i] =='j'? satr = satr.replace('j','ж'):''
    satr[i] =='E'? satr = satr.replace('E','Э'):''
    satr[i] =='e'? satr = satr.replace('e','э'):''
    satr[i] =='Ya'? satr = satr.replace('Ya','Я'):''
    satr[i] =='ya'? satr = satr.replace('ya','я'):''
    satr[i] =='Сh'? satr = satr.replace('Ch','Ч'):''
    satr[i] =='ch'? satr = satr.replace('ch','ч'):''
    satr[i] =='M'? satr = satr.replace('M','M'):''
    satr[i] =='m'? satr = satr.replace('m','m'):''
    satr[i] =='T'? satr = satr.replace('T','Т'):''
    satr[i] =='t'? satr = satr.replace('t','т'):''
    satr[i] =='B'? satr = satr.replace('B','Б'):''
    satr[i] =='b'? satr = satr.replace('b','б'):''
    satr[i] =='Yu'? satr = satr.replace('Yu','Ю'):''
    satr[i] =='yu'? satr = satr.replace('yu','ю'):''
    satr[i] =='K'? satr = satr.replace('K','K'):''
    satr[i] =='k'? satr = satr.replace('k','k'):''
   

    A["Й"]="I";//
    A["Ц"]="TS";//
    A["У"]="U";//
    A["К"]="K";//
    A["Е"]="E";//
    A["Н"]="N";//
    A["Г"]="G";//
    A["Ш"]="SH";//
    A["Щ"]="SCH";//
    A["З"]="Z";//
    A["Х"]="H";//
    A["Ъ"]="'";//
    A["ё"]="yo";//
    A["й"]="i";//
    A["ц"]="ts";//
    A["у"]="u";//
    A["к"]="k";//
    A["е"]="e";//
    A["н"]="n";//
    A["г"]="g";//
    A["ш"]="sh";//
    A["щ"]="sch";//
    A["з"]="z";//
    A["х"]="h";//
    A["ъ"]="'";//
    A["Ф"]="F";//
    A["Ы"]="I";//
    A["В"]="V";//
    A["А"]="A";//
    A["П"]="P";//
    A["Р"]="R";//
    A["О"]="O";//
    A["Л"]="L";//
    A["Д"]="D";//
    A["Ж"]="ZH";//
    A["Э"]="E";//
    A["ф"]="f";//
    A["ы"]="i";//
    A["в"]="v";//
    A["а"]="a";//
    A["п"]="p";//
    A["р"]="r";//
    A["о"]="o";//
    A["л"]="l";//
    A["д"]="d";//
    A["ж"]="zh";//
    A["э"]="e";//
    A["Я"]="YA";//
    A["Ч"]="CH";//
    A["С"]="S";//
    A["М"]="M";//
    A["И"]="I";//
    A["Т"]="T";//
    A["Ь"]="'";//
    A["Б"]="B";//
    A["Ю"]="YU";//
    A["я"]="ya";//
    A["ч"]="ch";//
    A["с"]="s";//
    A["м"]="m";//
    A["и"]="i";//
    A["т"]="t";//
    A["ь"]="'";//
    A["б"]="b";//
    A["ю"]="yu";//


    
    satr[i] =='A'? satr = satr.replace('A','A'):''
    satr[i] =='a'? satr = satr.replace('a','A'):''
    satr[i] =='Б'? satr = satr.replace('Б','B'):''
    satr[i] =='б'? satr = satr.replace('б','b'):''
    satr[i] =='В'? satr = satr.replace('В','V'):''
    satr[i] =='в'? satr = satr.replace('в','v'):''
    satr[i] =='Г'? satr = satr.replace('Г','G'):''
    satr[i] =='г'? satr = satr.replace('г','g'):''
    satr[i] =='Д'? satr = satr.replace('Д','D'):''
    satr[i] =='д'? satr = satr.replace('д','d'):''
    satr[i] =='Е'? satr = satr.replace('Е','E'):''
    satr[i] =='е'? satr = satr.replace('е','e'):''
    satr[i] =='Ё'? satr = satr.replace('Ё','Yo'):''
    satr[i] =='ё'? satr = satr.replace('ё','yo'):''
    satr[i] =='Ж'? satr = satr.replace('Ж','J'):''
    satr[i] =='ж'? satr = satr.replace('ж','j'):''
    satr[i] =='З'? satr = satr.replace('З','Z'):''
    satr[i] =='з'? satr = satr.replace('з','z'):''
    satr[i] =='И'? satr = satr.replace('И','I'):''
    satr[i] =='и'? satr = satr.replace('и','i'):''
    satr[i] =='Й'? satr = satr.replace('Й','I'):''
    satr[i] =='й'? satr = satr.replace('й','i'):''
    satr[i] =='К'? satr = satr.replace('К','K'):''
    satr[i] =='к'? satr = satr.replace('к','k'):''
    satr[i] =='Л'? satr = satr.replace('Л','L'):''
    satr[i] =='л'? satr = satr.replace('л','l'):''
    satr[i] =='М'? satr = satr.replace('М','M'):''
    satr[i] =='м'? satr = satr.replace('м','m'):''
    satr[i] =='Н'? satr = satr.replace('Н','N'):''
    satr[i] =='н'? satr = satr.replace('н','n'):''
    satr[i] =='П'? satr = satr.replace('П','P'):''
    satr[i] =='п'? satr = satr.replace('п','p'):''
    satr[i] =='Р'? satr = satr.replace('Р','R'):''
    satr[i] =='р'? satr = satr.replace('р','r'):''
    satr[i] =='С'? satr = satr.replace('С','S'):''
    satr[i] =='с'? satr = satr.replace('с','s'):''
    satr[i] =='Т'? satr = satr.replace('Т','T'):''
    satr[i] =='т'? satr = satr.replace('т','t'):''
    satr[i] =='У'? satr = satr.replace('У','U'):''
    satr[i] =='у'? satr = satr.replace('у','u'):''
    satr[i] =='Ф'? satr = satr.replace('Ф','F'):''
    satr[i] =='ф'? satr = satr.replace('ф','f'):''
    satr[i] =='Х'? satr = satr.replace('Х','X'):''
    satr[i] =='х'? satr = satr.replace('х','x'):''
    satr[i] =='Ц'? satr = satr.replace('Ц','Ts'):''
    satr[i] =='ц'? satr = satr.replace('ц','ts'):''
    satr[i] =='Ч'? satr = satr.replace('Ч','Ch'):''
    satr[i] =='ч'? satr = satr.replace('ч','ch'):''
    satr[i] =='Ш'? satr = satr.replace('Ш','Sh'):''
    satr[i] =='ш'? satr = satr.replace('ш','sh'):''
    satr[i] =='Щ'? satr = satr.replace('Щ','Sch'):''
    satr[i] =='щ'? satr = satr.replace('щ','sch'):''
    satr[i] =='Ь'? satr = satr.replace('Ь',"'"):''
    satr[i] =='ь'? satr = satr.replace('ь',"'"):''
    satr[i] =='Э'? satr = satr.replace('Э','E'):''
    satr[i] =='э'? satr = satr.replace('э','e'):''
    satr[i] =='Ю'? satr = satr.replace('Ю','Yu'):''
    satr[i] =='ю'? satr = satr.replace('ю','yu'):''
    satr[i] =='Я'? satr = satr.replace('Я','Ya'):''
    satr[i] =='я'? satr = satr.replace('я','ya'):''
























    a["Ё"]="YO";a["Й"]="I";a["Ц"]="TS";a["У"]="U";a["К"]="K";a["Е"]="E";a["Н"]="N";a["Г"]="G";
    a["Ш"]="SH";a["Щ"]="SCH";a["З"]="Z";a["Х"]="H";a["Ъ"]="'";
    a["ё"]="yo";a["й"]="i";a["ц"]="ts";a["у"]="u";a["к"]="k";a["е"]="e";a["н"]="n";a["г"]="g";
    a["ш"]="sh";a["щ"]="sch";a["з"]="z";a["х"]="h";a["ъ"]="'";
    a["Ф"]="F";a["Ы"]="I";a["В"]="V";a["А"]="a";a["П"]="P";a["Р"]="R";a["О"]="O";a["Л"]="L";
    a["Д"]="D";a["Ж"]="ZH";a["Э"]="E";
    a["ф"]="f";a["ы"]="i";a["в"]="v";a["а"]="a";a["п"]="p";a["р"]="r";a["о"]="o";a["л"]="l";
    a["д"]="d";a["ж"]="zh";a["э"]="e";
    a["Я"]="Ya";a["Ч"]="CH";a["С"]="S";a["М"]="M";a["И"]="I";a["Т"]="T";a["Ь"]="'";a["Б"]="B";a["Ю"]="YU";
    a["я"]="ya";a["ч"]="ch";a["с"]="s";a["м"]="m";a["и"]="i";a["т"]="t";a["ь"]="'";a["б"]="b";a["ю"]="yu";



for (i in word){

    if (A[word[i]] === 'undefined'){
        answer += word[i];
        }
    else {
        answer += A[word[i]];
        }

return answer;
}
}
console.log(transliterate('ОЛЧА'))