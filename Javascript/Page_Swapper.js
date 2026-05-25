function Page_Swapper {
  
  for(let i = 0; i < Pages.length; i++) {  
    
    const Page_Name = Pages[i];
    
    if (i !== Page_To_Change) {
      document.getElementById(Page_Name).style.display = "none";
    } else {
      document.getElementById(Page_Name).style.display = "block";
    }
  }
}
