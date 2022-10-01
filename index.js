// Document Components Selection
let previewImg = document.querySelector(".preview-img img");
let fileInputDioBox = document.querySelector(".file-input");
let chooseFileButton = document.querySelector(".choose-img");

let editingOptions = document.querySelectorAll(".filter .options button")
let rotationalOptions = document.querySelectorAll(".rotate .options button")

let resetBtn = document.querySelector(".reset-filter")
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
    "RotationAngle": 0,

}
function resetProperties()
{
    properties["Brightness"] = 100;
    properties["Saturation"] = 100;
    properties["Grayscale"] = 0;
    properties["Inversion"] = 0;
    properties["RotationAngle"] = 0;
    changeSliderHeadings(activeProperty,properties[activeProperty])
    updateImgColorProperties()
}
// Changing Image Properties

function updateImgColorProperties()
{
    let filterString = "brightness(" + properties["Brightness"] + "%) saturate(" + properties["Saturation"] + "%) grayscale(" + properties["Grayscale"] + "%) invert(" + properties["Inversion"] + "%)"
    previewImg.style.filter = filterString;
    previewImg.style.transform = "rotate(" + properties["RotationAngle"] + "deg)"
}

//------ Step # 1 : uploading Image Functionality ------- // 
chooseFileButton.addEventListener("click",() =>
{
    fileInputDioBox.click(); // This is going to call click functionality of dialog box
})
fileInputDioBox.addEventListener("change",(event) =>
{
    let newImg = event.target.files[0];
    if (newImg == null)
    {
        console.log("Dialog Box was opened but No Img was loaded")
        return;
    }
    previewImg.src = URL.createObjectURL(newImg);
    resetProperties();
})


// ============ Editing Photo Implementation =============== //
// --------- Slider Functions ------------// 
function changeSliderHeadings(heading,value)
{
    if (heading != "none")
    {
        filterName.innerText = heading;
        filterValue.innerText = value + "%";
        slider.value = value;
    }
}
slider.addEventListener("click",() =>
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

// ==================== > Color Grading Options < ===============  //

editingOptions.forEach((element) =>
{
    element.addEventListener("click",() =>
    {
        let property = String(element.innerText);
        activeProperty = property
        changeSliderHeadings(property,properties[property]);

    })
});
// ====================== Rotational Function ===================//
rotationalOptions.forEach((element) =>
{
    element.addEventListener("click",() =>
    {
        if (element.id === "left")
        {
            properties["RotationAngle"] -= 15;
        } else if (element.id === "right")
        {
            properties["RotationAngle"] += 15;
        } else if (element.id === "horizontal")
        {
            if (properties["RotationAngle"] != 90)
            {
                properties["RotationAngle"] = 90;
            }
            else
            {
                properties["RotationAngle"] = 270
            }
        }
        else if (element.id === "vertical")
        {

            if (properties["RotationAngle"] != 0)
            {
                properties["RotationAngle"] = 0;
            }
            else
            {
                properties["RotationAngle"] = 180;
            }
        }
        updateImgColorProperties();
    })
})
// =================== Reset Function ==================//
resetBtn.addEventListener("click",() =>
{
    console.log("Values Has been Reset To orignal State")
    resetProperties();
})
// ================== Downloading Img =================//
