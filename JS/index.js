$(function() {
    $("#ageCheckModal").modal("show");
        
   /* an age calulator based on DOB from user input. Will dismiss or "hide" the modal if age is >= 21. Sustain modal visibility if < 21.
    
   $("#confirmbtn").click(function(dob) {
        const ageInTime = (Date.now() - dob.getTime());
        const ageDate = new Date(ageInTime);
        const currentAge = Math.abs(ageDate.getUTCFullYear() -1970);

        if(currentAge >= 21) {
            $("ageCheckModal").modal("hide");
        } else if (currentAge < 21) {
            $("ageCheckModal").modal("show");
        };
    });
    */
});


