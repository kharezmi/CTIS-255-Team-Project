let currentIndex = 0;

function updateGallery(){
    const item = headliners[currentIndex];
    $("gallery").html(``)
}

$(document).ready(function (){
    news.forEach(article => {
        const card=`
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