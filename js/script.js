$(document).ready(function() {
  $("div.alert").hide();
  $(".register-form").submit(function(event) {
    let studentName = $("#fullName").val();
    let chosenTrack = $('input[name="track"]:checked').val();
    let reason = $("#objective").val();
    let selectedLanguages = new Array();
    $('input[name="languages"]:checked').each(function() {
      selectedLanguages.push(this.value);
    });
    //console.log(selectedLanguages);
    $("#student").text(studentName);
    $("#chosenTrack").text(chosenTrack);
    $("#reason").text(reason);
    $("#myLanguages").text(selectedLanguages.join(","));
    

    $("div.alert").show();

    event.preventDefault();
    // alert("Registered Successfully")
  })
})