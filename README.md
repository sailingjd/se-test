

# Selenium Challenge Repo

## Instructions
* Use Selenium Web-Driver to automate the scenario below
* Include code with all the dependencies
* Provide exact steps to run the code

## Test Scenario
1. Open [Medhok](http://www.medhok.com) website
2. Click on menu option **What We Do** and link **QUALITY** *\(displayed in the bottom column\)*
3. Verify the 1st bullet point's text in the paragraph is **Full HEDIS® administrative measures filing**
4. Click on the **360Star** link
5. Click on the **www.Medicare.gov** link present in the first paragraph.
6. Navigate back to [Medhok](http://www.medhok.com) website
7. In the search \(*Top Right*\), search for **Contact**
8. Verify that **Contact Us** link is displayed in the search results.
9. Click **Read More** in the **Contact Us** search results
10. Verify that address is correctly mentioned as **5550 W Idlewild Avenue Suite 150 Tampa, FL 33634**

## Prerequisites
* [Java 8 JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html) installed
* [NodeJS](https://nodejs.org/en/download/) (*v4.5.0LTS*) and [NPM](https://www.npmjs.com/) (*v3.10.6*) installed and available on your system %PATH%. *If you install the Node .msi file from the NodeJS website, NPM is included and both are placed on your system's %PATH% automatically.*
* To get Firefox to work, you must download version 46 or older from [here](https://ftp.mozilla.org/pub/firefox/releases/46.0/), since the Marionette webdriver for Firefox 47+ does not support actions yet, [read more](http://www.theautomatedtester.co.uk/blog/2016/selenium-webdriver-and-firefox-47.html).

## Framework Setup
* Clone the se-test project to your local machine
```
git clone https://github.com/sailingjd/se-test.git
```
* cd into the cloned directory and run:
```
npm install --save
```
* 
