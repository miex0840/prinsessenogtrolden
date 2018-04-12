// Når siden er loaded: prinnsesseGaarISkoven

function prinnsesseGaarISkoven() {
    console.log("prinnsesseGaarISkoven");

    // Start lyd: Fuglefløjt

    // Start lyd: Nynnen

    // Start anim: Prinsesse walkcycle

    // Start anim: Prinsesse kommer ind
}

// når anim "prinsesse kommer ind" er færdig: troldSpringerFrem

function troldSpringerFrem() {
    console.log("troldSpringerFrem");

    // Start anim: Trold springer frem

    // Spil lyd: Trolde brøl
}

// når lyd "trold brøl" er færdig: prinsesseBliverBange

function prinsesseBliverBange() {
    console.log("prinsesseBliverBange");

    // Stop anim: Prinsesse walkcycle

    // Stop lyd: Nynnen

    // Stop lyd: Fuglefløjt

    // Start anim: Prinsesse bliver bange

    // Spil lyd: Prinsesse skrig
}

// når lyd "prinsesse skrig" er færdig: prinsesseLoeber

function prinsesseLoeber() {
    console.log("prinsesseLoeber");

    // Start anim: Prinsesse runcycle

    // Start anim: Prinsesse løber væk
}

// når anim "prinsesse løber væk" er færdig: troldJagterPrinsesse

function troldJagterPrinsesse() {
    console.log("troldJagterPrinsesse");

    // Start anim: Trold runcycle

    // Start anim: Trold løber efter

    // Start lyd: Action musik
}

// når anim "trold løber efter" er færdig: troldFangerPrinsesse

function troldFangerPrinsesse() {
    console.log("troldFangerPrinsesse");

    // Start anim: Bur kommer ned

    // Stop anim: Prinsesse runcycle
}

// når anim "bur kommer ned" er færdig: prinsessenErFanget

function prinsessenErFanget() {
    console.log("prinsessenErFanget");

    // Stop lyd: Action musik

    // Spil lyd: Opgivende lyd

    // Stop anim: Trold runcycle
}
