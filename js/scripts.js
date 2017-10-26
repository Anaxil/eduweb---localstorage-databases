(function() {

    function LocalDB(name) {
            this.dbname = name;
    }

    LocalDB.prototype.save = function(key, value) {
        window.localStorage.setItem(this.dbname + "." + key, JSON.stringify(value));
    }

    LocalDB.prototype.get = function(key) {
        return JSON.parse(window.localStorage.getItem(this.dbname + "." + key));
    }

// Tworzona jest nowa instancja,
// w której należy zapamiętać nazwę "DB1"

var DB1 = new LocalDB("DB1");
var DB2 = new LocalDB("Baza2");

// Jakiś obiekt do zapisania
var janek = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 32
};

var ola = {
    firstName: "Ola",
    lastName: "Nowa",
    age: 23
};

// Na prototypie LocalDB znajdować się
// musi metoda save, która przyjmuje
// parę klucz-wartość, a wartość powinna
// być przed zapisaniem przepuszczona
// przez JSON.stringify

DB1.save("janek", janek);
DB2.save("ola", ola);

// Prototyp LocalDB powinien również
// posiadać metodę get, która odczyta
// podany klucz, przepuszczając wartość
// przez JSON.parse
console.log(DB1.get("janek"));
console.log(DB2.get("ola"));

// Porada. Aby móżna było tworzyć bazy danych
// o różnych nazwach, przy zapisywaniu poszczególnych
// danych, do klucza dodawaj nazwę bazy danych,
// np. "DB1.janek"

})();