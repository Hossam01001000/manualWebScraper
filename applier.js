let wait=(delay)=>new Promise(resolve=>setTimeout(()=>resolve(),delay*1000))
let fish=(arg)=>{
    return document.querySelector(arg)
}
let fishes = (arg)=>{
    return document.querySelectorAll(arg)

}

let joblinks = fishes('[class="disabled ember-view job-card-container__link job-card-list__title"]')
for(let link of jobLinks){
    // click the link
    link.click()
    // wait for 900 ms
    await wait(2.8);
    
    let applingButton = fish('.jobs-apply-button artdeco-button artdeco-button--3 artdeco-button--primary ember-view'.split(' ').join('.'))        
    // check for the applecation button then click it
    if(applingButton){
       let jobRole = document.querySelector('[class="t-24 t-bold jobs-unified-top-card__job-title"]').textContent.replace(/\n/g , "").trim() 
       let company = document.querySelector('[class="jobs-unified-top-card__company-name"]').textContent.replace(/\n/g , "").trim()
       applingButton.click()
       await wait(1)
       let newDoc = fish('.artdeco-modal-overlay artdeco-modal-overlay--layer-default artdeco-modal-overlay--is-top-layer ember-view'.split(' ').join('.')) 
       if(newDoc){
           let weStillHere = true
           // //    while(weStillHere){
        //    let inpElements = newDoc.querySelectorAll('input,select,textarea');
        //    if(inpElements.length){
        //        let file = 0
        //        let redFlags = 0
        //        for(let element of inpElements){
        //            let itsId = element.id ?element.id:'';
        //            let itslabel = element.labels[0] 
        //            // itsId ?  newDoc.querySelector(`[for="${itsId}"]`) :'';
        //            // represents the element object will be checked and pushed to the final results array
        //            let it ={}
        //            // red flags will be increased at any case of unsatsfyible requirement and will be checked for at yhe end of the loop if its not 0 it will break
                   
                   
        //            switch (element.tagName) {
        //                case 'INPUT':
        //                    switch (element.type) {
        //                        case 'text':
        //                            if(itslabel)
        //                            {
                                       
        //                                if(element.value){
        //                                    it[`${itslabel.textContent}`] = element.value
        //                                }
        //                                else {
        //                                    it[`${itslabel.textContent}`] = 'default'
        //                                    element.value = 'default'
        //                                }
                                       
        //                            }
        //                            if(!element.value){
        //                                element.value='default'
        //                            }
        //                            break;
        //                        case 'file':
        //                                if(itslabel)
        //                                {
                                           
        //                                    it[`${itslabel.textContent}`] = 'file'
        //                                    if(!file >0){
        //                                       if(document.querySelector('[aria-label="Choose Resume"]')){
        //                                        document.querySelector('[aria-label="Choose Resume"]').click()
        //                                        file++;
        //                                       }
        //                                    }
                                           
        //                                }
        //                                else{
        //                                    if(!file >0){
        //                                        if(document.querySelector('[aria-label="Choose Resume"]')){
        //                                            document.querySelector('[aria-label="Choose Resume"]').click()
        //                                            file++;
        //                                           }
        //                                    }
                                          

        //                                }
                                       
                                       
        //                            break; 
        //                        case 'checkbox':
        //                                if(itslabel)
        //                                {
                                           
        //                                    it[`${itslabel.textContent}`] = 'checkbox'
                                           
                                           
        //                                }
        //                                if(!element.checked){element.click()}
                                       
                                       
        //                            break;
        //                        case 'radio':
        //                                // if(itslabel)
        //                                // {
                                           
        //                                //     it[`${itslabel.textContent}`] = 'checkbox'
                                           
                                           
        //                                // }
        //                                if(!element.checked){element.click()}
                                       
                                       
        //                            break;  
        //                        case 'number':
        //                            if(itslabel){
        //                                if(element.value){
        //                                it[`${itslabel.textContent}`] = element.value
        //                                }
        //                                else{
        //                                    it[`${itslabel.textContent}`] = 148
        //                                    element.value = 148
        //                                }
        //                            }
        //                            if(!element.value){
        //                                element.value = 148
        //                            }
                                   
                                   





                           
        //                        default:
        //                            redFlags ++;
        //                            break;
                                   
        //                    }
                           
                           
        //                    break;
        //                case 'SELECT':
        //                    let options = element.querySelectorAll('option')
        //                    if(itslabel){
        //                        if(element.value != options[0].value){
        //                            it[`${itslabel.textContent}`] = element.value
        //                        }
        //                        else{
        //                            element.value = element.querySelectorAll('option')[1].value
        //                            it[`${itslabel.textContent}`] = element.value
        //                        }
        //                    }
        //                    else{
        //                        if(element.value != options[0].value){
                                   
        //                        }
        //                        else{
        //                            element.value = element.querySelectorAll('option')[1].value
                                   
        //                        }
        //                    }
        //                    break;
        //                case 'TEXTAREA':
        //                    if(itslabel){
        //                        it[`${itslabel.textContent}`] = 'this is a textarea'

        //                    }
        //                    if(element.required){
        //                        element.value = 'this is a text area'
        //                    }
        //                    break;
                   
        //                default:
        //                    redFlags ++;
        //                    break;
        //            }

        //            if(Object.keys(it).length){
        //                finalResults.push(it)
        //            }
        //        }
        //        // after looping through the elments
        //        if(redFlags > 0){
        //            let exit = newDoc.querySelector('[aria-label="Dismiss"]')
        //            exit.click()
        //            await wait(.7)
        //            let discard = document.querySelector('[data-control-name="discard_application_confirm_btn"]')
        //            discard.click()
        //            await wait(.7)
        //            weStillHere = false 

        //        }
        //        let nextbutton=newDoc.querySelector('[aria-label="Continue to next step"]')
        //        if(nextbutton){
        //            let current = newDoc.querySelector('[class="display-flex ph5 pv2"]').innerHTML
        //            try {nextbutton.click()
        //            await wait(.8)
        //            if (current == newDoc.querySelector('[class="display-flex ph5 pv2"]').innerHTML){
        //             let exit = newDoc.querySelector('[aria-label="Dismiss"]')
        //             exit.click()
        //             await wait(.7)
        //             let discard = document.querySelector('[data-control-name="discard_application_confirm_btn"]')
        //             discard.click()
        //             await wait(.7)
        //              weStillHere = false

        //            }
        //        }
        //        catch{
        //            let exit = newDoc.querySelector('[aria-label="Dismiss"]')
        //             exit.click()
        //             await wait(.7)
        //             let discard = document.querySelector('[data-control-name="discard_application_confirm_btn"]')
        //             discard.click()
        //             weStillHere = false

        //        }
        //        }
        //        else{
        //            let exit = newDoc.querySelector('[aria-label="Dismiss"]')
        //             exit.click()
        //             await wait(.7)
        //             let discard = document.querySelector('[data-control-name="discard_application_confirm_btn"]')
        //             discard.click()
        //             weStillHere = false


        //        }
               
        //    }
        //    else{
        //        let exit = newDoc.querySelector('[aria-label="Dismiss"]')
        //        exit.click()
        //        await wait(.7)
        //        let discard = document.querySelector('[data-control-name="discard_application_confirm_btn"]')
        //        discard.click()
        //        await wait(.7)
        //        weStillHere = false
               
        //    }
            
           //     // }
            while(weStillHere){
               let heading = document.querySelector('[class="t-16 t-bold"]').textContent.replace(/\n/g ,"").trim().toLowerCase()?document.querySelector('[class="t-16 t-bold"]').textContent.replace(/\n/g ,"").trim().toLowerCase():'';
               switch(heading){
                case 'contact info':
                    let inpElements = newDoc.querySelectorAll('input,select,textarea');
                    if(inpElements.length){
                        for(let element of inpElements){
                            if(!element.value){
                                if(element.labels[0].textContent.trim().toLowerCase() == 'summary'){
                                    element.value = 'skilled and dedicated Javascript developer, With a deep understanding of the language and a passion for creating efficient, elegant code, and a strong commitment to staying up-to-date with the latest industry trends and technologies, always looking for new ways to push the boundaries and exceed expectations. Whether working independently or as part of a team';
                                    await wait(2)
                                }
                            }

                        }             
                    }
                    break;
                    case 'home address':
                        break;
                    case 'resume':
                        let cover = newDoc.querySelector('textarea');
                        if(cover){
                        cover.value = `Dear Hiring Manager at ${company}, \n \n I am writing to apply for the ${jobRole} position currently available at your esteemed company. As a highly motivated and experienced web developer, I am confident in my ability to make a valuable contribution to your team. \n I'm familiar with client-side and server-side application technologies and serverless computing services \nI also have a solid understanding of the programming paradigms, design patterns, algorithms and data structures. \n with excellent problem solving skills to come up with functional, efferent and clean solutions  for uncommon problems ` ;
                        await wait(2)
                        }
                        break;
                    default:
                        break;


               }

            //    get the buttons
            let nextbutton=newDoc.querySelector('[aria-label="Continue to next step"]')
            if(nextbutton){
                let current = newDoc.querySelector('[class="display-flex ph5 pv2"]').innerHTML
                try {
                nextbutton.click()
                await wait(.8)
                if (current == newDoc.querySelector('[class="display-flex ph5 pv2"]').innerHTML){
                 let exit = newDoc.querySelector('[aria-label="Dismiss"]')
                 exit.click()
                 await wait(.7)
                 let discard = document.querySelector('[data-control-name="discard_application_confirm_btn"]')
                 discard.click()
                 await wait(.7)
                  weStillHere = false

                  }
                }
            catch{
                let exit = newDoc.querySelector('[aria-label="Dismiss"]')
                 exit.click()
                 await wait(.7)
                 let discard = document.querySelector('[data-control-name="discard_application_confirm_btn"]')
                 discard.click()
                 weStillHere = false

            }
            }
            else{
                let reviewButton = newDoc.querySelector('[aria-label="Review your application"]');
                if(reviewButton){
                    let current = newDoc.querySelector('[class="display-flex ph5 pv2"]').innerHTML
                    try {
                    reviewButton.click()
                    await wait(.8);
                    if (current == newDoc.querySelector('[class="display-flex ph5 pv2"]').innerHTML){
                        let exit = newDoc.querySelector('[aria-label="Dismiss"]')
                        exit.click()
                        await wait(.7)
                        let discard = document.querySelector('[data-control-name="discard_application_confirm_btn"]')
                        discard.click()
                        await wait(.7)
                         weStillHere = false
       
                    }
                    else{
                        let submitButton =newDoc.querySelector('[aria-label="Submit application"]');
                        submitButton.click()
                        await wait(2.8)
                        document.querySelector('[aria-label="Dismiss"]').click()
                        await wait(1)
                        weStillHere = false;

                    }   
                    }
                    catch{
                        let exit = newDoc.querySelector('[aria-label="Dismiss"]')
                         exit.click()
                         await wait(.7)
                         let discard = document.querySelector('[data-control-name="discard_application_confirm_btn"]')
                         discard.click()
                         weStillHere = false
        
                    }
                }
               
               
            }
            }

        }

     //  code goes here for every link
    

    }
} 