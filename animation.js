// Når siden er loaded: prinnsesseGaarISkoven

$(window).on("load", prinnsesseGaarISkoven);

$("#loeb").on("click", prinsesseLoeber);

$("#jagt").on("click", troldJagterPrinsesse);

$("#fang").on("click", troldFangerPrinsesse);

$("#slut").on("click", prinsessenErFanget);

/*

Elementer:
prinsesse_container
prinsesse_sprite
trold_container
trold_sprite
bur

Animationer:
prinsesse_kommer_ind
position_ind
prinsesse_loeb
prinsesse_gaar
prinsesse_staar
prinsesse_skriger
prinsesse_loeber
prinsesse_fanget
trold_kommer_frem
trold_front
trold_loeb
trold_fanget_prinsesse
trold_loeber
bur_kommer_ned
bur_nede


*/

function prinnsesseGaarISkoven() {
    console.log("prinnsesseGaarISkoven");

    // Start anim: Trold bag sten

    $("#trold_container").addClass("trold_bag_sten");

    // Start anim: Bur oppe

    $("#bur").addClass("bur_oppe");

    // Start lyd: Fuglefløjt

    // Start lyd: Nynnen

    // Start anim: Prinsesse walkcycle

    $("#prinsesse_sprite").addClass("prinsesse_gaar");

    // Start anim: Prinsesse kommer ind

    $("#prinsesse_container").addClass("prinsesse_kommer_ind");

    $("#prinsesse_container").on("animationend", troldSpringerFrem);
}

// når anim "prinsesse kommer ind" er færdig: troldSpringerFrem

function troldSpringerFrem() {
    console.log("troldSpringerFrem");

    $("#prinsesse_container").off("animationend", troldSpringerFrem);

    // Stop anim: Trold bag sten

    $("#trold_container").removeClass("trold_bag_sten");

    // Start anim: Prinsesse står

    $("#prinsesse_sprite").addClass("prinsesse_staar");

    // Start anim: Trold springer frem

    $("#trold_container").addClass("trold_kommer_frem");

    // Start anim: Trold front

    $("#trold_sprite").addClass("trold_front");

    // Spil lyd: Trolde brøl

    // Stop anim: Prinsesse walkcycle

    $("#prinsesse_sprite").removeClass("prinsesse_gaar");

    $("#trold_container").on("animationend", prinsesseBliverBange);
}

// når lyd "trold brøl" er færdig: prinsesseBliverBange

function prinsesseBliverBange() {
    console.log("prinsesseBliverBange");

    $("#trold_container").off("animationend", prinsesseBliverBange);

    // Stop lyd: Nynnen

    // Stop lyd: Fuglefløjt

    // Start anim: Prinsesse bliver bange

    $("#prinsesse_sprite").addClass("prinsesse_skriger");

    // Spil lyd: Prinsesse skrig

    // $("#prinsesse_sprite").on("animationend", prinsesseLoeber);

    setTimeout(prinsesseLoeber, 1000);
}

// når lyd "prinsesse skrig" er færdig: prinsesseLoeber

function prinsesseLoeber() {
    console.log("prinsesseLoeber");

    // Start anim: Prinsesse runcycle

    $("#prinsesse_sprite").addClass("prinsesse_loeber");

    // Start anim: Prinsesse løber væk

    $("#prinsesse_container").addClass("prinsesse_loeb");

    $("#prinsesse_container").on("animationend", troldFangerPrinsesse);

    setTimeout(troldJagterPrinsesse, 400);
}

// når anim "prinsesse løber væk" er færdig: troldJagterPrinsesse

function troldJagterPrinsesse() {
    console.log("troldJagterPrinsesse");

    // $("#prinsesse_container").off("animationend", troldJagterPrinsesse);

    // Start anim: Trold runcycle

    $("#trold_sprite").addClass("trold_loeber");

    // Start anim: Trold løber efter

    $("#trold_container").addClass("trold_loeb");

    // Start lyd: Action musik

}

// når anim "trold løber efter" er færdig: troldFangerPrinsesse

function troldFangerPrinsesse() {
    console.log("troldFangerPrinsesse");

    $("#prinsesse_container").off("animationend", troldFangerPrinsesse);

    // Stop anim: Bur oppe

    $("#bur").removeClass("bur_oppe");

    // Start anim: Bur kommer ned

    $("#bur").addClass("bur_kommer_ned");

    // Stop anim: Prinsesse runcycle

    $("#prinsesse_sprite").removeClass("prinsesse_loeber");

    $("#bur").on("animationend", prinsessenErFanget);
}

// når anim "bur kommer ned" er færdig: prinsessenErFanget

function prinsessenErFanget() {
    console.log("prinsessenErFanget");

    $("#bur").off("animationend", prinsessenErFanget);

    // Stop lyd: Action musik

    // Spil lyd: Opgivende lyd

    // Stop anim: Trold runcycle

    $("#trold_sprite").removeClass("trold_loeber");

    // Start anim: Bur er nede

    $("#bur").addClass("bur_nede");

}
