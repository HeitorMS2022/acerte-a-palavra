var nomeplayer1 = localStorage.getItem("player1");
var nomeplayer2 = localStorage.getItem("player2");
document.getElementById("nomedoplayer1").innerHTML = nomeplayer1 + " : ";
document.getElementById("nomedoplayer2").innerHTML = nomeplayer2 + " : ";
var pontuaçãoplayer1 = 0;
var pontuaçãoplayer2 = 0;
document.getElementById("pontuação1").innerHTML = pontuaçãoplayer1;
document.getElementById("pontuação2").innerHTML = pontuaçãoplayer2;
document.getElementById("turnodepergunta").innerHTML = "Turno de pergunta: " + nomeplayer1;
document.getElementById("turnoderesposta").innerHTML = "Turno de resposta: " + nomeplayer2;
function send(){
    document.getElementById("acerto_ou_erro").innerHTML = "";
    get_word = document.getElementById("palavra").value;
    word = get_word.toLowerCase();
    console.log("palavra em minusculo " + word);

    charAt1 = word.charAt(0);
    console.log(charAt1);

    length_divided_by_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divided_by_2);
    console.log(charAt2);

    length_minus_1 = word.length - 2;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");

    question_word = "<h4 id='word_display'> P. "+remove_charAt3+"</h4>"
    input_box = "<br> Resposta: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("palavra").value = "";
}

var playerturnoresposta = "nomeplayer2";
var playerturnopergunta = "nomeplayer1";

function check(){
    get_awnser = document.getElementById("input_check_box").value;
    awnser = get_awnser.toLowerCase();
    if (awnser == word){
        document.getElementById("acerto_ou_erro").innerHTML = "Você acertou!";
        if(playerturnoresposta == "nomeplayer1"){
            pontuaçãoplayer1 = pontuaçãoplayer1 + 1;
            document.getElementById("pontuação1").innerHTML = pontuaçãoplayer1;
        }
        else{
            pontuaçãoplayer2 = pontuaçãoplayer2 + 1;
            document.getElementById("pontuação2").innerHTML = pontuaçãoplayer2;
        }
    }
    else{
        document.getElementById("acerto_ou_erro").innerHTML = "Você errou!";
    }
    if(playerturnopergunta == "nomeplayer1"){
        playerturnopergunta = "nomeplayer2";
        document.getElementById("turnodepergunta").innerHTML = "Turno de pergunta: " + nomeplayer2;
    }
    else{
        playerturnopergunta = "nomeplayer1";
        document.getElementById("turnodepergunta").innerHTML = "Turno de pergunta: " + nomeplayer1;
    }
    if(playerturnoresposta == "nomeplayer2"){
        playerturnoresposta = "nomeplayer1";
        document.getElementById("turnoderesposta").innerHTML = "Turno de resposta: " + nomeplayer1;
    }
    else{
        playerturnoresposta = "nomeplayer2";
        document.getElementById("turnoderesposta").innerHTML = "Turno de resposta: " + nomeplayer2;
    }
    document.getElementById("output").innerHTML = "";
}