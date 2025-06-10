/**
  The createElement() function is a powerful utility for declaratively creating and configuring DOM  elements
 * @param {string} tag - 	HTML tag name (e.g., "div", "button"). Returns null if invalid.
 * @param {object} props -An object defining attributes, events, and special directives.
 * @param {any} content -Inner content (text, DOM node, or array of nodes).
 * @returns - return a DOM element
 */
export function createMyelement(tag,props = {},content = ""){
    if(typeof tag !== 'string' ) return null
    if('vIf' in props &&  !props.vIf) return null
    const fragement = createDocumentFragment()
    if('vFor' in props){
      const {each , render} = props.vFor
      each.forEach(item => {
         const child = render(item)
         if(child instanceof Node){
            fragement.appendChild(child)
         }

      })
    const element = document.createElement(tag)
    for(const key in props){
      const keyValue = props[key]
      if(key === 'class'|| key === 'className'){
        element.className = Array.isArray(keyValue) ? keyValue.join(" ") : keyValue
      }
      else if(key.startsWith('on') && typeof keyValue === 'function'){
        const eventName = key.slice(2)
        element.addEventListener(eventName,keyValue)
      } else if (key === "vIf" || key === "vFor") {
        continue;
      }

      else if(key === 'style' && typeof keyValue === 'object'){
        Object.assign(element.style , keyValue) 
      }
      else if(key === 'vShow'){
        element.style.display = keyValue ? " ": "none"
      }
      else{
        element.setAttribute(key ,keyValue)
      }
      if(Array.isArray(content)){
        content.forEach(el => {
          if(typeof el === 'string'){
            element.appendChild(document.createTextNode(el))
          }
          else if( el instanceof Node ){
            element.appendChild(el)
          }
        })
      }
      else if(typeof content === 'string'){
        element.textContent = content
      }
      else if(content instanceof Node){
        element.appendChild(content)
      }
    }


    }


}