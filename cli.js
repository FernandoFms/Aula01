import pegaArquivo from "./index.js";
import validaURL from "./http-validacao.js";
import chalk from "chalk";

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);
    if (caminho[3] === "validar"){
        console.log(chalk.bgGray.blue("Links Validados: "), await validaURL(resultado));
    }else{
    console.log(chalk.bgGray.blue("Lista de Links: "), resultado);
    }
}

processaTexto(caminho);