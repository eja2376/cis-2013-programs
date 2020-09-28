var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
    floatAge = parseFloat(prompt("Please enter your age:"));
    floatDays = parseFloat(floatAge * 365.25).toFixed(2);
    floatMonths = parseFloat(floatAge * 12).toFixed(2);
    intWeeks = parseInt(floatDays / 7).toFixed(2);
    intFortnights = parseInt(floatDays / 14).toFixed(2);
    alert("Age entered: " + floatAge + " Your age in days: " + floatDays + " Your age in months: " + floatMonths + " Your age in weeks: " + intWeeks + " Your age in fortnights: " + intFortnights);
