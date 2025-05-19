$(document).ready(function() {
    $('#confessionForm').submit(function(e) {
        e.preventDefault();
        
        const nickname = $('#nickname').val();
        const topic = $('#topic').val();
        const confession = $('#confession').val();
        const hide_nickname = $('input[name="hide_nickname"]:checked + span').text();
        const content_warning = $('input[name="content_warning"]:checked + span').text();
        const textData = `
            Nickname: ${nickname}
            Topic: ${topic}
            Confession: ${confession}
            Date: ${new Date().toLocaleString()}
            Content Warning: ${content_warning}
            Hide Nickname: ${hide_nickname}
            --------------------------
        `;
        
        downloadTextFile(textData, "confession.txt");
        alert("Confession submitted successfully!");
        this.reset();
    });
    
    function downloadTextFile(content, filename) {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        
        URL.revokeObjectURL(url);
    }
});

function saveToLocalStorage(confessionText) {
    let allConfessions = localStorage.getItem('confessions') || "";
    allConfessions += confessionText + "\n\n";
    localStorage.setItem('confessions', allConfessions);
}

$('#downloadAll').click(function() {
    const allConfessions = localStorage.getItem('confessions') || "No confessions yet.";
    downloadTextFile(allConfessions, "all_confessions.txt");
});