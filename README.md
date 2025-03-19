# wikipedia Search Application
🚀 A simple and responsive Wiki Search application built using HTML, CSS, JS that fetches data from the Wikipedia API and displays search results dynamically.
# Live Demo
👉 Click [here](https://vercel.com/new?onboarding=true) to view the live app 

<img src="assets/ui.png" height="300px" width="500px"/>
<img src="assets/ui2.png" height="300px" width="500px"/>
# 📁 Folder Structure
- 🗃️ assets
  - ui.png
  - ui2.png
  - demo.mp4
- index.html
- index.js
- index.css
# 📌 Wikipedia API Documentation
```
https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=SEARCH_QUERY
```
# Fetching data from REST api
```
 fetch("https://apis.ccbp.in/wiki-search?search="+input)
.then((e)=>{return e.json()})
.then((e)=>{console.log(e)}).catch((error)=>{console.error(error)})
```
# 👨‍💻 Author
## Suman Pal
git hub - [git hub](https://github.com/suman-typ-08) and email -  [sumanpal.2595@gmail.com](sumanpal.2595@gmail.com)
