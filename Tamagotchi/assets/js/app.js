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
let frameTransitorWarrior = 0
let animation = false;
let deathAnimation = false;
let TotalHealth = 100
let TotalMental = 100
let TotalExhaustion = 100
let TotalHapiness = 100
let TotalHunger = 100
IdleWarrior()
Decay()

let warrior = ["../assets/images/warrior/idle/Warrior_Idle_1.png", "../assets/images/warrior/idle/Warrior_Idle_2.png", "../assets/images/warrior/idle/Warrior_Idle_3.png", "../assets/images/warrior/idle/Warrior_Idle_4.png", "../assets/images/warrior/idle/Warrior_Idle_5.png", "../assets/images/warrior/idle/Warrior_Idle_6.png"]
let warriorSelect = ["../assets/images/warrior/Dash Attack/Warrior_Dash-Attack_1.png", "../assets/images/warrior/Dash Attack/Warrior_Dash-Attack_2.png", "../assets/images/warrior/Dash Attack/Warrior_Dash-Attack_3.png", "../assets/images/warrior/Dash Attack/Warrior_Dash-Attack_4.png", "../assets/images/warrior/Dash Attack/Warrior_Dash-Attack_5.png", "../assets/images/warrior/Dash Attack/Warrior_Dash-Attack_6.png", "../assets/images/warrior/Dash Attack/Warrior_Dash-Attack_7.png", "../assets/images/warrior/Dash Attack/Warrior_Dash-Attack_8.png", "../assets/images/warrior/Dash Attack/Warrior_Dash-Attack_9.png", "../assets/images/warrior/Dash Attack/Warrior_Dash-Attack_10.png"]
let warriorCrouch = ["../assets/images/warrior/Crouch/Warrior_Crouch_1.png", "../assets/images/warrior/Crouch/Warrior_Crouch_2.png", "../assets/images/warrior/Crouch/Warrior_Crouch_3.png", "../assets/images/warrior/Crouch/Warrior_Crouch_4.png", "../assets/images/warrior/Crouch/Warrior_Crouch_5.png", "../assets/images/warrior/Crouch/Warrior_Crouch_6.png"]
let warriorDeath = ["../assets/images/warrior/Death/Warrior_Death_1.png", "../assets/images/warrior/Death/Warrior_Death_2.png", "../assets/images/warrior/Death/Warrior_Death_3.png", "../assets/images/warrior/Death/Warrior_Death_4.png", "../assets/images/warrior/Death/Warrior_Death_5.png", "../assets/images/warrior/Death/Warrior_Death_6.png", "../assets/images/warrior/Death/Warrior_Death_7.png", "../assets/images/warrior/Death/Warrior_Death_8.png", "../assets/images/warrior/Death/Warrior_Death_9.png", "../assets/images/warrior/Death/Warrior_Death_10.png", "../assets/images/warrior/Death/Warrior_Death_11.png"]

function tamagochi(like, dislike, tName) {
    this.name = tName
    console.log(this.name)
}

Warrior.alt = "Diana"
Warrior.src = warrior[frameTransitorWarrior]
let Diana = new tamagochi("Apple", "Grass", "Diana")

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
        if (animation == true || deathAnimation == true) {
            frontFramesWarrior()
        } else {
            frameTransitorWarrior++
            Warrior.src = warrior[frameTransitorWarrior]
            frontFramesWarrior()
        }
    }
}

Warrior.addEventListener('click', function () {
    animation = true
    let attackPattern = 0
    attackWarrior()
    console.log("clicked")

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
})

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
        healthBar.style.width = TotalHealth + "%"
        setTimeout(() => {
            DmgHealth()
        }, 700)

        function DmgHealth() {
            healthWrapper.style.width = TotalHealth + "%"
        }
        if(TotalHealth == 0) {
            deathAnimation = true
            let deathPattern = 0
            deathWarrior()

            function deathWarrior() {
                setTimeout(() => {
                    deathTiming()
                }, 50)
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
        timeoutHealth()
    }

    function timeoutMental() {
        setTimeout(() => {
            DmgTickMental()
        }, 10000)
    }
    function DmgTickMental() {
        TotalMental -= 1
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
        TotalExhaustion -= 3
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
        }, 7000)
    }
    function DmgTickHapiness() {
        TotalHapiness -= 1
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
        }, 2000)
    }
    function DmgTickHunger() {
        TotalHunger -= 0.5
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

Buttons.forEach((button) => {
    button.addEventListener('click', function () {
        if (button.classList.contains('button-adventure')) {
            console.log("clicked adventure")
            if (SliderAdventure.classList.contains('hidden')) {
                SliderAdventure.classList.remove('hidden')
                SliderFood.classList.add('hidden')
                SliderActivities.classList.add('hidden')
            } else {
                SliderAdventure.classList.add('hidden')
                SliderFood.classList.add('hidden')
                SliderActivities.classList.add('hidden')
            }

        }
        if (button.classList.contains('button-feed')) {
            if (SliderFood.classList.contains('hidden')) {
                SliderFood.classList.remove('hidden')
                SliderActivities.classList.add('hidden')
                SliderAdventure.classList.add('hidden')
            } else {
                SliderAdventure.classList.add('hidden')
                SliderFood.classList.add('hidden')
                SliderActivities.classList.add('hidden')
            }

        }
        if (button.classList.contains('button-physical-health')) {
            if (SliderActivities.classList.contains('hidden')) {
                SliderActivities.classList.remove('hidden')
                SliderAdventure.classList.add('hidden')
                SliderFood.classList.add('hidden')
            } else {
                SliderAdventure.classList.add('hidden')
                SliderFood.classList.add('hidden')
                SliderActivities.classList.add('hidden')
            }

        }
    })
})
