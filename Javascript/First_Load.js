
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
        const Page_To_Change = 0;
        const Page_Name = Pages[i];
        if (i !== Page_To_Change) {
            document.getElementById(Page_Name).style.display = "none";
        } else {
            document.getElementById(Page_Name).style.display = "block";
        }
    }
    var Page_Id = 1;
}
