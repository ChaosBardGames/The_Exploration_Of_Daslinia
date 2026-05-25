
const Pages = [
    "Title_Card",
    "Intro_I",
    "Intro_II",
    "Intro_III",
    "Intro_IV",
    "Intro_V",
    "Intro_VI",
];

function First_Load() {

    for(let i = 0; i < Pages.length; i++) {      
        const Page_Name = Pages[i];
        if (i !== PageToChange) {
            document.getElementById(PageName).style.display = "none";
        } else {
            document.getElementById(PageName).style.display = "block";
        }
    }
}
