let pages = {
    "projects" : document.getElementById('projects'),
    "experience" : document.getElementById('experience') ,
    "resume" : document.getElementById('resume')
}

let switchTab = (tab) => 
    {
        for(const [k, v] of Object.entries(pages))
            {
                if(pages[k]  == tab)
                {
                    pages[tab]
                }
                else
                {

                }
            }
    }