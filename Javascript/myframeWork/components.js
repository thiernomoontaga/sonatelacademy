/**
 * 
 * @param {string} message - allows you to capture an error by assigning a message to the global Error variable.
 */
  function error(message){
    throw new Error(message)
  }
 const myElement = ['div',{id:'container',class:['message','error','container'],style:{backgroundColor:'red',marginTop:'20px '},onclick : ()=>{},},'je suis une div']
/** 
 * 
 * @param {Array} PropertiesTag - properties is an array composed of three variables (tag ={'string'}, attribute = {object} and content = string or html element)
 * @returns return a created html element
 */
function createmyElement(PropertiesTag){
  if(!Array.isArray(PropertiesTag)){
    PropertiesTag = [PropertiesTag]
  }
  const [tagName,attributes,content] = PropertiesTag
  if(typeof tagName !== 'string'){
    error(`type of ${tagName} must be a string`)
  }
  if(typeof attributes !== 'object') {
    error(`type of ${attributes} must be a object`)
  }
  const element = document.createElement(tagName)
  for(const key in attributes){
    if( key ==='class' ||  key === 'className'){
        if(typeof  attributes[key] === 'Array'){
            element.setAttribute(key,attributes[key].join(" "))
        }
        else if(typeof keyValue === 'string'){
            element.setAttribute(key,attributes[key])
        }
        else{
            error(`type of ${attributes[key]} must be a Array or string`)
        }
    if(key === 'style' ) {
        if(typeof keyValue ==='object'){
          Object.assign(element.style,attributes[key])
        }
        else{
            error(`type of ${attributes[key]} must be a object`)
        }
      }
    if (key.startsWith('on') && typeof attributes[key] === 'function'){
        const eventName = key.slice(2).toLocaleLowerCase()
        element.addEventListener(eventName,attributes[key])
      }
    else if (key.startsWith('on') && typeof attributes[key] !== 'function'){
          error(`value of ${attributes[key]} must be a fonction`)
         }
    else {
         element.setAttribute(key,attributes[key])
      }
     }
    } 
    if(content && typeof content === 'string'){
      element.textContent = content
    }
    if (Array.isArray(content)) {
      content.forEach(item => {
          if (typeof item === "string") {
              element,element.appendChild(document.createTextNode(item));
          } else if (item instanceof Node) {
              element.appendChild(item);
          }
      });
      
    } else if (content instanceof Node) {
      element.appendChild(content);
    }

    return element
}





console.log(createmyElement(myElement))

