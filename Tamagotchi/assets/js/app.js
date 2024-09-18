const selectionWrapper = document.querySelector('.tamagotchies-wrapper')
const MainGameWrapper = document.querySelector('.main-game-wrapper')
const Warrior = document.querySelector('.warrior')
const healthBar = document.querySelector('.health-bar')
const healthWrapper = document.querySelector('.health')
const MentalBar = document.querySelector('.mental-health')
const mentalWrapper = document.querySelector('.mental')
const ExhaustionBar = document.querySelector('.exhaustion-bar')
const exhaustionWrapper = document.querySelector('.exhaustion')
let frameTransitorMage = 0
let frameTransitorWarrior = 0
let attackPattern;
let animation = false;
let TotalHealth = 100
let TotalMental = 100
let TotalExhaustion = 100
IdleWarrior()


function tamagochi(like, dislike, tName) {
    this.name = tName
    console.log(this.name)

}

let warrior = ["../assets/images/warrior/idle/Warrior_Idle_1.png", "../assets/images/warrior/idle/Warrior_Idle_2.png", "../assets/images/warrior/idle/Warrior_Idle_3.png", "../assets/images/warrior/idle/Warrior_Idle_4.png", "../assets/images/warrior/idle/Warrior_Idle_5.png", "../assets/images/warrior/idle/Warrior_Idle_6.png"]
let warriorSelect = ["../assets/images/warrior/Dash Attack/Warrior_Dash-Attack_1.png", "../assets/images/warrior/Dash Attack/Warrior_Dash-Attack_2.png", "../assets/images/warrior/Dash Attack/Warrior_Dash-Attack_3.png", "../assets/images/warrior/Dash Attack/Warrior_Dash-Attack_4.png", "../assets/images/warrior/Dash Attack/Warrior_Dash-Attack_5.png", "../assets/images/warrior/Dash Attack/Warrior_Dash-Attack_6.png", "../assets/images/warrior/Dash Attack/Warrior_Dash-Attack_7.png", "../assets/images/warrior/Dash Attack/Warrior_Dash-Attack_8.png", "../assets/images/warrior/Dash Attack/Warrior_Dash-Attack_9.png", "../assets/images/warrior/Dash Attack/Warrior_Dash-Attack_10.png"]
let warriorCrouch = ["../assets/images/warrior/Crouch/Warrior_Crouch_1.png", "../assets/images/warrior/Crouch/Warrior_Crouch_2.png", "../assets/images/warrior/Crouch/Warrior_Crouch_3.png", "../assets/images/warrior/Crouch/Warrior_Crouch_4.png", "../assets/images/warrior/Crouch/Warrior_Crouch_5.png", "../assets/images/warrior/Crouch/Warrior_Crouch_6.png"]
let warriorDeath = ["../assets/images/warrior/Death/Warrior_Death_1.png", "../assets/images/warrior/Death/Warrior_Death_2.png", "../assets/images/warrior/Death/Warrior_Death_3.png", "../assets/images/warrior/Death/Warrior_Death_4.png", "../assets/images/warrior/Death/Warrior_Death_5.png", "../assets/images/warrior/Death/Warrior_Death_6.png", "../assets/images/warrior/Death/Warrior_Death_7.png", "../assets/images/warrior/Death/Warrior_Death_8.png", "../assets/images/warrior/Death/Warrior_Death_9.png", "../assets/images/warrior/Death/Warrior_Death_10.png", "../assets/images/warrior/Death/Warrior_Death_11.png"]

Warrior.alt = "Diana"
Warrior.src = warrior[frameTransitorWarrior]

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
        if(animation == true) {
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
    attackPattern = 0
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

healthBar.addEventListener('click', function() {
    TotalHealth -= 10
    healthBar.style.width = TotalHealth + "%"
    setTimeout(() => {
        Dmg()
    }, 700)

    function Dmg() {
        healthWrapper.style.width = TotalHealth + "%"
    }
})

MentalBar.addEventListener('click', function() {
    TotalMental -= 10
    MentalBar.style.width = TotalMental + "%"
    setTimeout(() => {
        Dmg()
    }, 700)

    function Dmg() {
        mentalWrapper.style.width = TotalMental + "%"
    }
})

ExhaustionBar.addEventListener('click', function() {
    TotalExhaustion -= 10
    ExhaustionBar.style.width = TotalExhaustion + "%"
    setTimeout(() => {
        Dmg()
    }, 700)
    
    function Dmg() {
        exhaustionWrapper.style.width = TotalExhaustion + "%"
    }
})  