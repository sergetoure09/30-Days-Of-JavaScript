const countries=[
    {country: 'English',count:91},
    {country: 'French',count:45},
    {country: 'Arabic',count:25},
    {country: 'Spanish',count:24},
    {country:'Russian',count:9},
    {country:'Portuguese', count:9},
    {country:'Dutch',count:8},
    {country:'German',count:7},
    {country:'Chinese',count:5},
    {country:'Swahili',count:4}
    ];


console.log(countries.sort((a,b)=>{
    if (a.count>b.count) return 1;
    if(a.count<b.count) return -1
}))