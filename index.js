// 
let fileInputDioBox = document.querySelector(".file-input");
let chooseFileButton = document.querySelector(".choose-img");
let imgToPreview = document.querySelector(".preview-img img");

// ==================== Event Handler ====================== //

fileInputDioBox.addEventListener("change",(event) =>
{
    let newImgFile = event.target.files[0];
    if (newImgFile != null)
    {
        imgToPreview.src = URL.createObjectURL(newImgFile);
    }
})

chooseFileButton.addEventListener("click",() =>
{
    fileInputDioBox.click();
})
//
