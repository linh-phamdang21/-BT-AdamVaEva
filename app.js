let Apple = function () {
    this.weight = 10;
    this.get_weight = function () {
        return this.weight;
    }
}

let Human = function (name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.set_name = function (name) {
        this.name = name;
    }
    this.get_name = function () {
        return this.name;
    }
    this.set_gender = function (gender) {
        this.gender = gender;
    }
    this.get_gender = function () {
        return this.gender;
    }
    this.set_weight = function (weight) {
        this.weight = weight;
    }
    this.get_weight = function () {
        return this.weight;
    }
    this.say = function () {
        console.log("Hello!");
    }
    this.check_apple = function (Apple) {
        if (Apple.get_weight() > 0){
            return true;
        }
    }
    this.eat = function (checkApple,Apple) {
        if (checkApple){
            Apple.weight--;
            this.weight++;
        }
    }
}

let apple = new Apple();
let adam = new Human("Adam","male",50);
let eva = new Human("Eva","female",40);

adam.say();
adam.eat(adam.check_apple(apple),apple);
console.log(adam.get_weight());
console.log(apple.get_weight());

eva.say();
eva.eat(eva.check_apple(apple),apple);
console.log(eva.get_weight());
console.log(apple.get_weight());

adam.eat(adam.check_apple(apple),apple);
console.log(adam.get_weight());
console.log(apple.get_weight());