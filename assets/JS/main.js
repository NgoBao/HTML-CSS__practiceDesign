//scroll animation

$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    console.log(document.getElementsByName("hmtl"))
    if (scroll > 0) {
        $("#header").addClass("active");
    }
    else {
        $("#header").removeClass("active");
    }
});



// arrow animation

function dropDownSkillComponent(e) {
    console.log(e.target.classList);
    let iconTurn = e.target.classList;
    let listSkills = e.target.parentNode.parentNode.parentNode.children[1]


    if (iconTurn.length <= 5) {
        iconTurn.add("turn-u")
        listSkills.style.display = "block";
    } else {
        switch (iconTurn[iconTurn.length - 1]) {
            case "turn-u":
                iconTurn.remove("turn-u")
                listSkills.style.display = "none";
                iconTurn.add('turn-d')
                break;
        
            default:
                iconTurn.remove("turn-d")
                listSkills.style.display = "block";
                iconTurn.add('turn-u')
                break;
        }
    }
}

let skillComponentBar = document.querySelectorAll(".dropdown")

skillComponentBar.forEach((per) => {
    per.addEventListener("click", dropDownSkillComponent)
})

// button qualification


let buttonQualification = document.querySelectorAll('.qualification__button');
console.log(buttonQualification);
buttonQualification.forEach((ele, ind) => {
    ele.addEventListener("click", (e) => {
        let qualificationWork = document.querySelector(".qualification__work").style
        let qualificationEducation = document.querySelector('.qualification__education').style

        console.log(qualificationWork)
        console.log(qualificationEducation);
        switch (ind) {
            case 0:
                console.log("afasfw");
                qualificationEducation.display = "block"
                if (qualificationWork.display === "block") {
                    qualificationWork.display = "none"
                }    
                
                break;
        
            default:
                if (qualificationEducation.display === "block") {
                    qualificationEducation.display = "none"
                }    
                qualificationWork.display = "block"
                break;
        }
    })  
    
})

//close modal

let closeIconList = document.querySelectorAll(".close-icon")
let modalList = document.querySelectorAll('.service__modal')
let serviceComponent = document.querySelectorAll('.viewmore-btn')

modalList.forEach((ele, ind) => {
    ele.addEventListener("click", (e) => {
        if ($(e.target).is(".service__modal")) {
            console.log($(e.target).closest(".service__modal").hide());
        }
    })
})

serviceComponent.forEach((ele, ind) => {
    ele.addEventListener('click', (e) => {
        
        if ($(e.target).is(".viewmore-btn")) {
            modalList[ind].style.display = ""                                           
        }
    })
})

closeIconList.forEach((ele, ind) => {
    ele.addEventListener("click", (e) => {
        modalList[ind].style.display = 'none'
    })
})

//coursel


let showComponentContent = document.querySelectorAll('.show-work__content-component')
let count = 1;
let listDot = document.querySelectorAll(".current-work__dot")

//default

showComponentContent[0].style.display = "flex"
listDot[0].style.opacity = 1;
// coursel button
function courselButton(ele) {

    if (ele.classList[ele.classList.length - 1].includes("next")) {
        if (count === 2) {
            count = 0
        } else {
            ++count
        }
        
        showComponentContent.forEach((ele) => {
            ele.style.display = "none"
            console.log("adaf")
        })
        listDot.forEach(ele => {
            ele.style.opacity = 0.4
            console.log("adaf")
        }) 
        showComponentContent[count].style.display = "flex"
        listDot[count].style.opacity = 1
    } else {
        if (count === 0) {
            count = 2
        } else {
            --count
        }
        
        showComponentContent.forEach((ele) => {
            ele.style.display = "none"
        })
        listDot.forEach(ele => {
            ele.style.opacity = 0.4
        }) 
        showComponentContent[count].style.display = "flex"
        listDot[count].style.opacity = 1
    }
}

setInterval(() => {
    showComponentContent.forEach((ele) => {
        ele.style.display = "none"
    })
    listDot.forEach(ele => {
        ele.style.opacity = 0.4
    }) 
    showComponentContent[count].style.display = "flex"
    listDot[count].style.opacity = 1
    count = count === 2 ? 0 : count + 1
    
}, 6000);


// menu button

let menuButton = document.querySelector("#navbar-bottom button")
let extendMenu = document.querySelector('#navbar-bottom__component-extend')
console.log(menuButton);
menuButton.addEventListener("click", (e) => {
    
    if (extendMenu.style.display = "none") {
        extendMenu.style.display = 'block'
    } else {
        extendMenu.style.display = "none"
    }
})

let times = document.querySelector('.times')

times.addEventListener('click', (e) => {
    extendMenu.style.display = "none"
})  

