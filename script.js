class Warrior {

    constructor(life, power) {
        this.wLife = life;  
        this.wPower = power;
        }

        attack(){
            //this.wPower;
            return (this.wPower);
            }

        defend(damage){
            this.wLife -= damage
            console.log(this.wLife);
            return (this.wLife);
            }
}

class Maya extends Warrior{
    constructor(life, power) {
        super(life, power);
    }
        drinkColaCao(){
            return(this.wPower += 10);
        }
}

class Aztec extends Warrior{
    constructor(life, power) {
        super(life, power);
    }
        drinkNesquik(){
            this.wLife += 10;
            return (this.wLife);
        }
}

const objectMaya = new Maya(15, 15);        //se crea el objeto a partir de Maya
const objectAzteca = new Aztec(30, 6);     //se crea el objeto a partir de Aztec

// 1. Azteca bebe nesquik
objectAzteca.drinkNesquik();                //El azteca bebe el Nesquik
console.log(`Vida de azteca, luego de beber Nesquik: ${objectAzteca.wLife}`);            
//Imprime la vida de Azteca. No es necesario el this porque no está dentro de la función

// 2. Maya bebe Cola Cao
objectMaya.drinkColaCao();
console.log(`Poder de maya, luego de beber Cola cao: ${objectMaya.wPower}`);  

// 3. Maya ataca a azteca. Azteca defiende
objectAzteca.defend(objectMaya.attack());
console.log(`Maya ataca a azteca. Azteca defiende. Vida restante del Azteca: ${objectAzteca.wLife}`);  

// 4. Azteca ataca a maya. Maya defiende
objectMaya.defend(objectAzteca.attack());
console.log(`Azteca ataca a maya. Maya defiende. Vida restante del Maya: ${objectAzteca.wLife}`);  
