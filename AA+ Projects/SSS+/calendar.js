const toggleButton = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

function toggleSideBar(){
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');

    closeAllSubMenus();
};

function toggleSubMenu(button){

    if(!button.nextElementSibling.classList.contains('show'))
    closeAllSubMenus();

    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');

    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
};

function closeAllSubMenus(){
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('remove')
    });
};


//calendar
const calendar = document.querySelector(".calendar"),
    date = document.querySelector(".date"),
    daysContainer = document.querySelector(".days"),
    prev = document.querySelector(".prev"),
        next = document.querySelector(".next");

let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

//function to add days
function initCalendar() {
    //to get prev month days current month and next month days
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month +1, 0);
    const prevLastDay = new Date (year, month, 0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = firstDay.getDay();
    const nextDays = 7 - lastDay.getDay() - 1;

    //update date at top of the calendar
    date.innerHTML = months[month] + " " + year;

//adding days on DOM
let days = "";

//prev month days
for (let x = day; x > 0; x--) {
    days += `<div class="day prev-date" >${prevDays - x + 1}</div>`;
    }

//current month days
    for (let i = 1; i <= lastDate; i++) {
        //if day is today add class today
        if (
            i === new Date().getDate() &&
            year === new Date().getFullYear() &&
            month === new Date().getMonth()
        ) {
            days += `<div class="day today" >${i}</div>`;
        } else {
            days += `<div class="day " >${i}</div>`;
        }
    }

    //next month days
    for (let i = 1; i <= nextDays; i++) {
        days += `<div class="day next-date " >${i}</div>`;
    }


    daysContainer.innerHTML = days;
}

//run the calendar
initCalendar();



