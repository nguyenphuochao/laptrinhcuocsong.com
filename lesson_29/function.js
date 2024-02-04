class selectbox {
    constructor(selector) {
        this.selector = selector;
        this.element = document.getElementById(this.selector);
        this.defaultElement = document.querySelector('#' + this.selector + '>span');
        this.defaultElement.addEventListener('click', () => {
            if (this.element.classList.contains('open')) {
                this.element.classList.remove('open')
            } else {
                this.element.classList.add('open')
            }
        });
        document.addEventListener('click',(event)=>{
            if(event.target!=this.defaultElement){
                this.element.classList.remove('open')
            }
        })
        

    }
}
var selectCity = new selectbox('city');