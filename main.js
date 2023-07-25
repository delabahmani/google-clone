const searchInput = document.querySelector("#search-input");




searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&hl=en&sxsrf=AB5stBg7LEIeFMYtMiSLe1k1-LR1gQJskw%3A1690241466050&source=hp&ei=ugm_ZKs3sKqm1A_Ur5ygDg&iflsig=AD69kcEAAAAAZL8Xyn3XymorRXkx0PFCjhYORVLiCr-R&ved=0ahUKEwir_KmRwKiAAxUwlYkEHdQXB-QQ4dUDCAs&uact=5&oq=" + input + "&gs_lp=Egdnd3Mtd2l6IgVoZWxsbzIEECMYJzIKEC4YigUYsQMYQzIHEC4YigUYQzIHEC4YigUYQzIHEAAYigUYQzITEC4YigUYsQMYgwEYxwEY0QMYQzIHEC4YigUYQzIIEC4YgAQYsQMyCxAAGIAEGLEDGIMBMggQLhiABBixA0jnDFDACFj4C3ABeACQAQCYAXWgAa8DqgEDMC40uAEDyAEA-AEBqAIKwgIHECMY6gIYJ8ICBxAjGIoFGCfCAggQABiKBRiRAsICERAuGIAEGLEDGIMBGMcBGNEDwgIOEC4YgAQYsQMYxwEY0QPCAggQABiABBixA8ICDRAuGIoFGMcBGNEDGEPCAgUQLhiABMICCxAuGIAEGLEDGIMB&sclient=gws-wiz"
}

