//JS for GoRoom API calls
function includeFile(fileName, divName) {
    $(function(){
        $("#"+divName).load(fileName);
    });
}

function submitRoom() {
    var roomIDInput = document.getElementById("room_id").value;
    
    alert(roomIDInput.length);
}