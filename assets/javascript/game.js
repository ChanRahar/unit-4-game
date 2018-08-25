$(document).ready(function () {

    var win = 0;
    var lose = 0;
    var rng = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    var score = 0;

    $("#rng").text(rng);


    var images = ["assets/images/round.png", "assets/images/round-realistic_9cfcdd2c-1403-4b2b-9b9a-ad5fc3f96367_270x.png", "assets/images/sapphire-gem-stone-11530924456nlz7w6muzp.png", "assets/images/Melee_Sapphire_Blue_A_72ca4a79-7a1f-4676-a39b-05f60d004d93_1024x1024.png"]

    function crystalgame() {
        $("#crystalcreator").empty();
        for (var i = 0; i < images.length; i++) {
            var crystal = $("<img>)");

            crystal.addClass("crystal");

            crystal.attr("src", images[i]);

            crystal.attr("crystalnumber", Math.floor(Math.random() * (12 - 1 + 1)) + 1);

            $("#crystalcreator").append(crystal);

        }
        $(".crystal").on("click", function () {

            var crystalvalue = ($(this).attr("crystalnumber"));
            crystalvalue = parseInt(crystalvalue);

            score += crystalvalue;

            $("#score").text(score);

            if (rng === score) {
                alert("You Won");
                win++;
                $("#win").text(win);
                reset()
            } else if (rng < score) {
                alert("You Lost");
                lose++;
                $("#lose").text(lose);
                reset()
            }
        })
    }
    function reset() {
        rng = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        score = 0;
        $("#rng").text(rng);
        $("#score").text(score);
        crystalgame();
    }

    crystalgame();
 
});

