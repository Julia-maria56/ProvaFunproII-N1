const animal = {
    nome : "Zequinha",
    especie: "canina"
}
const cachorro = Object.create(animal)
cachorro.raca = "labrador"
const cachorro1 = Object.create(cachorro)
cachorro.nome = "Rex"
const cachorro2 = Object.create(cachorro)
cachorro.nome = "Max"