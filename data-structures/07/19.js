class Array {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    push(element) {
        this.data[this.length] = element;
        this.length++;
        return this.length;
    }
    pop() {
        const item = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return this.data;
    }
    deleteAt(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.lenght--;
        return this.data;
    }
    insertAt(item, index) {
        for (let i = this.length; i >= index; i--) {
            this.data[i] = this.data[i - 1];
        }

        this.data[index] = item;
        this.length++;
        return this.data;
    }
    getElementAtIndex(index) {
        return this.data[index];
    }
}

const persons = new Array();
persons.push("abhi");
persons.push("boje");
persons.push("gowda");
persons.push("santhosh");
document.write("<div>Print element in a persons</div>");
for (var key in persons.data) {
    document.write("<span>" + persons.data[key] + "  " + "</span>");
}

document.write("<div>Pop element in a persons</div>");
persons.pop();
for (var key in persons.data) {
    document.write("<span>" + persons.data[key] + "  " + "</span>")
}

document.write("<div>Inserting element at position 1</div>");
persons.insertAt("ram", 1);
for (var key in persons.data) {
    document.write("<span>" + persons.data[key] + " " + "</span>");
}

document.write("<div>deleting element at position 2</div>");
persons.deleteAt(2);
for (var key in persons.data) {
    document.write("<span>" + persons.data[key] + " " + "</span>");
}
document.write("<div>Getting  element at position 1</div>");
document.write("<div>" + persons.getElementAtIndex(1) + "</div>");
