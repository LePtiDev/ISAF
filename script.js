
// from dom
var button = document.getElementById('submit')
var content = document.getElementById('content')
var container = document.getElementById("containerConversation")
var bull = document.getElementById("bull")

// variables
var AllQuestion = [];

class Question{

    constructor(question, keyword) {
        this.question = question
        this.keyword = keyword
        this.number = 1;
    }

    // CONSTANTES
    question = "";
    keyword = [];
    author = "";
    number = 0


    // GETTERS
    getQuestion(){
        return this.question;
    }
    getKeyword(){
        return this.keyword;
    }
    getauthor(){
        return this.author
    }
    // SETTERS
    setQuestion(question){
        this.question = question
    }
    setKeyword(keyword){
        this.keyword = keyword
    }
    setauthor(author){
        this.author = author
    }
}


button.addEventListener("click", () => {
    bull.style.display = "block"
})


/*
button.addEventListener("click", () => {

    var splitQuestion = content.value.split(' ')
    var question = new Question(content.value, search(splitQuestion))
    if(AllQuestion.length != 0){
        for(let i = 0; i < AllQuestion.length; i++){
            AllQuestion.push(question)
            console.log(AllQuestion)
        }
    }
    else{
        AllQuestion.push(question)
        container.insertAdjacentHTML('beforeend', '<div class="question"><p>' + question.question + '</p></div>');
        console.log(AllQuestion)
    }
})

//fonctions

const search = (str) => {
    let unneededWord = ['Je', 'vous', 'il']
    for (let i = 0; i < unneededWord.length; i++) {
        if (unneededWord[i] == str[i]) {
            return str.slice(1)
        }
    }
}

*/