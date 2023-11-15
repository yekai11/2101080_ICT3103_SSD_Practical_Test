
Docker Compose:
Network name: question_Jenkins


WEBAPP:
NOTE: Sorry prof using react as a front-end requires you to manually upload the txt file.

1. Select the file chooser and upload the txt file (10-million-password-list-top-10000) found on the local directory
2. type in any password
3. Wait for it to check
4a. If password found page will reload
4b. - If password not found will be redirected to another page with the password you have entered
    - Click on the logout button to return to the homepage

UI Testing:
- I've utilised cypress as a frontend testing tool

Git Server:
- I did not upload the webapp i've made onto the local gitserver but instead it can be found on github: https://github.com/yekai11/2101080_ICT3103_SSD_Practical_Test

SonarQube:
- Login: Admin Password: 654321
- Issues found were all from the OWASP dependency check report generated and not the code I have written. 
- E.g.: 1. <HTML> tag missing "lang" and/or "xml:lang"
        2. Remove this deprecated "name" attribute.
        3. "<table>" tags should have a description
