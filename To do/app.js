//Show or hide all button list

let allList= document.getElementById("al");
allList.addEventListener("click", () =>
{
    let Listing= document.getElementById("allBtn");
    if(Listing.style.display !="inline")
    {
        Listing.style.display="inline";
    } else
    {
        Listing.style.display="none"
    }
})

//Show or hide work button list
let works= document.getElementById("wrk");
works.addEventListener("click", () =>
{
    let working= document.getElementById("workBtn");
    if(working.style.display !="inline")
    {
        working.style.display="inline";
    } else
    {
        working.style.display="none"
    }
})

//Show or hide study button list
let studs= document.getElementById("std");
studs.addEventListener("click", () =>
{
    let studying= document.getElementById("studyBtn");
    if(studying.style.display !="inline")
    {
        studying.style.display="inline";
    } else
    {
        studying.style.display="none"
    }
})

//Show or hide home button list
let homey= document.getElementById("hme");
homey.addEventListener("click", () =>
{
    let homely= document.getElementById("homeBtn");
    if(homely.style.display !="inline")
    {
        homely.style.display="inline";
    } else
    {
        homely.style.display="none"
    }
})