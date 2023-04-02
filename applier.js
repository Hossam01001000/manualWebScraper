let apply = async()=>{
let wait=(delay)=>new Promise(resolve=>setTimeout(()=>resolve(),delay*1000))
let fish=(arg)=>{
    return document.querySelector(arg)
}
let fishes = (arg)=>{
    return document.querySelectorAll(arg)

}
let ul = fish('.artdeco-pagination__pages artdeco-pagination__pages--number'.split(' ').join('.'))
let pagesNum = Number(ul.lastElementChild.getAttribute('data-test-pagination-page-btn'))
for(let i=0; i<pagesNum;i++){
    

    location.reload();
    await wait(8);
    // code goes here before advancing to the next page
    function scrollTo(element, to, duration) {
        const start = element.scrollTop;
        const change = to - start;
        const increment = 20;
        let currentTime = 0;
      
        const animateScroll = function() {
          currentTime += increment;
          const val = Math.easeInOutQuad(currentTime, start, change, duration);
          element.scrollTop = val;
          if(currentTime < duration) {
            requestAnimationFrame(animateScroll);
          }
        };
      
        Math.easeInOutQuad = function(t, b, c, d) {
          t /= d/2;
          if (t < 1) {
            return c/2*t*t + b;
          }
          t--;
          return -c/2 * (t*(t-2) - 1) + b;
        };
      
        requestAnimationFrame(animateScroll);
    }
    
    let element = fish('[class="scaffold-layout__list"]').children[1];
    
    let elementHeight = element.scrollHeight - element.clientHeight
    scrollTo(element , 0 , 3000);
    await wait(4)
    scrollTo(element, elementHeight, 5000);
    await wait(7)
    let jobLinks = fishes('[class="disabled ember-view job-card-container__link job-card-list__title"]')
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
         
                while(weStillHere){
                //    let head = document.querySelector('[class="t-16 t-bold"]'); 
                   let head = newDoc.querySelector('.t-bold'); 
                   if(head){
                   let heading = head.textContent.replace(/\n/g ,"").trim().toLowerCase();
                   if(heading){
                   switch(heading){
                    case 'contact info':
                        let inpElements = newDoc.querySelectorAll('input,select,textarea');
                        if(inpElements.length){
                            for(let element of inpElements){
                                if(!element.value){
                                    let event = new MouseEvent('input', {
                                        bubbles: true,
                                        cancelable: true,
                                        view: window
                                      });
                                    if(element.labels[0].textContent.trim().toLowerCase() == 'summary'){
                                        element.value = 'skilled and dedicated Javascript developer, With a deep understanding of the language and a passion for creating efficient, elegant code, and a strong commitment to staying up-to-date with the latest industry trends and technologies, always looking for new ways to push the boundaries and exceed expectations. Whether working independently or as part of a team';
                                        await wait(.7);
                                        element.dispatchEvent(event)
                                    }
                                }
    
                            }             
                        }
                        break;
                        case 'home address':
                            let homeAddress = newDoc.querySelectorAll('input,select,textarea');
                            if(homeAddress.length){
                                for(let element of homeAddress){
                                    if(!element.value){
                                        let label = element.labels[0].textContent.replace(/\n/g,"").trim().toLowerCase();
                                        if(label == 'city'){
                                            element.value = 'Cairo'
                                            await wait(1.5);
                                            let event = new MouseEvent('input', {
                                                bubbles: true,
                                                cancelable: true,
                                                view: window
                                              });
                                            element.dispatchEvent(event);
                                            await wait(1.2)
                                            newDoc.querySelector('[class="search-typeahead-v2__hit search-typeahead-v2__hit--autocomplete"]').click()
                                            await wait(.8)

                                        }
                                    }
    
                                }
                            }
                            break;
                        case 'resume':
                            var cover = newDoc.querySelector('textarea');
                            if(cover){
                            cover.value = `Dear Hiring Manager, \n \nAs someone deeply passionate about creating digital experiences that make a difference in people's lives. \n \nMy journey started as a personal interest that quickly became a calling. I have always been fascinated by the ability of technology to connect people from different parts of the world and make a positive impact on society. I could use my creativity and technical skills to create digital products that can have a meaningful impact on people's lives. \n \n     I have been working on my own projects, experimenting with various technologies and tools, and constantly learning new skills to improve my craft. However, I am now eager to take my passion and skills to the next level by joining a team of like-minded individuals who share my vision and values. \n \nI am excited about the opportunity to contribute my unique perspective, ideas, and creativity to your team. I believe that my passion, curiosity, and willingness to learn would make me a valuable addition to your company, and I am eager to take on new challenges and grow professionally.\n \nThank you for considering my application. I look forward to the opportunity to discuss my qualifications and learn more about your company and the role.\n \nSincerely,\n \nHossam` ;
                            await wait(1)
                            }
                            break;
                        case 'cv':
                            var cover = newDoc.querySelector('textarea');
                            if(cover){
                            cover.value = `Dear Hiring Manager, \n \nAs someone deeply passionate about creating digital experiences that make a difference in people's lives. \n \nMy journey started as a personal interest that quickly became a calling. I have always been fascinated by the ability of technology to connect people from different parts of the world and make a positive impact on society. I could use my creativity and technical skills to create digital products that can have a meaningful impact on people's lives. \n \n     I have been working on my own projects, experimenting with various technologies and tools, and constantly learning new skills to improve my craft. However, I am now eager to take my passion and skills to the next level by joining a team of like-minded individuals who share my vision and values. \n \nI am excited about the opportunity to contribute my unique perspective, ideas, and creativity to your team. I believe that my passion, curiosity, and willingness to learn would make me a valuable addition to your company, and I am eager to take on new challenges and grow professionally.\n \nThank you for considering my application. I look forward to the opportunity to discuss my qualifications and learn more about your company and the role.\n \nSincerely,\n \nHossam` ;
                            await wait(1)
                            }
                            break;
                            case 'currículum':
                                var cover = newDoc.querySelector('textarea');
                                if(cover){
                                cover.value = `Dear Hiring Manager, \n \nAs someone deeply passionate about creating digital experiences that make a difference in people's lives. \n \nMy journey started as a personal interest that quickly became a calling. I have always been fascinated by the ability of technology to connect people from different parts of the world and make a positive impact on society. I could use my creativity and technical skills to create digital products that can have a meaningful impact on people's lives. \n \n     I have been working on my own projects, experimenting with various technologies and tools, and constantly learning new skills to improve my craft. However, I am now eager to take my passion and skills to the next level by joining a team of like-minded individuals who share my vision and values. \n \nI am excited about the opportunity to contribute my unique perspective, ideas, and creativity to your team. I believe that my passion, curiosity, and willingness to learn would make me a valuable addition to your company, and I am eager to take on new challenges and grow professionally.\n \nThank you for considering my application. I look forward to the opportunity to discuss my qualifications and learn more about your company and the role.\n \nSincerely,\n \nHossam` ;
                                await wait(1)
                                }
                                break;
                                case 'curriculum':
                                    var cover = newDoc.querySelector('textarea');
                                    if(cover){
                                    cover.value = `Dear Hiring Manager, \n \nAs someone deeply passionate about creating digital experiences that make a difference in people's lives. \n \nMy journey started as a personal interest that quickly became a calling. I have always been fascinated by the ability of technology to connect people from different parts of the world and make a positive impact on society. I could use my creativity and technical skills to create digital products that can have a meaningful impact on people's lives. \n \n     I have been working on my own projects, experimenting with various technologies and tools, and constantly learning new skills to improve my craft. However, I am now eager to take my passion and skills to the next level by joining a team of like-minded individuals who share my vision and values. \n \nI am excited about the opportunity to contribute my unique perspective, ideas, and creativity to your team. I believe that my passion, curiosity, and willingness to learn would make me a valuable addition to your company, and I am eager to take on new challenges and grow professionally.\n \nThank you for considering my application. I look forward to the opportunity to discuss my qualifications and learn more about your company and the role.\n \nSincerely,\n \nHossam` ;
                                    await wait(1)
                                    }
                                    break;
                        case 'work experience':
                            // let workElements = newDoc.querySelectorAll('input,select,textarea');
                            // if(workElements.length){
                            //     let i = 0
                            //     let values = ['frontend engineer' , 'crimson rose','11','2021','1','2022','properties trading','I built the frontend side based on the design made by the company design team , following the web accsessability guidelines and using SEO and performance optemization techniques to provide a better user experince']
                            //     for(let element of workElements){
                            //         if(element.type==='checkbox'){
                            //             continue;
                            //             await wait(1.2)
                            //         }
                            //         else{
                            //             element.focus()
                            //             await wait(1)
                            //             element.value =values[i];
                            //             i++; 
                            //             await wait(.7)
                            //         }
    
    
                            //     }
                            // }
                            break;
                        default:
                            let event = new Event('input', {
                                bubbles: true,
                                cancelable: true,
                              });
                            let inps = newDoc.querySelectorAll('input');
                            if(inps.length){

                            for(let inp of inps){
                                let type = inp.type;
                                switch(type){
                                    case 'text':

                                        if(!inp.value){
                                            
        
                                            
                                        let matches=['salary'];
                                        let mss = [46000]
                                        let lab = inp.labels[0].textContent.replace(/\n/g ,"").trim().toLowerCase()
                                        for (let i=0;i<matches.length;i++){
                                            let reg = new RegExp("\\b"+matches[i]+"\\b","i")
                                            let contains = reg.test(lab);
                                            if(contains == true){
                                                inp.value = mss[i];
                                                await wait(.8);
                                                inp.dispatchEvent(event);
                                                await wait(.8);
                                                break;
                                            }
                                        }
                                        if(!inp.value){
                                            await wait(.5)
                                            inp.value=2;
                                            await wait(.7)

                                            inp.dispatchEvent(event);
                                            await wait(.5)
                                        }
                                        };
                                        break;
                                    case 'checkbox':
                                        if(!inp.checked){inp.click()};
                                        break;
                                    case 'radio':
                                        if(!inp.checked){inp.click()};
                                        break;
                                    default:
                                        break;
                                        
                                }
                            }
                            };
                            let sels = newDoc.querySelectorAll('select');
                            if(sels.length){
                                for(let sel of sels){
                                    let options = sel.querySelectorAll('option');
                                    if(sel.value == options[0].value){
                                        if(options.length > 3){
                                         let chan = new Event("change");
                                         await wait(.8)
                                         sel.value = options[2].value;
                                         await wait(.7);
                                         sel.dispatchEvent(chan)
                                        }
                                        else{
                                            let chan = new Event("change");
                                        await wait(.8)
                                        sel.value = options[1].value;
                                        await wait(.7);
                                        sel.dispatchEvent(chan)
                                        }
                                       
                                    }
                                }
                            }
                            
                            break;
    
    
                   }
    
                }}
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
                            await wait(3.5)
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
                    else{
                        let submitButton =newDoc.querySelector('[aria-label="Submit application"]');
                        if(submitButton){
                            submitButton.click()
                            await wait(3.5)
                            document.querySelector('[aria-label="Dismiss"]').click()
                            await wait(1)
                            weStillHere = false;
                        }
                        else{
                            let exit = newDoc.querySelector('[aria-label="Dismiss"]')
                            exit.click()
                            await wait(.7)
                            let discard = document.querySelector('[data-control-name="discard_application_confirm_btn"]')
                            discard.click()
                            await wait(.7)
                             weStillHere = false
                        }
    
                    }
                   
                   
                }
                }
    
            }
    
         //  code goes here for every link
        
    
        }
    } 
    // after looping through the element in the page
    // get the active page Number
    // and click the next page button
    let activePageLI = fish('.artdeco-pagination__indicator artdeco-pagination__indicator--number active selected ember-view'.split(' ').join('.'));
    let nextPageLi = fish('#ember'+(Number(activePageLI.id.slice(5))+1))
    fish('#ember'+(Number(activePageLI.id.slice(5))+1)).firstElementChild.click()
    // and wait 3 seconds
    await wait(3)
}
}

apply()