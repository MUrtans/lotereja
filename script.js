const vardi = ['Jana Krūmiņa', 'Jānis Bērziņš', 'Dace Priede', 'Arturs Vanags', 'Rihards Ozoliņš'];
const balvas = ['Xbox 360', 'labs ledusskapis', 'iphone iks', 'Honda Jazz', 'kvalitatīva datorpele'];
const naudaKopa = 100000;//kopeja summma
let uzvaretajuSkaits = 5;
let rindas = document.querySelector('.rindas');
rindas.innerHTML = ' ';

for (let i = 0; i < uzvaretajuSkaits; i++) {
    let rand = Math.random() * 5;
    rand = Math.floor(rand);//noappalo uz leju
    //console.log(vardi[rand]);//izvada konsole

    let uzvaretajs = vardi[rand];
    rindas.innerHTML += `
<tr>
<td>${i+1}</td>
<td>${uzvaretajs}</td>
</tr>`
}