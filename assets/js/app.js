const EntirePage = document.querySelector('*')
const body = document.querySelector('body')
const selectionWrapper = document.querySelector('.tamagotchies-wrapper')
const MainGameWrapper = document.querySelector('.main-game-wrapper')
const Warrior = document.querySelector('.warrior')

const healthBar = document.querySelector('.health-bar')
const healthWrapper = document.querySelector('.health')
const MentalBar = document.querySelector('.mental-health')
const mentalWrapper = document.querySelector('.mental')
const ExhaustionBar = document.querySelector('.exhaustion-bar')
const exhaustionWrapper = document.querySelector('.exhaustion')
const HapinessBar = document.querySelector('.hapiness-bar')
const hapinessWrapper = document.querySelector('.hapiness')
const HungerBar = document.querySelector('.hunger-bar')
const hungerWrapper = document.querySelector('.hunger')

const Buttons = document.querySelectorAll('.button')
const SliderAdventure = document.querySelector('.slider-adventure')
const SliderFood = document.querySelector('.slider-food')
const SliderActivities = document.querySelector('.slider-activities')
const SubSliderAdventure = document.querySelectorAll('.sub-sliders-adventure')
let SubSliderFood; 
const SubSliderActivities = document.querySelectorAll('.sub-sliders-activities')
const ActionsTaken = document.querySelector('.text-about-actions')
let deathAnimation = false;
let crouchAnimation = false;
let animation = false;
let runAnimation = false
let TotalHealth = 100
let TotalMental = 100
let TotalExhaustion = 100
let TotalHapiness = 100
let TotalHunger = 100
let frameTransitorWarrior = 0
IdleWarrior()
Decay()

//FAIRE UN RESUME DU LOOT AVEC FLECHE EN HAUT A GAUCHE QUI DEVOILE UN PARCHEMIN EN PIXLE

function tamagochi(like, yuk, tName) {
    if (like === yuk) {
        console.log("same")
        if (this.dislike = 0) {
            this.dislike = ingredients[yuk++]
        }else{
            this.dislike = ingredients[yuk--]
        }
    } if (like !== yuk) {
        this.dislike = ingredients[yuk]
    }
    this.yummy = ingredients[like]
    this.name = tName
    console.log(this.name)
}

Warrior.alt = "Diana"
Warrior.src = warrior[frameTransitorWarrior]
let Diana = new tamagochi(Math.floor(Math.random() * (12 - 0) + 0), Math.floor(Math.random() * (12 - 0) + 0), "Diana")
console.log(Diana.yummy)
console.log(Diana.dislike)

for(let i = 0; i < 4; i++) {
    let food = document.createElement("p")
food.classList.add('sub-sliders-food', 'sliders')
food.textContent = ingredients[Math.floor(Math.random() * (12 - 0) + 0)]
if(food.textContent)
SliderFood.appendChild(food)
SubSliderFood = document.querySelectorAll('.sub-sliders-food')
}
    



//Animation de la warrior
function IdleWarrior() {
    frontFramesWarrior()
    function frontFramesWarrior() {
        setTimeout(() => {
            frontTransitionWarrior()
        }, 150)
    }

    function frontTransitionWarrior() {
        if (frameTransitorWarrior == 5) {
            frameTransitorWarrior = 0
        }
        if (animation == true || deathAnimation == true || crouchAnimation == true || runAnimation == true) {
            frontFramesWarrior()
        } else {
            frameTransitorWarrior++
            Warrior.src = warrior[frameTransitorWarrior]
            frontFramesWarrior()
        }
    }
}

function Training() {
    animation = true
    let attackPattern = 0
    attackWarrior()

    function attackWarrior() {
        setTimeout(() => {
            attackTiming()
        }, 50)
    }

    function attackTiming() {
        attackPattern++
        if (attackPattern == 9) {
            attackPattern = 0
            animation = false
            return
        }
        Warrior.src = warriorSelect[attackPattern]
        attackWarrior()
    }
}

function Crouching() {
    crouchAnimation = true
    let crouchPattern = 0
    crouchWarrior()

    function crouchWarrior() {
        setTimeout(() => {
            crouchTiming()
        }, 200)
    }

    function crouchTiming() {
        crouchPattern++
        if (crouchPattern == 6) {
            crouchPattern = 0
            crouchAnimation = false
            return
        }
        Warrior.src = warriorCrouch[crouchPattern]
        crouchWarrior()
    }
}

function Running() {
    runAnimation = true
    let runPattern = 0
    runWarrior()

    function runWarrior() {
        setTimeout(() => {
            runTiming()
        }, 100)
    }

    function runTiming() {
        runPattern++
        if (runPattern == 16) {
            runPattern = 0
            runAnimation = false
            Warrior.classList.remove('running')
            if (Warrior.classList.contains('night-time')) {
                body.style.backgroundImage = "url('../assets/images/background.png')"
                Warrior.classList.remove('night-time')
            } else {
                body.style.backgroundImage = "url('../assets/images/background-reverse.png')"
                Warrior.classList.add('night-time')
            }

            return
        }
        Warrior.src = warriorRun[runPattern]
        runWarrior()
    }
}

function deathWarrior() {
    deathAnimation = true
    let deathPattern = 0
    deathWarrior()

    function deathWarrior() {
        setTimeout(() => {
            deathTiming()
        }, 90)
    }

    function deathTiming() {
        deathPattern++
        if (deathPattern == 11) {
            deathPattern = 0
            deathanimation = false
            return
        }
        Warrior.src = warriorDeath[deathPattern]
        deathWarrior()
    }
}

function Decay() {
    timeoutHealth()
    timeoutMental()
    timeoutExhaustion()
    timeoutHapiness()
    timeoutHunger()

    function timeoutHealth() {
        setTimeout(() => {
            DmgTickHealth()
        }, 20000)
    }
    function DmgTickHealth() {
        TotalHealth -= 1
        if (TotalHealth < 0) TotalHealth = 0
        healthBar.style.width = TotalHealth + "%"
        setTimeout(() => {
           DmgHealth()
        }, 700)

        function DmgHealth() {
            healthWrapper.style.width = TotalHealth + "%"
        }
        if (TotalHealth == 0) {
            deathWarrior()
        }
        timeoutHealth()
    }

    function timeoutMental() {
        setTimeout(() => {
            DmgTickMental()
        }, 10000)
    }
    function DmgTickMental() {
        TotalMental -= 1
        if (TotalMental < 0) TotalMental = 0
        MentalBar.style.width = TotalMental + "%"
        setTimeout(() => {
            DmgMental()
        }, 700)

        function DmgMental() {
            mentalWrapper.style.width = TotalMental + "%"
        }
        timeoutMental()
    }

    function timeoutExhaustion() {
        setTimeout(() => {
            DmgTickExhaustion()
        }, 10000)
    }
    function DmgTickExhaustion() {
        TotalExhaustion -= 2
        if (TotalExhaustion < 0) TotalExhaustion = 0
        ExhaustionBar.style.width = TotalExhaustion + "%"
        setTimeout(() => {
            DmgExhaustion()
        }, 700)

        function DmgExhaustion() {
            exhaustionWrapper.style.width = TotalExhaustion + "%"
        }
        timeoutExhaustion()
    }

    function timeoutHapiness() {
        setTimeout(() => {
            DmgTickHapiness()
        }, 5000)
    }
    function DmgTickHapiness() {
        TotalHapiness -= 1
        if (TotalHapiness < 0) TotalHealth = 0
        HapinessBar.style.width = TotalHapiness + "%"
        setTimeout(() => {
            DmgHapiness()
        }, 700)

        function DmgHapiness() {
            hapinessWrapper.style.width = TotalHapiness + "%"
        }
        timeoutHapiness()
    }

    function timeoutHunger() {
        setTimeout(() => {
            DmgTickHunger()
        }, 3000)
    }
    function DmgTickHunger() {
        TotalHunger -= 0.5
        if (TotalHunger < 0) TotalHunger = 0
        HungerBar.style.width = TotalHunger + "%"
        setTimeout(() => {
            DmgHunger()
        }, 700)

        function DmgHunger() {
            hungerWrapper.style.width = TotalHunger + "%"
        }
        timeoutHunger()
    }
}

