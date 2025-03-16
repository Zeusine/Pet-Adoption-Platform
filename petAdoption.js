// loadCategory of animals

const loadCategory = async () => {
    loadingSpinner()
    const res = await fetch("https://openapi.programming-hero.com/api/peddy/categories")
    const data = await res.json();
    displayCategory(data.categories)
}

// loadCategoryObject = {
//     "status": true,
//     "message": "successfully fetched all the categories data",
//     "categories": [
//         {
//             "id": 1,
//             "category": "Cat",
//             "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
//         },
//         {
//             "id": 2,
//             "category": "Dog",
//             "category_icon": "https://i.ibb.co.com/c8Yp1y7/dog.png"
//         },
//         {
//             "id": 3,
//             "category": "Rabbit",
//             "category_icon": "https://i.ibb.co.com/3hftmLC/rabbit.png"
//         },
//         {
//             "id": 4,
//             "category": "Bird",
//             "category_icon": "https://i.ibb.co.com/6HHZwfq/bird.png"
//         }
//     ]
// }

const displayCategory = (data) => {

    const animalCategory = document.getElementById("animalCategory");

    for (category of data) {

        const div = document.createElement("div")
        div.innerHTML = `
        <button onclick="loadCategoryButton('${category.category}')" class="btn btn-xl bg-white p-10">
            <img src="${category.category_icon}">
            <h1>${category.category} </h1>
            
            
            
        </button>`
        animalCategory.appendChild(div)

    }





}



// load all pets

// pet = {
//     "petId": 1,
//     "breed": "Golden Retriever",
//     "category": "Dog",
//     "date_of_birth": "2023-01-15",
//     "price": 1200,
//     "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//     "gender": "Male",
//     "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Sunny"
// }

const loadAllPets = async () => {



    const res = await fetch("https://openapi.programming-hero.com/api/peddy/pets")
    const data = await res.json()
    displayAllPets(data.pets)
}

const showLikedPetImage = (image) => {
    console.log(image)
    const likedPetContainer = document.getElementById("likedPetsCardContainer");
    const div = document.createElement("div");

    div.innerHTML = `
    <img class="object-contain"
    
    
    src="${image}">
    
    
    `
    likedPetContainer.appendChild(div)
}


const sorted = (allPetsReceived,flag =false) => {
    console.log("sorted", allPetsReceived,flag)
    const secondaryAllPetsReceived = [...allPetsReceived]
    
    if (secondaryAllPetsReceived.length != 0){
        console.log(secondaryAllPetsReceived)
        const sortedArrayOfObject = secondaryAllPetsReceived.sort((a, b) => b.price - a.price)
    

    if (flag == true){
        
        displayAllPets(sortedArrayOfObject);
        flag = false

    }
    else {
        return
    }

    }
    
    

}





const displayAllPets = (allPets) => {
    console.log("displayAll",[...allPets])
    document.getElementById("sortButton").addEventListener("click",function(){
        sorted(allPets,true)
    })

    const allPetsCardContainer = document.getElementById('allPetsCardContainer');
    allPetsCardContainer.innerHTML = ""
    if (allPets.length == 0) {
        const div = document.createElement("div");
        div.classList.add("w-[910px]", "col-span-3", "flex", "justify-center", "items-center", "text-center")


        div.innerHTML = `
        <div class="text-center ">
            <img class="justify-center w-70 h-70  mx-auto object-cover" src="images/error.webp">
            <p class="font-bold text-4xl ">No Information Available
            </p>
        </div>
        
        `
        allPetsCardContainer.appendChild(div)

    }
    else {
        for (pets of allPets) {
            const div = document.createElement("div");



            div.innerHTML = `
            <div class="card bg-base-100 w-73 shadow-sm">
                <figure>
                    <img class="w-70 mt-5 rounded-lg"
                    src="${pets.image}"
                    alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">${pets.pet_name}</h2>
                    <div class="font-light text-gray-500">
                        <p>Breed: ${pets.breed}</p>
                        <p>Birth: ${pets.date_of_birth ? pets.date_of_birth : "Not Available"} </p>
                        <p>Gender: ${pets.gender} </p>
                        <p>Price: ${pets.price}$</p>
                    </div>
                    <hr class="text-gray-200">
                    
                    <div class="card-actions justify-evenly ">
                        <button class="btn border-[#0e7a81]" onclick="showLikedPetImage('${pets.image}')">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                            </svg>
    
                        </button>
                        <button class="btn text-[#0E7A81] border-[#0E7A81]">Adopt</button>
                        <button onclick="detailsButton(${pets.petId})" class="btn text-[#0E7A81] border-[#0e7a81] " >Details</button>
                    </div>
                </div>
            </div>
    
            
            
            
            
            `
            allPetsCardContainer.appendChild(div)

        }
    }
}

// load catagories button wise

const loadCategoryButton = async (animalName) => {
    loadingSpinner()

    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${animalName}`);
    const data = await res.json();

    displayAllPets(data.data)


}

// details button

// {
//     "petId": 4,
//     "breed": "Holland Lop",
//     "category": "Rabbit",
//     "date_of_birth": "2023-06-30",
//     "price": 200,
//     "image": "https://i.ibb.co.com/4g3Jrjf/pet-4.jpg",
//     "gender": "Female",
//     "pet_details": "This adorable female Holland Lop rabbit, born on June 30, 2023, is known for her calm and gentle nature. She thrives in quiet environments and enjoys being handled with care. Priced at $200, she is an ideal pet for those looking for a low-maintenance, friendly rabbit. Note that she is not vaccinated.",
//     "vaccinated_status": "Not",
//     "pet_name": "Nibbles"
// }

const detailsButton = async (pets) => {


    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${pets}`);
    const petDetailsById = await res.json();
    const petData = petDetailsById.petData
    console.log(petDetailsById)
    const detailsButton = document.getElementById("detailsButton");
    const detailsContainer = document.getElementById("detailsContainer");



    detailsContainer.innerHTML = `
        <img class="w-130 mb-5" src="${petData.image}">
        <h1 class="font-bold text-2xl mb-3">${petData.pet_name} </h1>
        <div class="flex gap-6 font-light text-gray-500"> 
            <div>
                <p>Breed: ${petData.breed}</p>
                <p>Gender: ${petData.gender}</p>
                <p>Vaccinated Status: ${petData.vaccinated_status}</p>
            </div>
            <div>
                <p>Birth: ${petData.date_of_birth}</p>
                <p>Price: ${petData.price}$</p>
            </div>
        
        </div>
        <h1 class="font-bold text-base my-3 text-gray-600">Details Information</h1>
         <p class="text-gray-500 font-light">Breed: ${petData.pet_details}</p>

    
    `
    detailsButton.click()
}

const loadingSpinner = () => {
    const loading = document.getElementById("loading");
    loading.classList.remove("hidden")
    const allPetsCardContainer = document.getElementById("allPetsCardContainer");
    allPetsCardContainer.classList.add("hidden")

    setTimeout(() => {
        loading.classList.add("hidden")
        allPetsCardContainer.classList.remove("hidden")

    }, 2000)
}



loadCategory()
loadAllPets()