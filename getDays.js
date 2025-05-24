
let outDate="28/08/2020"

function getNumbersOfDays(outDate){
    let splitDate=outDate.split('/');
    console.log(splitDate)// Output: ['28', '08', '2020']
    let day=splitDate[0];
    let month=splitDate[1];
    let year=splitDate[2];
    let formattedDate=`${month}/${day}/${year}`;// Output: '08/28/2020'
    console.log(formattedDate);
    let getMillisecondFormattedDate=new Date(formattedDate).getTime();// Output: 1598572800000
    let getMillisecondTodaysDate=new Date().getTime();// Output: current date in milliseconds
    let diff=getMillisecondTodaysDate-getMillisecondFormattedDate;// Output: difference in milliseconds
    let noOfDays=Math.floor(diff/(24*60*60*1000));// Output: number of days
    return noOfDays;// Output: 1093 (or any other number depending on the current date)
}
console.log(getNumbersOfDays(outDate))