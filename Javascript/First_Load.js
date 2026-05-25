function First_Load() {
  var PageToChange = 1;
  const Pages = [
    "Title_Card",
    "Intro_I",
    "Intro_II",
    "Intro_III",
    "Intro_IV",
    "Intro_V",
    "Intro_VI",
  ];
    for(let PagesLength of Pages) {
      
      let Current_Page = 1;
      
      if (!(PagesLength === PageToChange)) {
        const PageToHide = Pages[Current_Page];
        document.getElementById(PageToHide).style.display = "none";
      } else {
        const PageToShow = Pages[Current_Page];
        document.getElementById(PageToShow).style.display = "block";
      }
      
      Current_Page = Current_Page++; 
      
    }
}
