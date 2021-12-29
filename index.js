
// Kiril-lotin tarjimon dasturi

switch('lotin-kirill'){
 case 'lotin-kirill':

    var satr = "Assalomu alaykum"       //Bu yerga lotin so'zni kiriting 

    for(i = 0;i<=satr.length;i++)
    {
      satr[i]+satr[i+1] == 'Sh' ? satr = satr.replace('Sh','Ш'):''
      satr[i]+satr[i+1] == 'sh' ? satr = satr.replace('sh','ш'):''
      satr[i]+satr[i+1] == 'Sch'? satr = satr.replace('Sch','Щ'):''
      satr[i]+satr[i+1] == 'sch'? satr = satr.replace('sch','щ'):''
      satr[i]+satr[i+1] == 'Ch' ? satr = satr.replace('Ch','Ч'):''
      satr[i]+satr[i+1] == 'ch' ? satr = satr.replace('ch','ч'):''
      satr[i]+satr[i+1] == 'Yo' ? satr = satr.replace('Yo','Ё'):''
      satr[i]+satr[i+1] == 'Yo' ? satr = satr.replace('yo','ё'):''
      satr[i]+satr[i+1] == 'Ya' ? satr = satr.replace('Ya','Я'):''
      satr[i]+satr[i+1] == 'ya' ? satr = satr.replace('ya','я'):''
      satr[i]+satr[i+1] == 'Yu' ? satr = satr.replace('Sh','Ю'):''
      satr[i]+satr[i+1] == "O'" ? satr = satr.replace("O'","У"):''
      satr[i]+satr[i+1] == "o'" ? satr = satr.replace("o'",'у'):''
      satr[i] =='A'? satr = satr.replace('A','A'):''
      satr[i] =='a'? satr = satr.replace('a','a'):''
      satr[i] =='B'? satr = satr.replace('B','Б'):''
      satr[i] =='b'? satr = satr.replace('b','б'):''
      satr[i] =='D'? satr = satr.replace('D','Д'):''
      satr[i] =='d'? satr = satr.replace('d','д'):''
      satr[i] =='E'? satr = satr.replace('E','E'):''
      satr[i] =='e'? satr = satr.replace('e','e'):''
      satr[i] =='F'? satr = satr.replace('F','Ф'):''
      satr[i] =='f'? satr = satr.replace('f','ф'):''
      satr[i] =='G'? satr = satr.replace('G','Г'):''
      satr[i] =='g'? satr = satr.replace('g','г'):''
      satr[i] =='H'? satr = satr.replace('H','X'):''
      satr[i] =='h'? satr = satr.replace('h','x'):''
      satr[i] =='I'? satr = satr.replace('I','И'):''
      satr[i] =='i'? satr = satr.replace('i','и'):''
      satr[i] =='J'? satr = satr.replace('J','Ж'):''
      satr[i] =='j'? satr = satr.replace('j','ж'):''
      satr[i] =='K'? satr = satr.replace('K','К'):''
      satr[i] =='k'? satr = satr.replace('k','к'):''
      satr[i] =='L'? satr = satr.replace('L','Л'):''
      satr[i] =='l'? satr = satr.replace('l','л'):''
      satr[i] =='M'? satr = satr.replace('M','M'):''
      satr[i] =='m'? satr = satr.replace('m','м'):''
      satr[i] =='N'? satr = satr.replace('N','Н'):''
      satr[i] =='n'? satr = satr.replace('n','н'):''
      satr[i] =='P'? satr = satr.replace('P','П'):''
      satr[i] =='p'? satr = satr.replace('p','п'):''
      satr[i] =='Q'? satr = satr.replace('Q','К'):''
      satr[i] =='q'? satr = satr.replace('q','к'):''
      satr[i] =='R'? satr = satr.replace('R','Р'):''
      satr[i] =='r'? satr = satr.replace('r','р'):''
      satr[i] =='S'? satr = satr.replace('S','C'):''
      satr[i] =='s'? satr = satr.replace('s','c'):''
      satr[i] =='T'? satr = satr.replace('T','Т'):''
      satr[i] =='t'? satr = satr.replace('t','т'):''
      satr[i] =='U'? satr = satr.replace('U','У'):''
      satr[i] =='u'? satr = satr.replace('u','у'):''
      satr[i] =='V'? satr = satr.replace('V','В'):''
      satr[i] =='v'? satr = satr.replace('v','в'):''
      satr[i] =='Y'? satr = satr.replace('Y','Й'):''
      satr[i] =='y'? satr = satr.replace('y','й'):''
      satr[i] =='Z'? satr = satr.replace('Z','З'):''
      satr[i] =='z'? satr = satr.replace('z','з'):''
      satr[i] =="'" ? satr = satr.replace("'" ,'ь'):''
      satr[i] =='TS'? satr = satr.replace('TS','Ц'):''
      satr[i] =='ts'? satr = satr.replace('ts','ц'):''

    }
    console.log(`lotin-kiril: ${satr}`)    
 ;break;
 default: console.log('');break;
}


// Bu yerda kiril-lotin so'z kiriting
switch('kiril-lotin'){
    case 'kiril-lotin':
   
       var satr = " "  //Bu yerga kiril so'zni kiriting
   
       for(i = 0;i<=satr.length;i++)
       {
         satr[i] =='A'? satr = satr.replace('A','A'):''
         satr[i] =='a'? satr = satr.replace('a','a'):''
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
         satr[i] =='Й'? satr = satr.replace('Й','Y'):''
         satr[i] =='й'? satr = satr.replace('й','y'):''
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
           
       }
       console.log(`kiril-lotin: ${satr}`)    
    ;break;
    default: console.log('');break;
   }