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
  
    const removerBarbie = barbies.find((b) => b.id === b);
  
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
  };
  
  export { getAllBarbies, getById, createBarbie, barbieDelete };