$(document).ready(function(){
    confessions.forEach(confession => {
        const card = `
        <div class="card">
                <div class="start-end">
                    <p>From : ${confession.from}</p>
                    <p>${confession.date}</p>
                </div>
                <div id="middle">
                    <p>${confession.text}</p>
                </div>
                <div class="start-end">
                    <div id="comment">
                        <img class="icon" src="../images/icons.svg">
                        <p>${confession.comments.length}</p>
                    </div>
                    <div id="react">
                        <div>
                            <img class="icon" src="../images/like.svg">
                            <img class="icon" src="../images/dislike.svg">
                        </div>
                        <div><p>${confession.likes}/${confession.dislikes}</p></div>
                    </div>
                </div>
            </div>`;
            $("#confessions").append(card);
    })
})