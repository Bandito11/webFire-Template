# webFire-Template
A template using Firebase and TypeScript for a simple webserver using Firebase

# TODO: 
- Add src folder
src /n
   .../index.html
   .../robots.txt
   .../css
   .../pages
   .../js
   .../libs
   .../assets

- robots.txt should have:
User-agent: *
Allow: /

Should be edited to fit your needs


- sitemap.xml should have

<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

   <url>

      <loc>your website domain</loc>

      <lastmod>2017-01-16</lastmod>

      <changefreq>always</changefreq>

      <priority>1.0</priority>

   </url>

</urlset> 

The sitemap should be edited to fit the needs of the user, more info @ https://support.google.com/webmasters/answer/183668?hl=en

==========================================================================
# Instructions:

- Go to https://git-scm.com/ and follow the instruction to install git.
- Create a Github account on www.github.com
- run < git config --global user.email "email@example.com" > on the Terminal to set the email for your github account. 
- run < cd ~/path/to/project > 
- run < git clone https://github.com/Bandito11/webFire-Template.git myprojectname >
- run < cd /toproject >
- git remote rm origin
- Install nodejs from www.nodejs.org
- Open the terminal (command prompt if on Windows) and run < npm install -g firebase-tools >
- Run < cd ~/path/to/project > on the Terminal. 
- On the terminal run < npm install >. This will install all the packages in the package.json.
- Go to firebase.google.com and follow the instructions how to create an account.
- Run < firebase init > on the Terminal and follow the instructions on the screen. I am not going to go in deep on this because the docs on the Firebase homepage are pretty clear on this. 
- After creating the project, run < firebase serve > on the terminal. If everything installed correctly a webpage with the text "Hello World" should be shown when typing < localhost:5000 > on your favorite web browser.




If something is not clear not be timid to ask Google for help :)


Seriously, unless something was setup wrong don't create an issue >:(



