let currentCategory = "all";
const items = [
  // Hospital Items
  {
    name: "First Aid Kit",
    quantity: 10,
    description: "Essential first aid supplies for emergencies.",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQArQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAECBQYHAwj/xABKEAABAwMBAwcFDAYJBQAAAAABAAIDBAURIQYSMQcTFCJBUWFxgZGh0RUyQ1JVYnKTscHS4RcjM0JT8RYkgpKipMLD8CU1g4SU/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAECAwQFBgf/xAArEQACAQMDAwMCBwAAAAAAAAAAAQIDBBEFIVESEzEVQaEUIiQyQlJhccH/2gAMAwEAAhEDEQA/AO4oiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCKhKZQFUXlJPFF+0lYz6TgFGN1oudEQqY3SHg1h3j6kJwyci8ekMPafQvKeubE3Ijlee5jMoRjJLRYs3XdYZJKSoYwcS/dGPWo39J6Jx3Y2yPd83B+9Q5JeTLGjUl4RnUWMiub5WbzKSbHZvENUhtW8ty6IA92/wDkiaZSUXHZktFF6U7+H/iTpTjwj/xfkpKkpF4c+R75rR/a/JI6gPdu4wexAe6IiAIioThAVXlNUQwtzK8NzwHaVCqq17yW07gGdrsanyKIG67x1J4k6k+dATJLg7OIYtO0vOPUvCquhpozJPLHGOAONc9wCwt5vcVvHNRbstSR7zsZ4u9i1KruMtQ8vllL3/GPZ5FinVUTpWmnVK33NYRsdy2srNWUbTl3AkZx4n2LxprrHMWdM6fXTaZzIY4gT2boOvnBWrOqfQpNNcuiTtnglcHgYb+rad3yZPHxWJVs+WdSppijHEEdFoYWmIONDBTA8GtAz58AYXvPLFTQPmmIjjYN5zsaALms20FfI8l1dVD6L2t9W6o1VdamohMU1ZUyMJyWvkaQfL1Vf6iCNRaNcN7mwVG19ZLO80rWRU/7gLck+JXn/Su5AjD4vqwtX54AYBVOeHetV3EsnbjpVBLHSZu6Xesuj42zTkRj4NjcZK2jZy1cxE2oqGgOI6jcaNC1rZGg6fXGWQZihwT49y6DoBp3aLPRTl90jjapVhQ/D0tuSuVXKs3tNFdGQ8ZC2jhl7QVeX7o6o17Src7oVhUMlAnJVY3EPYfnBW5VN7dBPdqgMuiIpKhYutqTLmNgO4OPzlk3Z3Tjjha3DOD1ZCGluhygPUNc7jkeCwG0+0bbaTR0pzVkdZ3ZEPas7XVUNLRT1AkMroonPEbRxwCcLn0s+y87DV1lyqpKibrv3A0DePHGnD2LFVbSwmdLTaMJz6qibS9l/pipK7eLiXElxySeLvE+K8HVemgUipr9mGE8y6rf5S32LGT3a2jIhimP0iPYufJNe57GlKLSSg0SOlHuVpqHHRY2S7t+Ci9K8HXac+9DB5ljbNuK/gy5ncrTK4rEe6lT8Zo8jU906n+IPQoyZFgy/OPKZkOmFhzcan+M5U6fUgEid2VDZPhHbti6ZlPZYnDG9LlzlnS0ELWdk6vnLFSua7Tdxqszz7u9dentBHza8k5XE2+WTAxvDKv0bwUETOPavRryRqrmsSScqmVaw5aqE6oSiuVa5w1BVrn4071Ar61sPVHWd4DOPz8ESyQ2bPTu3oWO72gr0WK2Ze+SyUjpM74aQ7JyQQSNfFZVSQCtSubOYuMzBwzkefVbata2qj3KiGYcHNLT5v5qUCAXBwwcEYwuIXamNDc6ulJIEUrmgeHEerC7HzhXMuUGDm9oDMBhtRC1/lcND9gWG4pOSyjs6HcdFdwfujXiVTKsz3plaDoTPX95F+UyrMplV7cuC3dRflVVmU3lHbnwT3Il4KuBGF5byu1wrKhN+w70UdY5OpzJY9wnJY/C2sOXPOTipLIZ4s9xC3gTLpU4NQSPA6jhXU/7JzXL3YQVjWSqTDKr9JpZMgx2hCskevISAZWFvN4ZTh0bHDnOGmpB7AB3+CJZGSVcroylYcO/WcO/GeHn8FhLhdIrVAJ6jekqpDiKJmrt4/ujvce08AoFdXx2uLpVX1qouxHG3rFjjpujvefUsnstYZ+fF4vLc10g/UwnUUzT2fSPaVfZII23YxlZHY423BsbKgyPe5kZyGbzi4Nz2kArOqDbD1XjyH/noU5UAWr8o9S+37LVFxZDz3RHNkcwHB3c4PoBz5ltChXmjFwtVXRHGJ4Xx6jTUIgcNpOUi2vIFTFPF4tjz/qUa93/AGWvj4HTXCojMQOjqeQcfEAqBsBY2X7aCot9ytVIxlE08/uxOY4OzgDj35W+1XJTs/PqyCSE4+DkcPVlZMZRNOcqcuqLwznu5sw7JjvDAPn8437Y14visWepeqf6w/hW6z8jdtOsVfWx+G81w9YUOXkapw0lt4qG4+NE0qOiJuLUblfqNSMNozpeaX6z8kMNo+WqbzvWGvNstVuuNTRtr6qcU7hmaOBjmnQcOuOGcKK2CyPaP+pVzT2g0TT/ALir0R4L+qXPPwbFzFq7L3Sf30EFr+W6T++tcNLZwNLvUE9xocf61Z0S1dt1k89IfxJ0oeq3PPwbMYbb2Xik+sH3lVENv7brS/XM9q1k0dszpd/8o/2qnQrbn/u7PPTPU7D1S55+DoOzt2tdonLpLrTFjgeEjT962Qbc2Hh7pRekLjZo7b8sA+ApXqjaO1bw3rs8DtPQ3H71PVg0qtSVWfXLydrZtzs7jLrnEM/OVsnKLs/CcCvjdpocOd6mtP2rjRo7J8sznyUB/GqMgsrJW71wrZI+0R0TQT6ZMBMmPB1hvKPHXStgowRnTnDGW510ABJJKVVe21MNXWuxVgYawHPM50wO+Q8PDgtGsV8o6AmO2W18bxl7qqaYSShg8jQG+b18V0XYrZmevnivt9jIx1qOkkH7Pt33A/vHyaKc4GCbsfs7UT1DL3fGf1jjS0zjkQN7z3vPqyt9YMaKyNuAF6LC22XSJdvOJC35qyCxtu1nce5uqySlEMKhVUUkGkSsFt2mqHNaGic5JA99nUfaVnGTAqDtdDuVMFS0a4xnxH81HZWMwP1gz5VfOUQZkSA8FFuTOdop2DTejc3I8QvGOpzwPrXo6ZrmlpxwUMlHy4228y9zeccHAlruHeqtoWFxzunysCzN9pzT3uvh+JUPHrKg7pGq1JV8M9PT06jKKlggOtQJ0f6lb7knORKFl26hV3fBR9SjOtIoNflMMbQ/slHoVvuRIfhG+hZvCqB4KyuIMq9Go8GIhsj5JGs55o3jjgt0peTFk0Mchrz1mg6N/JYRhLXA9xXXtm3dIs1NINerhZ4TjLwcnU7CNtGMoeDRP0Vx4G7WknxBVrOSWR8mt1DWE8BESceldTbF4epe0ceOxX2ORuavstyf0FlHWqqmpBIcWSBoYSO8AZPkJW+xMGBovCBvV8ymR+9CoyyLgqPeGtyeAVSVbBF0qo3Pg2YdJ7FUsZK2xGOnBd79/WP3KWiK5QIiICDd7eLjTGPe3Xt1Y7uPitOOzcTnyCvgaJwcbzHHUYGDkLf1hJ3c5PJJ8Y6HwGilEGm1FlNO7+rT1DPoyuUihtdZK8B9xqWg9xaftC2GWEOHDVIGGIE9ynBJyHlUgigu9IxhL5+ZPOSFoBdrpnAWoOixAC7AIOmV9DN2Usl8gbV3SginneSBKchwaCQBkLH1HJLstMDuxVkZOuW1Lj9uVqToNttHbtdUhSpKEk9jgzOCuXYqjkYtZB6Lda2J3ZvBrh9ix03IxU/AX5n9um9jlgdtM6lPWrbGHlHLlVdK/Q1cvlulP/ru9qoeRy5jhd6U/wDhd7VX6epwZ1rFp+45v2Lp3JxUmazvicf2UhA8ij/oeu/Zc6Lzscs1s3sJftn5ZSKijqY5Bjda5zcHv1CyUaU4SyzR1O+tbm3cYS3M6MK9mFabRfRwgof/AKH/AIE9y763jTUZ8lS78C3NzzOSXEQpDDhqgCkvLcDoMecjOJsjHlwPsWTZb6qVrQcQDt3iHHzY0TAyRnSOlmFPDrK7h3Ad5Wco6ZtNA2Nuva4ntKsoqCCjaeaaS53vnuOXO86lqUiGwiIpICIiAoRlRPc2mGSwOaT3PKmIgMc+hkbrGWv8DoVHmo6p0ZbHG0Ej952gWZRTkHjSQ9HpYofiNAK9kRQAqKqICipuq5EBbhMK5EAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB//2Q==",
    category: "Medical Supplies",
    medicalCategory: "Medication",
  },
  {
    name: "Wheelchair",
    quantity: 5,
    description: "A wheelchair for patients with mobility needs.",
    image:
      "data:image/jpeg;base64,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",
    category: "Medical Supplies",
    medicalCategory: "",
  },
  {
    name: "Stethoscope",
    quantity: 20,
    description:
      "A medical device for listening to the internal sounds of the body.",
    image: "stethoscope.jpg",
    category: "Medical Supplies",
    medicalCategory: "",
  },
  {
    name: "Surgical Masks",
    quantity: 100,
    description: "Protective masks worn by healthcare professionals.",
    image: "surgical_masks.jpg",
    category: "Personal Protective Equipment",
  },
  // Blood Donations
  {
    name: "Blood Pressure Monitor",
    quantity: 15,
    description: "Device used to measure blood pressure.",
    image: "blood_pressure_monitor.jpg",
    category: "Medical Equipment",
  },
  {
    name: "Blood Glucose Meter",
    quantity: 8,
    description: "Used to measure the concentration of glucose in the blood.",
    image: "glucose_meter.jpg",
    category: "Medical Equipment",
  },
  {
    name: "Blood Bag",
    quantity: 25,
    description: "Sterile bag used to collect and store blood.",
    image: "blood_bag.jpg",
    category: "Medical Supplies",
  },
  {
    name: "Blood Donation Kit",
    quantity: 50,
    description: "Kit containing supplies for blood donation.",
    image: "blood_donation_kit.jpg",
    category: "Blood Donations",
  },
  // School Donations
  {
    name: "Textbooks",
    quantity: 30,
    description: "Educational books for students.",
    image: "textbooks.jpg",
    category: "Education",
  },
  {
    name: "Stationery Set",
    quantity: 12,
    description:
      "Includes pens, pencils, erasers, and other essentials for school.",
    image: "stationery_set.jpg",
    category: "Education",
  },
  {
    name: "Backpack",
    quantity: 40,
    description: "A bag used to carry books and school supplies.",
    image: "backpack.jpg",
    category: "Education",
  },
  // Food Donations
  {
    name: "Canned Food",
    quantity: 200,
    description: "Non-perishable food items in cans.",
    image: "canned_food.jpg",
    category: "Food",
  },
  {
    name: "Rice",
    quantity: 100,
    description: "Staple food grain.",
    image: "rice.jpg",
    category: "Food",
  },
  {
    name: "Fresh Fruits",
    quantity: 50,
    description: "Assorted fresh fruits.",
    image: "fresh_fruits.jpg",
    category: "Food",
  },
  // Clothing Donations
  {
    name: "Jackets",
    quantity: 30,
    description: "Warm jackets for cold weather.",
    image: "jackets.jpg",
    category: "Clothes",
  },
  {
    name: "Shoes",
    quantity: 50,
    description: "Assorted shoes for all ages.",
    image: "shoes.jpg",
    category: "Clothes",
  },
  {
    name: "T-shirts",
    quantity: 100,
    description: "Casual t-shirts in various colors.",
    image: "tshirts.jpg",
    category: "Clothes",
  },
  // Toy Donations
  {
    name: "Stuffed Animals",
    quantity: 80,
    description: "Soft and cuddly stuffed animals for children.",
    image: "stuffed_animals.jpg",
    category: "Toys",
  },
  {
    name: "Building Blocks",
    quantity: 60,
    description: "Educational building blocks for kids.",
    image: "building_blocks.jpg",
    category: "Toys",
  },
  {
    name: "Dolls",
    quantity: 40,
    description: "Diverse collection of dolls for playtime.",
    image: "dolls.jpg",
    category: "School Supplies",
  },
];
const filterOptions = {
  clothes: `
    <label for="age">Age:</label>
    <div class="age-inputs">
        <input type="number" id="minAge" placeholder="Min Age">
        <input type="number" id="maxAge" placeholder="Max Age">
    </div>
    <label for="gender">Gender:</label>
    <select id="gender">
        <option value="all">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>
    <label for="season">Season:</label>
    <select id="season">
        <option value="all">All</option>
        <option value="summer">Summer</option>
        <option value="winter">Winter</option>
        <option value="spring">Spring</option>
        <option value="autumn">Autumn</option>
    </select>
  `,
  school: `
    <label for="itemType">Item Type:</label>
    <select id="SchoolitemType">
        <option value="books">Books</option>
        <option value="stationary">Stationary</option>
    </select>
  `,
  toys: ` <label for="age">Age:</label>
  <input type="number" id="ageMin" placeholder="Min Age">
  <input type="number" id="ageMax" placeholder="Max Age">

  <label for="gender">Gender:</label>
  <select id="gender">
      <option value="all">All</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
  </select>
  <label for="category">Category:</label>
  <select id="category">
      <option value="all">All</option>
      <option value="board games">Board Games</option>
      <option value="stuffed toys">Stuffed Toys</option>
      <option value="dolls">Dolls</option>
      <option value="sports">Sports</option>
      <option value="cars">Cars</option>
      <option value="outdoor">Outdoor</option>
  </select>`,
  food: `<label for="foodCategory">Food Category:</label>
  <select id="foodCategory">
      <option value="all">All</option>
      <option value="fruits_vegetables">Fruits and Vegetables</option>
      <option value="canned_foods">Canned Foods</option>
      <option value="fresh_meals">Fresh Meals</option>
      <option value="baked_goods">Baked Goods</option>
  </select>
  `,
  medical: `<label for="medicalCategory">Medical Category:</label>
  <select id="medicalCategory">
      <option value="all">All</option>
      <option value="medical_devices">Medical Devices</option>
      <option value="medical_equipment">Medical Equipment</option>
      <option value="medication">Medication</option>
  </select>
  `,
  blood: `<label for="bloodHospital">Hospital:</label>
  <select id="bloodHospital">
      <option value="all">All</option>
      <!-- Add options for hospitals -->
  </select>
  
  <label for="bloodGovernorate">Governorate:</label>
  <select id="bloodGovernorate">
      <option value="all">All</option>
      <!-- Add options for governorates -->
  </select>
  
  <label for="bloodArea">Area:</label>
  <select id="bloodArea">
      <option value="all">All</option>
      <!-- Add options for areas -->
  </select>
  `,
  all: ``,
};

document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", (event) => {
    const selectedCategory = event.target.textContent.toLowerCase();
    if (selectedCategory === "all") {
      const resultsContainer = document.getElementById("filterInputs");
      resultsContainer.innerHTML = "";
      displayItems();
    } else {
      const selectedCategories = selectedCategory.split(" ");
      currentCategory = selectedCategories[0];
      filterInputs(selectedCategories[0]);
      filterItemsByCategory(selectedCategory);
    }
  });
});
function filterItemsByCategory2(category) {
  const results = items.filter((item) =>
    item.category.toLowerCase().includes(category)
  );
  return results;
}
function filterItemsByCategory(category) {
  const results = filterItemsByCategory2(category);
  displayResults(results);
}

document.getElementById("searchInput").addEventListener("input", searchItems);
document
  .getElementById("searchInput")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      searchItems();
    }
  });
function searchItems() {
  let currentList;
  if (currentCategory === "all") {
    currentList = items;
  } else {
    filterItemsByCategory2(currentCategory);
  }
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const results = currentList.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.category.toLowerCase().includes(searchTerm)
  );
  displayResults(results);
}

function displayResults(results) {
  const resultsContainer = document.getElementById("itemContainer");
  resultsContainer.innerHTML = "";

  if (results.length === 0) {
    resultsContainer.textContent = "No items found.";
  } else {
    results.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("item-card");
      itemElement.innerHTML = `
   <a  role="button"><img src="${item.image}" alt="${item.name}" /><br>
            <h2 style="color:#0c0f1d;font-size:36px;text-align:center">${item.name}</h2><br>
            <p style="color:color:#0c0f1d;font-size:26px ">Description: ${item.description}</p>
             </a>
        `;
      resultsContainer.appendChild(itemElement);
    });
    resultsContainer.style.display = "flex";
    resultsContainer.style.flexWrap = "wrap";
    resultsContainer.style.justifyContent = "space-between"; // Adjust as needed
    resultsContainer.style.marginRight = "-10px"; // Adjust for spacing between item cards
    resultsContainer.style.marginBottom = "-10px";
  }
}
function displayItems() {
  const itemContainer = document.getElementById("itemContainer");

  itemContainer.innerHTML = "";

  items.forEach((item) => {
    const itemCard = document.createElement("div");
    itemCard.classList.add("item-card");

    itemCard.innerHTML = `
      <a  role="button"><img src="${item.image}" alt="${item.name}" /><br>
            <h2 style="color:#0c0f1d;font-size:36px;text-align:center">${item.name}</h2><br>
            <p style="color:color:#0c0f1d;font-size:26px ">Description: ${item.description}</p>
             </a>
        `;

    itemContainer.appendChild(itemCard);
  });
  itemContainer.style.display = "flex";
  itemContainer.style.flexWrap = "wrap";
  itemContainer.style.justifyContent = "space-between"; // Adjust as needed
  itemContainer.style.marginRight = "-10px"; // Adjust for spacing between item cards
  itemContainer.style.marginBottom = "-10px";
}
function filterInputs(category) {
  const filterInputsDiv = document.getElementById("filterInputs");
  filterInputsDiv.innerHTML = "";

  const categoryInputs = filterOptions[category.toLowerCase()];

  if (categoryInputs) {
    filterInputsDiv.innerHTML = categoryInputs;
  } else {
    console.error("Category not found!");
  }
}

function filterClothes() {
  let FilterItems = filterItemsByCategory2(currentCategory);
  const minAgeInput = document.getElementById("minAge").value;
  const maxAgeInput = document.getElementById("maxAge").value;

  const minAge = minAgeInput ? parseInt(minAgeInput) : 0;
  const maxAge = maxAgeInput ? parseInt(maxAgeInput) : Number.MAX_VALUE;

  const gender = document.getElementById("gender").value;
  const season = document.getElementById("season").value;

  const filteredItems = FilterItems.filter((item) => {
    const fitsAgeRange = item.minAge <= maxAge && item.maxAge >= minAge;

    const fitsGender = gender === "All" || item.gender === gender;
    const fitsSeason = season === "All" || item.season === season;

    return fitsAgeRange && fitsGender && fitsSeason;
  });
  displayItems(filteredItems);
}
function filterSchoolSupplies() {
  let FilterItems = filterItemsByCategory2(currentCategory);
  const category = document.getElementById("category").value;
  let results = FilterItems.filter((item) => {
    const fitsCategory = category === "All" || item.category === category;
    return fitsCategory;
  });

  displayResults(results);
}
function filterToys() {
  let FilterItems = filterItemsByCategory2(currentCategory);
  const minAgeInput = document.getElementById("ageMin").value;
  const maxAgeInput = document.getElementById("ageMax").value;

  const minAge = minAgeInput ? parseInt(minAgeInput) : 0;
  const maxAge = maxAgeInput ? parseInt(maxAgeInput) : Number.MAX_VALUE;

  const gender = document.getElementById("gender").value;
  const category = document.getElementById("category").value;

  let filteredRequests = FilterItems.filter((request) => {
    const fitsAgeRange = minAge <= request.ageMax && maxAge >= request.ageMin;
    const fitsGender = gender === "All" || request.gender === gender;
    const fitsCategory = category === "All" || request.category === category;

    return fitsAgeRange && fitsGender && fitsCategory;
  });

  displayResults(filteredRequests);
}
function filterFoodRequests() {
  let FilterItems = filterItemsByCategory2(currentCategory);
  const foodCategory = document.getElementById("foodCategory").value;

  const filteredRequests = FilterItems.filter((request) => {
    return foodCategory === "All" || request.category === foodCategory;
  });

  displayFoodRequests(filteredRequests);
}
function filterMedicalRequests() {
  let FilterItems = filterItemsByCategory2(currentCategory);
  const medicalCategory = document.getElementById("medicalCategory").value;
  alert(medicalCategory);

  const filteredRequests = FilterItems.filter((request) => {
    alert(medicalCategory);
    alert(request.medicalCategory);
    return (
      medicalCategory === "all" || request.medicalCategory === medicalCategory
    );
  });
  displayResults(filteredRequests);
}
function filterBloodRequests() {
  let FilterItems = filterItemsByCategory2(currentCategory);
  const selectedHospital = document.getElementById("bloodHospital").value;
  const selectedGovernorate = document.getElementById("bloodGovernorate").value;
  const selectedArea = document.getElementById("bloodArea").value;

  const filteredRequests = FilterItems.filter((request) => {
    return (
      (selectedHospital === "all" || request.hospital === selectedHospital) &&
      (selectedGovernorate === "all" ||
        request.governorate === selectedGovernorate) &&
      (selectedArea === "all" || request.area === selectedArea)
    );
  });

  displayBloodRequests(filteredRequests);
}

displayItems();
document.getElementById("minAge").addEventListener("change", filterClothes);
document.getElementById("maxAge").addEventListener("change", filterClothes);
document.getElementById("gender").addEventListener("change", filterClothes);
document.getElementById("season").addEventListener("change", filterClothes);
document
  .getElementById("itemType")
  .addEventListener("change", filterSchoolSupplies);
document.getElementById("ageMin").addEventListener("input", filterToys);
document.getElementById("ageMax").addEventListener("input", filterToys);
document.getElementById("gender").addEventListener("change", filterToys);
document.getElementById("category").addEventListener("change", filterToys);
document
  .getElementById("foodCategory")
  .addEventListener("change", filterFoodRequests);
document
  .getElementById("medicalCategory")
  .addEventListener("change", filterMedicalRequests);
document
  .getElementById("bloodHospital")
  .addEventListener("change", filterBloodRequests);
document
  .getElementById("bloodGovernorate")
  .addEventListener("change", filterBloodRequests);
document
  .getElementById("bloodArea")
  .addEventListener("change", filterBloodRequests);