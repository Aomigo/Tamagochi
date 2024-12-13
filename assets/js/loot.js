//Nombres d'artefact trouvé/à trouver
let artefactsLeft = 5
let artefactToFind = 0
//quand on revient d'une expedition
function loot(Expedition) {
    informationTextArtefacts.classList.add('hidden')
    LootScrollerWrapper.classList.remove('hidden')
    LootScrollerWrapper.classList.remove('appear')
    LootScrollerWrapper.classList.remove('dissapear')
    LootScrollerWrapper.classList.add('pop')
    setTimeout(() => {
        LootScrollerWrapper.classList.remove('pop')
    }, 1000);
    foundArtefact = false
    damage(Expedition)
    if (Expedition.textContent.includes("Cave")) CaveLoot()
    if (Expedition.textContent.includes("Meadow")) MeadowLoot()
    if (Expedition.textContent.includes("Raid")) RaidLoot()
    if (Expedition.textContent.includes("Underwater")) UnderwaterLoot()
//loot cave
    function CaveLoot() {
        let result = Math.floor(Math.random() * (4 - 1) + 1)
        let loot = []
        for (let i = 0; i < result; i++) {
            loot.push(ingredients[Math.floor(Math.random() * (12 - 0) + 0)])
        }
        console.log(result)
        console.log(loot)
        artefacts()
        resultLoot(loot)
    }
//loot meadow
    function MeadowLoot() {
        let result = Math.floor(Math.random() * (3 - 0) + 0)
        let loot = []
        for (let i = 0; i < result; i++) {
            loot.push(ingredients[Math.floor(Math.random() * (12 - 0) + 0)])
        }
        console.log(result)
        console.log(loot)
        resultLoot(loot)
    }
//Loot raid
    function RaidLoot() {
        let result = Math.floor(Math.random() * (7 - 2) + 1)
        let loot = []
        for (let i = 0; i < result; i++) {
            loot.push(ingredients[Math.floor(Math.random() * (12 - 0) + 0)])
        }
        console.log(result)
        console.log(loot)
        artefacts()
        resultLoot(loot)
    }
//Loot sous l'eau
    function UnderwaterLoot() {
        let loot = ["Fish", "Water"]

        console.log(loot)
        resultLoot(loot)
    }
}
//Dégâts pris durant l'expedition en fonction de l'expedition(calcul)
function damage(Expedition) {
    if (Expedition.textContent.includes("Cave")) CaveDamage()
    if (Expedition.textContent.includes("Meadow")) MeadowDamage()
    if (Expedition.textContent.includes("Raid")) RaidDamage()
    if (Expedition.textContent.includes("Underwater")) UnderwaterDamage()

    function CaveDamage() {
        TotalHealth -= Math.floor(Math.random() * (20 - 1) + 1)
        TotalMental -= Math.floor(Math.random() * (30 - 5) + 5)
        TotalExhaustion -= Math.floor(Math.random() * (15 - 10) + 10)
        TotalHunger -= Math.floor(Math.random() * (15 - 10) + 10)
        damageDeduction()

    }

    function MeadowDamage() {
        TotalHealth -= Math.floor(Math.random() * (10 - 0) + 0)
        TotalExhaustion -= Math.floor(Math.random() * (20 - 0) + 0)
        TotalHapiness += Math.floor(Math.random() * (20 - 10) + 10)
        damageDeduction()
    }

    function RaidDamage() {
        TotalHealth -= Math.floor(Math.random() * (40 - 10) + 10)
        TotalMental -= 10
        TotalExhaustion -= Math.floor(Math.random() * (40 - 10) + 10)
        TotalHunger -= Math.floor(Math.random() * (30 - 15) + 10)
        damageDeduction()
    }

    function UnderwaterDamage() {
        TotalMental -= Math.floor(Math.random() * (5 - 0) + 0)
        TotalExhaustion -= 10
        TotalHapiness += Math.floor(Math.random() * (20 - 10) + 10)
        TotalHunger -= Math.floor(Math.random() * (10 - 5) + 5)
        damageDeduction()
    }
//Mise a jour des dégâts
    function damageDeduction() {
        //health NEED TO ADD IF U GET BELOW 0 THE CHARA DOES NOT COME BACK
        if (TotalHealth < 0) {
            TotalHealth = 0
            deathAnimation()
        }
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
        //mental
        if (TotalMental < 0) TotalMental = 0
        MentalBar.style.width = TotalMental + "%"
        setTimeout(() => {
            DmgMental()
        }, 700)

        function DmgMental() {
            mentalWrapper.style.width = TotalMental + "%"
        }
        //exhaustion
        if (TotalExhaustion < 0) TotalExhaustion = 0
        ExhaustionBar.style.width = TotalExhaustion + "%"
        setTimeout(() => {
            DmgExhaustion()
        }, 700)

        function DmgExhaustion() {
            exhaustionWrapper.style.width = TotalExhaustion + "%"
        }
        //happiness
        if (TotalHapiness > 100) TotalHapiness = 100
        hapinessWrapper.style.width = TotalHapiness + "%"
        setTimeout(() => {
            HealHapiness()
        }, 500)

        function HealHapiness() {
            HapinessBar.style.width = TotalHapiness + "%"
        }
        //hunger
        if (TotalHunger < 0) TotalHunger = 0
        HungerBar.style.width = TotalHunger + "%"
        setTimeout(() => {
            DmgHunger()
        }, 700)

        function DmgHunger() {
            hungerWrapper.style.width = TotalHunger + "%"
        }
    }
}
//Voir si on trouve un artefact
function artefacts() {
    let results = Math.floor(Math.random() * (10 - 1) + 1)
    if (results == 1) {
        artefactFound()
    }
//Artefact trouvé
    function artefactFound() {
        let artefactJustFound = Artefacts[Math.floor(Math.random() * (artefactsLeft - 0) + 0)]
        console.log("you found " + artefactJustFound + "...")
        artefactsLeft--
        let looting = document.createElement('p')
        looting.classList.add('looting')
        looting.textContent = artefactJustFound
        LootScrollerLoot.appendChild(looting)

        Artefacts.pop(artefactJustFound)
        foundArtefact = true
    }
}
//On ajoute un bg vert pour la decouverte d'un artefact/on ajoute le loot a la liste
function resultLoot(loot) {
    if (foundArtefact == true) {
        LootScrollerResults.innerHTML = "...You just found an artefact..."
        artefact[artefactToFind].classList.add('found')
        artefact[artefactToFind].classList.remove('artefacts-not-found')
        artefactToFind++
    }
    else {
        if (loot.length == 0) LootScrollerResults.innerHTML = "The looting was... lets not talk about that."
        if (loot.length <= 2 && loot !== 0) LootScrollerResults.innerHTML = "The looting was not very good."
        if (loot.length == 3) LootScrollerResults.innerHTML = "The looting was successful."
        if (loot.length > 3) LootScrollerResults.innerHTML = "The looting was excellent !"

        let OldLoot = document.querySelectorAll('.looting')
        OldLoot.forEach((text) => {
            text.remove()
        })
        for (let i = 0; i < loot.length; i++) {
            let looting = document.createElement('p')
            looting.classList.add('looting')
            looting.textContent = loot[i]
            LootScrollerLoot.appendChild(looting)
        }
        addLoot()
    }
}
//On ajoute le loot aux ingredients
function addLoot() {
    let toMuch = false
    console.log('addloot')
    //here add gained loot to food index
    OldLoot = document.querySelectorAll('.looting')
    OldLoot.forEach((loot) => {
        let same = 0
        //si plusieurs fois le même, stacking
        SubSliderFood.forEach((slider) => {
            if (slider.textContent.includes(loot.textContent)) {
                same++
                console.log('dup detected')
                if (slider.textContent.includes('x2')) {
                    slider.innerHTML = slider.textContent.replace('x2', 'x3')
                }
                else if (slider.textContent.includes('x3')) {
                    slider.innerHTML = slider.textContent.replace('x3', 'x4')
                }
                else if (slider.textContent.includes('x4')) {
                    slider.innerHTML = slider.textContent.replace('x4', 'x5')
                }
                else if (slider.textContent.includes('x5') || slider.textContent.includes('x6') || slider.textContent.includes('x7') || slider.textContent.includes('x8') || slider.textContent.includes('x9')) {
                    console.log('too high')
                } else {
                    slider.textContent += " x2"
                }
            }
        })
        //on regarde si same (qui regarde si un doublon est ajouté) est nul, si oui, on regarde si il y a trop d'éléments et si non, on ajoute l'ingredient a la liste
        console.log(loot.textContent)
        if (same > 0) { }
        else {
            if (SubSliderFood.length == 10) {
                toMuch = true
            } else {
                let food = document.createElement("p")
                food.classList.add('sub-sliders-food', 'sliders')
                food.textContent = loot.textContent
                SliderFood.appendChild(food)
                SubSliderFood = document.querySelectorAll('.sub-sliders-food')
                feeding()
            }

        }
    })
    console.log(toMuch)
    if (toMuch == true) {
        ActionsTaken.classList.remove('hidden')
        setTimeout(() => {
            ActionsTaken.classList.add('hidden')
        }, 3000);
        ActionsTaken.innerHTML = "There was too much to take for your bag..."
    }

}
//Bouton parchemin
LootscrollerButton.addEventListener('click', function () {
    if (LootScroller.classList.contains('hidden')) {
        LootScrollerWrapper.classList.add('appear')
        LootScrollerWrapper.classList.remove('dissapear')
        LootScroller.classList.remove('hidden')
    } else {
        LootScrollerWrapper.classList.remove('appear')
        LootScrollerWrapper.classList.add('dissapear')
        setTimeout(() => {
            LootScroller.classList.add('hidden')
            LootScrollerWrapper.classList.add('hidden')
        }, 1500)
    }
})