function loot(Expedition) {
    damage(Expedition)
    if (Expedition.textContent.includes("Cave")) CaveLoot()
    if (Expedition.textContent.includes("Meadow")) MeadowLoot()
    if (Expedition.textContent.includes("Raid")) RaidLoot()
    if (Expedition.textContent.includes("Underwater")) UnderwaterLoot()

    function CaveLoot() {

    }

    function MeadowLoot() {

    }

    function RaidLoot() {

    }

    function UnderwaterLoot() {

    }
}

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

    function damageDeduction() {
        //health NEED TO ADD IF U GET BELOW 0 THE CHARA DOES NOT COME BACK
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