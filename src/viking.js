// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  genericAttack(attacker) {
    let victim = "";
    if (attacker === "viking") {
      attacker = this.vikingArmy;
      victim = this.saxonArmy;
    } else {
      attacker = this.saxonArmy;
      victim = this.vikingArmy;
    }
    let randomVictim = victim[Math.floor(Math.random() * victim.length)];
    let randomAttackerStrength =
      attacker[Math.floor(Math.random() * attacker.length)].strength;
    let attackResult = randomVictim.receiveDamage(randomAttackerStrength);
    if (randomVictim.health <= 0) {
      victim.splice(victim.indexOf(randomVictim), 1);
    }
    return attackResult;
  }
  vikingAttack() {
    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomVikingStrength =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        .strength;
    let attackResult = randomSaxon.receiveDamage(randomVikingStrength);
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
    }
    return attackResult;
  }
  saxonAttack() {
    let randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let randomSaxonStrength =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        .strength;
    let attackResult = randomViking.receiveDamage(randomSaxonStrength);
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
    }
    return attackResult;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
// const viktor = new Viking("Viktor", 100, 15);
// const frederic = new Viking("Fredo", 10, 0.5);
// const gunther = new Saxon("Gunther", 10, 5);
// const friedrich = new Saxon("Friedrich", 20, 5);
// const war = new War();
// war.addViking(viktor);
// war.addViking(frederic);
// war.addSaxon(gunther);
// war.addSaxon(friedrich);

// console.log(war.genericAttack("saxon"));
