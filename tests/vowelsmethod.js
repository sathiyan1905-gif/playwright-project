let name = "Sathiyan"
let vowels = "aeiou"
let count = 0;
for(let i =0 ; i< name.length; i++)
{
    if(vowels.includes(name[i]))
    {
        count = count + 1;
    }
}
console.log('The number of vowels in the name is:', count)