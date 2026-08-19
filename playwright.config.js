import { defineConfig, firefox } from "@playwright/test";

export default defineConfig({

    testDir :'./tests',




    use:
    {
        headless: false,
    },

    projects:[{

        name : 'firefox',
        use :
        {
            browserName :'firefox',
        },
    },
        {
        name :'chromium',
        use :
        {
            browserName :'chromium'

        },
    },
        {
        name :'webkit',
        use :
        {
            browserName : 'webkit'
        },
    }
        
    ]

})