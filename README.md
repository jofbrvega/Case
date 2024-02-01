# Static Form
This project provides a static web form created with HTML, CSS and Javascript. 

Supported in the latest 2 major versions of Chrome on desktop MacOS.

## Description
This project was created for a job application, where I was tasked to build a webpage using plain HTML, CSS, and Javascript.

The header should remain fixed at the top of the browser, while the footer should be at the bottom of the page (although not in the same manner as the header).
The project is primarily intended to be solved using HTML and CSS, Javascript should be used where it is both possible and reasonable.

The code ideally should be easy to understand, accessible (WCAG level 3 compliant), and easy to maintain. Upon filling out the form, visitors should be redirected to page 2.
The information does not need to be stored, as the purpose of the exercise is to assess front-end knowledge.

The form should adhere to specific input guidelines:
* **Förnamn (First Name):** Should not be empty.
* **E-post (Email):** Should be a valid email address and not be empty.
* **Postnummer (Zip Code):** Should consist of either 5 digits or 3 + 2 digits, and should not be empty.
* **Förnamn på förälder (Parent's First Name):** Should not be empty, and its value is not allowed to be the same as the "Förnamn" field. It can only contain A-Z (uppercase/lowercase).

The project comprises two pages: a start page and an end page.

Upon correctly filling out the form, visitors will be redirected to page 2.


## Solution and Motivation of the Project
### The Form 
The majority of the form is created in HTML and validation attributes on form elements. The attributes used to ensure valid input are:
* `required`
* `type`
* `pattern`
* `oninvalid`
* `oninput`

If the data is correctly added and follows the rules applied to the input, the visitor can complete the form without any validations or warnings.

### Javascript Functions

* One of the form guidelines required checking that "Förnamn på förälder" is not empty, not equal to "Förnamn," and contains uppercase/lowercase A-Z. For this input, I created a function that initially
checks whether the inserted data is not equal to "Förnamn" and that it contains at least one letter from A-Z. If the inserted data does not follow to the rules, a validation/warning will be displayed until it is correctly filled. Afterward, the visitor may submit the form.

* Since the webpage is written in Swedish, I created a function that checks the webpage language attribute and applies the correct language to the validation message.

* Another function added in the Javascript file is the "Öppna hjälp popup" that toggles the class name on the information block, which can be shown/hidden as the visitor wishes.

### WCAG Level 3
The rules that I have followed are:

* Perceivable Content - The color contrast is appropriate to the readability.

* Operable Interaction - It is possible to navigate with only keyboard for users who rely on it.

* Understandable information - It ensures that users can understand the form by adding validation messages and placeholders.


## Installation 
To use this project locally:

#### 1a. Clone the repository by downloading ZIP     
![Download ZIP on Github](/images/downloadzip.png)

or 

#### 1b. Writing in your terminal/command line
    git clone https://github.com/your-username/static-form.git

## How to use the page
1. Fill out the form with your information, you will recieve a warning if the format of your information is incorrect.
2. Click on "Skicka" button to submit the form.
3. If you need any information, click on "Öppna hjälp popup" button to view additional information.


## Credits
* Developed by Johanna V
* Built with HTML, CSS and Javascript


