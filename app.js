// declara um conjunto inicial de publicações
var db_informacoes_inicial = {
    "data": [
       {
            "id": 1,
            "acidente" : "Engasgo",
            "medico"   : "Carla Almeida",
            "email"    : "carla@almeida.com",
            "site"     : "engasgo.april.biz",
            "videoaula": "videosmed.com/5sd89ud",
            "descricao": "O vídeo trata sobre como proceder após o engasgo"
        },
        {
            "id": 2,
            "acidente" : "AVC",
            "medico"   : "Ana da Silva",
            "email"    : "anasilva@email.com",
            "site"     : "acidentevascular.med.org",
            "videoaula": "videosmed.com/A8ifi51",
            "descricao": "Acessando o site, você terá informações sobre o Acidente Vascular Cerebral (AVC)"
        },
        {
            "id": 3,
            "acidente" : "Queimadura",
            "medico"   : "Joana Fontes",
            "email"    : "joanafontes15@email.com",
            "site"     : "tratandoqueimadura.com",
            "videoaula": "videosmed.com/w6X8dko",
            "descricao": "Sabia que não pode passar qualquer produto em queimaduras? Compreenda o porquê"
        },
        {
            "id": 4,
            "acidente" : "Convulsão",
            "medico"   : "Carla Almeida",
            "email"    : "carla@almeida.com",
            "site"     : "oqueeconvulsao.ies.com.br",
            "videoaula": "videosmed.com/5sdfjbud",
            "descricao": "Como reverter um quadro de convulsão"
        },
        {
            "id": 5,
            "acidente" : "Intoxicação",
            "medico"   : "Joaquim Pereira",
            "email"    : "jpdesouza@hospnew.com.br",
            "site"     : "desentoxicando.unisp.com",
            "videoaula": "videosmed.com/Thf83x7",
            "descricao": "Aprenda como proceder em caso de intoxicação por alimentos"
        },
        {
            "id": 6,
            "acidente" : "Engasgo",
            "medico"   : "Giovanne Castro",
            "email"    : "giocc@split.com.br",
            "site"     : "engasgo-como-tratar.vog.rb",
            "videoaula": "videosmed.com/9oaJK8lm",
            "descricao": "Aprenda procedimentos para realizar em caso de engasgo"
        },
        {
            "id": 7,
            "acidente" : "Desmaio",
            "medico"   : "Pedro Marques",
            "email"    : "pedrocam@latipsoh.com",
            "site"     : "trate-desmaio.trya.pt",
            "videoaula": "videosmed.com/3vskW95a",
            "descricao": "Os vídeos mostram manobras a serem realizadas em caso de desmaio"
        },
        {
            "id": 8,
            "acidente" : "Infarto",
            "medico"   : "Tulio Alves",
            "email"    : "tulioalvesm@pcbiod.com",
            "site"     : "previna-o-infarto.saudemed.com",
            "videoaula": "videosmed.com/12Jdpa5f",
            "descricao": "Acesse os links disponídeis para prevenir e identificar o quadro de infarto"
        },
        {
            "id": 9,
            "acidente" : "Fratura",
            "medico"   : "Tulio Alves",
            "email"    : "tulioalvesm@pcbiod.com",
            "site"     : "quebrou-ou-fraturou-?.sos.vrt",
            "videoaula": "videosmed.com/5yYhjs8",
            "descricao": "Compreenda a diferença entre os tipos de fratura"
        },
        {
            "id": 10,
            "acidente" : "Queda",
            "medico"   : "Joana Fontes",
            "email"    : "joanafontes15@email.com",
            "site"     : "quedasbruscar.save.br",
            "videoaula": "videosmed.com/5sd9SXlud",
            "descricao": "A importância de se aprender a previnir quedas"
        },
        {
            "id": 11,
            "acidente" : "Convulsão",
            "medico"   : "Pedro Marques",
            "email"    : "pedrocam@latipsoh",
            "site"     : "www.convulsao.obr.l",
            "videoaula": "videosmed.com/62jsaiaQ",
            "descricao": "Os vídeos mostram manobras a serem realizadas em caso de convulsão"
        },
        {
            "id": 12,
            "acidente" : "Intoxicação",
            "medico"   : "Ana da Silva",
            "email"    : "anasilva@email.com",
            "site"     : "como-tratar-intoxicacao-alimentar.com",
            "videoaula": "videosmed.com/Ksmw89lp",
            "descricao": "Acessando o site, você terá informações sobre intoxicação por alimentos"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_informacao'));
if (!db) {
    db = db_informacoes_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertInformacao(informacao) {
    // Calcula novo Id a partirs do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoInformacao = {
        "id": novoId,
        "acidente" : informacao.acidente,
        "medico"   : informacao.medico,
        "email"    : informacao.email,
        "site"     : informacao.site,
        "videoaula": informacao.videoaula,
        "descricao": informacao.descricao
    };

    // Insere o novo objeto no array
    db.data.push(novoInformacao);
    displayMessage("Informação inserida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_informacao', JSON.stringify(db));
}

function updateInformacao(id, informacao) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].acidente  = informacao.acidente,
    db.data[index].medico    = informacao.medico,
    db.data[index].email     = informacao.email,
    db.data[index].site      = informacao.site,
    db.data[index].videoaula = informacao.videoaula,
    db.data[index].descricao = informacao.descricao,

    displayMessage("Informação alterada com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_informacao', JSON.stringify(db));
}

function deleteInformacao(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Informacao removida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_informacao', JSON.stringify(db));
}