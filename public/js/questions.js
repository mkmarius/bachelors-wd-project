export const surveyModel = {
    pages: [
        {
            name: "introQuestions",
            elements: [
                {
                    name: "FirstName",
                    title: "Jūsų vardas arba slapyvardis:",
                    type: "text",
                    isRequired: false,
                },
            ],
        },
        {
            name: "mainQuestions-page-1",
            elements: [
                {
                    name: "q1-r",
                    title: "Man patinka dirbti prie automobilių",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q2-i",
                    title: "Man patinka spręsti galvosūkius",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q3-a",
                    title: "Man puikiai sekasi dirbti individualiai",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q4-s",
                    title: "Man patinka dirbti komandoje",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q5-e",
                    title: "Aš esu ambicingas žmogus ir mėgstu išsikelti tikslus",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q6-c",
                    title: "Man patinka organizuotumas ir tvarka",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
            ],
        },
        {
            name: "mainQuestions-page-2",
            elements: [
                {
                    name: "q7-r",
                    title: "Man patinka gaminti įvairius daiktus",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q8-a",
                    title: "Man patinka domėtis menu ir muzika",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q9-c",
                    title: "Man patinka sekti konkrečias instrukcijas",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q10-e",
                    title: "Man patinka įtikinti ar paveikti žmones",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q11-i",
                    title: "Man patinka eksperimentuoti",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q12-s",
                    title: "Man patinka mokyti ar treniruoti žmones",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
            ],
        },
        {
            name: "mainQuestions-page-3",
            elements: [
                {
                    name: "q13-s",
                    title: "Man patinka padėti žmonėms spręsti jų problemas",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q14-r",
                    title: "Man patinka rūpintis gyvūnais",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q15-c",
                    title: "Aš galėčiau dirbti biure 8 val. per dieną",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q16-e",
                    title: "Man patinka prekyba",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q17-a",
                    title: "Man patinka kūrybinis rašymas",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q18-i",
                    title: "Man patinka mokslas",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
            ],
        },
        {
            name: "mainQuestions-page-4",
            elements: [
                {
                    name: "q19-e",
                    title: "Aš greitai prisiimu naujų atsakomybių",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q20-s",
                    title: "Man patinka gydyti žmones",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q21-i",
                    title: "Man patinka aiškintis, kaip kas veikia",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q22-r",
                    title: "Man patinka konstruoti",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q23-a",
                    title: "Aš esu kūrybingas žmogus",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q24-c",
                    title: "Aš kreipiu dėmesį į detales",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
            ],
        },
        {
            name: "mainQuestions-page-5",
            elements: [
                {
                    name: "q25-c",
                    title: "Man patinka sisteminti ar aprašyti dalykus",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q26-i",
                    title: "Man patinka analizuoti įvairias problemas ar situacijas",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q27-a",
                    title: "Man patinka groti instrumentais ar dainuoti",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q28-s",
                    title: "Man patinka domėtis kitomis kultūromis",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q29-e",
                    title: "Aš norėčiau pradėti savo verslą",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q30-r",
                    title: "Man patinka ruošti maistą",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
            ],
        },
        {
            name: "mainQuestions-page-6",
            elements: [
                {
                    name: "q31-a",
                    title: "Man patinka vaidinti spektakliuose",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q32-r",
                    title: "Aš esu praktiškas žmogus",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q33-i",
                    title: "Man patinka dirbti su skaičiais ar grafikais",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q34-s",
                    title: "Man patinka diskutuoti apie problemas",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q35-c",
                    title: "Man patinka užsirašyti ir prisiminti ką esu padaręs",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q36-e",
                    title: "Man patinka vadovauti",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
            ],
        },
        {
            name: "mainQuestions-page-7",
            elements: [
                {
                    name: "q37-r",
                    title: "Man patinka dirbti lauke",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q38-c",
                    title: "Aš norėčiau dirbti biure",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q39-i",
                    title: "Man sekasi matematika",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q40-s",
                    title: "Man patinka padėti žmonėms",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q41-a",
                    title: "Man patinka piešti",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
                {
                    name: "q42-e",
                    title: "Man patinka kalbėti auditorijai",
                    type: "boolean",
                    isRequired: false,
                    labelTrue: "Taip",
                    labelFalse: "Ne",
                },
            ],
        },
    ],
};
