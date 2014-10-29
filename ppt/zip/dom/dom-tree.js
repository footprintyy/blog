DOM - Tree

node(base)
element extends node

document
document.documentElement
document.head
document.body

document.domain
document.title
document.charset
document.activeElement
document.readyState

.nodeType
  * Ԫ�ؽڵ�(1)
  * ���Խڵ�(2)
  * �ı��ڵ�(3)
  * ע�ͽڵ�(8)
  * �ĵ��ڵ�(9)
  * fragment �ڵ�(11)
.nodeName/.tagName(1)
.nodeValue(3)

elements.attributes
element.hasAttribute( key )
element.getAttribute( key )
element.setAttribute( key, value )
element.removeAttribute( key )

element.classList
element.classList.contains()
element.classList.add()
element.classList.remove()
element.classList.toggle()

element.dataset

element.id
element.className

document.getElementById()
document.getElementsByName()
document.getElementsByTagName()
document.getElementsByClassName()
document.querySelector()
document.querySelectorAll()

element
element.parentNode/element.parentElement
element.nextSibling/element.nextElementSibling
element.previousSibling/element.previousElementSibling
element.hasChildNodes()
element.childElementCount
element.childNodes/element.children
element.firstChild/element.firstElementChild
element.lastChild/element.lastElmentChild

element.contains( node )
element.compareDocumentPosition( node )
  * 0 ��ͬԪ��
  * 1 �ĵ��޹� - �����ڵ㲻����ͬ�ĵ�
  * 2 node �� element ֮ǰ
  * 4 node �� element ֮��
  * 8 node ���� element �ڵ�
  * 16 node �� element �ڵ����
  * 32 ��չ
element.matches( selector )/element.matchesSelector( selector )
element.isEqualNode( node )

document.createElement( tag )
document.createTextNode( text )
document.createDocumentFragment()
element.cloneNode( isdeep )

element.appendChild( node )
element.parentNode.insertBefore( node, element )
element.parentNode.removeChild( element )
element.parentNode.replaceChild( node, element )


element.innerHTML
element.outerHTML
element.innerText/element.textContent
  * node.innerText ��֧�� `style` �� `script` ��ǩ.
  * node.innerText ���������ر�ǩ������.
  * node.innerText ������ reflow.
element.outerText
element.insertAdjacentElement( position, node )
element.insertAdjacentHTML( position, html )
element.insertAdjacentText( position, text )
position: beforebegin/afterbegin/beforeend/afterend


textNode.nodeValue/textNode.data
textNode.appendData( text )
textNode.deleteData( text )
textNode.insertData( offset, count )
textNode.replaceData( offset, count, text )
textNode.splitText( offset )
textNode.substringData( offset, count )
node.normalize()
node.length


element.style[ property ] = value
element.style.cssText = CSS_TEXT_STRING
style = window.getComputedStyle( element, pseudo_class )
style = document.defaultView.getComputedStyle( element, pseduo_class )
style = element.currentStyle


element.addEventListener
element.dispatchEvent
element.removeEventListener


// height/width - by css.

// viewport size!
window.innerHeight/window.innerWidth
document.documentElement.clientHeight/document.documentElement.clientWidth
document.body.clientHeight/document.body.clientWidth

element.scrollIntoView()
element.scrollTop/element.scrollLeft
// page size
element.scrollHeight/element.scrollWidth
scroll ָ����Ԫ��(�������� overflow û����ʾ)
element.scrollHeight - element.scrollTop �� element.clientHeight ��ϵ��ȷ��������λ��
.clientHeight = contentHeight + paddingTop + paddingBottom
.offsetHeight = contentHeight + paddingTop + paddingBottom + borderTopWidth + borderBottomWidth + scrollBarWidth

// relative document/parentNode
element.offsetParent
element.offsetTop/element.offsetLeft
element.offsetHeight/element.offsetWidth
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement

// relative view port
element.getBoundingClientRect()

// scroll position!
window.pageYOffset/window.pageXOffset
document.documentElement.scrollTop/document.documentElement.scrollLeft
document.body.scrollTop/document.body.scrollTop
https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY


Links:
https://developer.mozilla.org/en-US/docs/Web/API/Node
https://developer.mozilla.org/en-US/docs/Web/API/Element

https://github.com/jquery/jquery/blob/master/src/offset.js
https://github.com/jquery/jquery/blob/master/src/dimensions.js
https://github.com/jquery/jquery/blob/master/src/css.js
https://github.com/jquery/jquery/blob/master/src/wrap.js
https://github.com/jquery/jquery/blob/master/src/traversing.js
https://github.com/jquery/jquery/blob/master/src/manipulation.js

