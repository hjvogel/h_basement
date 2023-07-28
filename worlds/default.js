// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = [
        "newwhite", "madhatter", "marchhare", "queenofhearts", "cheshirecat", "alice"
    ];

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "lights.js", "bouncingBall.js", "circle.js",  "openPortal.js", "urlLink.js", "cradle.js", // "pendulum.js"
    ];

    const frameColor = 0x888888;

    Constants.DefaultCards = [
        {
            card: {
                name: "entrance",
                type: "object",
                translation: [-12, 0.1, -10.2],
                rotation: [0, -Math.PI / 2, 0],
                spawn: "default",
            }
        },
        {
            card: {
                name:"world model",
                type: "3d",
                fileName: "/artgallery_042122.glb.zip",
                dataLocation: "./assets/3D/artgallery_042122.glb.zip",
                singleSided: true,
                shadow: true,
                layers: ["walk"],
                translation:[0, -1.7, 0],
                dataScale:[1,1,1],
                loadSynchronously: true,
                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0x808080,
                placeholderOffset: [0, 0, 0],
            }
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                fileName: "/shanghai_riverside_2k.exr",
                dataLocation: "./assets/sky/shanghai_riverside_2k.exr",
                dataType: "exr",
                toneMappingExposure: 0.7,
                loadSynchronously: true,
            }
        },
        {
            card: {
                name: "image card",
                translation: [12, 0.6, 10.77],
                rotation: [0, -Math.PI / 2, 0],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/Holger.jfif",
                cardURL: "https://ch.linkedin.com/in/dr-holger-vogel-769aa295",
                cardHilite: 0xffffaa,
                behaviorModules: ["URLLink"],
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xbbbbbb,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },
        {
            card: {
                name: "auggie stand",
                translation: [7.79, -1.72, -14.82],
                // rotation: [0, 0, 0, 1],
                layers: ["pointer"],
                behaviorModules: ["Billboard"],
                dataLocation: "3en5pHEDZi7EpsaJ-_yONogv4uVau9ZlIxyh1TH4AhAQDRERFRZfSkoDDAkAFksQFksGFwoUEAARSwwKShBKHzAREjUqHyMQKjZULgwCKD8MUFZcHSMhIl1VV0oMCksGFwoUEAARSwgMBhcKEwAXFgBLEwQLABYWBEoOPFcnN1A0MQFUNQJSCFArMhcyMj8hIx8RDCMBIB06LygUJgYULAEjFDBVSgEEEQRKUAoHFCdQMwYEESE1NCscPTckDggoDDUwDyIgFTFXVw5IDAhREDc6Jwc0MA",
                dataScale: [1, 1, 1],
                fileName: "/AuggieStand.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            }
        },
        {
            card: {
                name: "auggie award",
                translation: [7.79, -0.45, -14.82],
                // rotation: [0, 0, 0, 1],
                layers: ["pointer"],
                behaviorModules: ["Billboard"],
                dataLocation: "35hI1OQ1NaqWki0Or-uHXAVM9vipZGVZIc_emQwLfCAcXUFBRUYPGhpTXFlQRhtARhtWR1pEQFBBG1xaGkAaT2BBQmV6T3NAemYEflxSeG9cAAYMTXNxcg0FBxpcWhtWR1pEQFBBG1hcVkdaQ1BHRlAbQ1RbUEZGVBpebAd3ZwBkYVEEZVICWAB7YkdiYm9xc09BXHNRcE1qf3hEdlZEfFFzRGAFGlFUQVQabV1-bFdNZAdnBAxCfnAYXk9kamVaAUVbBnt3QUBaWwUEfnhPb1RWfhhqDQ",
                dataScale: [1, 1, 1],
                fileName: "/Auggie2.glb",
                modelType: "glb",
                license: "CC-BY",
                attribution: "'Auggie Awards Trophy AWE 2022' by Kai Oldman derived from 'Auggie Awards Trophy AWE 2021' (https://skfb.ly/otrIP) by oriinbar is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).",
                shadow: true,
                singleSided: true,
                type: "3d",
            }
        },
    {
            card: {
                translation: [-12.2, -0.4, -10.2],
                rotation: [0, -Math.PI / 2, 0],
                layers: ["pointer", "portal"],
                className: "PortalActor",
                color: 16737996,
                cornerRadius: 0.05,
                depth: 0.05,
                frameColor: 8947848,
                height: 2.7,
                portalURL: "https://www.ctcs.ch/CTCS_MetaShow.html?q=zzxbr70m0l#pw=M_nBhUk2-E_VMJJ4D9w-qg",
                /*portalURL: "?world=financial", */
                type: "2d",
                width: 1.7,
            }
        },
        {
            card: {
                name:"Video",
                translation: [12, 0.70, -10.24],
                rotation: [0, -Math.PI / 2, 0],
                scale: [5, 5, 5],
                rotation: [0, -0.7071067811865475, 0, 0.7071067811865476],
                layers: ["pointer"],
                behaviorModules: ["VideoPlayer"],
                name: "Croquet Video 1",
                color: 8947848,
                depth: 0.025,
                frameColor: 16777215,
                fullBright: true,
                pauseTime: null,
                playStartTime: 20.399875,
                shadow: true,
                singleSided: true,
                textureLocation: "./assets/videos/Slot 2.mp4",
                textureType: "video",
                type: "2d",
            
            }
        },
       /* {
            card: {
               // translation: [10, 0.3, -8.24],
                translation: [11.232955, -0.3495895613912752, -8.24],
                scale: [1.0125793174488265, 1.0125793174488265, 12.657241468110332],
                ///rotation: [0, -0.8878992118405725, 0, -0.4600380306158285],
                //rotation: [0, -0.7071067811865475, 0, 0.7071067811865476],
                //translation: [0.59375, 0, 0.0125],
                scale: [0.08, 0.08, 1],
                layers: ["pointer"],
                parent: "M121",
                behaviorModules: ["VideoButton"],
                name: "button",
                noSave: true,
                dataLocation: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMi4xIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIyIEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjM0LjkgNTAyLjhjLTguMTI1IDEwLjQxLTIzLjE5IDEyLjI4LTMzLjY5IDQuMDc4TDkuMTg4IDQyLjg5Yy0xMC40NC04LjE3Mi0xMi4yNi0yMy4yNi00LjA2OC0zMy43QzkuODM5IDMuMTU4IDE2LjkxIDAgMjQuMDMgMEMyOS4xOSAwIDM0LjQxIDEuNjczIDM4LjgxIDUuMTExbDU5MS4xIDQ2My4xQzY0MS4yIDQ3Ny4zIDY0My4xIDQ5Mi40IDYzNC45IDUwMi44eiIvPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyMDhWMzA0YzAgMjYuNTEgMjEuNDkgNDcuMSA0OCA0Ny4xaDgzLjg0bDEzNC45IDExOS45QzMzNi43IDQ3Ny4yIDM0NC4zIDQ4MCAzNTIgNDgwYzQuNDM4IDAgOC45NTktLjkzMTIgMTMuMTYtMi44MzdDMzc2LjcgNDcyIDM4NCA0NjAuNiAzODQgNDQ4di01MC4zNEw4OC43NSAxNjYuM0M3NC4wNSAxNzQuNSA2NCAxODkuMSA2NCAyMDh6TTM2NS4yIDM0Ljg0Yy0xMS41LTUuMTg4LTI1LjAxLTMuMTE2LTM0LjQzIDUuMjU5TDIxNC45IDE0My4xTDM4NCAyNzUuN1Y2NEMzODQgNTEuNDEgMzc2LjcgMzkuMSAzNjUuMiAzNC44NHpNNDc2LjYgMTgxLjljLTEwLjI4LTguMzQ0LTI1LjQxLTYuODc1LTMzLjc1IDMuNDA2Yy04LjQwNiAxMC4yNS02LjkwNiAyNS4zOCAzLjM3NSAzMy43OEM0NTcuNSAyMjguNCA0NjQgMjQxLjggNDY0IDI1NnMtNi41IDI3LjYyLTE3LjgxIDM2Ljg4Yy03LjcxOSA2LjMxMS0xMC40OCAxNi40MS03LjgyNCAyNS4zOWwyMS41MyAxNi44OGMuNTAzOSAuMDMxMyAuOTcxMyAuMzI0OSAxLjQ3NyAuMzI0OWM1LjM0NCAwIDEwLjc1LTEuNzgxIDE1LjE5LTUuNDA2QzQ5OS4xIDMxMS42IDUxMiAyODQuNyA1MTIgMjU2QzUxMiAyMjcuMyA0OTkuMSAyMDAuNCA0NzYuNiAxODEuOXpNNTM3LjEgMTA4Yy0xMC4yMi04LjM0NC0yNS4zNC02LjkwNi0zMy43OCAzLjM0NGMtOC40MDYgMTAuMjUtNi45MDYgMjUuMzggMy4zNDQgMzMuNzhDNTQwLjYgMTcyLjkgNTYwIDIxMy4zIDU2MCAyNTZjMCA0Mi42OS0xOS40NCA4My4wOS01My4zMSAxMTAuOWMtMS4wNDUgLjg1NzQtMS41OTkgMi4wMjktMi40NiAzLjAxM2wzNy44IDI5LjYzQzU4My45IDM2Mi44IDYwOCAzMTAuOSA2MDggMjU2QzYwOCAxOTguOSA1ODIuMiAxNDQuOSA1MzcuMSAxMDh6Ii8+PC9zdmc+",
                depth: 0.01,
                fileName: "/svg.svg",
                fullBright: true,
                modelType: "svg",
                shadow: true,
                singleSided: true,
                type: "2d",
            }
        },
*/
        {
            card: {
                name: "drone 1",
                layers: ["pointer"],
                translation: [-2.3, 0, -8.6],
                dataLocation: "34pr_19cAfzFXB4LkrXhn89DI5lfytFu969JGoTaI-2UXEBAREcOGxtSXVhRRxpBRxpXRltFQVFAGl1bG0Ebc1BiVk1YfUd1X2VXdmxQB3NMVUJNQ2F_Y21tBhtdWxpXRltFQVFAGlldV0ZbQlFGR1EbfmJ2RUNsZXh_e1puRARtRlV5cnFFWQBRWE1rXG13RlpuAAx9AFJsQQd8RxtQVUBVG0B4BlFNRnUERXBjREVARVtGQWxzUnxkR3hnd31cBQZNUEdMX3ZTQlFZAAQ",
                fileName: "/Drone2.glb",
                dataScale: [1.2, 1.2, 1.2],
                dataRotation: [0, Math.PI / 2, 0],
                behaviorModules: ["Circle"],
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            }
        },
        {
            card: {
                name:"code editor",
                translation: [-2.31, 0, -8.7],
                rotation: [0, -Math.PI / 2, 0],
                layers: ["pointer"],
                type: "code",
                behaviorModule: "Circle.CircleActor",
                margins: {left: 32, top: 32, right: 32, bottom: 32},
                // margins: {left: 16, top: 16, right: 16, bottom: 16},
                textScale: 0.001,
                width: 1.5,
                height: 2,
                depth: 0.05,
                fullBright: true,
                frameColor: 0x888888,
            }
        },
        {
            card: {
                name: "text editor",
                className: "TextFieldActor",
                translation: [5.5, 0.4, -16.87],
                rotation: [0, 0, 0],
                depth: 0.05,
                type: "text",
                runs: [{text: "\nWelcome to H´s Player Own Basement!\nFeel free to leave a message\n\n\nOr a Task that needs to be done\n"}],
                margins: {left: 20, top: 20, right: 20, bottom: 20},
                backgroundColor: 0xc4a836,
                color: 0x000000,
                fullBright: true,
                //color: 0xf4e056,
                frameColor: frameColor,
                width: 2,
                height: 2,
                textScale: 0.002,
                shadow: true,
            }
        },
        {
            card: {
                name: "portal button",
                translation: [-12.1, 1.3, -10.17839395666378],
                behaviorModules: ["OpenRefineryPortalButton"],
                type: "object",
            }
        },
        
        {
            card: {
                name: "sticky",
                className: "TextFieldActor",
                translation: [-12, 0.8, -12.2],
                behaviorModules: ["StickyNote"],
                rotation: [0, Math.PI / 2, 0],
                depth: 0.05,
                type: "text",
                runs: [{text: `Speak Like a Friend - And Enter  `}],
                margins: {left: 20, top: 20, right: 20, bottom: 20},
                backgroundColor: 0xf4e056,
                //color: 0xf4e056,
                frameColor: frameColor,
                width: 1,
                height: 1,
                textScale: 0.002,
                shadow: true,
            }
        },
        
        {
            card: {
                translation: [11.914, 0.4, 0.25],
                scale: [4, 4, 4],
                rotation: [0, -Math.PI / 2, 0],
                layers: ["pointer"],
                behaviorModules: ["PDFView"],
                color: 8947848,
                depth: 0.05,
                frameColor: 16777215,
                fullBright: true,
                modelType: "pdf",
                fileName: "/Workflow_MicroVerses.pdf",
                pdfLocation: "./assets/PDF/Workflow_MicroVerses.pdf",
                shadow: true,
                singleSided: true,
                type: "2d",
            }
        },
        /*
        {
            card: {
                name:"pendulum",
                type: "object",
                translation: [-0.03701975732147922, 3.2368919013826734, 8.444841625884546],
                behaviorModules: ["Rapier", "Pendulum"],
                layers: ["pointer"],
                scale: [0.2, 0.2, 0.2],
                color: 0xaa6666,
            }
        },
        */
        {
            card: {
                name: "cradle",
                type: "object",
                translation: [-9.67915341742099, 3.2368919013826734, 4.368801765942323],
                behaviorModules: ["Cradle"],
                layers: ["pointer"],
                shadow: true,
                scale: [0.2, 0.2, 0.2],
            }
        },
    ];
}
