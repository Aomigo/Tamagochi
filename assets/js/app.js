const EntirePage = document.querySelector('*')
const startingShadow = document.querySelector('.everything')
const body = document.querySelector('body')
const selectionWrapper = document.querySelector('.tamagotchies-wrapper')
const MainGameWrapper = document.querySelector('.main-game-wrapper')
const Warrior = document.querySelector('.warrior')
const LootScrollerLoot = document.querySelector('.looting-slots')
const LootScrollerResults = document.querySelector('.looting-results')
const LootScrollerWrapper = document.querySelector('.loot-scroller-wrapper')
const LootScroller = document.querySelector('.loot-scroller')
const LootscrollerButton = document.querySelector('.loot-scroller-btn')
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
const ActionsTaken = document.querySelector('.text-about-actions')
const gameOver = document.querySelector('.game-over-wrapper')
const blackScreen = document.querySelector('.all-game')
const restart = document.querySelector('.restart-btn')
const nextButton = document.querySelector('.next-button')
const gameStart = document.querySelector('.enter-the-game')
const heart = document.querySelector('.heart')
const artefact = document.querySelectorAll('.artefact-not-found')
const oneByOne = document.querySelector('.javascript-solver')

let deathAnimation = false;
let crouchAnimation = false;
let animation = false;
let runAnimation = false
let depletedMental = false
let depletedExhaustion = false
let depletedHapiness = false
let depletedHunger = false
let tooMuchStacks = false
let foundArtefact = false
let TotalHealth = 100
let TotalMental = 100
let TotalExhaustion = 100
let TotalHapiness = 100
let TotalHunger = 100
let frameTransitorWarrior = 0
let dependsOnHealth = 1
let dialogue = 0
let bagpack = []
/*what to add : 
Lore de l'histoire collectioneuse d'artefacts
Lvl up maybe ?
What you died under gameover
ADD A CRAFTING TABLE
*/
//doing letter by letter
let animationStart = false;
let phrase = ""
let pushedPhrase = []

timeout()
function timeout() {
phrase = textDialogue[dialogue]
pushedPhrase = []

for (let i = 0; i < phrase.length; i++) {
    pushedPhrase.push(phrase[i])
}
let count = 0
    insideTimeout()

    function insideTimeout() {
        setTimeout(() => {
            if (count == 136) {
                const letterDeath = document.querySelectorAll('.small-text')
                letterDeath.forEach(element => {
                    element.remove()
                });
                oneByOne.innerHTML = correctDialogue[dialogue]
                if(dialogue == 1) {
                    gameStart.classList.remove('hidden')
                } else {
                    nextButton.classList.remove('hidden') 
                }
                return null
            }
            let letter = document.createElement('p')
            letter.classList.add('small-text')
            if(pushedPhrase[count] == "%") {
                letter.textContent = "\xa0"
            } else {
                letter.textContent = pushedPhrase[count]
            }
            
            oneByOne.appendChild(letter)
            count++
            insideTimeout()
        }, 40);
    }
}

nextButton.addEventListener('click', function() {
    oneByOne.textContent = ""
    count = 0
    nextButton.classList.add('hidden')
    dialogue++
    timeout()
})

gameStart.addEventListener('click', function () {
    animationStart = true
    animationStarting()
})

function animationStarting() {
    if (animationStart == true) {
        startingShadow.classList.add('intro')
        setTimeout(() => {
            IdleWarrior()
            Decay()
            MoreDecay()
            startingShadow.classList.remove('intro')
            startingShadow.classList.add('hidden')
        }, 9500);
    }
}


function MoreDecay() {
    if (depletedMental == true) {
        if (depletedExhaustion == true && depletedHapiness == true && depletedHunger == true) {
            dependsOnHealth = 5
        } else if (depletedExhaustion == true && depletedHapiness == true) {
            dependsOnHealth = 4
        } else if (depletedExhaustion == true && depletedHunger == true) {
            dependsOnHealth = 4
        } else if (depletedHapiness == true && depletedHunger == true) {
            dependsOnHealth = 4
        } else if (depletedExhaustion == true || depletedHapiness == true || depletedHunger == true) {
            dependsOnHealth = 3
        } else {
            dependsOnHealth = 2
        }
    }
    if (depletedExhaustion == true) {
        if (depletedMental == true && depletedHapiness == true && depletedHunger == true) {
            dependsOnHealth = 5
        } else if (depletedMental == true && depletedHapiness == true) {
            dependsOnHealth = 4
        } else if (depletedMental == true && depletedHunger == true) {
            dependsOnHealth = 4
        } else if (depletedHapiness == true && depletedHunger == true) {
            dependsOnHealth = 4
        } else if (depletedMental == true || depletedHapiness == true || depletedHunger == true) {
            dependsOnHealth = 3
        } else {
            dependsOnHealth = 2
        }
    }
    if (depletedHapiness == true) {
        if (depletedExhaustion == true && depletedMental == true && depletedHunger == true) {
            dependsOnHealth = 5
        } else if (depletedExhaustion == true && depletedMental == true) {
            dependsOnHealth = 4
        } else if (depletedExhaustion == true && depletedHunger == true) {
            dependsOnHealth = 4
        } else if (depletedMental == true && depletedHunger == true) {
            dependsOnHealth = 4
        } else if (depletedExhaustion == true || depletedMental == true || depletedHunger == true) {
            dependsOnHealth = 3
        } else {
            dependsOnHealth = 2
        }
    }
    if (depletedHunger == true) {
        if (depletedExhaustion == true && depletedHapiness == true && depletedMental == true) {
            dependsOnHealth = 5
        } else if (depletedExhaustion == true && depletedHapiness == true) {
            dependsOnHealth = 4
        } else if (depletedExhaustion == true && depletedMental == true) {
            dependsOnHealth = 4
        } else if (depletedHapiness == true && depletedMental == true) {
            dependsOnHealth = 4
        } else if (depletedExhaustion == true || depletedHapiness == true || depletedMental == true) {
            dependsOnHealth = 3
        } else {
            dependsOnHealth = 2
        }
    }
    setTimeout(() => {
        MoreDecay()
    }, 3000)
}



function tamagochi(like, yuk, tName) {
    if (like === yuk) {
        console.log("same")
        if (this.dislike = 0) {
            this.dislike = ingredients[yuk++]
        } else {
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

for (let i = 0; i < 4; i++) {
    let food = document.createElement("p")
    food.classList.add('sub-sliders-food', 'sliders')
    food.textContent = ingredients[Math.floor(Math.random() * (12 - 0) + 0)]
    for (let l = 0; l < bagpack.length; l++) {
        if (bagpack[l].includes(food.textContent)) {
            console.log('dup detected')
            if (bagpack[l].includes('x2')) {
                food.innerHTML = bagpack[l].replace('x2', 'x3')
            }
            else if (bagpack[l].includes('x3')) {
                food.innerHTML = bagpack[l].replace('x3', 'x4')
            }
            else if (bagpack[l].includes('x4')) {
                food.innerHTML = bagpack[l].replace('x4', 'x5')
            }
            else if (bagpack[l].includes('x5') || bagpack[l].includes('x6') || bagpack[l].includes('x7') || bagpack[l].includes('x8') || bagpack[l].includes('x9')) {
                tooMuchStacks = true
                console.log('too high')
            } else {
                food.textContent += " x2"
            }
            if (tooMuchStacks == true) {

            } else {
                bagpack.splice(l, 1)
            }
        }
    }
    if (tooMuchStacks == true) {
        setTimeout(() => {
            tooMuchStacks = false
        }, 500);
    } else {
        bagpack.push(food.textContent)
    }

    console.log(bagpack)
    if (i == 3) appending()
}

function appending() {
    for (let i = 0; i < bagpack.length; i++) {
        let fooding = document.createElement('p')
        fooding.classList.add('sub-sliders-food', 'sliders')
        fooding.textContent = bagpack[i]
        SliderFood.appendChild(fooding)
        SubSliderFood = document.querySelectorAll('.sub-sliders-food')
        feeding()
    }
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
                body.style.backgroundImage = "url('./assets/images/background.png')"
                Warrior.classList.remove('night-time')
            } else {
                body.style.backgroundImage = "url('./assets/images/background-reverse.png')"
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
    gameOver.classList.remove('hidden')
    gameOver.classList.add('fade-in')
    blackScreen.classList.remove('hidden')
    blackScreen.classList.add('fade-in')
    setTimeout(() => {
        gameOver.classList.add('opacity')
        blackScreen.classList.add('opacity')
        restart.classList.remove('hidden')
        restart.classList.add('fade-in')
        heart.src = "./assets/images/death hearth.gif"
        setTimeout(() => {
            restart.classList.add('opacity')
        }, 2000)
    }, 1000)
    function deathWarrior() {
        setTimeout(() => {
            deathTiming()
        }, 130)
    }

    function deathTiming() {
        deathPattern++
        if (deathPattern == 11) {
            deathPattern = 0
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
        }, 15000)
    }
    function DmgTickHealth() {
        if (deathAnimation == true) {
            timeoutHealth()
            return null
        }
        TotalHealth -= dependsOnHealth
        healthBar.style.width = TotalHealth + "%"
        setTimeout(() => {
            DmgHealth()
        }, 700)

        function DmgHealth() {
            healthWrapper.style.width = TotalHealth + "%"
        }
        if (TotalHealth <= 0) {
            TotalHealth = 0
            deathWarrior()
        }
        timeoutHealth()
    }

    function timeoutMental() {
        setTimeout(() => {
            DmgTickMental()
        }, 11000)
    }
    function DmgTickMental() {
        TotalMental -= 1
        if (TotalMental <= 0) {
            TotalMental = 0
            depletedMental = true
        } if (TotalMental > 0) {
            depletedMental = false
        }
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
        }, 8000)
    }
    function DmgTickExhaustion() {
        TotalExhaustion -= 2
        if (TotalExhaustion <= 0) {
            TotalExhaustion = 0
            depletedExhaustion = true
        } if (TotalExhaustion > 0) {
            depletedExhaustion = false
        }
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
        if (TotalHapiness <= 0) {
            TotalHapiness = 0
            depletedHapiness = true
        } if (TotalHapiness > 0) {
            depletedHapiness = false
        }
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
        if (TotalHunger <= 0) {
            TotalHunger = 0
            depletedHunger = true
        } if (TotalHunger > 0) {
            depletedHunger = false
        }
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

restart.addEventListener('click', function () {
    location.reload()
})