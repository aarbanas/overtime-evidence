require('dotenv').config()

const getLogs = async (startDate, endDate) => {
    const result = await fetch(`${process.env.URL}` + 
        "?page=1" + 
        "&pageSize=50" + 
        "&getTotals=true" + 
        `&userId=${process.env.USER_ID}` + 
        `&fromDate=${startDate}` + 
        `&toDate=${endDate}` + 
        "&sortBy=date" + 
        "&sortOrder=desc" + 
        "&matchAllTags=true", {
        headers: {
            'Authorization': `Basic ${Buffer.from(process.env.API_KEY).toString('base64')}` 
        }
    })

    return await result.json()
}

const startDate = process.argv[2];
if (!startDate) {
    throw new Error("pass start date as argument in format YYYYMMDD, YYYY-MM-DD, YYYYMMDDhhmmss or YYYY-MM-DDThh:mm:ssZ")
}

let endDate = process.argv[3];
if (!endDate) {
    const date = new Date()
    endDate = date.toISOString().split('T')[0]
}

getLogs(startDate, endDate)
    .then((result) => {
        let totalOvertimeHours = 0
        for (const timeLog of result.timeEntries) {
            if (timeLog.tags.length) {
                totalOvertimeHours += timeLog.hoursDecimal
            }
        }

        console.log("Total overtime hours:", totalOvertimeHours)
    })
    .catch(e => console.log(e))
