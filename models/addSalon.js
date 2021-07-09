const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const addSalonSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "signup"
    },
    salonName: {
        type: String
    },
    city: {
        type: String
    },
    owner: {
        type: String
    },
    std: {
        type: Number
    },
    phoneNumber: {
        type: Number
    },
    openingStatus: {
        type: String
    },
    address: {
        type: String
    },
    state: {
        type: String
    },
    pinCode: {
        type: Number
    },
    facilities: {
        ac: {
            type: Boolean,
            default: false
        },
        spa: {
            type: Boolean,
            default: false
        },
        sanitization: {
            type: Boolean,
            default: false
        },
        valetParking: {
            type: Boolean,
            default: false
        },
        pickDrop: {
            type: Boolean,
            default: false
        },
        spaRooms: {
            type: Boolean,
            default: false
        },
        steam: {
            type: Boolean,
            default: false
        },
        sauna: {
            type: Boolean,
            default: false
        },
        tv: {
            type: Boolean,
            default: false
        },
        washRoom: {
            type: Boolean,
            default: false
        },
        babyCare: {
            type: Boolean,
            default: false
        },
        shower: {
            type: Boolean,
            default: false
        }
    },

    ladiesServices: {
        hairStyling: {
            hairCut: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            ironing: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            globalColouring: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            blowDry: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            rootTouchUp: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            shampooConditioning: {
                value:{ type : Boolean, default: true},
                price:{ type : Number, default: 0},
            },
            headMassage: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            rollerSetting: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            oiling: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            }
        },
        makeUp: {
            partyMakeUp: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            engagementMakeUp: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            bridalReceptionMakeUp: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            baseMakeUp: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            eyeMakeUp: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            }
        },
        hairTexture: {
            rebonding: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            perming: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            keratin: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            colourProtection: {
                value:{ type : Boolean, default: true},
                price:{ type : Number, default: 0},
            },
            smoothening: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            }
        },
        hairTreatments: {
            spaTreatments: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            volumizing: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            advancedHairMoisturising: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            scalpTreatments: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            }
        },
        facialsRituals: {
            bleach: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            luxuryFacialsRituals: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            cleanUps: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            bodyPolishingRejuvenation: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            threading: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            }
        },
        handFeet: {
            manicure: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            spaPedicure: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            pedicure: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            waxing: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            spaManicure: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            }
        },
        nailCare: {
            nailPaint: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            nailArt: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            nailFilling: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            }
        }
    },

    gentsServices: {
        hairCutFinish: {
            cutandHairCare: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            shampooConditioning: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            headMassage: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            beardStyling: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            hairBeardColouring: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            }
        },
        hairColour: {
            hiLites: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            beardColour: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            hairColourAmmoniaAmmoniaFree: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            }
        },
        hairTexture: {
            straightening: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            smoothening: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            rebonding: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            perming: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            }
        },
        hairTreatments: {
            hairSpa: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            advancedMoisturising: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            scalpTreatments: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            colourProtection: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            }
        },
        skinCare: {
            cleanUps: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            facials: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            organicTreatments: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            manicure: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            pedicure: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            }
        },
        beardGrooming: {
            beardTrim: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            beardColour: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            beardStyling: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            shave: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            },
            luxuryShaveBeardSpa: {
                value:{ type : Boolean, default: false},
                price:{ type : Number, default: 0},
            }
        }
    },

    timings: {
        monday: {
            type: Boolean,
            default: false
        },
        tuesday: {
            type: Boolean,
            default: false
        },
        wednesday: {
            type: Boolean,
            default: false
        },
        thursday: {
            type: Boolean,
            default: false
        },
        friday: {
            type: Boolean,
            default: false
        },
        saturday: {
            type: Boolean,
            default: false
        },
        sunday: {
            type: Boolean,
            default: false
        },
        from: {
            type: String
        },
        to: {
            type: String
        }
    },
    payments: {
        debitCardsCreditCard: {
            type: Boolean,
            default: false
        },
        membershipCard: {
            type: Boolean,
            default: false
        },
        cashonly: {
            type: Boolean,
            default: false
        }
    },

    salonEmail: {
        type: String
    },
    salonWebsite: {
        type: String
    }
});

const Salon = mongoose.model("addSalon", addSalonSchema);
module.exports = Salon;
