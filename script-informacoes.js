// declara um conjunto inicial de publicações
var db_informacoes_iniciais = {
    data: [
       {
            id       : 1,
            acidente : "Engasgo",
            tipo     : 5,
            medico   : "Carla Almeida",
            email    : "carlaalmeida@email.com",
            site     : "https://bit.ly/engasgo_site",
            videoaula: "https://www.youtube.com/embed/tC-OiNlHpcI",
            descricao: "O vídeo trata sobre como proceder após o engasgo."
        },
        {
            id       : 2,
            acidente : "Infarto",
            tipo     : 7,
            medico   : "Tulio Alves",
            email    : "tulioalves@email.com",
            site     : "https://bit.ly/infarto_site",
            videoaula: "https://www.youtube.com/embed/xqxHybHpoDY",
            descricao: "Acesse os links disponídeis para prevenir e identificar o quadro de infarto"
        },
        {
            id       : 3,
            acidente : "Queda",
            tipo     : 8,
            medico   : "Joaquim Pereira",
            email    : "joaquimpereira@email.com",
            site     : "https://bit.ly/queda_site",
            videoaula: "https://www.youtube.com/embed/iUE0SaR8Dwo",
            descricao: "Aprenda como proceder em caso de queda em casa"
        },
        {
            id       : 3,
            acidente : "Choque",
            tipo     : 2,
            medico   : "Joana Fontes",
            email    : "joanafontes@email.com",
            site     : "https://bit.ly/choque_site",
            videoaula: "https://www.youtube.com/embed/lXsCD9dTr-E",
            descricao: "O vídeo trata sobre como proceder após o engasgo."
        },
        {
            id       : 4,
            acidente : "Choque",
            tipo     : 2,
            medico   : "Joaquim Pereira",
            email    : "joaquimpereira@email.com",
            site     : "https://bit.ly/choque_site1",
            videoaula: "https://www.youtube.com/embed/duTAelb1E28",
            descricao: "Aprenda como proceder em caso de intoxicação por alimentos"
        },
        {
            id       : 4,
            acidente : "Convulsão",
            tipo     : 3,
            medico   : "Carla Almeida",
            email    : "carla@almeida.com",
            site     : "https://bit.ly/engasgo_site",
            videoaula: "https://www.youtube.com/embed/tC-OiNlHpcI",
            descricao: "Os vídeos mostram manobras a serem realizadas em caso de convulsão"
        },
        {
            id       : 5,
            acidente : "Engasgo",
            tipo     : 5,
            medico   : "Carla Almeida",
            email    : "carla@almeida.com",
            site     : "https://bit.ly/engasgo_site",
            videoaula: "https://www.youtube.com/embed/tC-OiNlHpcI",
            descricao: "O vídeo trata sobre como proceder após o engasgo. O vídeo trata sobre como proceder após o engasgo. O vídeo trata sobre como proceder após o engasgo. O vídeo trata sobre como proceder após o engasgo"
        },
        {
            id       : 2,
            acidente : "AVC",
            tipo     : 1,
            medico   : "Ana da Silva",
            email    : "anasilva@email.com",
            site     : "https://www.tuasaude.com/primeiros-socorros-para-avc/",
            videoaula: "https://www.youtube.com/embed/uHkpYIhSWb4",
            descricao: "Acessando o site, você terá informações sobre o Acidente Vascular Cerebral (AVC)"
        },
        {
            id       : 3,
            acidente : "Queimadura",
            tipo     : 1,
            medico   : "Joana Fontes",
            email    : "joanafontes15@email.com",
            site     : "tratandoqueimadura.com",
            videoaula: "videosmed.com/w6X8dko",
            descricao: "Sabia que não pode passar qualquer produto em queimaduras? Compreenda o porquê"
        },
        {
            id       : 4,
            acidente : "Convulsão",
            tipo     : 1,
            medico   : "Carla Almeida",
            email    : "carla@almeida.com",
            site     : "oqueeconvulsao.ies.com.br",
            videoaula: "videosmed.com/5sdfjbud",
            descricao: "Como reverter um quadro de convulsão"
        },
        {
            id       : 5,
            acidente : "Intoxicação",
            tipo     : 1,
            medico   : "Joaquim Pereira",
            email    : "jpdesouza@hospnew.com.br",
            site     : "desentoxicando.unisp.com",
            videoaula: "videosmed.com/Thf83x7",
            descricao: "Aprenda como proceder em caso de intoxicação por alimentos"
        },
        {
            id       : 6,
            acidente : "Engasgo",
            tipo     : 5,
            medico   : "Giovanne Castro",
            email    : "giocc@split.com.br",
            site     : "engasgo-como-tratar.vog.rb",
            videoaula: "https://www.youtube.com/embed/5kyyABzEy_k",
            descricao: "Aprenda procedimentos para realizar em caso de engasgo"
        },
        {
            id       : 7,
            acidente : "Desmaio",
            tipo     : 1,
            medico   : "Pedro Marques",
            email    : "pedrocam@latipsoh.com",
            site     : "trate-desmaio.trya.pt",
            videoaula: "videosmed.com/3vskW95a",
            descricao: "Os vídeos mostram manobras a serem realizadas em caso de desmaio"
        },
        {
            id       : 8,
            acidente : "Infarto",
            tipo     : 1,
            medico   : "Tulio Alves",
            email    : "tulioalvesm@pcbiod.com",
            site     : "previna-o-infarto.saudemed.com",
            videoaula: "videosmed.com/12Jdpa5f",
            descricao: "Acesse os links disponídeis para prevenir e identificar o quadro de infarto"
        },
        {
            id       : 9,
            acidente : "Fratura",
            tipo     : 1,
            medico   : "Tulio Alves",
            email    : "tulioalvesm@pcbiod.com",
            site     : "quebrou-ou-fraturou-?.sos.vrt",
            videoaula: "videosmed.com/5yYhjs8",
            descricao: "Compreenda a diferença entre os tipos de fratura"
        },
        {
            id       : 10,
            acidente : "Queda",
            tipo     : 1,
            medico   : "Joana Fontes",
            email    : "joanafontes15@email.com",
            site     : "quedasbruscar.save.br",
            videoaula: "videosmed.com/5sd9SXlud",
            descricao: "A importância de se aprender a previnir quedas"
        },
        {
            id       : 11,
            acidente : "Convulsão",
            tipo     : 1,
            medico   : "Pedro Marques",
            email    : "pedrocam@latipsoh",
            site     : "www.convulsao.obr.l",
            videoaula: "videosmed.com/62jsaiaQ",
            descricao: "Os vídeos mostram manobras a serem realizadas em caso de convulsão"
        },
        {
            id       : 12,
            acidente : "Intoxicação",
            tipo     : 2,
            medico   : "Ana da Silva",
            email    : "anasilva@email.com",
            site     : "como-tratar-intoxicacao-alimentar.com",
            videoaula: "videosmed.com/Ksmw89lp",
            descricao: "Acessando o site, você terá informações sobre intoxicação por alimentos"
        }
    ]
}



// Caso os dados já estejam no Local Storage; caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_informacao'));
if (!db) {
    db = db_informacoes_iniciais
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertInformacao(informacao) {
    // Calcula novo Id
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;


    // Obtem numero do tipo de acordo com o acidente
    let   novoTipo  = 0;

    if      ( informacao.acidente == "AVC"         ) novoTipo = 1;
    else if ( informacao.acidente == "Choque"      ) novoTipo = 2;
    else if ( informacao.acidente == "Convulsão"   ) novoTipo = 3;
    else if ( informacao.acidente == "Desmaio"     ) novoTipo = 4;
    else if ( informacao.acidente == "Engasgo"     ) novoTipo = 5;
    else if ( informacao.acidente == "Fratura"     ) novoTipo = 6;    
    else if ( informacao.acidente == "Infarto"     ) novoTipo = 7;
    else if ( informacao.acidente == "Queda"       ) novoTipo = 8;
    else if ( informacao.acidente == "Queimadura"  ) novoTipo = 9;

    // obtem as informacoes 
    let novoInformacao = {
        id        : novoId,
        acidente  : informacao.acidente,
        tipo      : novoTipo,
        medico    : informacao.medico,
        email     : informacao.email,
        site      : informacao.site,
        videoaula : informacao.videoaula,
        descricao : informacao.descricao
    };

    // Insere o novo objeto no array
    db.data.push(novoInformacao);
    displayMessage("Informação inserida com sucesso.");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_informacao', JSON.stringify(db));
}

function updateInformacao(id, informacao) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].acidente  = informacao.acidente,
    db.data[index].tipo      = novoTipo,
    db.data[index].medico    = informacao.medico,
    db.data[index].email     = informacao.email,
    db.data[index].site      = informacao.site,
    db.data[index].videoaula = informacao.videoaula,
    db.data[index].descricao = informacao.descricao,

    displayMessage("Informação alterada com sucesso.");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_informacao', JSON.stringify(db));
}

function deleteInformacao(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { 
        return element.id != id 
    });

    displayMessage("Informação removida com sucesso.");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_informacao', JSON.stringify(db));
}
