class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    //método de instância
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    //método estático
    static soma(x, y) {
        console.log(this);
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume(); //precisa da instância criada para usar os métodos
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.diminuirVolume();
console.log(controle1);

ControleRemoto.soma(); //utiliza a classe pra chamar o método