const cartContainer = document.querySelector('#cart-container');
const modalContainer = document.getElementById('modal-container');
const sideBarContainer = document.getElementById('sidebar-container')
const phoneData = async()=>{
    const res = await fetch('../data.json');
    const data = await res.json();
    return data
}
// phoneData()
 
const phoneDetils =async ()=>{
    const phones =await phoneData()
    // console.log(phones);
    phones.forEach(element => {
        const {img, name,price,id} = element
        const div = document.createElement('div');
        div.classList.add("card", "bg-base-100", "shadow-lg")
        // console.log(element);
        div.innerHTML =`
        <figure><img src="${img}" alt="Shoes" /></figure>
        <div class="card-body">
          <div class="flex justify-between">
            <h2 class="card-title">${name}</h2>
            <p><span class="font-medium text-xl">Price :</span> <span class="font-semibold text-lg">$799</span></p>
            <div>
              <i class="fa-solid fa-heart mr-4 text-red-700"></i>
              <i class="fa-solid fa-square-minus  text-red-700"></i>
            </div>
          </div>
          <p><span class="font-semibold text-xl">Price :</span> <span class="font-semibold text-xl">$${price}</span></p>
          <div class="card-actions justify-between">
            <button onclick = "sideBarItem('${id}')" class="btn btn-outline btn-primary">Buy now</button>
            <label onclick="modalDetails('${id}')" for="my-modal-3" class="btn btn-outline btn-secondary">See details</label>
          </div>
        </div>
        `;
        cartContainer.appendChild(div)
    })
}
phoneDetils()

const modalDetails =async (id) =>{
    const phones = await phoneData();
    const product = phones.find(element => element.id === id)
    console.log(product)
    const {img, name, price} = product;
    modalContainer.innerHTML =` 
    <div class="modal-box relative">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <div class="p-10">
    <img src="${img}" alt="">
    </div>
    <h2 class="card-title">${name}</h2>
    <p><span class="font-medium text-xl">Price :</span> <span class="font-semibold text-lg">$ ${price}</span></p>
  </div>
    `

}
const sideBarItem = async (id)=>{
    const phones = await phoneData();
    const product = phones.find(element => element.id === id)
    console.log(product);
    const {img, name , price} = product
    const li = document.createElement('li');
    li.classList.add('flex', 'justify-between', 'items-center', 'bg-slate-400', 'p-2', 'rounded-lg', 'text-white',
    'mb-2')
    li.innerHTML =` 
    <img class="w-16" src="${img}" alt="">
    <span class="text-lg font-semibold">${name}</span>
    <span class="border p-2">1</span>
    <span class="font-semibold text-xl">${price}</span>
    `;
    sideBarContainer.appendChild(li);
}
// modalDetails ()