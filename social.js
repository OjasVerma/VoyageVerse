var a = localStorage.getItem("name");
document.getElementById("Auth_Name").innerHTML = ("Hi 🖐 , " + a);


document.getElementById("search").addEventListener("click", function () {
    document.getElementById("location").innerHTML = document.getElementById("place").value;
    document.getElementById("hash").innerHTML = "#" + document.getElementById("place").value;
    console.log(document.getElementById("place").value);

    document.getElementById("user").innerHTML = window.localStorage.getItem('mail');
});
//const searchQuery = document.getElementById("place").value;
// const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=&titles=${encodeURIComponent(searchQuery)}&explaintext=true`;
// fetch(url, {
//     method: 'GET',
//     withCredentials: true,
//     crossorigin: true,
//     mode: 'no-cors',
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Credentials": true
// })
//     .then(response => response.json())
//     .then(data => {
//         const pages = data.query.pages;
//         const pageId = Object.keys(pages)[0];
//         const pageTitle = pages[pageId].title;
//         const pageExtract = pages[pageId].extract;

//         // Display the title and text extract
//         document.getElementById("info").innerHTML = `${pageExtract}`;
//     })
//     .catch(error => {
//         document.getElementById("info").innerHTML = "<p>Error fetching data from Wikipedia.</p>";
//         console.error("Error:", error);
//     });

//});
document.getElementById("place").value = '';
document.getElementById('capture').addEventListener('click', function () {
    const section = document.getElementById('main');

    // Capture the screenshot of the section
    html2canvas(section).then(function (canvas) {
        // Convert the canvas to an image
        const img = canvas.toDataURL();

        // Create a download link for the image
        const link = document.createElement('a');
        link.href = img;
        link.download = 'screenshot.png';
        link.click();
    });
});


function upload() {
    const fileUploadInput = document.querySelector('#upload_img');
    const image = fileUploadInput.files[0];
    if (!image.type.includes('image')) {
        return alert('Only images are allowed!');
    }
    if (image.size > 10_000_000) {
        return alert('Maximum upload size is 10MB!');
    }
    const fileReader = new FileReader();

    fileReader.readAsDataURL(image);
    fileReader.onload = (fileReaderEvent) => {
        document.getElementById("frame_edit").style.backgroundImage = `url("")`  ;
        document.getElementById("profile").style.display = "block"  ;
        document.getElementById("profile").src = URL.createObjectURL(fileUploadInput.files[0])
        console.log("DOne !")
        document.getElementById("img-up").style.display = "none";
    }
}
