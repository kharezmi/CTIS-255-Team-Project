let lastManualChange = 0;
let currentIndex = 0;

function updateGallery() {
    const item = headliners[currentIndex];
    $("#gallery").fadeOut(300, () => {
        $("#gallery").html(`
            <div id="img" style="background: url(${item.img}) center; background-size: cover"></div>
            <div id="gallery-right" class="article-card">
                <div class="closer">
                    <h3>${item.title}</h3>
                    <p>${item.text}</p>
                </div>
                <button>See more</button>
            </div>
        `).fadeIn(300);
    });
}

$(document).ready(function () {
    updateGallery();
    setInterval(() => {
        if (Date.now() - lastManualChange > 3000) {
            currentIndex = (currentIndex + 1) % headliners.length;
            updateGallery();
        }
    }, 3000);
    $("#left-arrow").click(() => {
        currentIndex = (currentIndex - 1 + headliners.length) % headliners.length;
        lastManualChange = Date.now();
        updateGallery();
    })
    $("#right-arrow").click(() => {
        currentIndex = (currentIndex + 1) % headliners.length;
        lastManualChange = Date.now();
        updateGallery();
    })

    news.forEach(article => {
        const card = `
        <article>
            <div class="article-left article-card">
                <div class="closer">
                    <h3>
                        ${article.title}
                    </h3>
                    <p>
                        ${article.text}
                    </p>
                </div>
                <button>See more</button>
            </div>
            <div class="article-image" style="background: url(${article.img}) center;background-position:center; background-size:cover"></div>
        </article>
        `;
        $("#articles").append(card);
    })
})