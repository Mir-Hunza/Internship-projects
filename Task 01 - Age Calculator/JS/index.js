let dob = document.getElementById("birthDate");
        let result = document.getElementById("result");
        let currentYear = new Date().getFullYear();
        let currentMonth = new Date().getMonth() + 1;
        let currentDate = new Date().getDate();

        document.getElementById("calculateAge").addEventListener("click", () => {
            if (dob.value == "") {
                result.innerHTML = "Please select Date";
            } else {
                calculateAgeDifference(dob.value);
            }
        })

        document.getElementById("clear").addEventListener("click", () => {
            window.location.reload();
        })

        function calculateAgeDifference(start) {
            let dobYear = parseInt(start.substring(0, 4), 10);
            let dobMonth = parseInt(start.substring(5, 7), 10);
            let dobDate = parseInt(start.substring(8, 10), 10);

            //year difference
            let yearAgeDiff = currentYear - dobYear;

            //month difference
            let monthAgeDiff;
            if (currentMonth >= dobMonth) {
                monthAgeDiff = currentMonth - dobMonth;
            } else {
                yearAgeDiff--;
                monthAgeDiff = 12 + currentMonth - dobMonth;
            }

            //days difference
            let dateAgeDiff;
            if (currentDate >= dobDate) {
                dateAgeDiff = currentDate - dobDate;
            } else {
                monthAgeDiff--;
                noOfDaysInDOB = daysInMonth(dobMonth, dobYear);
                dateAgeDiff = noOfDaysInDOB + currentDate - dobDate;

                //case when monthAgeDiff goes negative
                if (monthAgeDiff < 0) {
                    monthAgeDiff = 11;
                    yearAgeDiff--;
                }
            }
            result.innerHTML = `${yearAgeDiff} Years ${monthAgeDiff} Months ${dateAgeDiff} Days`;
            function daysInMonth(month, year) {
                return new Date(year, month, 0).getDate();
            }
        }