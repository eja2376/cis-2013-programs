var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
    floatAge = parseFloat(prompt("Please enter your age:"));
    floatDays = parseFloat(floatAge * 365.25);
    floatMonths = parseFloat(floatAge * 12);
    intWeeks = parseInt(floatDays / 7);
    intFortnights = parseInt(floatDays / 14);
    alert("Age entered: " + floatAge + " Your age in days: " + floatDays + " Your age in months: " + floatMonths + " Your age in weeks: " + intWeeks + " Your age in fortnights: " + intFortnights);
