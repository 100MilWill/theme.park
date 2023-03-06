
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                                                          
     __ __ _______  ____     __  ____ __       _       ___ __    __ 
  __/ // /<  / __ \/ __ \   /  |/  (_) /      | |     / (_) /   / / 
 /_  _  __/ / / / / / / /  / /|_/ / / /       | | /| / / / /   / /  
/_  _  __/ / /_/ / /_/ /  / /  / / / /___     | |/ |/ / / /___/ /___
 /_//_/ /_/\____/\____/  /_/  /_/_/_____/     |__/|__/_/_____/_____/  
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
