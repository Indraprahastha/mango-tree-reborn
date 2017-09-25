"use strict"

// release 0

class MangoTree {

    // Initialize a new MangoTree
    constructor() {
        this._umur = 0
        this._tinggi = 0
        this._maxBuah = 0
        this._buahReady = 0
        this._jmlhBuah_petik = 0
        this._sehat = new Mango()

    }

    getAge() {
        return this._umur
    }
    getHeight() {
        return this._tinggi
    }
    getFruits() {
        return this._buah = this._jmlhBuah_petik
    }
    getHealtyStatus() {
        return this._sehat
    }


    // Get current states here

    // Grow the tree
    grow() {
        let tahunMax = 20

        for (let i = 1; i < tahunMax; i++) {
            this._umur += 1
            this._tinggi += Math.random() * 0.5
            console.log(this._umur)
            if (this._umur === tahunMax) {
                return `pohonnya mati & tidak berbuah lagi`
            } else {

            }
        }
        console.log(`grow() Log: Year ${this._umur}`)
        console.log(`grow() Log: Height = ${this._tinggi.toFixed(1)}`)
    }

    // Produce some mangoes
    produceMangoes() {}

    // Get some fruits
    harvest() {

    }

}

class Mango {
    // Produce a mango
    constructor() {
        this._qBaik = 0
        this._qTdkBaik = 0
    }
}

/**
 * driver code untuk release 0
 * let mangoTree = new MangoTree()
 * do {
 *   mangoTree.grow();
 *   mangoTree.produceMangoes();
 *   mangoTree.harverst();
 *   console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvested}`)
 * } while (mangoTree.healthyStatus != false)
 */

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

// Release 3
class TreeGrove {}

var tree = new MangoTree()
console.log(`The tree is alive! :smile:`)

let mangoTree = new MangoTree()

mangoTree.getAge()
mangoTree.getHeight()
mangoTree.getFruits()
mangoTree.getHealtyStatus()
mangoTree.grow()
console.log(mangoTree.grow())

// do {
//     mangoTree.grow();
//     mangoTree.produceMangoes();
//     mangoTree.harvest();
//     console.log(`[Year ${tree._age} Report] Height= ${tree._height} | Fruits harvested = ${tree._harvestes}`)
// } while (mangoTree.getHealtyStatus() != false)

console.log(`The tree has met its end. :sad:`)