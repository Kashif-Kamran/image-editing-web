// ============================== Classes =========================== //
class PreviewImg
{
    constructor()
    {
        this.rotationAngle = 0;
        this.brightness = 100;
        this.saturation = 100;
        this.grayscale = 0;
        this.invation = 0;
        this.image = document.querySelector(".preview-img img");

    }
    resetFilters()
    {
        this.rotationAngle = 0;
        this.brightness = 100;
        this.saturation = 100;
        this.grayscale = 0;
        this.invation = 0;
        this.updateImgProperties();

    }
    updateImgProperties()
    {
        let filterString = "brightness(" + this.brightness + "%) saturate(" + this.saturation + "%) grayscale(" + this.grayscale + "%) invert(" + this.invation + "%)"
        document.querySelector(".preview-img img").style.filter = filterString;
        this.image.style.transform = "rotate(" + this.rotationAngle + "deg)"
    }
    updateImg(newURL)
    {
        this.image.src = newURL;
    }
    changePropertyValue(property,value)
    {
        if (property === "brightness")
        {
            this.brightness = value;
        }
        else if (property === "saturation")
        {
            this.saturation = value;
        }
        else if (property === "grayscale")
        {
            this.grayscale = value;
        }
        else if (property === "inversion")
        {
            this.invation = value
        }
        this.updateImgProperties();
    }
    clockwiseRotate()
    {
        this.rotationAngle += 90;
        this.updateImgProperties()
    }
    anticlockWiseRotate()
    {
        this.rotationAngle -= 90;
        this.updateImgProperties()

    }
    upsideDownRoate()
    {
        this.rotationAngle += 180;
        this.updateImgProperties();
    }
}

var previewImg = new PreviewImg();
let fileInputDioBox = document.querySelector(".file-input");
let chooseFileButton = document.querySelector(".choose-img");
// ============ Edidting Buttons ======================= /
let brightnessBtn = document.querySelector("#brightness");
let saturationBtn = document.querySelector("#saturation");
let greyscaleBtn = document.querySelector("#grayscale");
let inversionBtn = document.querySelector("#inversion");
let resetBtn = document.querySelector(".reset-filter")
// rotation Btns
let antiClockRotateBtn = document.querySelector("#left");
let clockRotateBtn = document.querySelector("#right");
let upsideDownRotateBtn = document.querySelector("#vertical");
let mirrorBtn = document.querySelector("#horizontal");

let slider = document.querySelector(".slider input")
let filterName = document.querySelector(".filter-info .name");
let filterValue = document.querySelector(".filter-info .value");


// ==================== Event Handler ====================== //

fileInputDioBox.addEventListener("change",(event) =>
{
    let newImgFile = event.target.files[0];
    if (newImgFile != null)
    {
        console.log("After this functon should bind")
        previewImg.updateImg(URL.createObjectURL(newImgFile))
    }
})

chooseFileButton.addEventListener("click",() =>
{
    fileInputDioBox.click();
})

// ------------ Editing Buttons ------------------/
brightnessBtn.addEventListener("click",() =>
{
    filterName.innerHTML = "Brightness"
    slider.value = previewImg.brightness
    filterValue.innerHTML = slider.value + "%";
})
saturationBtn.addEventListener("click",() =>
{
    filterName.innerHTML = "Saturation"
    slider.value = previewImg.saturation
    filterValue.innerHTML = slider.value + "%";
})
greyscaleBtn.addEventListener("click",() =>
{
    filterName.innerHTML = "Grayscale"
    slider.value = previewImg.grayscale
    filterValue.innerHTML = slider.value + "%";
})
inversionBtn.addEventListener("click",() =>
{
    filterName.innerHTML = "Inversion"
    slider.value = previewImg.invation
    filterValue.innerHTML = slider.value + "%";
})
slider.addEventListener("click",() =>
{
    let sliderValue = slider.value;
    console.log("Slider Value : " + sliderValue)
    filterValue.innerHTML = sliderValue + "%";
    console.log(String(filterName.innerHTML).toLowerCase(),"   ",parseInt(sliderValue))
    previewImg.changePropertyValue(String(filterName.innerHTML).toLowerCase(),parseInt(sliderValue));
})

// ============== Rotation Buttons ================= //

antiClockRotateBtn.addEventListener("click",() =>
{
    previewImg.anticlockWiseRotate();
})
clockRotateBtn.addEventListener("click",() =>
{
    previewImg.clockwiseRotate();
})
upsideDownRotateBtn.addEventListener("click",() =>
{
    previewImg.upsideDownRoate();
})
mirrorBtn.addEventListener("click",() =>
{
    console.log("Mirror Rotate")
})
resetBtn.addEventListener("click",() =>
{
    previewImg.resetFilters();
})  
