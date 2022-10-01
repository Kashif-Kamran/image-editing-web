// Document Components Selection
let previewImg = document.querySelector(".preview-img img");
let fileInputDioBox = document.querySelector(".file-input");
let chooseFileButton = document.querySelector(".choose-img");

let editingOptions = document.querySelectorAll(".options button")


let resetBtn = document.querySelector(".reset-filter")
let antiClockRotateBtn = document.querySelector("#left");
let clockRotateBtn = document.querySelector("#right");
let upsideDownRotateBtn = document.querySelector("#vertical");
let mirrorBtn = document.querySelector("#horizontal");

// ---------------- Slider Selection ------------------/
let slider = document.querySelector(".slider input")
let filterName = document.querySelector(".filter-info .name");
let filterValue = document.querySelector(".filter-info .value");

// ---------------- Initial Values of Image
let image = document.querySelector(".preview-img img");
let activeProperty = "none";

let properties = {
    "Brightness": 100,
    "Saturation": 100,
    "Grayscale": 0,
    "Inversion": 0,
    "RotationAngle": 0
}
// Changing Image Properties

function updateImgColorProperties()
{
    let filterString = "brightness(" + properties["Brightness"] + "%) saturate(" + properties["Saturation"] + "%) grayscale(" + properties["Grayscale"] + "%) invert(" + properties["Inversion"] + "%)"
    document.querySelector(".preview-img img").style.filter = filterString;
}

//------ Step # 1 : uploading Image Functionality ------- // 
chooseFileButton.addEventListener("click",() =>
{
    fileInputDioBox.click(); // This is going to call click functionality of dialog box
})
fileInputDioBox.addEventListener("change",(event) =>
{
    // ---> { Steps } <--- 
    // 1.check for none zero files array
    // 2. get image file from file input diolog box
    // 3. load file in preview image src

    let newImg = event.target.files[0];
    if (newImg == null)
    {
        console.log("Dialog Box was opened but No Img was loaded")
        return;
    }
    previewImg.src = URL.createObjectURL(newImg);
})


// ============ Editing Photo Implementation =============== //
// --------- Slider Functions ------------// 
function changeSliderHeadings(heading,value)
{
    filterName.innerText = heading;
    filterValue.innerText = value + "%";
}
slider.addEventListener("click",(event) =>
{

    if (activeProperty === "none")
    {
        console.log("No Property selected");
        return;
    }
    properties[activeProperty] = slider.value
    changeSliderHeadings(activeProperty,properties[activeProperty])
    updateImgColorProperties()

})
// ==================== > Color Grading Options Options  < ===============  //
editingOptions.forEach((element) =>
{
    element.addEventListener("click",() =>
    {
        let property = String(element.innerText);
        activeProperty = property
        changeSliderHeadings(property,properties[property]);
        slider.value = properties[property];
    })
});