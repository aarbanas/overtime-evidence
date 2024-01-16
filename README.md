# Overtime evidence

Simple Node script for calculating overtime hours logged in specified period in Teamwork

## Usage
Just follow the next steps.
1. Prepare teamwork [API key](https://apidocs.teamwork.com/docs/teamwork/df5a63302d729-getting-started-with-the-teamwork-com-api). 
2. Fill necessary environment variables
3. Install dependencies 
``` shell
$ npm install
```
4. Run the script
```bash
$ node index.js 2024-01-01
```
or

```bash
$ node index.js 2024-01-01 2024-01-31
```
where first argument is start date and is mandatory and second argument is end date which is optional. In case there is no end date script is reading till today.