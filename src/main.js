class components{
    createTag(){
      const tag=document.createElement("h2");
        tag.innerText="سلام جهان عزیز !";
         return  tag;
    }
    render(){
        const element=document.createElement("div");
        element.appendChild(this.createTag());

        return element;
    }
}

export default new components();
