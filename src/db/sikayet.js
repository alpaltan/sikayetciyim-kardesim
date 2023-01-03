
import fs from "fs";

var fonksiyon = () => {

    fs.readFileSync("./veriler.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("Error reading file from disk:", err);
            return;
        }
        try {
            const customer = JSON.parse(jsonString);
            console.log("Customer address is:", customer.sikayetler[0].Tarih);
        } catch (err) {
            console.log("Error parsing JSON string:", err);
        }
    });
}

export default fonksiyon;
