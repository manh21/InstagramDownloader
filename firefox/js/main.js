/*_________________________________________*/
let buttonClass = "dCJp8 afkep _0mzm -";
let spanClass = "ltpMr Slqrh";
let pictureBox = "v1Nh3 kIKUG _bz0w";
let downloadButton = "";
let hoverableButton = "";
/*_________________________________________*/


main();

async function main() {

    let url;
    let oldUrl = "some random string";
    downloadButton = new Button(buttonClass, spanClass);

    hoverableButton = new Hoverable(pictureBox);
    let hoverPictures;
    let oldHover = [];

    while (true) {
        // checks if you are on the right page
        url = window.location.href;
        hoverPictures = document.getElementsByClassName("v1Nh3 kIKUG  _bz0w");
        let i = 0;
        if (url.includes("instagram.com/p/") && url.localeCompare(oldUrl) !== 0 || i < 4 && url.includes("instagram.com/p/")) {
            oldUrl = url;
            i = 0;
            downloadButton.createLink(url);
            await sleep(100);
            downloadButton.deleteButton();
            downloadButton.createButton();
        } else if (url.includes("instagram.com/") && hoverPictures.length > 0 && hoverPictures != oldHover) {
            oldHover = hoverPictures;
            hoverableButton.removeHoverable();
            hoverableButton.createHoverable();
            hoverableButton.createLink();
            await sleep(5000);
        }
        await sleep(100);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
