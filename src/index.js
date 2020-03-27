class Counter {
    constructor(key, value = 0) {
        this.key = key;
        this.value = value;
    }
    static singleton(key, value) {
        if (!this.instance || this.instance.key !== key) {
            this.instance = new Counter(key, value);
        }
        return this.instance;
    }
    add(step = 1) {
        this.value += step;
    }
    minus(step = 1) {
        this.value -= step;
    }
}

const counter1 = Counter.singleton("counter1", 0);
const counter2 = Counter.singleton("counter1", 1);
const counter3 = Counter.singleton("counter3", 3);

counter1.add(1000);
counter3.add(-1000);


console.log(counter1.value, counter2.value, counter3.value);