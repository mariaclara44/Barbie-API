import dados from "./../models/dados.js";
const { barbies } = dados;

const getAllBarbies = (req, res) => {
   const resultado = barbies;

    res.status(200).json({
        total: resultado.length,
        barbies: resultado
    })
}

const getById = (req, res) => {
    let id = parseInt(req.params.id);

    const barbie = barbies.find(b => b.id === id);

    res.status(200).json ({
        success: true,
        barbie: barbie
    });
}

const createBarbie = (req, res) => {
    const {nome, profissao, anoLancamento, } = req.body;

    if (!nome || !profissao) {
        return res.status(400).json ({
            success : false,
            message: "Nome e profissão são obrigatórios!!!"
        });
    }
    
    const novaBarbie = {
       id: barbies.length + 1,
        nome: nome, 
        profissao: profissao,
        anoLancamento: anoLancamento,
    }
    
    //Push no array 
    barbies.push(novaBarbie);
    
    res.status(201).json ({
        success: true,
        message: "Barbie cadastrado com sucesso!",
        barbie: novaBarbie
    });
    
}

const barbieDelete = (req, res) => {
    let id = parseInt(req.params.id);
  
    const removerBarbie = barbies.find((b) => b.id === id);
  
    if (!removerBarbie) {
      return res.status(404).json({
        success: false,
        message: `Essa barbie não existe ${id}!`,
      });
    }
    const filtroBarbies = barbies.filter((barbie) => barbie.id != id);
  
    barbies.splice(0, barbies.length, ...filtroBarbies);
  
    res.status(200).json({
      success: true,
      message: `Barbie removida com sucesso!`,
    });
  }
  
  const updateBarbie = (req, res) => {
    //Lógica para atualizar a barbie
    const id = parseInt(req.params.id);
    //Body para dados novos
    const {nome, profissão, anoLancamento} = req.body;

    const idParaEditar = id;

    //Verificar o id 
    if (isNaN(idParaEditar)) {
        return res.status(400). json ({
            success: false,
            message: "O id deve ser um número válido!!!"
        })
    }

    //Verificar se a barbie/id  existe
    const barbieExiste = barbies.find(barbie =>barbie.id === idParaEditar);

    if (!barbieExiste) {
        return res.status(404).json ({
            success:false,
            message: `Barbie com Id: ${id}, não existe`
        })
    }
    //Após todos os cenários, atualiza a barbie

    //  Laço com map
    const barbieAtualizadas = barbies.map(barbie => barbie.id === idParaEditar ? {
        ...barbie,
        ...(nome && { nome }),
        ...(profissao && {anoLancamento: parseInt(anoLancamento)})
    } : barbie)

    //Atualizando o arry com splice 
    barbies.splice(0, barbies.length, ... barbieAtualizadas);

    const barbieNova = barbies.find(barbie => barbie.id === idParaEditar);

    res.status(200).json ({
        success: true,
        message: `Dados da Barbie ID ${idParaEditar} atualizados com sucesso!`,
        barbie: barbieNova
    })
}
  export { getAllBarbies, getById, createBarbie, barbieDelete, updateBarbie };