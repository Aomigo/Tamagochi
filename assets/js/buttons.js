Buttons.forEach((button) => {
    button.addEventListener('click', function () {
        if (button.classList.contains('button-adventure')) {
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

SubSliderAdventure.forEach((button) => {
    button.addEventListener('click', function () {
        Running()
        Warrior.classList.add('running')
        EntirePage.classList.add('transition')
        setTimeout(() => {
            taleAndLoot()
        }, 7000)

        function taleAndLoot() {
            EntirePage.classList.remove('transition')
            ActionsTaken.classList.remove('hidden')
            if(Warrior.classList.contains('night-time')) {
                ActionsTaken.innerHTML = Diana.name + " Made her way back from the " + button.textContent + ". It is now night time"
            } else {
                ActionsTaken.innerHTML = Diana.name + " Made her way back from the " + button.textContent + ". It is now day time"
            }
            
                setTimeout(() => {
                    ActionsTaken.classList.add('hidden')
                }, 3000)
                loot(button)
        }
    })
})

SubSliderFood.forEach((button) => {
    button.addEventListener('click', function () {
        Crouching()
        if (button.textContent.includes(Diana.dislike)) {
            //Disliked part
            TotalHunger -= 5

            HungerBar.style.width = TotalHunger + "%"
            setTimeout(() => {
                Dmg()
            }, 700)

            function Dmg() {
                hungerWrapper.style.width = TotalHunger + "%"
            }

            //malus happiness
            TotalHapiness -= 3

            HapinessBar.style.width = TotalHapiness + "%"
            setTimeout(() => {
                dmgHapiness()
            }, 700)

            function dmgHapiness() {
                hapinessWrapper.style.width = TotalHapiness + "%"
            }

            ActionsTaken.classList.remove('hidden')
            ActionsTaken.innerHTML = Diana.name + " hates " + Diana.dislike
            setTimeout(() => {
                ActionsTaken.classList.add('hidden')
            }, 3000)

        } else if (button.textContent.includes(Diana.yummy)) {
            //Liked part
            TotalHunger += 15
            if (TotalHunger > 100) {
                TotalHunger = 100
            }

            hungerWrapper.style.width = TotalHunger + "%"
            setTimeout(() => {
                Heal()
            }, 500)

            function Heal() {
                HungerBar.style.width = TotalHunger + "%"
            }

            //bonus healing
            TotalHealth += 7.5
            if (TotalHealth > 100) {
                TotalHealth = 100
            }

            healthWrapper.style.width = TotalHealth + "%"
            setTimeout(() => {
                HealthHeal()
            }, 500)

            function HealthHeal() {
                healthBar.style.width = TotalHealth + "%"
            }

            //bonus happiness
            TotalHapiness += 10
            if (TotalHapiness > 100) {
                TotalHapiness = 100
            }

            hapinessWrapper.style.width = TotalHapiness + "%"
            setTimeout(() => {
                HealHapiness()
            }, 500)

            function HealHapiness() {
                HapinessBar.style.width = TotalHapiness + "%"
            }

            ActionsTaken.classList.remove('hidden')
            ActionsTaken.innerHTML = Diana.name + " loved " + Diana.yummy
            setTimeout(() => {
                ActionsTaken.classList.add('hidden')
            }, 3000)

        } else {
            //Normal part
            TotalHunger += 5
            if (TotalHunger > 100) {
                TotalHunger = 100
            }

            hungerWrapper.style.width = TotalHunger + "%"
            setTimeout(() => {
                Heal()
            }, 500)

            function Heal() {
                HungerBar.style.width = TotalHunger + "%"
            }

            //bonus healing
            TotalHealth += 5
            if (TotalHealth > 100) {
                TotalHealth = 100
            }

            healthWrapper.style.width = TotalHealth + "%"
            setTimeout(() => {
                HealthHeal()
            }, 500)

            function HealthHeal() {
                healthBar.style.width = TotalHealth + "%"
            }

            ActionsTaken.classList.remove('hidden')
            ActionsTaken.innerHTML = Diana.name + " felt okay eating " + button.textContent
            setTimeout(() => {
                ActionsTaken.classList.add('hidden')
            }, 3000)
        }
    })
})

SubSliderActivities.forEach((button) => {
    button.addEventListener('click', function () {
        if (button.textContent.includes("Wash")) {
            //exhaustion
            TotalExhaustion += 4
            if (TotalExhaustion > 100) {
                TotalExhaustion = 100
            }
            exhaustionWrapper.style.width = TotalExhaustion + "%"
            setTimeout(() => {
                HealExhaustion()
            }, 500)

            function HealExhaustion() {
                ExhaustionBar.style.width = TotalExhaustion + "%"
            }
            //mental health 
            TotalMental += 6
            if (TotalMental > 100) {
                TotalMental = 100
            }
            mentalWrapper.style.width = TotalMental + "%"
            setTimeout(() => {
                HealMental()
            }, 500)

            function HealMental() {
                MentalBar.style.width = TotalMental + "%"
            }
            //health
            TotalHealth += 3
            if (TotalHealth > 100) {
                TotalHealth = 100
            }
            healthWrapper.style.width = TotalHealth + "%"
            setTimeout(() => {
                HealHealth()
            }, 500)

            function HealHealth() {
                healthBar.style.width = TotalHealth + "%"
            }
        }

        if (button.textContent.includes("Train")) {
            Training()
            //exhaustion -
            TotalExhaustion -= 7
            ExhaustionBar.style.width = TotalExhaustion + "%"
            setTimeout(() => {
                DmgExhaustion()
            }, 700)

            function DmgExhaustion() {
                exhaustionWrapper.style.width = TotalExhaustion + "%"
            }
            //happiness ++
            TotalHapiness += 15
            if (TotalHapiness > 100) {
                TotalHapiness = 100
            }

            hapinessWrapper.style.width = TotalHapiness + "%"
            setTimeout(() => {
                HealHapiness()
            }, 500)

            function HealHapiness() {
                HapinessBar.style.width = TotalHapiness + "%"
            }
            //hunger -
            TotalHunger -= 10

            HungerBar.style.width = TotalHunger + "%"
            setTimeout(() => {
                Dmg()
            }, 700)

            function Dmg() {
                hungerWrapper.style.width = TotalHunger + "%"
            }
        }

        if (button.textContent.includes("Rest")) {
            //exhaustion
            TotalExhaustion += 15
            if (TotalExhaustion > 100) {
                TotalExhaustion = 100
            }
            exhaustionWrapper.style.width = TotalExhaustion + "%"
            setTimeout(() => {
                HealExhaustion()
            }, 500)

            function HealExhaustion() {
                ExhaustionBar.style.width = TotalExhaustion + "%"
            }
            //happiness 
            TotalHapiness += 6
            if (TotalHapiness > 100) {
                TotalHapiness = 100
            }

            hapinessWrapper.style.width = TotalHapiness + "%"
            setTimeout(() => {
                HealHapiness()
            }, 500)

            function HealHapiness() {
                HapinessBar.style.width = TotalHapiness + "%"
            }
            //hunger 
            TotalHunger -= 4
            HungerBar.style.width = TotalHunger + "%"
            setTimeout(() => {
                Dmg()
            }, 700)

            function Dmg() {
                hungerWrapper.style.width = TotalHunger + "%"
            }
        }

        if (button.textContent.includes("Meditate")) {
            //mental health ++
            TotalMental += 15
            if (TotalMental > 100) {
                TotalMental = 100
            }
            mentalWrapper.style.width = TotalMental + "%"
            setTimeout(() => {
                HealMental()
            }, 500)

            function HealMental() {
                MentalBar.style.width = TotalMental + "%"
            }
            //exhaustion -
            TotalExhaustion -= 5
            ExhaustionBar.style.width = TotalExhaustion + "%"
            setTimeout(() => {
                DmgExhaustion()
            }, 700)

            function DmgExhaustion() {
                exhaustionWrapper.style.width = TotalExhaustion + "%"
            }
            //hunger -
            TotalHunger -= 3
            HungerBar.style.width = TotalHunger + "%"
            setTimeout(() => {
                DmgHunger()
            }, 700)

            function DmgHunger() {
                hungerWrapper.style.width = TotalHunger + "%"
            }
        }
        ActionsTaken.classList.remove('hidden')
        if (button.textContent.includes("Meditate")) {
            ActionsTaken.innerHTML = Diana.name + " had a good time Meditating"
        } else {
            ActionsTaken.innerHTML = Diana.name + " had a good time " + button.textContent + "ing !"
        }
        setTimeout(() => {
            ActionsTaken.classList.add('hidden')
        }, 3000)
    })
})