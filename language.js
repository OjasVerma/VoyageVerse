async function translatetext() {
    const search = document.getElementById("input_text_box").value
    const given_lang = document.getElementById("lang").value
    const tar_lang = document.getElementById("lang_output").value
    console.log(document.getElementById("lang_output").value)
    url = `https://api.mymemory.translated.net/get?q=${search}!&langpair=${given_lang}|${tar_lang}`;
    let response = await fetch(url)
    let final = await response.json()
    let a = final["responseData"]["translatedText"]
    document.getElementById("result").innerHTML = a;

}